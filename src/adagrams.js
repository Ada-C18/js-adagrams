
// Implement this method for wave 1
export const drawLetters = () => {
  const allLetters = []
  const LETTER_POOL = {
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

    for (const [letter, value] of Object.entries(LETTER_POOL)) {
      for (let n = value; n > 0; --n) {
        allLetters.push(letter);
    }
  }
    const gameLetters = []
    let j = 98;
    for (let i = 0; i < 10; i++) {
      const number = Math.floor(Math.random() * j);
      const randomLetter = allLetters[number];
      gameLetters.push(randomLetter);
      allLetters.splice(number,1);
      j-=1;
    }
  return gameLetters

};

// Implement this method for wave 2
export const usesAvailableLetters = (input, lettersInHand) => {
  const inputUpper = input.toUpperCase();

  const lettersInHandUpper = lettersInHand.map(letter => {
    return letter.toUpperCase();
  });

  const lettersInHandUpperObject = { };
  lettersInHandUpper.forEach(letter => {
    if (lettersInHandUpperObject[letter] == null) {
          lettersInHandUpperObject[letter] = 1
    } else {
      lettersInHandUpperObject[letter] += 1
    }
  })

  for (let letter of inputUpper){
    if (letter in lettersInHandUpperObject && lettersInHandUpperObject[letter]>0){
      lettersInHandUpperObject[letter] -= 1;
      continue
    } else {
      return false
    }
  }
    return true
  };


// Implement this method for wave 3
export const scoreWord = (word) => {
  const pointsDict = {
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
  
  let pointsWord = 0
  let wordUpper = word.toUpperCase();
  
  if (wordUpper.length === 0){
    return 0;
  }
  
  for (let char of wordUpper) {
    pointsWord += pointsDict[char];
  };

  if (wordUpper.length >= 7 && wordUpper.length <=10){
      pointsWord += 8;
    }  
  
  return pointsWord
  };

// Implement this method for wave 4
export const highestScoreFrom = (words) => {
  let maxScore = 0;
  let maxWord = "";

  for(const word of words) {
    let scoreOneWord = scoreWord(word);
    if (maxScore < scoreOneWord) {
        maxScore = scoreOneWord;
        maxWord = word;
    }else if 
      (maxScore === scoreOneWord && word.length === 10 && maxWord.length !== 10)
      {
          maxWord = word;
      }else if 
      (maxScore === scoreOneWord && word.length < maxWord.length && maxWord.length !== 10)
      {
          maxWord = word;
        }
    };
    return {word:maxWord, score: maxScore};
};