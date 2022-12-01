// import { random } from "core-js/core/number";

export const drawLetters = () => {
  const LETTER_POOL = {
    'A': 9, 
    'B': 2, 
    'C': 2, 
    'D': 4, 
    'E': 12, 
    'F': 2, 
    'G': 3, 
    'H': 2, 
    'I': 9, 
    'J': 1, 
    'K': 1, 
    'L': 4, 
    'M': 2, 
    'N': 6, 
    'O': 8, 
    'P': 2, 
    'Q': 1, 
    'R': 6, 
    'S': 4, 
    'T': 6, 
    'U': 4, 
    'V': 2, 
    'W': 2, 
    'X': 1, 
    'Y': 2, 
    'Z': 1
}
  const lettersForUser = [];
  const copiedLetterPool = JSON.parse(JSON.stringify(LETTER_POOL));
  while (lettersForUser.length < 10) {
    const keys = Object.keys(copiedLetterPool);
    let letter = keys[Math.floor(Math.random() * keys.length)];
    let value = copiedLetterPool[letter];
    if (value > 0){
      lettersForUser.push(letter);
      copiedLetterPool[letter] -= 1;
    }
  }
  return lettersForUser;
};
//----------------------------------------------------------


export const usesAvailableLetters = (input, lettersInHand) => {
  let copiedLettersInHand = JSON.parse(JSON.stringify(lettersInHand));
  let inputWord = input.toUpperCase();
  for (let letter of inputWord){
      if (copiedLettersInHand.includes(letter)){
        let index = copiedLettersInHand.indexOf(letter);
        copiedLettersInHand.splice(index, 1);
        } else {
          return false;
        }
      }
  return true;
};

//----------------------------------------------------------


export const scoreWord = (word) => {

  const SCORE_CHART = {
    'A': 1, 
    'B': 3, 
    'C': 3, 
    'D': 2, 
    'E': 1, 
    'F': 4, 
    'G': 2, 
    'H': 4, 
    'I': 1, 
    'J': 8, 
    'K': 5, 
    'L': 1, 
    'M': 3, 
    'N': 1, 
    'O': 1, 
    'P': 3, 
    'Q': 10, 
    'R': 1, 
    'S': 1, 
    'T': 1, 
    'U': 1, 
    'V': 4, 
    'W': 4, 
    'X': 8, 
    'Y': 4, 
    'Z': 10
}
  let score = 0;
  const WORD = word.toUpperCase()
  for (let letter of WORD){
    score += SCORE_CHART[letter]; 
  }
  if ((WORD.length >= 7) && (WORD.length < 11)){
    score += 8;
  }
  return score;
};

//----------------------------------------------------------
export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
