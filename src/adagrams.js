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

const letterPoints = {
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

let letterPoolArray = [];
Object.keys(letterPool).forEach((letter) => {
  for (let i = 0; i < letterPool[letter]; i++) {
    letterPoolArray.push(letter);
  }
});

export const drawLetters = () => {
  // Implement this method for wave 1
  let hand = [];
  let poolCopy = [...letterPoolArray];
  const handLength = 10;
  for (let i = 0; i < handLength; i++) {
    let arrayLength = poolCopy.length;
    let letterIndex = Math.floor(Math.random() * arrayLength);
    hand.push(poolCopy[letterIndex]);
    poolCopy.splice(letterIndex, 1);
  }

  return hand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  let inputUpperCase = input.toUpperCase();
  let result;
  for (let i = 0; i < input.length; i++) {
    if (inputUpperCase.includes(lettersInHand[i])) {
      result = true;
    } else {
      return false;
    }
  }
  return result;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
  let wordUpperCase = word.toUpperCase();
  let wordScore = 0;
  for (let i = 0; i < wordUpperCase.length; i++) {
    wordScore += letterPoints[wordUpperCase[i]];
  }
  if (wordUpperCase.length > 6) {
    wordScore += 8;
  }
  return wordScore;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4

  let wordToScoreDict = {};
  let wordLengthDict = {};
  let currentScore = scoreWord(words[0]);

  // let result = {
  //   word: "",
  //   score: 0
  // }

  for (const word of words) {
    wordToScoreDict[word] = scoreWord(word);
    wordLengthDict[word.length] = word;
  }

  for (const word of words) {
    // determine highest score
    if (wordToScoreDict[word] > currentScore) {
      currentScore = wordToScoreDict[word];
    }
  }
  let maxScore = currentScore;
  let currentMinLength = 9;

  let result = {};

  for (const word of words) {
    if (wordToScoreDict[word] === maxScore) {
      if (word.length === 10) {
        return {
          word: word,
          score: wordToScoreDict[word],
        };
      } else if (word.length < currentMinLength) {
        currentMinLength = word.length;
        result = {
          word: word,
          score: wordToScoreDict[word],
        };
      }
    }
  }
  return result;
};
