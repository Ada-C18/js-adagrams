const letterPool = {
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
  Z: 1,
};

const letterValue = { 
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

function generateRandomLetter(obj) {
  const letters = Object.keys(obj);
  return letters[Math.floor(Math.random() * letters.length)];
}

export const drawLetters = () => {
  let letters = [];
  let copyLetterPool = letterPool;

  do {
    let letter = generateRandomLetter(copyLetterPool)
    if (copyLetterPool[letter] > 0) {
      letters.push(letter);
      copyLetterPool[letter] -= 1;
    } else {
      delete copyLetterPool[letter];
    }
  }
  while (letters.length < 10 && Object.keys(copyLetterPool).length > 0);
  return letters;
};

export const usesAvailableLetters = (input, lettersInHand) => {
    const lettersDict={};

  for (const key of lettersInHand) {
    if (key in lettersDict === false) {
      lettersDict[key] = 1;
    }
    else {
      lettersDict[key]+= 1;
    }
  }

  for (let i=0; i<input.length; i++) {
    const letter = input[i];
    if (letter in lettersDict === false) {
      return false
    } else if (letter in lettersDict === true) {
      if (lettersDict[letter]<1){
        return false;
      } else{
        lettersDict[letter]-= 1;
      }
    } 
  }
  return true;
};

export const scoreWord = (word) => {
  let total = 0;
  if (word===undefined) {
    return total
  }

  const upperCaseWord = word.toUpperCase()
  if (word.length>6) {
    total=8;
  } 
  for (let i=0; i<word.length; i++) {
    total+=letterValue[upperCaseWord[i]]
  }
  console.log(total)
  return total
};

export const highestScoreFrom = (words) => {
  let highestScore=0;
  let highestScoreWord= [];

  for (let i=0; i<words.length;i++) {
    let word= words[i]
    if (scoreWord(word)> highestScore) {
      highestScore= scoreWord(word)
    }
  }

  for (let i=0; i<words.length;i++) {
    let word= words[i]
    if (scoreWord(word)===highestScore) {
      highestScoreWord.push(word)
    }
  }
  
  if (highestScoreWord.length>1) {
    let shortestWord=10;
    let tieBreakWord = ''

    for (let i=0; i<words.length;i++) {
      if (highestScoreWord[i].length ===10) {
        return {'score': highestScore, 'word': highestScoreWord[i]}
      } else if (highestScoreWord[i].length< shortestWord){
        shortestWord= highestScoreWord[i].length
        tieBreakWord= highestScoreWord[i]
      }
    }
    return {'score': highestScore, 'word': tieBreakWord}
  } else {
    return {'score': highestScore, 'word': highestScoreWord[0]}
  }
};
