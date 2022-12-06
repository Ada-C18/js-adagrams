const POOL_OF_LETTERS = {
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

export const drawLetters = () => {
  let weight = [];
  for (const [key, value] of Object.entries(POOL_OF_LETTERS)) {
    for (let i = 0; i < value; i++) {
      weight.push(key);
    }
  }
  let letters = [];
  for (let i = 0; i < 10; i++) {
    let index = Math.floor(Math.random() * weight.length);
    let letter = weight[index];
    letters.push(letter);
    weight.splice(index, 1);
  }
  return letters;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  let counter = {};
  lettersInHand.forEach((letter) => {
    if (letter in counter) {
      counter[letter]++;
    } else {
      counter[letter] = 1;
    }
  });
  console.log(counter);

  for (const c of input) {
    if (c in counter && counter[c] > 0) {
      counter[c]--;
    } else {
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  const scoreChart = {
    AEIOULNRST: 1,
    DG: 2,
    BCMP: 3,
    FHVWY: 4,
    K: 5,
    JX: 8,
    QZ: 10,
  };
  let totalScore = 0;
  if (word.length > 6 && word.length < 11) {
    totalScore += 8;
  }

  for (const c of word.toUpperCase()) {
    for (const [letter, value] of Object.entries(scoreChart)) {
      if (letter.includes(c)) {
        totalScore += value;
      }
    }
  }

  return totalScore;
};

export const highestScoreFrom = (words) => {
  let bestWord;

  for (const word of words) {
    const score = scoreWord(word);

    if (
      bestWord == undefined ||
      score > bestWord.score ||
      (score == bestWord.score &&
        bestWord.word.length != 10 &&
        (word.length == 10 || word.length < bestWord.word.length))
    ) {
      bestWord = { word, score };
    }
  }

  return bestWord;
};
