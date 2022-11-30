export const drawLetters = () => {
  // Implement this method for wave 1
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

  let letterList = [];

  for (const [key, value] of Object.entries(letterPool)) {
    for (let i = 0; i < value; i++) {
      letterList.push(key);
    }
  }

  let hand = [];
  while (hand.length < 10) {
    hand.push(
      letterList.pop(Math.floor(Math.random() * (letterList.length - 1)))
    );
  }

  return hand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  let hand = [, ...lettersInHand];
  input = input.toUpperCase();
  for (const char of input) {
    if (hand.includes(char) === false) {
      return false;
    } else {
      const index = hand.indexOf(char);
      if (index > -1) {
        hand.splice(index, 1);
        console.log(hand);
      }
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
