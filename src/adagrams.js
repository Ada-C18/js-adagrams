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
};

//helper function to create an array of letters according to LETTER_POOL distribution
const createLetterPoolArray = () => {
  let letterArray = [];

  for (const [key, value] of Object.entries(LETTER_POOL)) {
    for (let i = 0; i < value; i++) {
      letterArray.push(key);
    }
  }
  return letterArray;
};

// wave 1 main function:
export const drawLetters = () => {
  let letterArray = createLetterPoolArray(LETTER_POOL);
  const maxNumInHand = 10;
  let hand = [];

  for (let i = 0; i < maxNumInHand; i++) {
    let randomIndex = Math.floor(Math.random() * letterArray.length);
    hand.push(letterArray[randomIndex]);
    letterArray.splice(randomIndex, 1);
  }
  return hand;
};

//wave 2:
export const usesAvailableLetters = (input, lettersInHand) => {
  for (let i = 0; i < input.length; i++) {
    let letter = input[i];
    if (lettersInHand.includes(letter)) {
      let letterIndex = lettersInHand.indexOf(letter);
      lettersInHand.splice(letterIndex, 1);
    } else {
      return false;
    }
  }
  return true;
};

//wave 3:
export const scoreWord = (word) => {
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

//helper function to create an object with scores as keys and words as arrays of words
const createScoreTable = (words) => {
  let scoreTable = {};
  for (const word of words) {
    let score = scoreWord(word);
    if (Object.keys(scoreTable).includes(score.toString())) {
      scoreTable[score].push(word);
    } else {
      scoreTable[score] = [word];
    }
  }
  return scoreTable;
};

export const highestScoreFrom = (words) => {
  //wave 4
  const scoreTable = createScoreTable(words);
  const maxScore = Math.max.apply(null, Object.keys(scoreTable));
  const maxScoreWords = scoreTable[maxScore];
  let winner = {
    score: maxScore,
  };

  for (let word of maxScoreWords) {
    if (word.length === 10) {
      winner['word'] = word;
      break;
    } else {
      const shortestLength = Math.min.apply(
        null,
        maxScoreWords.map((el) => el.length)
      );
      const shortestWord = maxScoreWords.filter(
        (word) => word.length === shortestLength
      );
      winner['word'] = shortestWord[0];
    }
  }
  return winner;
};
