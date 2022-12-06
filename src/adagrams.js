export const drawLetters = () => {
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

  const letterHand = [];
  const letterDistribution = [];

  for (const letter in letterPool) {
    for (let i = 0; i < letterPool[letter]; i++) {
      letterDistribution.push(letter);
    }
  }

  while (letterHand.length < 10) {
    const randomIndex = Math.floor(Math.random() * letterDistribution.length);
    const randomLetter = letterDistribution[randomIndex];
    console.log(randomIndex);

    letterHand.push(randomLetter);
    letterDistribution.splice(randomIndex, 1);
  }
  return letterHand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  for (let letter in input) {
    if (lettersInHand.includes(input[letter])) {
      delete lettersInHand[letter];
    } else {
      return false;
    }
  }
  return true;
};

// export const scoreWord = (word) => {
//   // Implement this method for wave 3
// };

// export const highestScoreFrom = (words) => {
//   // Implement this method for wave 4
// };
