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
  let playerHand = {}
  for (let i of lettersInHand) {
    if (i in playerHand) {
      playerHand[i] += 1
    } else {
      playerHand[i] = 1
    }
  } 

  for (let j of input) {
    if (!(j in playerHand)) {
      return false;
    } else {
      playerHand[j] -= 1
    }
  }

  return Object.values(playerHand).every(
    value => value >= 0
  )
};

export const scoreWord = (word) => {
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
};



export const highestScoreFrom = (words) => {
  
  let wordScores = {};
 

  for (let word of words) {
    wordScores[word] = scoreWord(word);
  }


  const maxScore = Math.max(...Object.values(wordScores));


  let allMaxScoringWords = Object.keys(wordScores).filter(
    (key) => wordScores[key] === maxScore
  );


  if (allMaxScoringWords.length === 1) {

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

