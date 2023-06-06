export const drawLetters = () => {
  const RANGE_LOW = 0;
  const RANGE_HIGH = 25

  const  LETTER_POOL = {
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

const list_of_letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', "I", "J", "K",
"L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const hand = [];

while (hand.length < 10) {
  const random_number = Math.floor(Math.random() * (RANGE_HIGH - RANGE_LOW + 1)) + RANGE_LOW;
  const letter = list_of_letters[random_number];
  const letter_value = LETTER_POOL[letter];

  if (hand.includes(letter)) {
    const n = hand.filter(l => l === letter).length; 
    if (n < letter_value) {
      hand.push(letter);
    }
  } else {
    hand.push(letter);
  }
}

console.log(hand);
return hand


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
