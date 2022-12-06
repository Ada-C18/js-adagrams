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

export const drawLetters = () => {
  // Implement this method for wave 1
  /*
  Creates user hand
  */
  const letterBag = createLetterBag();
  const userHand = [];

  while (userHand.length < 10) {
    const randomIndex = Math.floor(Math.random() * letterBag.length);
    userHand.push(letterBag[randomIndex]);
    letterBag.splice(randomIndex, 1);
  }
  return userHand;
};

const createLetterBag = () => {
  /* 
  Generates an array that contains an instance of every letter in 
  the LETTER_POOL object, incl duplicates
  */
  const letterBag = [];

  for (const letter in LETTER_POOL) {
    for (let i = 0; i < LETTER_POOL[letter]; i++) {
      letterBag.push(letter);
    }
  }
  return letterBag;
};

// const generate_letter_list = () => {

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  /* 
  Checks that word includes only letters available in hand
  returns boolean
  */
  const handDict = {};
  let inputCaptified = input.toUpperCase();

  // citation - dict counter: https://stackoverflow.com/questions/48435191/how-do-i-build-an-object-counting-occurrences-in-an-array-in-javascript
  for (let i = 0; i < lettersInHand.length; i++) {
    handDict[lettersInHand[i]] = (handDict[lettersInHand[i]] || 0) + 1;
  }

  for (const letter of inputCaptified) {
    if (!lettersInHand.includes(letter) || handDict[letter] === 0) return false;
    handDict[letter] = handDict[letter] - 1;
  }
  return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
  /* 
  returns the score for the word parameter
  */
  const pointsDict = {
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

  let wordCaptified = word.toUpperCase();
  let wordScore = 0;

  if (word.length >= 7) {
    wordScore += 8;
  }

  for (let letter of wordCaptified) {
    wordScore += pointsDict[letter];
  }
  return wordScore;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
  /* 
  pseudocode - 
  - create empty hash table
  - loop through array "words"
  - pass each item through scoreWord function and assign the word as key, score as value to the hash table
  tie breakers:
  - create an empty string variable "finalWord"
  - create an empty variable "finalScore", set equal to 0
  - loop through dictionary pulling out word, and score
  - if score is equal to finalScore 
  - first condition - check if word length is equal to 10 and length of finalword is not equal to 10
  - assign word to finalWord and score to finalScore if this condition is met
  - second condition - check else if length of word is less than finalWord and length of finalWord does not euqal 10
  - assign word to finalWord and score to finalScore if this condition is met
  outside of tie breaker:
  - check that score is higher than finalScore, and if it is set finalScore = to score and finalWord = to word
  - return finalWord and finalScore as a key, value pair
  */
  let finalWord = "";
  let finalScore = 0;

  // final score calculator
  for (const word of words) {
    let score = scoreWord(word);

    if (score > finalScore) {
      finalScore = score;
      finalWord = word;
    }

    // tie breaking logic
    if (score === finalScore) {
      if (finalWord.length === 10) {
        continue;
      }
      if (word.length === 10) {
        finalWord = word;
      } else if (word.length < finalWord.length) {
        finalWord = word;
      }
    }
  }
  return { word: finalWord, score: finalScore };
};
