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
    // If letter is in array 9 times then do another loop
    allLetters = allLetters.replace(letter, "");
    hand.push(letter);
  }
  return hand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  let arrayOfInputValues = Array.from(input);
  // console.log(`This is the new array created ${arrayOfInputValues}`);

  // check if each individual charcter is found in the lettersInHand
  for (let i = 0; i < arrayOfInputValues.length; i++) {
    console.log(
      `This is the characters you have in your hand ${lettersInHand}`
    );
    // This access the characters in the array
    // console.log(arrayOfInputValues[i]);
    // checks if an object is an a array
    console.log(lettersInHand.includes(arrayOfInputValues[i]));
  }
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
