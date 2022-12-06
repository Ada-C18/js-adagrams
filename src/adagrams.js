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
const pointSystem = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z'],
};
export const drawLetters = () => {
  // Implement this method for wave 1
  const playersHand = [];
  for (let letter in letterPool) {
    for (let i = 0; i < letterPool[letter]; i++) {
      //while i is < the frequency of the letter
      playersHand.push(letter);
    }
  }
  const shuffleLetters = (playersHand) => {
    for (let i = playersHand.length - 1; i > 0; i--) {
      //assign len of hand - 1 to i, while i is > 0 loop (-1) from i each iteration
      let j = Math.floor(Math.random() * (i + 1)); 
      [playersHand[i], playersHand[j]] = [playersHand[j], playersHand[i]]; //the two letters switch their index
    }
    return playersHand.slice(0, 10); //after shuffle the first 10 are returned
  };
  return shuffleLetters(playersHand);
};


export const usesAvailableLetters = (input, lettersInHand) => {
   // Implement this method for wave 2

  
};

// export const scoreWord = (word) => {
//   // Implement this method for wave 3
// };

// export const highestScoreFrom = (words) => {};
// Implement this method for wave 4