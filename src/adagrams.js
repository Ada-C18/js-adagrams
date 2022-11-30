const LETTER_POOL_COUNT = {
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
  // Implement this method for wave 1
  let count_obj = {};
  let letter_list = [];
  let new_letter = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 0; i < 10; i++) {
    new_letter = characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
    if (
      new_letter in count_obj &&
      LETTER_POOL_COUNT[new_letter] > count_obj[new_letter]
    ) {
      count_obj[new_letter] += 1;
      letter_list.push(new_letter);
    } else if (!(new_letter in count_obj)) {
      count_obj[new_letter] = 1;
      letter_list.push(new_letter);
    } else {
      continue;
    }
  }
  // console.log(letter_list.length);
  return letter_list;
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
