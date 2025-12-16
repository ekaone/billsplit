import { evalite } from "evalite";
import { Levenshtein } from "autoevals";
import { scrapeBill } from "../src/lib/scrapeBill";
import { billEvals } from "./billsEvals";

const visionModels = [
  "meta-llama/Llama-4-Scout-17B-16E-Instruct",
  "meta-llama/Llama-4-Maverick-17B-128E-Instruct-FP8",
  "Qwen/Qwen2.5-VL-72B-Instruct",
  "Qwen/Qwen3-VL-32B-Instruct",
  "google/gemma-3n-E4B-it",
  "ServiceNow-AI/Apriel-1.5-15b-Thinker",
  "ServiceNow-AI/Apriel-1.6-15b-Thinker",
];

visionModels.map((model) => {
  evalite(`Bill Scraping with: ${model}`, {
    data: async () =>
      billEvals.map((item) => ({
        input: item.input,
        expected: JSON.stringify(item.expected),
      })),
    task: async (input) =>
      JSON.stringify(
        await scrapeBill({
          billUrl: input,
          model: model,
        })
      ),
    scorers: [Levenshtein],
  });
});
