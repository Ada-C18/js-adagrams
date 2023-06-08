// import { random } from "core-js/core/number";

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
  Z: 1,
};

const LETTER_VALUES = {
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

// create array of all letters
const createLetterList = letters => {
  const letterList = [];
  for (const letter in letters) {
    for(let i = 0; i < letters[letter]; i++) {
      letterList.push(letter);
    }
  }
  return letterList;
}

// generates random letter
const generateRandomLetter = () => {
  const letters = createLetterList(LETTER_POOL);
  const randomLetter = letters[Math.floor(Math.random() * letters.length)];
  return randomLetter;
}

// draw 10 letters into hand
// ensure each drawn letter is drawn no more than the total amount of that letter
export const drawLetters = () => {
  // Implement this method for wave 1
  const lettersDrawnForHand = [];

  while (lettersDrawnForHand.length < 10) {
    let randomLetter = generateRandomLetter();
    const numberOfOccurences = lettersDrawnForHand.filter(element => element === randomLetter).length
    if ( numberOfOccurences < LETTER_POOL[randomLetter]){
      lettersDrawnForHand.push(randomLetter);
    }
  }
  return lettersDrawnForHand;
};

// handles input that doesn't contain letters in hand
// handles the correct quantity of letters in hand
export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  const letterHandCopy = JSON.parse(JSON.stringify(lettersInHand));

  for(let i = 0; i < input.length; i++) {
    let letterIndex = letterHandCopy.indexOf(input[i]);
    if (letterIndex === -1) {
      return false;
    }
    letterHandCopy[letterIndex] = '';
  }
  return true;
};

// scores each letter in the user submitted word
// if word is 7 or more letters, word gets 8 bonus points
export const scoreWord = (word) => {
  // Implement this method for wave 3
  const playerWord = word.toUpperCase()
  let score = 0;

  for(const letter of playerWord) {
    score += LETTER_VALUES[letter];
  }
  if (playerWord.length > 6) {
    score += 8;
  }

  return score;
};

// finds the highest scoring word from all words submitted
// in case of tie, will break tie based on shortest length unless word is 10 letters exactly
export const highestScoreFrom = (words) => {
  // Implement this method for wave 4

  let highestScore = 0;
  let highestScoringWord = '';

  for(const word of words){
    let score = scoreWord(word);

    if (score > highestScore) {
      highestScore = score;
      highestScoringWord = word;
    }
    else if (score === highestScore) {
      if(highestScoringWord.length != 10 && (word.length === 10 || word.length < highestScoringWord.length)) {
        highestScoringWord = word
      }
    }
  }
  return {
    'score': highestScore,
    'word': highestScoringWord
  }
};
