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

const scoreChart = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

const dictToStr = (dict) => {
  let result = '';
  for (const [k, v] of Object.entries(dict)) {
    for (let i = 0; i < v; i++) {
        result += k;
    }
  }
  return result;
};

export const drawLetters = () => {
  // Implement this method for wave 1
  let hands = [];
  let letterPool = dictToStr(LETTER_POOL);
  for (let i = 0; i < 10; i++) {
    let randomNum = letterPool[Math.floor(Math.random()*letterPool.length)];
    hands.push(randomNum);
    letterPool = letterPool.replace(randomNum, '')
  }
  return hands
};


export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  // for (let i = 0; i < lettersInHand.length; i++) {
  //   if (input.includes(lettersInHand[i])) {
  //     input = input.replace(lettersInHand[i], '')
  //   }
  // }
  // if (input === '') {
  //   return true;
  // } else {
  //   return false;
  // }
  let handsCopy = [...lettersInHand];
  for (let i = 0; i < input.length; i++) {
    if (handsCopy.includes(input[i])) {
      handsCopy.splice(handsCopy.indexOf(input[i]), 1)
    } else {
      return false;
    }
  }
  return true
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
  let totalScore = 0;
  const wordUpper = word.toUpperCase();
  for (let letter of wordUpper) {
    for (const [k, v] of Object.entries(scoreChart)) {
      if (v.includes(letter)) {
        totalScore += parseInt(k);
      }
    }
  }
  if (word.length >= 7) {
    totalScore += 8;
  }
  return totalScore;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
