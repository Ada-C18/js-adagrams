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

const LETTER_SCORE = {
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
  Z: 10,
}

// helper function 
export const createLetterPool = () => {
  let letterPoolList = [];
  for (let key in LETTER_POOL){
    for (let i = 0; i < LETTER_POOL[key]; i++) {
      letterPoolList.push(key);
    }
  }
  return letterPoolList;
}

export const drawLetters = () => {
  // Implement this method for wave 1
  const letterPool = createLetterPool();
  let handLetter = [];
  while (handLetter.length < 10){
    let randomLetter = Math.floor(Math.random() * letterPool.length);
    // splice(start, deleteCount)
    // concat() merge the ten letters that are ramdom generated
    handLetter = handLetter.concat(letterPool.splice(randomLetter,1));
  }
  return handLetter;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  // input is string datatype
  // lettersInHand ten letters string
  let tempLettersInHand = [...lettersInHand];
  // itreate the input by using looping decrement
  // for (let i = 0; i < input.length - 1; ++i) {
  for (let i = input.length - 1; i >= 0; --i){
    if(tempLettersInHand.includes(input[i])) {
      tempLettersInHand.splice(i, 1);
      console.log(tempLettersInHand);
    } else {
      return false;
    }
  } 
  return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
  let upperWord = word.toUpperCase();
  let score = 0;
  for (let letter of upperWord) {
    score += LETTER_SCORE[letter];
  }
  if (upperWord.length >= 7) {
    score += 8;
  } 
  return score;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
  /*
  - create a new string to hold the winning word
  - assign the inital score as 0
  - loop the word in the words 
    - get the word's score
    - compare the word's score with inital score
    - if current score > score 
      - set the current word to winning word
      - set the current score to the score
    - else if current score === score
        - if current word len === 10
          - assign word as winning word
        - if current word len < winning word len and winning word len === 10
          - current word != winnig word 
        - else if current word len < winning word len 
          - assign current word to winnig word 
    - return
  */
  
  let winningWord = "";
  let updatingScore = 0;

  for (let word of words){
    let score = scoreWord(word);
    if (score > updatingScore) {
      winningWord = word;
      updatingScore = score;
    } else if (score === updatingScore){
        if (word.length === 10 && winningWord.length !== 10){
          winningWord = word;
        } 
        if (word.length < winningWord.length && winningWord.length === 10) {
            winningWord !== word;
        }
        else if (word.length < winningWord.length) {
          winningWord = word;
        }
    }
  }
  return ({"word": winningWord, "score": updatingScore})
};
