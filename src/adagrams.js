const letterBank = {
  A: [9, 1],
  B: [2, 3],
  C: [2, 3],
  D: [4, 2],
  E: [12, 1],
  F: [2, 4],
  G: [3, 2],
  H: [2, 4],
  I: [9, 1],
  J: [1, 8],
  K: [1, 5],
  L: [4, 1],
  M: [2, 3],
  N: [6, 1],
  O: [8, 1],
  P: [2, 3],
  Q: [1, 10],
  R: [6, 1],
  S: [4, 1],
  T: [6, 1],
  U: [4, 1],
  V: [2, 4],
  W: [2, 4],
  X: [1, 8],
  Y: [2, 4],
  Z: [1, 10],
};
const counter = array => {
  let count = {};
  array.forEach(val => count[val] = (count[val] || 0) + 1);
  return count;
};

const shortestWord = (array) => {
  array.sort((a, b) => a.length - b.length);
  return array[0].length;
};
export const drawLetters = () => {
  let deck = [];

  for (const [key, cnt] of Object.entries(letterBank)){
    for (let i=0; i<cnt[0]; i++){
      deck.push(key);
    }
  }
  let dCnt = deck.length - 1
  while (dCnt) {
    let i = Math.floor(Math.random() * dCnt--);

    [deck[dCnt], deck[i]] = [deck[i], deck[dCnt]];

  }
  return deck.splice(0, 10);
};

export const usesAvailableLetters = (input, lettersInHand) => {
  let objLInHand = counter(lettersInHand);

  for (let l of input){
    if (l in objLInHand && objLInHand[l] > 0){
      objLInHand[l] -= 1;
      continue
    } else {
      return false;
    }
  }
  return true;
};
export const scoreWord = (word) => {
  word = word.toUpperCase();
  let score = 0;

  for (let i = 0; i<word.length; ++i){
      score += letterBank[word[i]][1];
    }
    if (word.length >= 7){
      score += 8;
    }
    return score;
};
export const highestScoreFrom = (words) => {
  let scoreBoard = {};
  let highScores = [];
  for (const word of words){
      scoreBoard[word] = scoreWord(word);
  }
  const maxScore = Math.max(...Object.values(scoreBoard));
  const minLength = shortestWord(words);

  for (const [word, score] of Object.entries(scoreBoard)){
    if (score === maxScore){
      highScores.push(word);
    } 
  };
  if (highScores.length === 1){
    return {word: highScores[0], score:maxScore};
  } else if (highScores.length > 1){
    for (const word of highScores){
      if (word.length === 10){
        return {word, score:maxScore};
      } else {
        const wordLength = highScores.every( w => w.length < 10);
        if (wordLength === true && word.length === minLength){
        return {word, score:maxScore};
        }
      }
    }
  } 
};
  

