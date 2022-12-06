const letterPool = {
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

const scoreTable = {
  A: 1,
  B: 3,
  C: 3,
  D: 2,
  E: 1,
  F: 4,
  G: 2,
  H: 4,
  I: 1,
  J: 8,
  K: 5,
  L: 1,
  M: 3,
  N: 1,
  O: 1,
  P: 3,
  Q: 10,
  R: 1,
  S: 1,
  T: 1,
  U: 1,
  V: 4,
  W: 4,
  X: 8,
  Y: 4,
  Z: 10,
};

export const letterCount = (word) => {
  let wordDict = {};
  const wordList = Array.isArray(word) ? word : word.split("");

  for (let letter of wordList) {
    wordDict[letter]
      ? (wordDict[letter] = wordDict[letter] + 1)
      : (wordDict[letter] = 1);
  }

  return wordDict;
};

export const drawLetters = () => {
  let randomList = [];

  for (const letter in letterPool) {
    randomList.push(...Array(letterPool[letter]).fill(letter));
  }

  let drawnLetters = [];

  for (let i = 0; i < 10; i++) {
    let randomLetter =
      randomList[Math.floor(Math.random() * randomList.length)];
    let randomLetterIndex = randomList.indexOf(randomLetter);
    drawnLetters.push(randomLetter);
    randomList.splice(randomLetterIndex, 1);
  }

  return drawnLetters;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // const inputArr = [...input];
  // let handCopy = [...lettersInHand];

  // for (const letter of inputArr) {
  //   if (handCopy.includes(letter)) {
  //     handCopy.splice(handCopy.indexOf(letter), 1);
  //   } else {
  //     return false;
  //   }
  // }
  // return true;

  let inputDict = letterCount(input.toUpperCase());
  let lettersInHandDict = letterCount(lettersInHand);

  for (const letter of [...input]) {
    if (
      !(letter in lettersInHandDict) ||
      inputDict[letter] > lettersInHandDict[letter]
    ) {
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  let totalScore = 0;
  const wordDict = letterCount(word.toUpperCase());

  for (let letter in wordDict) {
    totalScore += scoreTable[letter] * wordDict[letter];
  }
  if (word.length >= 7) {
    totalScore += 8;
  }
  return totalScore;
};

export const highestScoreFrom = (words) => {
  let highestScore = 0;
  let winningWord = null;

  for (let word of words) {
    if (scoreWord(word) > highestScore) {
      highestScore = scoreWord(word);
      winningWord = word;
    } else if (scoreWord(word) === highestScore) {
      if (word.length === winningWord.length || winningWord.length == 10) {
        continue;
      } else if (word.length === 10) {
        winningWord = word;
      } else if (word.length < winningWord.length) {
        winningWord = word;
      }
    }
  }
  return { word: winningWord, score: highestScore };
};
