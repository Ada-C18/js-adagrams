const letterPool = {
  'A': 9, 
  'B': 2, 
  'C': 2, 
  'D': 4, 
  'E': 12, 
  'F': 2, 
  'G': 3, 
  'H': 2, 
  'I': 9, 
  'J': 1, 
  'K': 1, 
  'L': 4, 
  'M': 2, 
  'N': 6, 
  'O': 8, 
  'P': 2, 
  'Q': 1, 
  'R': 6, 
  'S': 4, 
  'T': 6, 
  'U': 4, 
  'V': 2, 
  'W': 2, 
  'X': 1, 
  'Y': 2, 
  'Z': 1
}

const pointSystem = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2:['D','G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J','X'],
  10: ['Q','Z']
}
export const drawLetters = () => {
  // Implement this method for wave 1
  let copyOfLetterPool = Object.assign({}, letterPool);
  const keyOfLetters = Object.keys(copyOfLetterPool);
  const valueOfLetters = Object.values(copyOfLetterPool);
  let playersHand = [];
  while (playersHand.length < 10){
    let ranLetter = keyOfLetters[Math.floor(Math.random())];
    if (copyOfLetterPool[ranLetter] > 0) {
      copyOfLetterPool[ranLetter] -= 1;
      playersHand.push(ranLetter);
    }
  }
  return playersHand;
};

// export const usesAvailableLetters = (input, lettersInHand) => {
//   // Implement this method for wave 2
// };

// export const scoreWord = (word) => {
//   // Implement this method for wave 3
// };

// export const highestScoreFrom = (words) => {};
