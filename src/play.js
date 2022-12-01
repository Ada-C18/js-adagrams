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

const SCORE_DICT = {
  A: 1,
  B: 3,
  C: 3,
  D: 2,
  E: 1,
  F: 4,
  G: 2,
  H: 4,
  I: 1,
  J: 8,
  K: 5,
  L: 1,
  M: 3,
  N: 1,
  O: 1,
  P: 3,
  Q: 10,
  R: 1,
  S: 1,
  T: 1,
  U: 1,
  V: 4,
  W: 4,
  X: 8,
  Y: 4,
  Z: 10,
};

const drawLetters = () => {
  // Returns an array of ten strings of exactly one letter
  // The letters should be randomly drawn from a pool of letters
  // This letter pool should reflect the distribution of letters as described in the table below
  // Invoking this function should not change the pool of letters
  // Imagine that the user returns their hand to the pool before drawing new letters
  const letterPoolArray = [];
  for (const [k, v] of Object.entries(LETTER_POOL)) {
    for (let i = 0; i < v; i++) {
      letterPoolArray.push(k);
    }
  }
  console.log(letterPoolArray.length);

  let hand = [];
  for (let i = 0; i < 10; i++) {
    const pickedLetter = letterPoolArray.pop(
      Math.floor(Math.random() * letterPoolArray.length)
    );
    hand.push(pickedLetter);
  }
  console.log(hand);
  console.log(letterPoolArray.length);
};

drawLetters();
