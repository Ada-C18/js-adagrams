// global variable
const LETTER_POOL = {
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
}
// the following line of code imports the library lodash
// we use this library because we want to use the method sampleSize and the method cloneDeep 
const _ = require('lodash');

export const drawLetters = () => {
  let letterList = [];
  for (let [letter, freq] of Object.entries(LETTER_POOL)) {
    letterList.push(...Array(freq).fill(letter));
  }
  return _.sampleSize(letterList, 10);
};

export const usesAvailableLetters = (input, lettersInHand) => {
  const lettersInHand_deepcopy = _.cloneDeep(lettersInHand);
  for (let letter of input.toUpperCase()) {
    if (lettersInHand_deepcopy.includes(letter)) {
      lettersInHand_deepcopy.splice(lettersInHand_deepcopy.indexOf(letter), 1);
    } else {
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  //  we are using Map instead of Object because the keys in Object must be string, symbol or number
  const valuesMap = new Map([
    [['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'], 1],
    [['D', 'G'], 2],
    [['B', 'C', 'M', 'P'], 3],
    [['F', 'H', 'V', 'W', 'Y'], 4],
    [['K'], 5],
    [['J', 'X'], 8],
    [['Q', 'Z'], 10]
  ]);

  let wordValue = 0;
  for (let letter of word) {
    let letterValue = 0;
    for (let lettersArray of valuesMap.keys()) {
      if (lettersArray.includes(letter.toUpperCase())) {
        letterValue = valuesMap.get(lettersArray);
      }
    }
    // we can find letterValue with just 1 line of code
    // but I prefer the previous approach because of its readability
    // let letterValue = [...valuesMap].find(([key, value]) => key.includes(letter.toUpperCase()))[1];
    wordValue += letterValue;
  }

  if (word.length >= 7 && word.length <= 10) {
    wordValue += 8;
  }
  return wordValue;
};

export const highestScoreFrom = (words) => {
  let result = {
    word: '',
    score: 0
  };

  // iterate through the array of words and choose the word with highest score
  // in case of tied score, we compare the words'length and determine which word will be chosen
  words.forEach(word => {
    const currentScore = scoreWord(word);

    if (currentScore > result.score) {
      result.word = word;
      result.score = currentScore;
    } else if (currentScore === result.score) {
        if (word.length === 10 && result.word.length !== 10) {
          result.word = word;
        } else if (word.length < result.word.length && result.word.length !== 10) {
          result.word = word;
        }
    }
  });
  return result;
}