import { letterPoolArr, letterScore } from './demo/constants';

export const drawLetters = () => {
  // Implement this method for wave 1
  let lettersInHand = [];
  let myLetterPoolArr = JSON.parse(JSON.stringify(letterPoolArr));
  for (let i = 0; i < 10; i++) {
    const randInt = Math.floor(Math.random() * myLetterPoolArr.length - 1) + 1;
    const myLetter = myLetterPoolArr[randInt];
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
  if (!words) {
    return {
      word: null,
      score: null
    };
  } else if (words.length === 1) {
    return {
      word: words[0],
      score: scoreWord(words[0])
    };
  }

  let bestWord = words[0];
  let bestScore = scoreWord(bestWord);
  for (let i = 1; i < words.length; i++) {
    const currWord = words[i];
    const currWordScore = scoreWord(currWord);
    if (currWordScore > bestScore) {
      bestScore = currWordScore;
      bestWord = currWord;
    } else if (
      currWordScore === bestScore &&
      currWord.length === 10 &&
      bestWord.length !== 10
    ) {
      bestScore = currWordScore;
      bestWord = currWord;
    } else if (
      currWordScore === bestScore &&
      currWord.length < bestWord.length &&
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
