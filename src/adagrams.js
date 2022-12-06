const letterPool = {
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
export const drawLetters = () => {
  let letterBank = [];
  let letterHand = [];
  {
    for (const [letter, count] of Object.entries(letterPool)) {
      for (let i = 0; i < count; i++) {
        letterBank.push(letter);
      }
    }
    for (let i = 0; i < 10; i++) {
      let randomIndex = Math.floor(Math.random() * letterBank.length);
      let randLetter = letterBank[randomIndex];
      letterHand.push(randLetter);
      letterBank.splice(randomIndex, 1);
    }
    return letterHand;
  }
};
console.log(drawLetters());

export const usesAvailableLetters = (input, lettersInHand) => {
  let inputUpper = input.toUpperCase();
  let letterInHandCopy = [...lettersInHand];
  for (let letter of inputUpper) {
    if (letterInHandCopy.includes(letter)) {
      let indexHand = letterInHandCopy.indexOf(letter);
      letterInHandCopy.splice(indexHand, 1);
    } else {
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  if (!word ){
    return 0
  }
  let letterValsObj = {
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
  };
  let scoreWord = 0;
  const wordUpper = word.toUpperCase();
  for (let letter of wordUpper) {
    scoreWord += letterValsObj[letter];
  }
  if (wordUpper.length >= 7 && word.length <= 10) {
    scoreWord += 8;
  }
  return scoreWord;
};

export const highestScoreFrom = (words) => {
  let highestWord = "";
  let highestScore = 0;
  let score = scoreWord(word);
  for (let word in words){
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
};
