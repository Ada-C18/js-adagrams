const letter_pool = {
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

function getletter(obj) {
  const letters = Object.keys(obj);
  return letters[Math.floor(Math.random() * letters.length)];
}

export const drawLetters = () => {
  let pool = letter_pool;
  let randomletters = [];
  do {
    let letter = getletter(pool)
    if (pool[letter] > 0) {
      randomletters.push(letter);
      pool[letter] -= 1;
    } else {
      delete pool[letter];
    }
  }
  while (randomletters.length < 10 && Object.keys(pool).length > 0);
  return randomletters;
};
export const usesAvailableLetters = (input, lettersInHand) => {
};
export const scoreWord = (word) => {
};
export const highestScoreFrom = (words) => {
};
