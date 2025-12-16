// Custom scorer for bill extraction
export const billScorer = {
  name: "Bill Extraction Scorer",
  description:
    "Flexible scorer for bill extraction that checks core correctness: item count, tip accuracy, and item name/price similarity",
  scorer: ({ output, expected }: { output: string; expected?: string }) => {
    // Handle case where expected might be undefined
    if (!expected) return 0;

    try {
      const expectedObj = JSON.parse(expected);
      const actualObj = JSON.parse(output);

      let score = 0;
      let totalChecks = 0;

      // Check businessName (exact match or both null)
      totalChecks++;
      if (
        expectedObj.businessName === actualObj.businessName ||
        (expectedObj.businessName === null && actualObj.businessName === null)
      ) {
        score++;
      }

      // Check date (exact match or both null)
      totalChecks++;
      if (
        expectedObj.date === actualObj.date ||
        (expectedObj.date === null && actualObj.date === null)
      ) {
        score++;
      }

      // Check tax (exact match or both null)
      totalChecks++;
      if (
        expectedObj.tax === actualObj.tax ||
        (expectedObj.tax === null && actualObj.tax === null)
      ) {
        score++;
      }

      // Check billItems count (critical check)
      totalChecks++;
      if (expectedObj.billItems?.length === actualObj.billItems?.length) {
        score++;

        // Check each item
        const expectedItems = expectedObj.billItems || [];
        const actualItems = actualObj.billItems || [];

        for (let i = 0; i < expectedItems.length; i++) {
          const expItem = expectedItems[i];
          const actItem = actualItems[i];

          if (!actItem) continue;

          // Check price (exact match)
          totalChecks++;
          if (expItem.price === actItem.price) {
            score++;
          }

          // Check name similarity (flexible string matching)
          totalChecks++;
          const expName = (expItem.name || "")
            .toLowerCase()
            .replace(/[^a-z0-9]/g, "");
          const actName = (actItem.name || "")
            .toLowerCase()
            .replace(/[^a-z0-9]/g, "");

          if (
            expName.includes(actName) ||
            actName.includes(expName) ||
            levenshteinDistance(expName, actName) <= 2
          ) {
            score++;
          }
        }
      } else {
        // Different number of items - major penalty but still give partial credit
        totalChecks++;
        // Keep score as is, but account for the missing item checks
        totalChecks += expectedObj.billItems?.length * 2 || 0;
      }

      return Math.max(0, Math.min(score / Math.max(totalChecks, 1), 1.0));
    } catch (error) {
      // If parsing fails, return 0
      return 0;
    }
  },
};

// Simple Levenshtein distance for string similarity
function levenshteinDistance(a: string, b: string): number {
  const matrix = [];

  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }

  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }

  return matrix[b.length][a.length];
}
