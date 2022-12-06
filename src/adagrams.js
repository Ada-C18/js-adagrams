export const drawLetters = () => {
  // Implement this method for wave 1
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

  const letterList = [];
  for (const [letter, value] of Object.entries(LETTER_POOL)) {
    for (let i = 0; i < value; i++) {
      letterList.push(letter);
    }
  }
    
  const hand = []
  for (let i = 0; i < 10; i++) {
    let rand_index = Math.floor(Math.random() * letterList.length);
    hand.push(letterList[rand_index]);
    letterList.splice(rand_index, 1); 
  };
  return hand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  const word = input.toUpperCase();
  let handCopy = lettersInHand.slice();
  for (const letter of word) {
    if (!(handCopy.includes(letter))) {
      handCopy = lettersInHand.slice();
      return false;
    }
    let index = handCopy.indexOf(letter);
    handCopy.splice(index, 1);
  }
  return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
