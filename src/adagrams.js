// helper function to call for range for letterBank
function range(stop) {
  let result = [];
  // creates a list of integers starting and 0 and ending at stop variable
  for (let i = 0; i < stop; i += 1) {
    result.push(i)
  }
  return result;
};


export const drawLetters = () => {
  const letterPool = {
    'A': 9, 'B': 2, 'C': 2, 'D': 4, 'E': 12, 'F': 2,
    'G': 3, 'H': 2, 'I': 9, 'J': 1, 'K': 1, 'L': 4,
    'M': 2, 'N': 6, 'O': 8, 'P': 2, 'Q': 1, 'R': 6,
    'S': 4, 'T': 6, 'U': 4, 'V': 2, 'W': 2, 'X': 1,
    'Y': 2, 'Z': 1
  };

  let returnList = [];
  let letterBank = [];

  // creates letter bank with num of letters equal to letterPool values
  for (let [key,value] of Object.entries(letterPool)) {
    for (value in range(value)) {
      letterBank.push(key);
    }
  }

  // draws 10 random letters from letterBank
  while (returnList.length < 10) {
    let letter = letterBank[Math.floor(Math.random()* letterBank.length)];
    returnList.push(letter);
    let index = letterBank.indexOf(letter);
    letterBank.splice(index,1);
  }

  return returnList;
};

export const usesAvailableLetters = (word, letterBank) => {
  let letters = letterBank.copyWithin();

  const checkWord = []
  for (let letter of word.toUpperCase()) {
    // checks if letter in word is in letterBank
    if (letters.includes(letter)) {
      // adds letter to checkWord list
      checkWord.push(letter);
      // removes letter from letterBank so multiples can't be used
      let index = letters.indexOf(letter);
      letters.splice(index,1);
    }
  }

  // if checkWord is the same length as input word, then the word uses available letters
  if (checkWord.length == word.length) {
    return true;
  } else {
    return false;
  }
};

export const scoreWord = (word) => {
  const scoreDict = {
    'A': 1, 'B': 3, 'C': 3, 'D': 2, 'E': 1, 'F': 4, 
    'G': 2, 'H': 4, 'I': 1, 'J': 8, 'K': 5, 'L': 1, 
    'M': 3, 'N': 1, 'O': 1, 'P': 3, 'Q': 10, 'R': 1, 
    'S': 1, 'T': 1, 'U': 1, 'V': 4, 'W': 4, 'X': 8, 
    'Y': 4, 
    'Z': 10
  };

  // calculates score by iterating through each letter in word and adding its value from scoreDict
  let score = 0;
  word.toUpperCase().split('').forEach((letter) => {
    score += scoreDict[letter];
  })

  // adds 8 bonus points if word length is >= 7 and <= 10
  if (word.length >= 7 && word.length <= 10) {
    score += 8;
  }

  return score
};


export const highestScoreFrom = (words) => {
  // creates dictionary of scores for each word
  let dictOfScores = {}
  for (let word of words) {
    let wordScore = scoreWord(word);
    dictOfScores[word] = wordScore;
  }

  // creates list of words with highest score
  let highestScore = Math.max.apply(null, Object.values(dictOfScores));
  let maxScoreList = []
  for (let [key, value] of Object.entries(dictOfScores)) {
    if (value === highestScore) {
      maxScoreList.push(key)
    }
  }
  
  // returns highest score if length of list is only 1
  if (maxScoreList.length === 1) {
    return {word: maxScoreList[0], score: scoreWord(maxScoreList[0])}
  }

  // gets max and min length word of highest scoring words
  let maxLenWord = maxScoreList[0];
  let minLenWord = maxLenWord;
  for (let word of maxScoreList) {
    if (word.length > maxLenWord.length) {
      maxLenWord = word;
    }
    if (word.length < minLenWord.length) {
      minLenWord = word;
    }
  }
  
  // returns highest scoring word if length of word is 10
  if (maxLenWord.length === 10) {
    return {word: maxLenWord, score: scoreWord(maxLenWord)};
  }

  // returns the first shortest length word of high scoring word list
  return {word: minLenWord, score: scoreWord(minLenWord)};
  };