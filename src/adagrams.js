export const drawLetters = () => {
  let alphabetPool = 'aaaaaaaaaabbccddddeeeeeeeeeeeeffggghhiiiiiiiiijkllllmmnnnnnnooooooooppqrrrrrrssssttttttuuuuvvwwxyyz'
  alphabetPool = alphabetPool.toUpperCase()
  let i = 0;
  let playerHand = []
  
  do {
    i++;
    let singleLetter = alphabetPool.charAt(Math.random() * alphabetPool.length);
    playerHand.push(singleLetter);
    alphabetPool = alphabetPool.replace(singleLetter, '');
  } while (i < 10);

  return playerHand;
}

export const usesAvailableLetters = (input, lettersInHand) => {
   // check whether type(input) === str
  // create a dictionary that will house the lettersInHand (key) and number of occurences (value)
  let playerHand = {}
  for (let i of lettersInHand) {
    if (i in playerHand) {
      playerHand[i] += 1
    } else {
      playerHand[i] = 1
    }
  } 
  // return false if:
  // - used letter in not available in hand
  for (let j of input) {
    if (!(j in playerHand)) {
      return false;
    } else {
      playerHand[j] -= 1
    }
  }
  // return true if:
  // - used letter is available in hand
  // return false if:
  // - letter has been used in input word more times than is availible in hand
  return Object.values(playerHand).every(
    value => value >= 0
  )
};

export const scoreWord = (word) => {
  // let word = word.toUpperCase();
  const scoreChart = {
    1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
    2: ['D', 'G'],
    3: ['B', 'C', 'M', 'P'],
    4: ['F', 'H', 'V', 'W', 'Y'],
    5: ['K'],
    8: ['J', 'X'],
    10: ['Q', 'Z']
  };
  
  let wordScore = 0;
  for (let i = 0; i < word.length; i++) {
    for (const [key, value] of Object.entries(scoreChart)) {
      for (const v of value) {
        if (word[i].toUpperCase() === v) {
          wordScore += Math.floor(key)
        }
      }
    }
  };
  if (word.length >= 7) {
    wordScore += Math.floor(8) 
  };
  
  return wordScore;
  
  // iterate through word and add points to wordScore
  // if len(word) >= 7, wordScore +8
  // return int(totalPoints)
};



export const highestScoreFrom = (words) => {
  // create a dictionary for each word in words => word:score
  let wordScores = {};
  // or we can create a list of tuples [ ('word', score)...]

  for (let word of words) {
    wordScores[word] = scoreWord(word);
  }

  //returns max score value in wordScores:
  const maxScore = Math.max(...Object.values(wordScores));

  // returns a new list:
  let allMaxScoringWords = Object.keys(wordScores).filter(
    (key) => wordScores[key] === maxScore
  );


  // if allMaxScoringWords of length 1, return {word: #, score: #} => comeback if time, and refactor by grabbing object directly instead of recreating dict
  if (allMaxScoringWords.length === 1) {
    // find a way to make a helper function to format return statement
    return { 'word': allMaxScoringWords[0], 'score': maxScore };
  } else {
    for (let word of allMaxScoringWords) {
      if (word.length === 10) {
        return {'word': word, 'score': maxScore};
      } 
    }  
  } const tempWord = allMaxScoringWords.reduce((a,b) => a.length <= b.length ? a:b);
  return {'word':tempWord, 'score':maxScore}
};
  
  // else, evaluate tie scenarios below

  /* return Object = {word: #, score: #}
  
  In case of ties evaluate length of words that produce tie:
    - prefer words.length === 10 (first priority)
    - prefer min(words.length)(second priority)
    - if multiple words wih same score and length:
        - pick first one in the 'words' array */
