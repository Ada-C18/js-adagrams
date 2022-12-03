export const drawLetters = () => {
  // Implement this method for wave 1
  //1. Convert LETTERPOOL INTO LETTERARRAY
  const LETTERARRAY = [];
  for (const key in LETTERPOOL) {
    for (let i = 0; i < LETTERPOOL[key]; i++) {
      LETTERARRAY.push(key);
    }
  }
  //2. Draw 10 letters and output them in an array
  let deepCopyLETTERPOOL = JSON.parse(JSON.stringify(LETTERPOOL));
  let outputArray = [];
  while (outputArray.length < 10) {
    const drawnLetter =
      LETTERARRAY[Math.floor(Math.random() * LETTERARRAY.length)];
    if (deepCopyLETTERPOOL[drawnLetter] > 0) {
      outputArray.push(drawnLetter);
      deepCopyLETTERPOOL[drawnLetter] -= 1;
    }
  }
  return outputArray;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  // - Returns `true` if every letter in the `input` word is available (in the right quantities) in the `lettersInHand`
  // - Returns `false` if not; if there is a letter in `input` that is not present in the `lettersInHand` or has too much of compared to the `lettersInHand`
  const handDict = {};
  for (const letter of lettersInHand) {
    if (handDict[letter]) {
      handDict[letter] += 1;
    } else {
      handDict[letter] = 1;
    }
  }
  for (const letter of input) {
    if (!handDict[letter]) {
      return false;
    } else if (handDict[letter] === 0) {
      return false;
    } else {
      handDict[letter] -= 1;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};

const LETTERPOOL = {
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
