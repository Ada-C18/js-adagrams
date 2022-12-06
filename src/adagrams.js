const letterDistribution = ['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 
'B', 'B', 'C', 'C', 'D', 'D', 'D', 'D', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 
'E', 'E', 'E', 'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H', 'I', 'I', 'I', 'I', 
'I', 'I', 'I', 'I', 'I', 'J', 'K', 'L', 'L', 'L', 'L', 'M', 'M', 'N', 'N', 
'N', 'N', 'N', 'N', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'P', 'P', 'Q', 
'R', 'R', 'R', 'R', 'R', 'R', 'S', 'S', 'S', 'S', 'T', 'T', 'T', 'T', 'T', 
'T', 'U', 'U', 'U', 'U', 'V', 'V', 'W', 'W', 'X', 'Y', 'Y', 'Z']

const scoreChart = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],  
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
}

export const drawLetters = () => {
  let letterPool = letterDistribution;
  let letterBank = [];
  
  for (let i=0; i<10; i++) {
    let randomIndex = Math.floor(Math.random() * letterPool.length);
    let randomLetter = letterPool[randomIndex];
    letterBank.push(randomLetter);
    letterPool.splice(randomLetter, 1);
  }
  return letterBank;
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
