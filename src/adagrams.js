export const drawLetters = () => {
  // select a random number between i and length of letters-1, swap ith letter with selected letter 

  const letters = ['A','A','A','A','A','A','A','A','A','B','B','C','C',
  'D','D','D','D','E','E','E','E','E','E','E','E','E','E','E','E',
  'F','F','G','G','G','H','H','I','I','I','I','I','I','I','I','I', 
  'J', 'K', 'L', 'L', 'L', 'L', 'M', 'M', 'N', 'N', 'N', 'N', 'N', 'N', 
  'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'P', 'P', 'Q', 
  'R', 'R', 'R', 'R', 'R', 'R', 'S', 'S', 'S', 'S', 
  'T', 'T', 'T', 'T', 'T', 'T', 'U', 'U', 'U', 'U', 'V', 'V', 'W', 'W', 
  'X', 'Y', 'Y', 'Z']
  
  for (let i =0; i < 10; i++){
    let letter = Math.floor((Math.random() * (letters.length - i))+i);
    let selectedLetter = letters[letter];
    letters[letter] = letters[i];
    letters[i] = selectedLetter;
  }
  return letters.slice(0,10);
};


export const usesAvailableLetters = (input, lettersInHand) => {
  for (let index in input){
    const foundIndex = lettersInHand.indexOf(input[index]);
    if (foundIndex === -1){
      return false;
    }else{
      lettersInHand[foundIndex] = 0;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  word = word.toUpperCase().split('');
  const scoreDict = {
    A: 1, E: 1, I: 1, O: 1, U: 1, 
    L: 1, N: 1, R: 1, S: 1, T: 1, 
    D: 2, G: 2, B: 3, C: 3, M: 3, 
    P: 3, F: 4, H: 4, V: 4, W: 4,
    Y: 4, K: 5, J: 8, X: 8, Z: 10,
    Q: 10
  }
  let score = word.reduce((score, currentLetter) => score + scoreDict[currentLetter], 0)

  if (word.length > 6 && word.length < 11){
    score += 8;
  }
  return score;

};

export const highestScoreFrom = (words) => {

  let maxScore = Math.max(...words.map(scoreWord));
  const maxWord = (word) => {
    if (scoreWord(word) === maxScore) {
      return true;
    }
    return false;
  }
  const topWords = words.filter(maxWord);
  
  let winner
  if (topWords.length === 1){
    winner = topWords[0];
  }

  // if there are words of length 10 return the first one
  if (! winner){
    winner = topWords.find((word) => word.length === 10)
  }

  // return first instance of smallest word
  if (! winner){
    let minLength = Math.min(...words.map(word => word.length));
    winner = topWords.find((word) => word.length === minLength)
  }
  return {word: winner, score: scoreWord(winner)};
};

