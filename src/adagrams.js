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

const SCORE_CHART = {
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

export const generateLetterPool = () => {
  const letterPool = [];
  const letterQuantities = Object.entries(LETTER_POOL);
  for (let [letter, quantity] of letterQuantities) {
    for (let i = 0; i < quantity; i++) {
      letterPool.push(letter);
    }
  }
  return letterPool;
};

export const drawLetters = () => {
  const letterPool = generateLetterPool();
  const playerHand = [];
  for (let i = 0; i < 10; i++) {
    let randomNum = Math.floor(Math.random() * letterPool.length);
    playerHand.push(letterPool[randomNum]);
    letterPool.splice(randomNum, 1);
  }
  return playerHand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  const capitalInput = input.toUpperCase();
  const letterQuantities = {};
  lettersInHand.forEach((letter) => {
    if (letter in letterQuantities) {
      letterQuantities[letter] += 1;
    } else {
      letterQuantities[letter] = 1;
    }
  });

  for (let character of Array.from(capitalInput)) {
    let isPresent = Object.keys(letterQuantities).includes(character);
    if (isPresent) {
      letterQuantities[character] -= 1;
    } else {
      return false;
    }
    if (letterQuantities[character] < 0) {
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  const capitalWord = word.toUpperCase();
  let score = 0;
  Array.from(capitalWord).forEach((letter) => {
    score += SCORE_CHART[letter];
  });
  if (word.length >= 7) {
    score += 8;
  }
  return score;
};

export const highestScoreFrom = (words) => {
  const wordsAndScores = {};
  words.forEach((word) => {
    let score = scoreWord(word);
    Object.assign(wordsAndScores, { [word]: score });
  });

  const allScores = Object.values(wordsAndScores);
  const highScore = Math.max(...allScores);

  const highestScoring = [];
  let hasLengthTen = false;
  let minLength = 10;
  for (let [word, score] of Object.entries(wordsAndScores)) {
    if (score === highScore) {
      highestScoring.push(word);
      if (word.length === 10) {
        hasLengthTen = true;
      } else if (word.length < minLength) {
        minLength = word.length;
      }
    }
  }

  const winningObject = { word: null, score: highScore };
  if (highestScoring.length === 1) {
    winningObject.word = highestScoring[0];
  }
  for (let word of words) {
    if (hasLengthTen) {
      if (word.length === 10) {
        winningObject.word = word;
        return winningObject;
      }
    } else {
      if (word.length === minLength) {
        winningObject.word = word;
        return winningObject;
      }
    }
  }
};
