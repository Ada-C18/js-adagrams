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
  Z: 1,
};
export const drawLetters = () => {
  let allLetters = "";
  for (let letter in letterPool) {
    const amountOftimes = letterPool[letter];
    for (let i = 0; i < amountOftimes; i++) {
      allLetters += letter;
    }
  }
  let hand = [];

  for (let i = 0; i < 10; i++) {
    let letter = allLetters.charAt(
      Math.floor(Math.random() * allLetters.length)
    );
    allLetters = allLetters.replace(letter, "");
    hand.push(letter);
  }
  return hand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  let arrayOfInputValues = Array.from(input);
  let arrayOfInputValuesBools = [];

  for (let i = 0; i < arrayOfInputValues.length; i++) {
    let isStringValid = lettersInHand.includes(arrayOfInputValues[i]);
    arrayOfInputValuesBools.push(isStringValid);
    // delete character from the list at hand
  }
  return arrayOfInputValuesBools.every((element) => element === true);
  // for (let i = 0; i < arrayOfInputValues.length; i++) {
  //   let isStringValid = lettersInHand.includes(arrayOfInputValues[i]);
  //   if (isStringValid === true) {
  //     arrayOfInputValuesBools.push(isStringValid);
  //     // delete the characher from the array
  //   }
  // }
  // if (arrayOfInputValuesBools.every((element) => element === true)) {
  //   return true;
  // } else {
  //   return false;
  // }
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
