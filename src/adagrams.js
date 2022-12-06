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
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z'],
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
  const wordCapitalized = word.toUpperCase(); 
  
  if (word.length === 0){
    return 0;
  }
};




export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
