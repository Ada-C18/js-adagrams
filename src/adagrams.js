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
  'AEIOULNRST': 1,
  'DG': 2,
  'BCMP': 3,
  'FHVWY': 4,
  'K': 5,
  'JX':8,
  'QZ':10,
}


export const drawLetters = () => {
  let letterArray = []
  for (const letter in letterPool){
      for (let i = 0; i < `${letterPool[letter]}`; i++){
        letterArray.push(letter);
    }
  }
  
  const drawTen = [] 
  for (let i = 0; i < 10; i++){
    const randomLetter = letterArray[Math.floor(Math.random() * letterArray.length)];
    drawTen.push(randomLetter);
    const randomLetterIndex = letterArray.indexOf(randomLetter);
    letterArray.splice(randomLetterIndex, 1);
  }

  return drawTen 
};



export const usesAvailableLetters = (input, lettersInHand) => {
  let wordArray = Array.from(input);

  const letterCounter = (array, letter) => {
    return array.filter((currentLetter) => currentLetter == letter).length;
};
  for(const letter of input){
    const wordCount = letterCounter(wordArray, letter); 
    const handCount = letterCounter(lettersInHand, letter); 
    if (wordCount > handCount){
      return false;  
    }
  }
  return true; 
};



export const scoreWord = (word) => {

  if (word.length === 0){
    return 0;
  }
  
  let score = 0
  const wordCapitalized = word.toUpperCase();
  const wordLength = wordCapitalized.length 

  if (wordLength >= 7){
    score += 8; 
  }

  const keys = Object.keys(scoreChart);
  for (const letter of wordCapitalized){
    const l = letter;
    for (const key of keys){
      if (key.includes(l)){
        score += scoreChart[key];
      }
    }
  }
  return score;
};



export const highestScoreFrom = (words) => {
  let bestScore = scoreWord(words[0]);
  let bestWord = words[0]; 
  for(const word of words){
    const currentWordScore = scoreWord(word);
    if (currentWordScore > bestScore){
      bestScore = currentWordScore;
      bestWord = word;
    } else if (currentWordScore === bestScore){
      if(word.length === 10){
        bestScore = currentWordScore; 
        bestWord = word;
        const bestPair = {
          word: bestWord, 
          score: bestScore
        };
        return bestPair 
      }else if(word.length < bestWord.length){
        bestScore = currentWordScore; 
        bestWord = word;
      }
    }
  }
  const bestPair = {
  word: bestWord, 
  score: bestScore
  };
  return bestPair;  
};


