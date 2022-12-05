const letterObj = {
  A: { frequency: 9, score: 1 },
  B: { frequency: 2, score: 3 },
  C: { frequency: 2, score: 3 },
  D: { frequency: 4, score: 2 },
  E: { frequency: 12, score: 1 },
  F: { frequency: 2, score: 4 },
  G: { frequency: 3, score: 2 },
  H: { frequency: 2, score: 4 },
  I: { frequency: 9, score: 1 },
  J: { frequency: 1, score: 8 },
  K: { frequency: 1, score: 5 },
  L: { frequency: 4, score: 1 },
  M: { frequency: 2, score: 3 },
  N: { frequency: 6, score: 1 },
  O: { frequency: 8, score: 1 },
  P: { frequency: 2, score: 3 },
  Q: { frequency: 1, score: 10 },
  R: { frequency: 6, score: 1 },
  S: { frequency: 4, score: 1 },
  T: { frequency: 6, score: 1 },
  U: { frequency: 4, score: 1 },
  V: { frequency: 2, score: 4 },
  W: { frequency: 2, score: 4 },
  X: { frequency: 1, score: 8 },
  Y: { frequency: 2, score: 4 },
  Z: { frequency: 1, score: 10 },
};

export const drawLetters = () => {
  // Implement this method for wave 1
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
};

export const scoreWord = (word) => {
  let total = 0;
  for (let char of word.toUpperCase()) {
    total += letterObj[char]["score"];
  }
  if (word.length >= 7 && word.length <= 10) {
    total += 8;
  }
  return total;
};

export const highestScoreFrom = (words) => {
  // collect pairs of words and scores, find max
  let scores = words.map((word) => ({ word, score: scoreWord(word) }));
  let max = Math.max(...scores.map((word) => word.score));

  // filter low scores
  let ties = scores.filter(({ _, score }) => score === max);

  // find any words with winning score and length 10
  let len_10 = [];
  let min_length = Infinity;
  for (let { word, score } of ties) {
    if (word.length === 10) return { word, score };
    if (word.length < min_length) min_length = word.length;
  }

  // return first word with winning score and shortest length
  for (let word of ties) {
    if (word.word.length === min_length) return word;
  }
  throw "No words supplied";
};
