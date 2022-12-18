
export const drawLetters = () => {
  const handOfLetters = [];

  const lettersPool = {
    A: 9,
    B: 2,
    C: 2,
    D: 4,
    E: 12,
    F: 2,
    G: 3,
    H: 2,
    I: 9,
    J: 1,
    K: 1,
    L: 4,
    M: 2,
    N: 6,
    O: 8,
    P: 2, 
    Q: 1,
    R: 6,
    S: 4,
    T: 6,
    U: 4,
    V: 2,
    W: 2,
    X: 1,
    Y: 2,
    Z: 1
  };

  const createPool = function() {
    const pool = [];
    for (const [letter, quantity] of Object.entries(lettersPool)) {
      for (let i = 0; i < quantity; i++) {
        pool.push(letter);
      }
    }

    return pool
  };

  const getNum = function(pool) {
    const maxLength = pool.length - 1;
    const theNum = Math.floor(Math.random() * maxLength);
    return theNum
  };

  const pool = createPool();

  while(handOfLetters.length < 10) {
    const getTheNum = getNum(pool);
    const letterScore = function () {
      return pool[getTheNum];
    }

    handOfLetters.push(letterScore());
    pool.splice(getTheNum, 1);
  };

  return handOfLetters
};


export const usesAvailableLetters = (input, lettersInHand) => {
  const lettersInHandCopy = [...lettersInHand];
  const turnUpperCase = input.toUpperCase();
  for (let letter of turnUpperCase) {
    if (lettersInHandCopy.includes(letter)) {
      const index = lettersInHandCopy.indexOf(letter);
      lettersInHandCopy.splice(index, 1);
    } else {
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  // This wave is still failing one test and I'm stuck on how to get it
  // to return 0

  const letterScores = {
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

  let totalScore = 0;
  if(word === '') {
    return totalScore;
  }
  for (let letter of word.toUpperCase()) {
    totalScore += letterScores[letter];
  }
  if(word.length > 6){
    totalScore += 8;
  }

  return totalScore;
};

export const highestScoreFrom = (words) => {
  const wordScoreLength = [];
  for (let word of words) {
    const wordDict = {};
    wordDict['word'] = word;
    wordDict['score'] = scoreWord(word);
    wordDict['length'] = word.length;
    wordScoreLength.push(wordDict);
  }
  let maxWords = [];
  let maxScore = 0;

  for (let wordDict of wordScoreLength) {
    if (wordDict['score'] == maxScore) {
      maxWords.push(wordDict['word']);
    } else if (wordDict['score'] > maxScore) {
      maxScore = wordDict['score'];
      maxWords = [];
      maxWords.push(wordDict['word']);
    }
  }

  if (maxWords.length === 1) {
    return {
      word: maxWords[0],
      score: maxScore,
    };
  }

  // From here:
  // create a for loop (possibly a for of loop) for word in maxWords 
  // 
  // that if the length of word is 10, return word & score
  // 
  // then have an else statement that if the length of word is less than 10
  // 
  // find the word with the minimum length and store it in a let variable
  // 
  // after looping through all the words and finding the shortest word 
  // 
  // return that word and the word's score
};
