// import { keys } from "core-js/core/array";

// import { forEach } from "core-js/core/array";

const letterBank = {
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

export const drawLetters = () => {
  // Implement this method for wave 1
  const lettersArr = Object.keys(letterBank);

  let letterPoolFreq = {};
  let letterPool = [];

  while (letterPool.length < 10) {
    let randomIndex = Math.floor(Math.random() * lettersArr.length);
    let randLetter = lettersArr[randomIndex];

    if (!(randLetter in letterPoolFreq)){ // this is checking that if random letter not in letterpool it's frequency now = 1
      letterPoolFreq[randLetter] = 1;
      letterPool.push(randLetter);
    } else if (letterPoolFreq[randLetter] < letterBank[randLetter]){ // this is checking that if the val of letterpool[randletter] < the val of letterBank[randletter]
      letterPoolFreq[randLetter] += 1;
      letterPool.push(randLetter);
    }
  }
  return letterPool;
};


export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  const inputLetterFreq = {};
  const lettersInHandFreq = {};

  for (let i = 0; i < input.length; i++ ){
    let letter = input[i];
    if (!(lettersInHand.includes(letter))) {
      return false;
    } else if (!(letter in inputLetterFreq)){
      inputLetterFreq[letter] = 1;
    }else{
      inputLetterFreq[letter] += 1;
    }}

  for (let i = 0; i < lettersInHand.length; i++ ){
    let letter = lettersInHand[i];
    if (!(letter in lettersInHandFreq)){
      lettersInHandFreq[letter] = 1;
    }else{
      lettersInHandFreq[letter] += 1;
    }}

  for (let i = 0; i < input.length; i++ ) {
    let letter = input[i];
    if (inputLetterFreq[letter] > lettersInHandFreq[letter]){
      return false;
    }
  }
  return true;
};

  



  

  // for (let char in lettersInHand){
  //   if (!(char in lettersInHandCounter)) {
  //     lettersInHandCounter[char] = 1;
  //   } else {
  //     lettersInHandCounter[char] += 1;
  //   }
  // }

  // for (let letter in inputLetterFrequency){
  //   if (!(letter in lettersInHand || inputLetterFrequency[letter] > lettersInHandCounter[letter])){
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }


export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
