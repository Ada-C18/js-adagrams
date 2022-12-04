// helper function to call for range for letterBank
function range(stop) {
  let start = 0;
  let step = 1;

  let result = [];
  for (let i = start; step > 0 ? i < stop : 1 > stop; i += step) {
    result.push(i);
  }
  return result;
};

export const drawLetters = () => {
  const letterPool = {
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

  let returnList = [];
  let letterBank = [];

  for (let [key,value] of Object.entries(letterPool)) {
    for (value in range(value)) {
      letterBank.push(key);
    }
  }

  while (returnList.length < 10) {
    let letter = letterBank[Math.floor(Math.random()* letterBank.length)];
    returnList.push(letter);
    let index = letterBank.indexOf(letter);
    letterBank.splice(index,1);
  }

  return returnList;
};

export export const usesAvailableLetters = (word, letterBank) => {
  let letters = letterBank.copyWithin();
  const checkWord = []
  for (let letter of word.toUpperCase()) {
    if (letters.includes(letter)) {
      checkWord.push(letter);
      let index = letters.indexOf(letter);
      letters.splice(index,1);
    }
  }
  if (checkWord.length == word.length) {
    return true;
  } else {
    return false;
  }
};

console.log(usesAvailableLetters("GOOD", ["D", "O", "G", "X", "X", "X", "X", "X", "X", "X"]))

export const scoreWord = (word) => {
  const scoreDict = {
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

  const wordUpper = word.toUpperCase();
  const wordList = wordUpper.split('');
  let score = 0;

  wordList.forEach((letter) => {
    score += scoreDict[letter];
  })

  if (word.length >= 7 && word.length <= 10) {
    score += 8;
  }

  return score
};


export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
