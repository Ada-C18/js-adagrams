const letterPoolObj = {
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
}

export const drawLetters = () => {
  // Implement this method for wave 1
  let letterList = [];
  let letterPoolCopy = letterPoolObj;

  for (let i = letterList.length; i < 10; ++i) {
    let objKeys = Object.keys(letterPoolObj);
    let randLetter = objKeys[Math.floor(Math.random() * objKeys.length)];
    if (letterPoolCopy[randLetter] > 0){
        letterList.push(randLetter);
        letterPoolCopy[randLetter] -= 1;
    }
  } 
  return letterList;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  let isAnagram = true;
  let copyLetterBank = lettersInHand;

  for (const letter of input) {
    if (!copyLetterBank.includes(letter)){
      isAnagram = false;
    } 
    else {
      copyLetterBank.splice(letter, 1);
    }
  }
  return isAnagram;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
  let score = 0;
  const scoreChart = {
    1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
    2: ['D', 'G'],
    3: ['B', 'C', 'M', 'P'],
    4: ['F', 'H', 'V', 'W', 'Y'],
    5: ['K'],
    8: ['J', 'X'],
    10: ['Q', 'Z']
  };

  for (let letter of word) {
    letter = letter.toUpperCase()
    for (const [key, value] of Object.entries(scoreChart)) {
        if (value.includes(letter)) {
            score += parseInt(key);
        }
    }

} if (word.length >= 7) {
    score += 8;
}
return score;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
  let wordScoreDict = {}
  let maxScoresDict = {}

  for (const word of words){
    wordScoreDict[word] = scoreWord(word)
  }
    
  let wordScoreList = Object.values(wordScoreDict);
  let max = wordScoreList[0];

  for (let i = 1; i < wordScoreList.length; i++) {
      max = Math.max(max, wordScoreList[i]);
  }  
    
  for (const [key,value] of Object.entries(wordScoreDict)){
      if (value === max) {
        maxScoresDict[key] = value;
      } 
  }
    

  if (Object.values(maxScoresDict).length <= 1) {
    for (const [key,value] of Object.entries(maxScoresDict)) {
      return {word: key, score: value};
    }
  }

  for (const [key,value] of Object.entries(maxScoresDict)) {
    if (key.length === 10) {
      return {word: key, score: value};
    }
  }   
  
  let keyLength = []
    
  for (const key of Object.keys(maxScoresDict)) {
        keyLength.push(key.length)
  }

  let min = keyLength[0]
  
  for (let i = 1; i < keyLength.length; i++) {
      min = Math.min(min, keyLength[i]);
  }

  for (const [key,value] of Object.entries(maxScoresDict)) {
    if (key.length === min) {
      return {word: key, score: value};
    }
  }
};
