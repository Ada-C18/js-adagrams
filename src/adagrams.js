const LETTER_POOL = {
  A: 9,
  N: 6,
  B: 2,
  O: 8,
  C: 2,
  P: 2,
  D: 4,
  Q: 1,
  E: 12,
  R: 6,
  F: 2,
  S: 4,
  G: 3,
  T: 6,
  H: 2,
  U: 4,
  I: 9,
  V: 2,
  J: 1,
  W: 2,
  K: 1,
  X: 1,
  L: 4,
  Y: 2,
  M: 2,
  Z: 1,
};

const LETTER_POINTS = {
  A: 1,
  N: 1,
  B: 3,
  O: 1,
  C: 3,
  P: 3,
  D: 2,
  Q: 10,
  E: 1,
  R: 1,
  F: 4,
  S: 1,
  G: 2,
  T: 1,
  H: 4,
  U: 1,
  I: 1,
  V: 4,
  J: 8,
  W: 4,
  K: 5,
  X: 8,
  L: 1,
  Y: 4,
  M: 3,
  Z: 10,
};

export const drawLetters = () => {
  let pool = Object.entries(LETTER_POOL).reduce(
    (acc, [letter, count]) => acc.concat(Array(count).fill(letter)),
    []
  );
  let shuffled = pool.sort((a, b) => 0.5 - Math.random());
  return Array.from(Array(10), () => shuffled.pop());
};

export const usesAvailableLetters = (input, lettersInHand) => {
  for (const letter of input) {
    let idx = lettersInHand.findIndex((e) => e === letter);
    if (idx != -1) {
      lettersInHand.splice(idx, 1);
    } else {
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  let score = [...word.toUpperCase()]
    .map((letter) => LETTER_POINTS[letter])
    .reduce((acc, curr) => acc + curr, 0);
  let bonus = word.length > 6 ? 8 : 0;
  return score + bonus;
};

export const highestScoreFrom = (words) => {
  const breakTie = (ties) => {
    let shortest_word = ties.reduce(
      (prev, curr) => (curr.length < prev.length ? curr : prev),
      Array(11)
    );
    let ten_word = false;
    for (const w of ties) {
      if (w.length === 10) {
        ten_word = w;
        break;
      }
    }
    return ten_word ? ten_word : shortest_word;
  };
  let wordScores = {};
  let highestScore = 0;
  words.forEach((word) => {
    let score = scoreWord(word);
    highestScore = highestScore < score ? score : highestScore;
    if (wordScores[score] === undefined) wordScores[score] = Array();
    wordScores[score].push(word);
  });
  let bestWord = breakTie(wordScores[highestScore]);
  return { word: bestWord, score: highestScore };
};
