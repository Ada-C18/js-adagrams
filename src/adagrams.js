const LETTERPOOL = { 
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

const buildLetterPool = (LETTERPOOL) => {
  let letterPool = '';

  for (let letter in LETTERPOOL) {
    for (let i = 0; i < LETTERPOOL[letter]; i++){
      letterPool += letter; 
    }
  }
  return letterPool;
};


export const drawLetters = () => {
  // Implement this method for wave 1
  let hand = [];
  let letterPool = buildLetterPool(LETTERPOOL);

  while (hand.length < 10) {
    let randomLetter = letterPool[Math.floor(Math.random() * letterPool.length)];
    hand.push(randomLetter);
    letterPool = letterPool.replace(randomLetter, '');
  }
  return hand;
};


export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  let lettersInHandCopy = [...lettersInHand];
  for (let letter of input.toUpperCase()) {
    if (!lettersInHandCopy.includes(letter)){
      return false
    }
    let index = lettersInHandCopy.indexOf(letter);
    lettersInHandCopy.splice(index, 1);
  }
  return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3

};

// export const highestScoreFrom = (words) => {
//   // Implement this method for wave 4
// };
