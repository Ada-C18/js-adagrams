export const drawLetters = () => {
  const LETTER_POOL = {
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
  };
  
  let avaliableLetters = [];
  for (const [letter, freq] of Object.entries(LETTER_POOL)){
  let i = 0; i < freq; i++
  avaliableLetters.push(letter);
  }
  let hand = [];
  for (let i = 0; i < 10; i ++) {
  let randomNum = Math.floor(Math.random() * avaliableLetters.length);
  hand.push(avaliableLetters[randomNum]);
  avaliableLetters.splice(randomNum, 1);
}
return hand;
}; 

export const usesAvailableLetters = (input, lettersInHand) => {
  for (let i = 0; i < input.length; i ++){
    console.log(input[i])
    if (!lettersInHand.includes(input[i])){
      return false; 
    } else if (lettersInHand.includes(input[i])) {
      lettersInHand.splice(input[i], 1);
      console.log(lettersInHand)
      console.log(input)
    }
    } 
  return true; 
  } 

function getKeyByValue (obj, val) {
    return Object.entries(obj).find(i => i[1] === val);
}

export const scoreWord = (word) => {
  let score = 0
  let upperWord = word.toUpperCase() 
  let pointValues = {
          1:['A', 'E', 'I', 'O', 'U','L', 'N', 'R', 'S', 'T'], 
          2:['D', 'G'], 
          3:['B', 'C', 'M', 'P'], 
          4:['F', 'H', 'V', 'W', 'Y' ],
          5:['K'],
          8:['J', 'X'],
          10:['Q', 'Z'] 
          }
  if (upperWord.length >= 7) { 
            score += 8;
  }
  for (let char of upperWord) {
    for (const letterVal of Object.values(pointValues)) {
      if (letterVal.includes(char)) {
        let points = getKeyByValue(pointValues, letterVal);
        let pointsInt = parseInt(points[0]);
        score += pointsInt;
        } 
      }  
    } 
  return score; 
};

export const highestScoreFrom = (words) => {
    let winningWord = null
    let highestScore = 0
    for (let word of words) {
      if (scoreWord(word) > highestScore) {
        highestScore = scoreWord(word)
        winningWord = word
      } else if (scoreWord(word) === highestScore) {
          if (word.length === winningWord.length || winningWord.length === 10) {
            continue
        } else if (word.length === 10) {
            winningWord = word;
        } else if (word.length < winningWord.length) {
            winningWord = word;
          }
        }
      }
    return {
      word : winningWord, 
      score : highestScore
    }
  };