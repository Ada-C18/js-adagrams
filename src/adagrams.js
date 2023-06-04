const LETTER_POOL = {
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

const SCORE_CHART_DICT = {
    1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
    2: ['D', 'G'],
    3: ['B', 'C', 'M', 'P'],
    4: ['F', 'H', 'V', 'W', 'Y'],
    5: ['K'],
    8: ['J', 'X'],
    10: ['Q','Z']
};

export const drawLetters = () => {
  const arrLetterPool = [];

  // Convert letterPool to list
  for (let [letter, frequency] of Object.entries(LETTER_POOL)) {
    let countLetters = 0;
    while (countLetters < frequency) {
      arrLetterPool.push(letter);
      countLetters++;
    }
  }

  const drawnLetters = [];

  while (drawnLetters.length < 10) {
    let randomLetter = Math.floor(Math.random() * arrLetterPool.length);
    let removedLetter = arrLetterPool.splice(randomLetter, 1)[0];
    drawnLetters.push(removedLetter);
  }

  return drawnLetters;
};

// Test code
// console.log(drawLetters());

export const usesAvailableLetters = (input, lettersInHand) => {
  let lettersInHandCopy = Array.from(lettersInHand);
  
  for (let i = 0; i < input.length; i++) {
    const currentLetter = input[i];
    //Line below is needed because the letterIndex is what is used to loop through the lettersInHandCopy array
    //If the currentLetter is not found, indexOf() returns -1.
    const letterIndex = lettersInHandCopy.indexOf(currentLetter)
    if (letterIndex !== -1) {
      lettersInHandCopy.splice (letterIndex, 1);
    } else {
      return false;
    }
  }
  return true;
  }

export const scoreWord = (word) => {
  let score = 0;

  if (word.length >= 7) {
    score += 8;
  }

  const wordUpper = word.toUpperCase();

  for (let letter of wordUpper) {
    for (let [points, letters] of Object.entries(SCORE_CHART_DICT)) {
      if (letters.includes(letter)) {
        score += parseInt(points);
      }
    }
  }
  return score;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
  const scoresObj = {};
  for (let word of words) {
    scoresObj[word] = scoreWord(word);
  }

  let highScore = 0;
  let shortestWord = "";

  for (let [word, score] of Object.entries(scoresObj)) {
    if (score > highScore) {
      highScore = score;
      shortestWord = word;
    } else if (score === highScore) {
      if (shortestWord.length === 10) {
        shortestWord = shortestWord;
      } else if (word.length === 10) {
        shortestWord = word;
      } else if (word.length < shortestWord.length) {
        shortestWord = word;
      }
    }
  }
  const winningScore = { "score": highScore, "word": shortestWord };
  return winningScore;
};
