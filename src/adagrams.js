const scoreChart = {
  'A': 1,
  'B': 3,
  'C': 3,
  'D': 2,
  'E': 1,
  'F': 4,
  'G': 2,
  'H': 4,
  'I': 1,
  'J': 8,
  'K': 5,
  'L': 1,
  'M': 3,
  'N': 1,
  'O': 1,
  'P': 3,
  'Q': 10,
  'R': 1,
  'S': 1,
  'T': 1,
  'U': 1,
  'V': 4,
  'W': 4,
  'X': 8,
  'Y': 4,
  'Z': 10
}


export const drawLetters = () => {
  // Implement this method for wave 1
};

export const usesAvailableLetters = (input, lettersInHand) => {
  const hashTable = new Map();
  let word = input.toUpperCase();
  let stringLettersInHand = (lettersInHand.join("")).toUpperCase();
  for (let i = 0; i < stringLettersInHand.length; i++) {
    lettersInHand
    if(hashTable.has(stringLettersInHand[i])) {
      hashTable.set(stringLettersInHand[i], hashTable.get(stringLettersInHand[i])+1);
    } else {
      hashTable.set(stringLettersInHand[i], 1);
    }
  }
  
  for (let i = 0; i < word.length; i++) {
    if(hashTable.has(word[i]) && hashTable.get(word[i]) > 0) {
      hashTable.set(word[i],hashTable.get(word[i])-1);
    } else {
      return false;
    }
  }
  return true;

};

export const scoreWord = (word) => {
  // Implement this method for wave 3
  let score = 0;
  if (7 <= word.length <= 10){
    score += 8;
    
  }for(let i = 0; i < word.length; i++){
    score += scoreChart[word[i].toUpperCase()];
  }
  return score;
  
}

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
