export const drawLetters = () => {
  const letterBank ={
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
  
  const letterArray = [];

  while(letterArray.length < 10){
    const randomLetter = (Object.keys(letterBank)[Math.floor(Math.random() * Object.keys(letterBank).length)]);
    const letterCount = letterArray.filter((x) => x === randomLetter).length;
    if (letterCount <letterBank[randomLetter]) {
      letterArray.push(randomLetter);
    }
  }
  return letterArray;
};


export const usesAvailableLetters = (input, lettersInHand) => {
  // function findCount(input) {
    const count = {};
    for (const element of input) {
      if (count[element]) {
        count[element] += 1;
      } else {
        count[element] = 1;
      }
  }
 // iterate through input and check if each letter is in letters in hand
 // find the count of each letter in letters in Hand
  for (const letter of input) {
    let handLetterCount = lettersInHand.filter((x) => x === letter).length;
    // let inputLetterCount = input.match(/element/g || []).length;
    if (lettersInHand.includes(letter) === false || handLetterCount < count[letter]) {
      // letter in lettersInHand === false 
      return false;
    }
  }
  return true;
};


// Has one parameter: word, which is a string of characters
// Returns an integer representing the number of points
// Each letter within word has a point value. The number of points of each letter is summed up to represent the total score of word
// Each letter's point value is described in the table below
// If the length of the word is 7, 8, 9, or 10, then the word gets an additional 8 points


export const scoreWord = (word) => {
  const letterValues ={
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
  
  let score = 0;
  const upperCaseWord = word.toUpperCase();
  for (const letter of upperCaseWord) {
  // word.forEach((letter) => {
    score += letterValues[letter];
  }
  
  if  (word.length === 7 || word.length === 8 || word.length === 9 || word.length === 10) {
    score += 8;
  }
  return score;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
