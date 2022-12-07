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
}

const scoreChart = {
  'A': 1,
  'E': 1,
  'I': 1,
  'O': 1,
  'U': 1,
  'L': 1, 
  'N': 1,
  'R': 1,
  'S': 1,
  'T': 1,
  'D': 2,
  'G': 2,
  'B': 3,
  'C': 3,
  'M': 3,
  'P': 3,
  'F': 4,
  'H': 4,
  'V': 4,
  'W': 4,
  'Y': 4,
  'K': 5,
  'J': 8,
  'X': 8,
  'Q':10,
  'Z': 10
}
export const drawLetters = () => {
  // Implement this method for wave 1
  let letterArray = [];
  let myTenLetters = [];

    for (let letter in letterPool) {
      for (let i = 0; i < letterPool[letter]; i++) {
        letterArray.push(letter);
      }      
    }
        
    for (let i = 0; i < 10; i++){
      let randomLetter = letterArray[Math.floor(Math.random() * letterArray.length)];
      myTenLetters.push(randomLetter);
      let letterIndex = letterArray.indexOf(randomLetter);
      letterArray.splice(letterIndex, 1);
    }  
          
        
    return myTenLetters
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  for (let letter of input) {
    if (!lettersInHand.includes(letter)) {
      return false;
    } else {
      lettersInHand.splice(lettersInHand.indexOf(letter), 1)
    }
  }return true;
};

// const createLetterMemo = (letterInput) => {
//   let memo = {};
//   for (let letter of letterInput) {
//     if (letter in memo) {
//       memo[letter]++
//     } else {
//       memo[letter] = 1
//     }
//   }return memo;
// }

export const scoreWord = (word) => {
  let wordScore = 0;
  let wordUpper = word.toUpperCase();
  
  if (word.length === 0) {
    return 0;
  }

  if (wordUpper.length > 6 && wordUpper.length <11) {
    wordScore += 8;
  }
  for (let letter of wordUpper) {
    for (let key in scoreChart) {
      if (letter === key) {
        wordScore += scoreChart[key];
      }
    }
  }return wordScore;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
  let bestWord = '';
  let bestScore = 0;

  for (const word of words) {
    const currentScore = scoreWord(word);
    
    if (currentScore > bestScore) {
      bestWord = word;
      bestScore = currentScore;
    } else if (currentScore === bestScore) {
      if (word.length === 10 && bestWord.length !== 10) {
        bestWord = word;
        bestScore = currentScore;
      } else if (word.length < bestWord.length && bestWord.length !== 10) {
        bestWord = word;
        bestScore = currentScore;
      }
    }
    
  
  }
  return {'score': bestScore, 'word': bestWord}



};
