const drawLetters = () => {
  // Implement this method for wave 1

  const availableLetters = {
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

  const letterBowl = [];
  let letterBowlCopy = [];

  Object.keys(availableLetters).forEach((key) => {
    const quantity = availableLetters[key];
    for (let i = 0; i < quantity; i++) {
      letterBowl.push(key);
    }
  });

  const letterHand = [];
  for (let i = 0; i < 10; i++) {
    const randomLetter =
      letterBowlCopy[Math.floor(Math.random() * letterBowl.length)];
    // console.log(randomLetter);
    letterHand.push(randomLetter);
    letterBowlCopy.splice(randomLetter, 1);
    // I need to somehow make a copy of the letterBowl to modify, then reset
  }
  return letterHand;
};
// drawLetters();

// export const usesAvailableLetters = (input, lettersInHand) => {
//   // Implement this method for wave 2
// };

// export const scoreWord = (word) => {
//   // Implement this method for wave 3
// };

// export const highestScoreFrom = (words) => {
//   // Implement this method for wave 4
// };
