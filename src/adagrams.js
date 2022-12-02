const letterPoolObj = {
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

export const drawLetters = () => {
  // Implement this method for wave 1
  let letterList = [];
  let letterPoolCopy = letterPoolObj;

  for (let i = letterList.length; i < 10; ++i) {
    let objKeys = Object.keys(letterPoolObj);
    let randLetter = objKeys[Math.floor(Math.random() * objKeys.length)];
    if (letterPoolCopy[randLetter] > 0){
        letterList.push(randLetter);
        letterPoolCopy[randLetter] -= 1;
    }
  } 
  return letterList;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  let isAnagram = true;
  let copyLetterBank = lettersInHand;

  // for (const letter of input) {

  // }

};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
