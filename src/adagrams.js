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
  // Implement this method for wave 3
  // score = 0
  // word = word.upper()
  // for letter in word: 
  //     for key, value in SCORE_CHART.items():
  //         if letter in value:
  //             score += key
  // if len(word) in range(7, 11):
  //     score += 8
  // return score

  
};

//----------------------------------------------------------
export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
