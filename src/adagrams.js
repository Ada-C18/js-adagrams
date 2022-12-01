export const drawLetters = () => {
  // Implement this method for wave 1
};

export const usesAvailableLetters = (input, lettersInHand) => {
  const hashTable = new Map();
  for (let i = 0; i < lettersInHand.length; i++) {
    if(hashTable.has(lettersInHand[i])) {
      hashTable.set(lettersInHand[i], hashTable.get(lettersInHand[i])+1);
    } else {
      hashTable.set(lettersInHand[i], 1);
    }
  }
  
  for (let i = 0; i < input.length; i++) {
    if(hashTable.has(input[i]) && hashTable.get(input[i]) > 0) {
      hashTable.set(input[i],hashTable.get(input[i])-1);
    } else {
      return false;
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
