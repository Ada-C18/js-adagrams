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

const LETTER_VALUES = {
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
  /*
  (0) no input but read external contant LETTER_POOL
  (1-1) create letter bank from LETTER_POOL
  (1-2) letter cannot repeat greater than quantity of LETTER_POOL
  */

  // declare inital values
  let letters = [];
  const letterPool = { ...LETTER_POOL };

  // loop until 10 letters
  while (letters.length < 10) {
    let letter =
      Object.keys(LETTER_POOL)[
        Math.floor(Math.random() * Object.keys(LETTER_POOL).length)
      ];
    // check if letter is left in the pool
    if (letterPool[letter] > 0) {
      letters.push(letter);
      letterPool[letter] = letterPool[letter] - 1;
    }
  }
  return letters;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  /*
  (1) read letter from word (in str) from user
  (2) read letter_bank (in list) from the output of draw_letters()
  (3) check if each letter in the letter_bank
  */

  input = input.toUpperCase();
  for (let letter of input) {
    if (lettersInHand.includes(letter)) {
      let i = lettersInHand.indexOf(letter);
      lettersInHand.splice(i, 1);
      continue;
    } else {
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  /*
  (1) letter in word
  (2) get the value from LETTER_VALUES (in dict)
  (3) add each value to score
  (4) if length of word is bigger than 6, add 8 points more
  */

  let score = 0;
  word = word.toUpperCase();
  for (let letter of word) {
    score += LETTER_VALUES[letter];
  }

  if (word.length > 6) {
    score += 8;
  }

  return score;
};

export const highestScoreFrom = (words) => {
  /*
  (0) input: words - array of given word
  (1) for loop to read every element word out of words
  (2) calculate score using scoreWord
  (3) keep updating with highest score (always counting if 10 letters) 
  (4) if tied highest scores, 10 first coming letters > first coming fewer letters  
  */

  let highestScore = 0;
  let fewestletters = 10;
  let already10LettersSameScore = 0;
  let winner = { score: 0, word: "" };

  for (let word of words) {
    let score = scoreWord(word);
    if (score > highestScore) {
      highestScore = score;
      winner["score"] = score;
      winner["word"] = word;
      if (word.length === 10) {
        already10LettersSameScore = 1;
      } else {
        already10LettersSameScore = 0;
        fewestletters = word.length;
      }
    } else if (score === highestScore) {
      // when current tie
      if (word.length === 10 && already10LettersSameScore === 0) {
        winner["score"] = score;
        winner["word"] = word;
        already10LettersSameScore = 1;
      } else if (
        word.length < fewestletters &&
        already10LettersSameScore === 0
      ) {
        winner["score"] = score;
        winner["word"] = word;
      }
    }
  }
  return winner;
};
