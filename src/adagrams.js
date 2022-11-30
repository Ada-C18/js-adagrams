// import { letterPoolArr, letterScore } from './demo/constants';

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
  Z: 1
};

let letterPoolArr = Object.keys(letterDistribution)
  .map((key) => {
    const newArr = new Array(letterDistribution[key]).fill(key);
    return newArr;
  })
  .flat(1);

export const drawLetters = () => {
  // Implement this method for wave 1
  let lettersInHand = [];
  let myLetterPoolArr = JSON.parse(JSON.stringify(letterPoolArr));
  for (let i = 0; i < 10; i++) {
    const randInt = Math.floor(Math.random() * myLetterPoolArr.length - 1) + 1;
    const myLetter = myLetterPoolArr[randInt];
    if (!myLetter) {
      console.log(randInt);
    }
    lettersInHand.push(myLetter);
    myLetterPoolArr.splice(randInt, 1);
  }
  return lettersInHand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  let myLettersInHand = JSON.parse(JSON.stringify(lettersInHand));
  for (let i = 0; i < input.length; i++) {
    const currLetter = input[i].toUpperCase();
    if (myLettersInHand.includes(currLetter)) {
      const index = myLettersInHand.indexOf(currLetter);
      myLettersInHand.splice(index, 1);
    } else {
      return false;
    }
  }
  return true;
};

const letterScore = {
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
  Z: 10
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
  let score = 0;
  if (!word) {
    return score;
  }

  for (let i = 0; i < word.length; i++) {
    score += letterScore[word[i].toUpperCase()];
  }
  if (word.length >= 7 && word.length <= 10) {
    score += 8;
  }
  return score;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
  let bestWord = words[0];
  let bestScore = scoreWord(bestWord);
  for (let i = 0; i < words.length; i++) {
    const currWord = words[i];
    const currWordScore = scoreWord(currWord);
    if (currWordScore > bestScore) {
      bestScore = currWordScore;
      bestWord = currWord;
    } else if (
      currWordScore === bestScore &&
      currWord.length < bestWord.length
    ) {
      bestScore = currWordScore;
      bestWord = currWord;
    } else if (
      currWordScore === bestScore &&
      currWord.length === 10 &&
      bestWord.length !== 10
    ) {
      bestScore = currWordScore;
      bestWord = currWord;
    }
  }
  return {
    word: bestWord,
    score: bestScore
  };
};

export default {
  drawLetters,
  usesAvailableLetters,
  scoreWord,
  highestScoreFrom
};
