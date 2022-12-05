import { indexOf } from "core-js/core/array";

const letterPOOL = {
  A: 9,
  B: 2,
  C: 2,
  D: 4,
  E: 12,
  F: 2,
  G: 3,
  H: 2,
  I: 9,
  J: 1,
  K: 1,
  L: 4,
  M: 2,
  N: 6,
  O: 8,
  P: 2,
  Q: 1,
  R: 6,
  S: 4,
  T: 6,
  U: 4,
  V: 2,
  W: 2,
  X: 1,
  Y: 2,
  Z: 1,
};

const scoreChart = {
  "A": 1,
  "E": 1,
  "I": 1,
  "O": 1,
  "U": 1,
  "L": 1,
  "N": 1,
  "R": 1,
  "S": 1,
  "T": 1,
  "D": 2,
  "G": 2,
  "B": 3,
  "C": 3,
  "M": 3,
  "P": 3,
  "F": 4,
  "H": 4,
  "V": 4,
  "W": 4,
  "Y": 4,
  "K": 5,
  "J": 8,
  "X": 8,
  "Q": 10,
  "Z": 10
};

export const drawLetters = () => {
  // Implement this method for wave 1

  let poolList = [];
  for (const letter in letterPOOL) {
    for (let i = 0; i < letterPOOL[letter]; i++) {
      poolList.push(letter);
    }
  }
  const shuffled = poolList.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 10);
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  let letterBankCopy = lettersInHand.map((x) => x);

  for (const letter of input) {
    if (!letterBankCopy.includes(letter)) {
      return false;
    } else {
      letterBankCopy = letterBankCopy.filter((x) => x !== letter);
    }
  }
  return true;
};

// usesAvailableLetters("DOG", ["D", "O", "G", "X", "X", "X", "X", "X", "X", "X"]);
export const scoreWord = (word) => {
  word = word.toUpperCase();
  let score = 0;
  if (!word.length) {
    return 0;
  }
  else {
    for (let letter of word) {
      if (scoreChart[letter]) {
        console.log(letter)
        score += scoreChart[letter]
      }
    }
  }

  if (word.length > 6) {
    score += 8
  }

  return score
};

export const highestScoreFrom = (words) => {
  // let words = ["AAAAAAAAAA", "BBBBBB"];

  let score = 0;
  let wordScores = {};
  if (words.length) {
    for (const word of words) {
      score = scoreWord(word);
      wordScores[word] = score;
    }
  };
  const values = Object.values(wordScores);
  const topScore = Math.max(...values)
  console.log("top Score", topScore)

  let topWord = []
  for (const word in wordScores) {
    if (wordScores[word] == topScore) {
      topWord.push(word)
    }
  }
  console.log("top word list", topWord)

  let winner = {};
  let min = 0;
  for (let word of topWord) {
    if (word.length === 10) {
      winner["word"] = word;
      winner["score"] = scoreWord(word);
      return winner;
    }
    else if (word.length < 10) {
      for (let w of topWord) {
        min = Math.min(w.length);
        winner["word"] = w;
        winner["score"] = scoreWord(w);
      }
    }
  }
  winner["word"] = topWord[0];
  winner["score"] = scoreWord(topWord[0]);
  return winner;
};
