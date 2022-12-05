export const drawLetters = () => {
  // Implement this method for wave 1

  const LETTER_POOL = {'A': 9,'B': 2,'C': 2,'D': 4,'E': 12,'F': 2,'G': 3,'H': 2,'I': 9,'J': 1,'K': 1,'L': 4,
      'M': 2,'N': 6,'O': 8,'P': 2,'Q': 1,'R': 6,'S': 4,'T': 6,'U': 4,'V': 2,'W': 2,'X': 1,'Y': 2,'Z': 1};

  const drawLetters= [];
  const letterPool=[];

    for (const letter in LETTER_POOL) {
        for (let i=0; i < LETTER_POOL[letter];i++);{
            
            letterPool.push(letter)
        }
    }
    for  (let i = 0; i< 10; i++){
        const i = Math.floor(Math.random() * letterPool.length);
        const letter = letterPool[i];
        drawLetters.push(letter);
        letterPool.splice(i, 1);
    }
    return drawLetters
  };

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  const letterDict = {}

  for (const letter of lettersInHand){
    if (!letterDict[letter]){
      letterDict[letter] = 1;
    }
    else { 
      letterDict[letter] += 1;
    }
  }
  for (const letter of input){
    if (letter in letterDict && letterDict[letter] > 0){
      letterDict[letter] -= 1;
      continue
    }
    else {
      return false 
    }
  }
  return true
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
  const letterScore = {'A': 1,'B': 3,'C': 3,'D': 2,'E': 1,'F': 4,'G': 2,'H': 4,'I': 1,'J': 8,'K': 5, 
  'L': 1,'M': 3,'N': 1,'O': 1,'P': 3,'Q': 10,'R': 1,'S': 1,'T': 1,'U': 1,'V': 4,'W': 4,'X': 8,'Y': 4,'Z':10}
  
  let wordUpper = word.toUpperCase();
  let score = 0;
      
  for (const letter of wordUpper){
    score += letterScore[letter];
  }
      
  if (wordUpper.length >= 7 && wordUpper.length <= 10){
    score += 8;
  }
  return score;
};

export const highestScoreFrom = (words) => {
  let highestScore = 0;
  let highestWord = "";

  for (const word of words){
    let wordScore = scoreWord(word);
    if (highestScore < wordScore){
      highestScore = wordScore;
      highestWord = word;
    }else if (
      highestScore === wordScore && 
      word.length === 10 && 
      highestWord.length !== 10
      ){
        highestWord = word;
      }else if (
        highestScore === wordScore && 
        word.length < highestWord.length &&
        highestWord.length != 10
        ){
          highestWord = word;
        }
      };
    return { word: highestWord, score: highestScore}; 
  };
    
