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

const scoreBoard = {}
// Range function that defines the start, end, and length -> outputs
// a list numbers between start and end 
const range = (start, end, length = end - start + 1) => {
  return Array.from({length:end}, (_, i) => start + i)
}

export const drawLetters = () => {
  let deck = [];

  for (const [key, cnt] of Object.entries(LETTER_POOL)){
    for (let i of range(0, cnt)){
      deck.push(key);
    }
  }
  let dCnt = deck.length - 1
  while (dCnt) {
    let i = Math.floor(Math.random() * dCnt--);

    [deck[dCnt], deck[i]] = [deck[i], deck[dCnt]];

  }
  return deck.splice(0, 10);
};

export const usesAvailableLetters = (input, lettersInHand) => {
  lettersInHand = lettersInHand.join('')

  return lettersInHand.includes(input);
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
