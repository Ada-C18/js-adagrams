const TOTAL_TILES = 98
const STARTING_NUMBER = 1
const MAX_DRAW = 10

const WEIGHTED_LETTERS = {
  1: 'A',
  2: 'A',
  3: 'A',
  4: 'A',
  5: 'A',
  6: 'A',
  7: 'A',
  8: 'A',
  9: 'A',
  10: 'B',
  11: 'B',
  12: 'C',
  13: 'C',
  14: 'D',
  15: 'D',
  16: 'D',
  17: 'D',
  18: 'E',
  19: 'E',
  20: 'E',
  21: 'E',
  22: 'E',
  23: 'E',
  24: 'E',
  25: 'E',
  26: 'E',
  27: 'E',
  28: 'E',
  29: 'E',
  30: 'F',
  31: 'F',
  32: 'G',
  33: 'G',
  34: 'G',
  35: 'H',
  36: 'H',
  37: 'I',
  38: 'I',
  39: 'I',
  40: 'I',
  41: 'I',
  42: 'I',
  43: 'I',
  44: 'I',
  45: 'I',
  46: 'J',
  47: 'K',
  48: 'L',
  49: 'L',
  50: 'L',
  51: 'L',
  52: 'M',
  53: 'M',
  54: 'N',
  55: 'N',
  56: 'N',
  57: 'N',
  58: 'N',
  59: 'N',
  60: 'O',
  61: 'O',
  62: 'O',
  63: 'O',
  64: 'O',
  65: 'O',
  66: 'O',
  67: 'O',
  68: 'P',
  69: 'P',
  70: 'Q',
  71: 'R',
  72: 'R',
  73: 'R',
  74: 'R',
  75: 'R',
  76: 'R',
  77: 'S',
  78: 'S',
  79: 'S',
  80: 'S',
  81: 'T',
  82: 'T',
  83: 'T',
  84: 'T',
  85: 'T',
  86: 'T',
  87: 'U',
  88: 'U',
  89: 'U',
  90: 'U',
  91: 'V',
  92: 'V',
  93: 'W',
  94: 'W',
  95: 'X',
  96: 'Y',
  97: 'Y',
  98: 'Z'
};

const LETTER_VALUES = {
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

// Helper functions //

const pickRandomNumber = () => Math.floor(Math.random() * TOTAL_TILES) + STARTING_NUMBER;

const calculateScore = (word) => {
  let score = 0;
  for (const letter of word) {
    score = score + LETTER_VALUES[letter];
  }
  if (word.length > 6) {
    score = score + 8
  }
  return score;
}


export const drawLetters = () => {
  // Implement this method for wave 1
  const keysArray = [];
  const lettersInHand = [];

  for (let i = 0; keysArray.length < MAX_DRAW; i++) {
    const key = pickRandomNumber();
    if (!keysArray.includes(key)) {
      keysArray.push(key);
    }
  }

  for (const key of keysArray) {
    let tileLetter = WEIGHTED_LETTERS[key];
    lettersInHand.push(tileLetter);
  }

  return lettersInHand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  const lettersInHandObject = {};

  for (const letter of lettersInHand) {
    if (letter in lettersInHandObject) {
      lettersInHandObject[letter] += 1;
    } else {
      lettersInHandObject[letter] = 1;
    }
  }

  for (const letter of input) {
    if (letter in lettersInHandObject) {
      lettersInHandObject[letter] -= 1;
      if (lettersInHandObject[letter] < 0) {
        return false;
      }
    } else {
        return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
  const wordUpper = word.toUpperCase();
  const score = calculateScore(wordUpper);

  return score;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
  const winningWord = {
    word: '',
    score: 0
  }

  for (const word of words) {
    const wordScore = calculateScore(word);
    if (wordScore > winningWord.score) {
      winningWord.word = word;
      winningWord.score = wordScore;
    } else if (wordScore === winningWord.score) {
      if (word.length === 10 || winningWord.word.length === 10) {
        if (winningWord.word.length === 10) {
          continue;
        } else {
          winningWord.word = word;
          winningWord.score = wordScore;
        }
      } else {
        if (word.length < winningWord.word.length) {
          winningWord.word = word;
        }
      }
    }
  }
  return winningWord;
};
