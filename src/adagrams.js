
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
  Z: 1,
};

const scoreBoard = {A: 1, E: 1, I: 1, O: 1, U: 1, L: 1, N: 1, R: 1, S: 1, T:1, D:2, G:2,
B:3, C:3, M:3, P:3, F:4, H:4, V:4, W:4, Y:4, K:5, J:8, X:8, Q:10, Z:10}

const range = (start, end) => {
  return Array.from({length:end}, (_, i) => start + i)
};

const shortestWord = (array) => {
  array.sort((a, b) => a.length - b.length);
  return array[0].length;
};

export const drawLetters = () => {
  let deck = [];

  for (const [key, cnt] of Object.entries(LETTER_POOL)){
    for (let i of range(0, cnt)){
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
  lettersInHand = lettersInHand.join('')

  return lettersInHand.includes(input);
};

export const scoreWord = (word) => {
  word = word.toUpperCase()
  let score = 0;

  if (word.length >= 7){
    score += 8;
  }
  for (let i = 0; i<word.length; ++i){
      score += scoreBoard[word[i]];
    }
    return score;
};

export const highestScoreFrom = (words) => {
  let scoreBoard = {}
  let topScore = []
  for (const word of words){
      scoreBoard[word] = scoreWord(word);
  }
  const maxScore = Math.max(...Object.values(scoreBoard));
  const minLength = shortestWord(Object.keys(scoreBoard));

  for (const [word, score] of Object.entries(scoreBoard)){
    if (score === maxScore){
      topScore.push(word);
    } 
  };
  if (topScore.length === 1){
    return {word: topScore[0], score:maxScore};
  } else if (topScore.length > 1){
    for (const word of topScore){
      if (word.length === 10){
        return {word, score:maxScore};
      } else {
        const wordLength = topScore.every( w => w.length < 10);
        if (wordLength === true && word.length === minLength){
        return {word, score:maxScore};
        }
      }
    }
  } 
};
  

