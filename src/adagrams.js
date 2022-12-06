// Test Wave 01

export const drawLetters = () => {
  const alphabetDict = {
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
  };
  const letter_pool = [];
  Object.keys(alphabetDict).forEach(key => {
    let value = alphabetDict[key];
    for (let i = 0; i < value; i++) {
      letter_pool.push(key)
    }
  });

  let hand = []
  for (let i = 0; i < 10; i ++) {
    let random_int = Math.floor(Math.random() * 28);
    let random_letter = letter_pool[random_int];
    hand.push(random_letter);
    letter_pool.splice(random_int, 1);
  };

  return hand;
};

// Test Wave 02

export const usesAvailableLetters = (input, lettersInHand) => {
  for (let letter in input) {
    if (letter in lettersInHand) {
      return true;
    }
    else {
      return false;
    };
  }
};


// Test Wave 03

export const scoreWord = (word) => {
  let scoreChart = {
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
    };
  let totalScore = 0;
  for (const character of word) {
    let capLetter = character.toUpperCase();
    let letterValue = scoreChart[capLetter];
    totalScore += letterValue;
  }
  if (word.length > 7) {
    totalScore += 8;
  }
  return totalScore;
};


export const highestScoreFrom = (words) => {

};
