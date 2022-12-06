export const drawLetters = () => {
  // Implement this method for wave 1
  const letterDict = {
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
  }

  let letterList = [];

  //populate list with individual letters (accounts for distribution)
  for (const [key, value] of Object.entries(letterDict)) {
    for (let i = 0; i < value; i++) {
      letterList.push(key);
    }
  }

  //select 10 random unique letters from letterlist
  let drawList = []
  for (let i = 0; i < 10; i++) {
    let randIndex = Math.floor(Math.random() * (letterList.length));
    drawList.push(letterList[randIndex]);
    letterList.splice(randIndex, 1);
  }
  return drawList;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  for (const letter of input) {
    if (lettersInHand.includes(letter)) {
      const letterIndex = lettersInHand.indexOf(letter);
      lettersInHand.splice(letterIndex, 1);
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
//