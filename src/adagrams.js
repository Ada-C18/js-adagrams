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
  let letterPoolArray = [];
  let letterBag = [];

  for (const [letter, freq] of Object.entries(letterPool)) {
    for (let i = 0; i < freq; i++) {
      letterPoolArray.push(letter);
    }
  }

  for (let i = 0; i < 10; i++) {
    let randomIndex = Math.floor(Math.random() * letterPoolArray.length);
    letterBag.push(letterPoolArray.splice(randomIndex, 1));
  }
  return letterBag;
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

// const LETTER_POOL = {
//   A: 9,
//   B: 2,
//   C: 2,
//   D: 4,
//   E: 12,
//   F: 2,
//   G: 3,
//   H: 2,
//   I: 9,
//   J: 1,
//   K: 1,
//   L: 4,
//   M: 2,
//   N: 6,
//   O: 8,
//   P: 2,
//   Q: 1,
//   R: 6,
//   S: 4,
//   T: 6,
//   U: 4,
//   V: 2,
//   W: 2,
//   X: 1,
//   Y: 2,
//   Z: 1,
// };

// // ///////\\\\\\   WAVE 1    \\\\\\\\///////////

// export const drawLetters = () => {
//   let letterList = [];
//   for (const [letter, value] of Object.entries(LETTER_POOL)) {
//     for (let i = 0; i < value; i++) {
//       letterList.push(letter);
//     }
//   }

//   let hand = [];
//   for (let i = 0; i < 10; i++) {
//     let randIndex =
//       // const letterDrawn = letterList.pop();
//       //   Math.floor(Math.random() * letterList.length)
//       // );
//       // Math.random() generates random num btw 0 to array len
//       // Math.floor() returns nearest int value
//       // returns random int
//       hand.push(letterDrawn);
//   }
//   return hand;
// };

// console.log(drawLetters());
// console.log(drawLetters());
// console.log(drawLetters());
// console.log(drawLetters());

// // const shuffled = letterList.sort(() => 0.5 - Math.random());
// // return shuffled.slice(0, 10);

// // //////////////// WAVE 2 /////////// ///////

// // export const usesAvailableLetters = (input, lettersInHand) => {
// //   // Implement this method for wave 2
// // };

// // export const scoreWord = (word) => {
// //   // Implement this method for wave 3
// // };

// // export const highestScoreFrom = (words) => {
// //   // Implement this method for wave 4
// // };
