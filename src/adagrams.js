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

//---------------------------drawLetters----------------------------------
export const drawLetters = () => {
  //makes copy of letter pool dict
  let newLetterPool = {};
  for (let letter in letterPool) {
    newLetterPool[letter] = letterPool[letter];
  }

  //creates and returns hand of 10 random letters
  const lettersInHand = [];
  while (lettersInHand.length < 10) {
    //makes list of letter keys
    const letters = Object.keys(newLetterPool);
    //picks random letter from list
    const randomLetter = letters[Math.floor(Math.random() * letters.length)];
    //adds random letter to hand if value not 0, and subtracts 1
    if (newLetterPool[randomLetter] != 0) {
      lettersInHand.push(randomLetter);
      newLetterPool[randomLetter]--;
    }
  }
  return lettersInHand;
};

//--------------------------usesAvailableLetters-------------------------
export const usesAvailableLetters = (input, lettersInHand) => {
  const handDict = {};
  input = input.toUpperCase();

  //keeping count of how many times a letter is in hand
  for (const letter of lettersInHand) {
    if (!letter in handDict) {
      handDict[letter] = 0;
    } else {
      handDict[letter] = ~~handDict[letter] + 1;
    }
  }
  //checking if letter is valid returns boolean value
  for (let letter of input) {
    if (letter in handDict === false) {
      return false;
    } else if (handDict[letter] === 0) {
      return false;
    } else {
      handDict[letter]--;
    }
  }
  return true;
};

//-----------------------------------------------------------------

const points_dict = {
  A: 1,
  E: 1,
  I: 1,
  O: 1,
  U: 1,
  L: 1,
  N: 1,
  R: 1,
  S: 1,
  T: 1,
  D: 2,
  G: 2,
  B: 3,
  C: 3,
  M: 3,
  P: 3,
  F: 4,
  H: 4,
  V: 4,
  W: 4,
  Y: 4,
  K: 5,
  J: 8,
  X: 8,
  Q: 10,
  Z: 10,
};

//--------------------------scoreWord---------------------------------
export const scoreWord = (word) => {
  let finalScore = 0;
  let currentScore = 0;
  word = word.toUpperCase();

  if (word.length >= 7) {
    finalScore = finalScore + 8;
  }

  for (const letter of word) {
    currentScore = points_dict[letter];
    finalScore += currentScore;
  }
  return finalScore;
};

//--------------------------highestScoreFrom-------------------------
export const highestScoreFrom = (words) => {
  let currentScore = 0;
  let finalResults = {
    word: "",
    score: 0,
  };

  for (let currentWord of words) {
    currentScore = scoreWord(currentWord);

    if (currentScore === finalResults.score) {
      if (finalResults.word.length === 10) {
        continue;
      }
      if (
        currentWord.length < finalResults.word.length ||
        currentWord.length === 10
      ) {
        finalResults.word = currentWord;
        finalResults.score = currentScore;
      }
    } else if (currentScore > finalResults.score) {
      finalResults.word = currentWord;
      finalResults.score = currentScore;
    }
  }
  return finalResults;
};
