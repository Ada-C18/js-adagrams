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
      console.log(true);
      const index = lettersInHand.indexOf(letter);
      const remove = lettersInHand.splice(index, 1);
    } else {
      console.log(false);
    }
  }
};

export const scoreWord = (word) => {
  let scoreTotal = 0;
  let extraPoints = 8;
  const wordUp = word.toUpperCase();

  let lettersFromWord = wordUp.split("");

  if (7 <= lettersFromWord.length <= 10) {
    scoreTotal += extraPoints;
  }

  for (let i = 0; i < lettersFromWord.length; i++) {
    let letter = lettersFromWord[i];
    scoreTotal += scoreChart[letter];
  }
  return scoreTotal;
};

export const highScorehelper = (word) => {
  let currentScore = scoreWord(word);
  let wordLen = -word.length;
  let has10 = wordLen == -10;

  result = (currentScore, has10, wordLen);
  return result;
};

// export const
export const highestScoreFrom = (words) => {
  // use our helper function to find the highest ranked
  // word using max

  let highWord = words.sort();

  return highWord;
};

// high_word = max(word_list, key=_high_score_key_helper)

// return (high_word, score_word(high_word))
