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

export const drawLetters = () => {
  //build draw pile
  let letters = [];

  for (let letter in LETTER_POOL) {
    let counter = LETTER_POOL[letter];

    for (let i = 0; i < counter; i++) {
      letters.push(letter);
    }
  }

  //build hand and return it
  let hand = [];

  while (hand.length < 10) {
    let rand_index = Math.floor(letters.length * Math.random());
    let rand_letter = letters[rand_index];

    hand.push(rand_letter);
    letters.splice(rand_index, 1);
  }

  return hand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  let available_letters = [];

  for (let index in lettersInHand) {
    let letter = lettersInHand[index];
    let letter_capitalize = letter.toUpperCase();
    available_letters.push(letter_capitalize);
  }

  for (let index in input) {
    let letter = input[index];
    let letter_capitalize = letter.toUpperCase();
    if (available_letters.includes(letter_capitalize)) {
      available_letters.splice(letter_capitalize, 1);
    } else {
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  const letter_value = {
    A: 1,
    E: 1,
    I: 1,
    O: 1,
    U: 1,
    L: 1,
    N: 1,
    R: 1,
    S: 1,
    T: 1,
    D: 2,
    G: 2,
    B: 3,
    C: 3,
    M: 3,
    P: 3,
    F: 4,
    H: 4,
    V: 4,
    W: 4,
    Y: 4,
    K: 5,
    J: 8,
    X: 8,
    Q: 10,
    Z: 10,
  };

  let point = 0;

  let upperCaseWord = word.toUpperCase();
  for (let index in upperCaseWord) {
    let letter = upperCaseWord[index];
    if (letter_value[letter]) {
      point += letter_value[letter];
    }
  }

  if (upperCaseWord.length >= 7) {
    point += 8;
  }

  return point;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
