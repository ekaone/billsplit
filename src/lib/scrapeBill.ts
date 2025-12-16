import { z } from "zod";
import { togetherBaseClient } from "./clients";
import dedent from "dedent";

export const extractSchema = z.object({
  businessName: z
    .string()
    .optional()
    .describe("Name of the business where the bill was created"),
  date: z.string().optional().describe("Date when the bill was created"),
  billItems: z
    .array(
      z.object({
        name: z.string().describe("Name of the item"),
        price: z.number().describe("Price of the item in decimal format"),
      })
    )
    .describe("List of items in the bill"),
  tax: z
    .number()
    .optional()
    .describe("Tax amount, not percentage we need money amount"),
  tip: z
    .number()
    .optional()
    .describe(
      "Tip or Gratuity amount, not percentage we need money amount and if multiple tips are shown just output the medium one"
    ),
});

export type ExtractSchemaType = z.infer<typeof extractSchema>;

const systemPrompt = dedent`
  You are a receipt data extraction API. You receive receipt images and must return valid JSON data.

  REQUIRED OUTPUT FORMAT: Return ONLY a valid JSON object matching this exact schema:
  {
    "businessName": "string or null",
    "date": "string or null",
    "billItems": [{"name": "string", "price": number}],
    "tax": number or null,
    "tip": number or null
  }

  Do not include any text before or after the JSON. Do not explain your reasoning. Do not use markdown.

  Extraction rules:
  - businessName: Restaurant/business name from receipt, or null
  - date: Receipt date in YYYY-MM-DD format (no leading zeros for day), or null
  - billItems: Array of objects with "name" (item name) and "price" (decimal number)
  - tax: Tax amount as decimal number, or null
  - tip: Tip/gratuity amount as decimal number, or null
 `;

export async function scrapeBill({
  billUrl,
  model = "meta-llama/Llama-4-Scout-17B-16E-Instruct",
}: {
  billUrl: string;
  model?: string;
}): Promise<ExtractSchemaType> {
  const jsonSchema = z.toJSONSchema(extractSchema, {
    target: "openapi-3.0",
  });

  const extract = await togetherBaseClient.chat.completions.create({
    model: model,
    messages: [
      {
        role: "user",
        content: [
          { type: "text", text: systemPrompt },
          {
            type: "image_url",
            image_url: {
              url: billUrl,
            },
          },
        ],
      },
    ],
    response_format: { type: "json_object", schema: jsonSchema },
    temperature: 0, // Make responses more deterministic
    max_tokens: 1000, // Limit response length
  });

  if (extract?.choices?.[0]?.message?.content) {
    let content = extract.choices[0].message.content.trim();

    // Handle cases where the model returns markdown code blocks
    if (content.startsWith('```json')) {
      content = content.replace(/^```json\s*/, '').replace(/\s*```$/, '');
    } else if (content.startsWith('```')) {
      content = content.replace(/^```\s*/, '').replace(/\s*```$/, '');
    }

    // Try to extract JSON from text that might contain explanations
    const jsonMatch = content.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      content = jsonMatch[0];
    }

    try {
      const output = JSON.parse(content);
      return output;
    } catch (error) {
      console.error('Failed to parse JSON response:', content);
      throw error;
    }
  }
  throw new Error("No content returned from Llama 4 vision");
}
