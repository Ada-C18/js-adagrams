const letterObject = {
    'A': [9,1],
    'B': [2,3],
    'C': [2,3],
    'D': [4,2],
    'E': [12,1],
    'F': [2,4],
    'G': [3,2],
    'H': [2,4],
    'I': [9,1],
    'J': [1,8],
    'K': [1,5],
    'L': [4,1],
    'M': [2,3],
    'N': [6,1],
    'O': [8,1],
    'P': [2,3],
    'Q': [1,10],
    'R': [6,1],
    'S': [4,1],
    'T': [6,1],
    'U': [4,1],
    'V': [2,4],
    'W': [2,4],
    'X': [1,8],
    'Y': [2,4],
    'Z': [1,10]
}

const letterPool = []

// Helper Function to Build Letter Pool
const buildPool = () => {

  for (let letter in letterObject) {
      for (let i=0; i < letterObject[letter][0]; i++) {
          letterPool.push(letter);
      }
  }

  return letterPool;

};

buildPool();


export const drawLetters = () => {

  const shuffledList = letterPool.sort(() => 0.5 - Math.random());
  return shuffledList.slice(0,10);

};


// Helper function to count num times a letter appears in string/array
const countNum = (item) => {
  
  const numDict = {};
  
  for (let letter of item) {

    letter = letter.toUpperCase()

    if (numDict[letter]) {
      numDict[letter] = numDict[letter] + 1;
    } else {
        numDict[letter] = 1;
    }
  }

  return numDict;

};


export const usesAvailableLetters = (input, lettersInHand) => {
  
  const inputUpper = input.toUpperCase();
  const numTimesInInput = countNum(input);
  const numTimesInHand = countNum(lettersInHand);

  for (let letter of inputUpper) {
    if (lettersInHand.includes(letter)==false || (numTimesInInput[letter]!=numTimesInHand[letter])) {
      return false;
    } 
  }

  return true;

};


export const scoreWord = (word) => {
  
  const upperWord = word.toUpperCase();
  let score = 0;

  for (let letter of upperWord) {
    score += letterObject[letter][1];
  }

  if (upperWord.length >= 7 && upperWord.length < 11) {
    score += 8;
  }

  return score;

};


// Helper function to build object (word: wordScore)
const buildWordScoreObject = (words) => {
  const wordScores = {};

  for (let word of words) {
    wordScores[word] = scoreWord(word);
  }

  return wordScores;
}


export const highestScoreFrom = (words) => {
  
  const wordScoreObject = buildWordScoreObject(words);
  const highScore = Math.max(...Object.values(wordScoreObject));
  
  let winningWord = {
    'word': '',
    'score': 0,
  };
  
  for (let word of words) {
    const calculatedScore = wordScoreObject[word];
    
    if (word.length == 10 && calculatedScore == highScore) {
      winningWord['word'] = word;
      winningWord['score'] = calculatedScore;
      return winningWord;
    }
    
    if ((winningWord['score'] < calculatedScore) || (winningWord['score'] == calculatedScore && winningWord['word'].length > word.length)) {
      winningWord['word'] = word;
      winningWord['score'] = calculatedScore;
    }
  }

  return winningWord;

};

