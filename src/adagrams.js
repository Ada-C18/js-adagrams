const LETTERPOOL = [
  'A','A','A','A','A','A','A','A','A',
  'B','B',
  'C','C',
  'D','D','D','D',
  'E','E','E','E','E','E','E','E','E','E','E','E',
  'F','F',
  'G','G','G',
  'H','H',
  'I','I','I','I','I','I','I','I','I',
  'J',
  'K',
  'L','L','L','L',
  'M','M',
  'N','N','N','N','N','N',
  'O','O','O','O','O','O','O','O',
  'P','P',
  'Q',
  'R','R','R','R','R','R',
  'S','S','S','S',
  'T','T','T','T','T','T',
  'U','U','U','U',
  'V','V',
  'W','W',
  'X',
  'Y','Y',
  'Z'
]

export const drawLetters = () => {
  let letters = [];
  let letterPoolCopy = [...LETTERPOOL];
  while (letters.length < 10) {
    const random = Math.floor(Math.random() * letterPoolCopy.length);
    letters.push(letterPoolCopy[random]);
    letterPoolCopy.splice(random, 1);
  }
  return letters;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
};

export const scoreWord = (word) => {
  // Implement this method for wave 3

  // if word.length <= 7, add 8pts to counter, else counter = 0
  if (word.length<= 7) {
    score === 8;
  } else {
    score === 0;
  }
  // loop through letter in word
  for (let i=0; i < word.length; ++i) {
    // if letter in obj add point value to counter

    if (word[i] in obj) { //need to correct object name
      score += obj[word[i]];
    } //conditional
  } //loop
  // return counter
  return score;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4


};
