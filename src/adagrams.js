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
  input = input.toUpperCase();
  let isWordValid = true;

  for (let i = 0; i < input.length; i++) {
    const letter = input[i];

    if (!lettersInHand.includes(letter)) {
      iswordValid = false;
    } else {
      const v = lettersInHand.filter(l => l === letter).length;
      const v2 = word.split(letter).length - 1;

      if (v2 > v) {
        isWordValid = false;
      }
    }
  }
  console.log(isWordValid);
  return isWordValid;
}

export const scoreWord = (word) => {
  // Implement this method for wave 3
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
  };

  word = word.toUpperCase();
  let scoreSum = 0;

  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    const value = scoreChart[letter];
    scoreSum += value;
  }
  console.log(word.length);

  if (word.length >= 7 && word.length <= 10) {
    scoreSum += 8;
  }
  console.log(scoreSum);
  return scoreSum;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
