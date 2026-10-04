const natural = require("natural");

const tokenizer = new natural.WordTokenizer();

function analyzeSentiment(text) {
  const tokens = tokenizer.tokenize(text);

  const positiveWords = ["good", "great", "excellent", "happy", "helpful"];
  const negativeWords = ["bad", "poor", "terrible", "sad", "useless"];

  let score = 0;

  tokens.forEach((word) => {
    const lowerWord = word.toLowerCase();

    if (positiveWords.includes(lowerWord)) {
      score++;
    }

    if (negativeWords.includes(lowerWord)) {
      score--;
    }
  });

  if (score > 0) {
    return "positive";
  }

  if (score < 0) {
    return "negative";
  }

  return "neutral";
}

module.exports = {
  analyzeSentiment
};
