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
  let inputLetters = input.toUpperCase().split('');
  let returnLetters = [];
  for (const letter of inputLetters) {
    if (lettersInHand.includes(letter)) {
      returnLetters.push(letter);
      lettersInHand.splice(lettersInHand.indexOf(letter), 1);
    }
  }
  return inputLetters.join('') === returnLetters.join('');
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
  const points = {
    A: 1,
    B: 3,
    C: 3,
    D: 2,
    E: 1,
    F: 4,
    G: 2,
    H: 4,
    I: 1,
    J: 8,
    K: 5,
    L: 1,
    M: 3,
    N: 1,
    O: 1,
    P: 3,
    Q: 10,
    R: 1,
    S: 1,
    T: 1,
    U: 1,
    V: 4,
    W: 4,
    X: 8,
    Y: 4,
    Z: 10,
  };

  let score = 0;
  if (word.length < 1) {
    return score;
  } else if (word.length>= 7) {
    score += 8;
  }
  word = word.toUpperCase();

  for (let i=0; i < word.length; ++i) {
    if (word[i] in points) {
      score += points[word[i]];
    } //conditional
  } //loop
  return score;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4


};
