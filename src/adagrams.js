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

const scoreChart = {
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

export const drawLetters = () => {
  const thisHand = [];

  const letterDist = Object.entries(letterPool);

  const bigLists = [];
  for (const [letter, value] of letterDist) {
    for (let i = 0; i < value; i++) {
      bigLists.push(letter);
    }
  }

  while (thisHand.length < 10) {
    const index = Math.floor(Math.random() * bigLists.length);
    thisHand.push(bigLists[index]);
    bigLists.splice(index, 1);
  }
  return thisHand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  for (const letter of input) {
    if (lettersInHand.includes(letter)) {
      const index = lettersInHand.indexOf(letter);
      lettersInHand.splice(index, 1);
    } else {
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  let scoreTotal = 0;
  let extraPoints = 8;

  const wordUp = word.toUpperCase();

  if (wordUp.length === 0) {
    return scoreTotal;
  }

  let lettersFromWord = wordUp.split("");

  for (let i = 0; i < lettersFromWord.length; i++) {
    let letter = lettersFromWord[i];
    scoreTotal += scoreChart[letter];
  }

  if (lettersFromWord.length >= 7 && lettersFromWord.length <= 10) {
    scoreTotal += extraPoints;
  }

  return scoreTotal;
};

export const highestScoreFrom = (words) => {
  // const words = ["XXX", "XXXX", "X", "XX"];
  let highScore = {
    score: scoreWord(words[0]),
    word: words[0],
  };

  for (let i = 1; i < words.length; i++) {
    let currentWord = words[i];
    let currentScore = scoreWord(currentWord);

    if (highScore.score < currentScore) {
      highScore.score = currentScore;
      highScore.word = currentWord;
    } else if (highScore.score === currentScore) {
      if (currentWord.length == highScore.word.length) {
        highScore.word;
      }
      if (currentWord.length === 10) {
        highScore.word = currentWord;
      } else if (currentWord.length < highScore.word.length) {
        highScore.word = currentWord;
      } else {
        continue;
      }
    }
  }
  return highScore;
};
