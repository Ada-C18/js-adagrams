// add export to run tests!
export const drawLetters = () => {
  // const drawLetters = () => {
  // Implement this method for wave 1

  const availableLetters = {
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

  const letterBowl = [];

  Object.keys(availableLetters).forEach((key) => {
    const quantity = availableLetters[key];
    for (let i = 0; i < quantity; i++) {
      letterBowl.push(key);
    }
  });

  const letterHand = [];
  for (let i = 0; i < 10; i++) {
    const i = Math.floor(Math.random() * letterBowl.length);
    const randomLetter = letterBowl[i];
    letterHand.push(randomLetter);
    letterBowl.splice(i, 1);
  }
  return letterHand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  const capitalizedWord = input.toUpperCase();
  const splitWord = capitalizedWord.split("");

  let submittedLetter = true;
  splitWord.forEach((letter) => {
    if (lettersInHand.includes(letter)) {
      // remove letter from lettersInHand
      const letterIndex = lettersInHand.indexOf(letter);
      lettersInHand.splice(letterIndex, 1);
    } else {
      submittedLetter = false;
    }
  });
  return submittedLetter;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
  const letterValues = {
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

  const capitalizedWord = word.toUpperCase();

  let score = 0;

  for (let letter = 0; letter < capitalizedWord.length; letter++) {
    let wordValue = capitalizedWord[letter];
    score += letterValues[wordValue];
  }
  if (capitalizedWord.length >= 7) {
    score += 8;
  }
  return score;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
  // initiate emtpy string
  let highestWord = "";
  // initiate score at 0
  let highestScore = 0;

  // iterate through the array of words
  // define a new variable to keep track of score of words using callback func
  // if the score of the first element in array is less than score of words
  // highest score becomes score of words
  // word becomes highest word
  // else if highest score is same as score of word and length of word is 10 and highest word is not 10
  // word becomes that highest word
  // return word and score in an object style
};
