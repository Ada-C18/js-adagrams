const letterDistribution = {
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
let userLetters = [];
const allLetters = [];
export const drawLetters = () => {
  // Implement this method for wave 1
  for (const letter in letterDistribution) {
    for (let i = 0; i < letterDistribution[letter]; i++) {
      allLetters.push(letter);
    }
  }

  while (userLetters.length < 10) {
    const randomLetterIndex = Math.floor(Math.random() * allLetters.length);
    const randomLetter = allLetters[randomLetterIndex];

    userLetters.push(randomLetter);
    allLetters.splice(randomLetterIndex, 1);
  }
  return userLetters;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  const userInput = input.toUpperCase();
  const lettersInHandCopy = [...lettersInHand];

  for (const letter in userInput) {
    if (lettersInHandCopy.includes(userInput[letter])) {
      lettersInHandCopy.splice(userInput[letter], 1);
      continue;
    }
    return false;
  }

  return true;
};

const letterScore = {
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

export const scoreWord = (word) => {
  // Implement this method for wave 3
  let wordList = word.split("");
  let total = 0;
  // for (let letter in word) {
  for (let i = 0; i < word.length; i++) {
    let letter = wordList[i];
    total += letterScore[letter.toUpperCase()];
  }
  if (word.length >= 7 && word.length <= 10) {
    total += 8;
  }
  return total;
};

export const highestScoreFrom = (words) => {
  let WinnerWord = {};
  for (let b = 0; b < words.length; b++) {
    let word = words[b];
    let score = scoreWord(word);
    WinnerWord.word = word;
    WinnerWord.score = score;
    if (score > WinnerWord.score) {
      WinnerWord.word = word;
      WinnerWord.score = score;
    }

    return WinnerWord;
  }
};
