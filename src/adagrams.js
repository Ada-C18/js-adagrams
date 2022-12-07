let LETTERS = {
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
  let listOfAllLetter = [];
  for (let key in LETTERS) {
    for (let i = 0; i < LETTERS[key]; i++) {
      listOfAllLetter.push(key);
    }
  }
  let tenLetters = [];
  for (let i = 0; i < 9 + 1; i++) {
    let randomIndex = Math.floor(Math.random() * listOfAllLetter.length);
    tenLetters.push(listOfAllLetter[randomIndex]);
    listOfAllLetter.splice(randomIndex, 1);
  }
  return tenLetters;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  let word = input.toUpperCase();
  for (let i = 0; i < word.length; i++) {
    if (lettersInHand.includes(word[i])) {
      for (let j = 0; j < lettersInHand.length; j++) {
        if (lettersInHand[j] === word[i]) {
          lettersInHand.splice(j, 1);
        }
      }
    } else {
      return false;
    }
  }
  return true;
};

export const scoreWord = word => {
  if (word.length >= 1) {
    let wordUpper = word.toUpperCase();
    let points = {
      AEIOULNRST: 1,
      DG: 2,
      BCMP: 3,
      FHVWY: 4,
      K: 5,
      JX: 8,
      QZ: 10,
    };
    let score = 0;
    for (let key in points) {
      for (let i = 0; i < wordUpper.length; i++) {
        if (key.includes(wordUpper[i])) {
          score += points[key];
        }
      }
    }
    if (wordUpper.length >= 7) {
      score += 8;
    }
    return score;
  } else {
    let score = 0;
    return score;
  }
};

export const highestScoreFrom = words => {
  let topScores = {};
  for (let word of words) {
    let upperWord = word.toUpperCase();
    let wordScore = scoreWord(upperWord);
    topScores[upperWord] = wordScore;
  }
  let maxKey,
    maxValue = 0;
  for (const [key, value] of Object.entries(topScores)) {
    if (value > maxValue) {
      maxValue = value;
      maxKey = key;
    }
  }
  let winningWords = [];
  for (const key in topScores) {
    if (maxValue === topScores[key]) {
      winningWords.push(key);
    }
  }
  let length = 10;
  let winningKey,
    winningValue = 0;
  for (let i = 0; i < winningWords.length; i++) {
    if (winningWords[i].length === 10) {
      winningKey = winningWords[i];
      winningValue = topScores[winningWords[i]];
      let winnerWinner = {score: winningValue, word: winningKey};
      return winnerWinner;
    } else {
      if (winningWords[i].length < length) {
        length = winningWords[i].length;
        winningKey = winningWords[i];
        winningValue = topScores[winningWords[i]];
      }
    }
  }
  let winnerWinner = {score: winningValue, word: winningKey};
  return winnerWinner;
};
