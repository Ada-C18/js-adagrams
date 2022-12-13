export const drawLetters = () => {
  const letterPool={
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
  const availableLetters = [];
    
  for (const [letter,frequency] of Object.entries(letterPool)){
    for (let i = 0;i< frequency;i++){
      availableLetters.push(letter)}   
  }
  const hand=[]
  for (let i = 0; i < 10; i++) {
    const thisLetter = availableLetters[Math.floor(Math.random() * availableLetters.length)]
    hand.push(thisLetter)
    let letterIndex = availableLetters.indexOf(thisLetter)
    availableLetters.splice(letterIndex, 1)
}

return hand;
};
    
export const usesAvailableLetters = (input, lettersInHand) => {
  const upperCase = input.toUpperCase();

  for (let letter of upperCase) {
    if (lettersInHand.includes(letter)) {
        let index = lettersInHand.indexOf(letter)
        lettersInHand.splice(index, 1)
    } else {
        return false;
    }
  }
  return true;
};
const letterScores = {
  A: 1,
  B: 3,
  C: 3,
  D: 2,
  E: 1,
  F: 4,
  G: 2,
  H: 4,
  I: 1,
  J: 8,
  K: 5,
  L: 1,
  M: 3,
  N: 1,
  O: 1,
  P: 3,
  Q: 10,
  R: 1,
  S: 1,
  T: 1,
  U: 1,
  V: 4,
  W: 4,
  X: 8,
  Y: 4,
  Z: 10
};

export const scoreWord = (word) => {

  let score = 0;
  let bonus = 8;
  word = word.toUpperCase();

  for (let i = 0; i < word.length; i++) {
    score += letterScores[word[i]];
  }

  if (word.length >= 7 && word.length < 11) {
    score += bonus;
  }
  return score;
    
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
  let highestWord = '';
  let highestScore = 0;

  for (let word of words){
    let score = scoreWord(word);
    if (score> highestScore){
      highestScore = score;
      highestWord = word;
    }else if (score == highestScore){
      if(highestWord.length==10){
        break
      }else if (word.length == 10 || word.length< highestWord.length){
        highestWord = word;
        highestScore = score;
        }
    }
  } 
  return {'score':highestScore, 'word':highestWord}
};
