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
};

export const scoreWord = (word) => {
  
  if (word.length === 0) {
    return 0;
  }

  let score = 0;
  const letters = word.toUpperCase();
  for (const letter of letters) {
    score += SCORE_CHART[letter] || 0;
  }

  //The || operator is being used as a shorthand way to set a default value for the SCORE_CHART[letter] expression. 
  //If SCORE_CHART[letter] is a falsy value (i.e. null, undefined, 0, etc.), 
  //the || 0 part of the expression will cause 0 to be added to the score variable instead. 
  //This ensures that the score variable is always incremented by some value, 
  //even if the SCORE_CHART object does not have a value for the current letter.

  if (letters.length >= 7) {
    score += 8;
  }

  return score;
};

export const highestScoreFrom = (words) => {
  // Return null if no words are provided
  if (!words || words.length === 0) {
    return null;
  }

  // Keep track of the highest score
  let highestScore = 0;

  // Calculate the scores of all words
  const scores = words.map((word) => {
    // Calculate the score for the current word
    const score = scoreWord(word);

    // Update the highest score if necessary
    if (score > highestScore) {
      highestScore = score;
    }

    // Return the word and its score
    return { word, score };
  });

  // Find the object with the highest score
  const highestScoringWord = scores.find(
    (score) => score.score === highestScore
  );

  return highestScoringWord || null;
};




