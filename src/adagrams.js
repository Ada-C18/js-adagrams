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
  let arrayLetters = "";
  for (let letter in letterPool) {
    const amountOftimes = letterPool[letter];
    for (let i = 0; i < amountOftimes; i++) {
      arrayLetters += letter;
    }
  }
  let drawn = [];

  for (let i = 0; i < 10; i++) {
    let letter = arrayLetters.charAt(
      Math.floor(Math.random() * arrayLetters.length)
    );
    // If letter is in array 9 times then do another loop
    arrayLetters = arrayLetters.replace(letter, "");
    drawn.push(letter);
  }
  console.log(drawn);
  return drawn;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
