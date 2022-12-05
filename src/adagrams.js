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

  let inputDict = letterCount(input);
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

// export const scoreWord = (word) => {
//   const scoreWord(word) {
//     let total_score = 0;

//   }
// };

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
