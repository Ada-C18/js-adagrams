const letterPool = Array(9)
  .fill("A")
  .concat(Array(2).fill("B"))
  .concat(Array(2).fill("c"))
  .concat(Array(4).fill("D"))
  .concat(Array(12).fill("E"))
  .concat(Array(2).fill("F"))
  .concat(Array(3).fill("G"))
  .concat(Array(2).fill("H"))
  .concat(Array(9).fill("I"))
  .concat(Array(1).fill("J"))
  .concat(Array(1).fill("K"))
  .concat(Array(4).fill("L"))
  .concat(Array(2).fill("M"))
  .concat(Array(6).fill("N"))
  .concat(Array(8).fill("O"))
  .concat(Array(2).fill("P"))
  .concat(Array(1).fill("Q"))
  .concat(Array(6).fill("R"))
  .concat(Array(4).fill("S"))
  .concat(Array(6).fill("T"))
  .concat(Array(4).fill("U"))
  .concat(Array(2).fill("V"))
  .concat(Array(2).fill("W"))
  .concat(Array(1).fill("X"))
  .concat(Array(2).fill("Y"))
  .concat(Array(1).fill("Z"));
const scoreDict = {
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

export const drawLetters = () => {
  // Implement this method for wave 1
  let adjustedLetterPool = [...letterPool];
  let handList = [];
  for (let i = 0; i < 10; i++) {
    let currentLetter =
      adjustedLetterPool[Math.floor(Math.random() * adjustedLetterPool.length)];
    let letterIndex = adjustedLetterPool.indexOf(currentLetter);
    adjustedLetterPool.splice(letterIndex, 1);
    handList.push(currentLetter);
  }
  return handList;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  //   // Implement this method for wave 2
  let lettersInHandCount = {};
  for (const letter of lettersInHand) {
    if (letter in lettersInHandCount) {
      lettersInHandCount[letter] += 1;
    } else {
      lettersInHandCount[letter] = 1;
    }
  }

  const upperCaseInput = input.toUpperCase();
  for (const letter of upperCaseInput) {
    if (!(letter in lettersInHandCount)) {
      return false;
    }
    if (lettersInHandCount[letter] === 0) {
      return false;
    } else {
      lettersInHandCount[letter] -= 1;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
  const uppercaseWord = word.toUpperCase();
  let score = 0;
  for (const letter of uppercaseWord) {
    score += scoreDict[letter];
  }
  if (word.length > 6) {
    score += 8;
  }
  return score;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
  let highestScore = 0;
  let winningWord = "";
  for (const word of words) {
    let currentScore = scoreWord(word);
    if (word.length === 10) {
      return { word: word, score: currentScore };
    }
    if (currentScore > highestScore) {
      highestScore = currentScore;
      winningWord = word;
    } else if (
      currentScore === highestScore &&
      word.length < winningWord.length
    ) {
      winningWord = word;
    }
  }
  return { word: winningWord, score: highestScore };
};
