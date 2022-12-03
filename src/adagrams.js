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

////////\\\\\\\    WAVE 1    ///////\\\\\\\\\\
export const drawLetters = () => {
  let letterArray = [];

  for (const [letter, freq] of Object.entries(LETTER_POOL)) {
    for (let i = 0; i < freq; i++) {
      letterArray.push(letter);
    }
  }

  let hand = [];
  for (let i = 0; i < 10; i++) {
    let randomIndex = Math.floor(Math.random() * letterArray.length);
    hand.push(letterArray[randomIndex]);
    letterArray.splice(randomIndex, 1);
  }
  return hand;
};

// Math.random() generates random num btw 0 to array len
// Math.floor() returns nearest int value

////////\\\\\\\    WAVE 2    ///////\\\\\\\\\\
export const usesAvailableLetters = (input, lettersInHand) => {
  for (let i = 0; i < input.length; i++) {
    if (lettersInHand.includes(input[i])) {
    }
    if (!lettersInHand.includes(input[i])) {
      console.log(input[i]);
      return false;
    }
  }
  return true;
};

////////\\\\\\\    WAVE 3    ///////\\\\\\\\\\
export const scoreWord = (word) => {
  // Implement this method for wave 3
};

////////\\\\\\\    WAVE 4    ///////\\\\\\\\\\

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
