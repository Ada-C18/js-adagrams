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

const LETTER_SCORES = {
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


export const drawLetters = () => { //wave 1
  let letterArray = []; //make this a helper function?? 
  for (const [key, value] of Object.entries(LETTER_POOL)) {
    for (let i = 0; i < value; i++) {
      letterArray.push(key)
    }
  }

  let resultArray = [];
  for (let i = 0; i < 10; i++) { //refactor to avoid magic nums??
    let index = Math.floor(Math.random() * 26);
    resultArray.push(letterArray[index]);
    letterArray.splice(index, 1);
  }

  return resultArray;
};

export const usesAvailableLetters = (input, lettersInHand) => { //wave 2
  for (let i = 0; i < input.length; i++) {
    let letter = input[i];
    if (lettersInHand.includes(letter)) {
      let letterIndex = lettersInHand.indexOf(letter);
      lettersInHand.splice(letterIndex, 1);
      }
    else {
      return false;
    }
  }
  return true; //refactor??? 
};

export const scoreWord = (word) => { //wave 3
  let score = 0;
  if (word.length >= 7) {
    score += 8;
  }
  for (let i = 0; i < word.length; i++) {
    const letter = word[i].toUpperCase();
    score += LETTER_SCORES[letter];
  }
  return score;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
