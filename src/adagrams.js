//import { hasOwnMetadata } from "core-js/fn/reflect";

//import { forEach } from "core-js/core/array";

export const drawLetters = () => {
  const hand = [];

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
    Z: 1
  };

  const makePoolArr = function() {
    const poolArr = [];
    for (const [letter, quantity] of Object.entries(letterPool)) {
      for (let i = 0; i < quantity; i++) {
        poolArr.push(letter);
      }
    }

    return poolArr
  };
  
  const getRandNum = function(poolArr) {
    const maxLength = poolArr.length - 1;
    const randNum = Math.floor(Math.random() * maxLength);
    return randNum
  };

  const poolArr = makePoolArr();

  while(hand.length < 10) {
    //let letterPoolCopy = letterPool;
    //const poolArr = makePoolArr();
    const randNum = getRandNum(poolArr);
    const letterValue = function () {
      return poolArr[randNum];
    }
      
    hand.push(letterValue());
    poolArr.splice(randNum, 1);
      //letterPool[letterValue()] = (letterPool[letterValue()]) - 1;

  };
  
  return hand
};

export const usesAvailableLetters = (input, lettersInHand) => {
  let validLetterCounter = 0
  for(let letter of input) {
      let index = lettersInHand.indexOf(letter);
      if(lettersInHand.includes(letter)){
        lettersInHand.splice(index, 1);
        validLetterCounter += 1
      } else {
        return false
      };
    };
  if(input.length === validLetterCounter){
    return true  
  };

};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
