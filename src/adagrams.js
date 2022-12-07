<<<<<<< HEAD


export const drawLetters = () => {
  // Implement this method for wave 1
=======
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
>>>>>>> b2339a8457d2c5cc25f4c47b8179bfcd4f9db969
  let letterBank = [];
  let letterCopy = JSON.parse(JSON.stringify(LETTER_POOL));
  let keyList = Object.keys(letterCopy);

  while (letterBank.length < 10) {
    let randomLetter = keyList[Math.floor(Math.random() * keyList.length)];
    if (letterCopy[randomLetter] > 0) {
      letterBank.push(randomLetter);
      letterCopy[randomLetter]--;
    }
  }
  return letterBank;
};

export const usesAvailableLetters = (input, lettersInHand) => {
<<<<<<< HEAD
  let letterCount = {};
  //loop through input and add each letter to a new list, count how many times each letter occur
  //count how many times each letter occurs in lettersInHand and compare

  const letters = input.split("");

  return letters.every((attemptedLetter) =>
    lettersInHand.includes(attemptedLetter)
  );
=======
  let letters = input.toUpperCase();

  //for-of loop iterates over the values in an iterable object, such as an array.
  for (const letter of letters) {
    if (!lettersInHand.includes(letter)) {
      return false;
    }
  }

  const letterCounts = {};
  for (const letter of letters) {
    if (!letterCounts[letter]) {
      letterCounts[letter] = 1;
    } else {
      letterCounts[letter]++;
    }
  }

  //calling the filter() method on the lettersInHand array returns an array containing
  // only the occurrences of the letter in the lettersInHand array.
  // The length of this array is then compared to the count variable.

  // another way to write this code: for (const letter of Object.keys(letterCounts)) {const count = letterCounts[letter];
  // rest of loop body goes here

  for (const [letter, count] of Object.entries(letterCounts)) {
    if (count > lettersInHand.filter((l) => l === letter).length) {
      return false;
    }
  }

  return true;
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
>>>>>>> b2339a8457d2c5cc25f4c47b8179bfcd4f9db969
};

export const scoreWord = (word) => {
<<<<<<< HEAD
  let score = 0;

  let letterValues = {
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

  word = word.toUpperCase();

  for (let i = 0; i < word.length; i++) {
    score += letterValues[word[i]];
=======
  if (word.length === 0) {
    return 0;
>>>>>>> b2339a8457d2c5cc25f4c47b8179bfcd4f9db969
  }

  let score = 0;
  const letters = word.toUpperCase();
  for (const letter of letters) {
    score += SCORE_CHART[letter] || 0;
  }


  if (letters.length >= 7) {
    score += 8;
  }

  return score;
};

export const highestScoreFrom = (words) => {

  let winningWords = {};
  let winningScore = 0;

  for (const word of words) {
    const score = scoreWord(word);

    if (score > winningScore) {
      winningScore = score;
      winningWords["score"] = score;
      winningWords["word"] = word;
      //if word score is the same as the winning score (there is a tie), return the one that is a length of 10
    } else if (score === winningScore) {
      if (winningWords["word"].length === 10) {
        return winningWords;
      }
      if (word.length === 10) {
        winningWords["score"] = score;
        winningWords["word"] = word;
        //if neither of the words have a length of ten but are the same score, return the word that has the fewest letters
      } else if (word.length < winningWords["word"].length) {
        winningWords["score"] = score;
        winningWords["word"] = word;
      }
    }
  }

  return winningWords;
};
