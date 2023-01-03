export const drawLetters = () => {
  // Implement this method for wave 1
  const TOTAL_TILES = 98
  const STARTING_NUMBER = 1
  const MAX_DRAW = 10

  const keysArray = []
  const lettersInHand = []
  const weightedObject = {
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

  const pickRandomNumber = () => {
    return Math.floor(Math.random() * TOTAL_TILES) + STARTING_NUMBER;
  }

  for (let i = 0; i < MAX_DRAW; i++) {
    const key = pickRandomNumber();
    if (!(key in keysArray)) {
      keysArray.push(key);
    }
  }

  for (const key of keysArray) {
    let tileLetter = weightedObject[key]
    lettersInHand.push(tileLetter)
  }
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  const inputObject = {};
  const lettersInHandObject = {}

  for (let letter of input.toUpperCase()) {
    if (!(letter in inputObject)) {
      inputObject[letter] = 1;
    } else {
      inputObject[letter] += 1
    }
    console.log('input', input)
  }

  for (let letter of lettersInHand) {
    if (!(letter in lettersInHandObject)) {
      lettersInHandObject[letter] = 1;
    } else {
      lettersInHandObject[letter] += 1
    }
  }

  Object.entries(inputObject).forEach(([key, value]) => {
    if (key in lettersInHandObject) {
      if (value > lettersInHandObject[key]) {
        return false;
      }
    }
  return true;
  });
};

// export const scoreWord = (word) => {
//   // Implement this method for wave 3
// };

// export const highestScoreFrom = (words) => {
//   // Implement this method for wave 4
// };
