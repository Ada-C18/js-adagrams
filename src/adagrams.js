// **********wave1***********
// Our first job is to build a hand of 10 letters. To do so, implement the function named drawLetters in src/adagrams.js. This function should have the following properties:

// No parameters
// Returns an array of ten strings
// Each string should contain exactly one letter
// These represent the hand of letters that the player has drawn
// The letters should be randomly drawn from a pool of letters
// This letter pool should reflect the distribution of letters as described in the table below
// There are only 2 available C letters, so drawLetters cannot ever return more than 2 Cs
// Since there are 12 Es but only 1 Z, it should be 12 times as likely to draw an E as a Z
// Invoking this function should not change the pool of letters
// Imagine that the user returns their hand to the pool before drawing new letters

export const drawLetters = () => {
  // Implement this method for wave 1
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

  let letterPoolDeepCopy = JSON.parse(JSON.stringify(letterPool));
  let hand = [];
  const letterArray = Object.keys(letterPool);

  for (let i = 0; i < 10; i++) {
    let randomNumber = Math.floor(
      Math.random() * Object.keys(letterPool).length
    );
    const randomLetter = letterArray[randomNumber];
    if (letterPoolDeepCopy[randomLetter] > 0) {
      hand.push(randomLetter);
      letterPoolDeepCopy[randomLetter] -= 1;
    }
  }
  return hand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  const upperCaseInput = input.toUpperCase();
  const inputLetterCount = {};
  const lettersInHandCount = [];

  for (const letter of lettersInHand) {
    if (inputLetterCount[letter]) {
      inputLetterCount[letter] += 1;
    } else {
      inputLetterCount[letter] = 1;
    }
  }

  for (const letter of upperCaseInput) {
    if (lettersInHandCount[letter]) {
      lettersInHandCount[letter] += 1;
    } else {
      lettersInHandCount[letter] = 1;
    }
  }

  for (const letter of input) {
    if (inputLetterCount[letter] === lettersInHandCount[letter]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
  if (word.length === 0) {
    return 0;
  }

  const scoreDict = {
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

  let wordTotal = 0;
  const upperCaseWord = word.toUpperCase();

  console.log(word.length);
  if (7 <= word.length && word.length <= 10) {
    wordTotal += 8;
  }

  for (const letter of upperCaseWord) {
    wordTotal += scoreDict[letter];
  }
  return wordTotal;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
  const wordArr = words
    .sort()
    .map((word) => ({ word: word }))
    .map((o) => {
      o.score = scoreWord(o.word);
      return o;
    });

  let highestScore = wordArr.reduce((maxScore, o) => {
    if (o.score > maxScore) {
      maxScore = o.score;
    }
    return maxScore;
  }, -Infinity);

  let highestScoringWords = [];

  for (const o of wordArr) {
    if (o.score === highestScore) {
      highestScoringWords.push(o);
    }
  }

  return highestScoringWords[0];
};
