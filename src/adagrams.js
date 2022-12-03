let letterPool = {
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

let scorePool = {
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
  // Implement this method for wave 1

  // Create array with all letter distribution.
  let flatLetterPool = [];
  for (let letter in letterPool) {
    for (let i = 0; i < letterPool[letter]; i++) {
      flatLetterPool.push(letter);
    }
  }
  //console.log(flatLetterPool);

  // Draw ten random letters from flatLetterPool
  let drawLetter = "";
  let indexToSelect;
  let resLetters = [];

  while (resLetters.length < 10) {
    indexToSelect = Math.floor(Math.random() * flatLetterPool.length);
    drawLetter = flatLetterPool[indexToSelect];
    resLetters.push(drawLetter);
    flatLetterPool.splice(indexToSelect, 1);
  }
  //console.log(resLetters);
  return resLetters;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2

  // convert to uppercase
  let upperInput;
  upperInput = input.toUpperCase();

  // As we loop thru char in upperInput, delete each matching char in array of resLetters;
  // Return False if unable to find, else True;
  for (let char of upperInput) {
    if (!lettersInHand.includes(char)) {
      return false;
    } else if (lettersInHand.includes(char)) {
      lettersInHand.splice(lettersInHand.indexOf(char), 1);
    }
  }
  return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
  let sumScore = 0;
  let upperWord;
  upperWord = word.toUpperCase();

  if (upperWord.length === 0) {
    sumScore = 0;
  } else if (upperWord.length >= 7 && upperWord.length <= 10) {
    sumScore += 8;
  }

  for (let char of upperWord) {
    if (char in scorePool) {
      sumScore += scorePool[char];
    }
  }
  console.log(sumScore);
  return sumScore;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
  // words is array of word; return should be {word: name; score: num}
  // loop thru each word to calculate score, save in scoreDict {score: [array of words]}
  // find highest score / scores
  // if highest score array length = 1, return as result;
  // if highest score array length > 1, going into tie logic;

  // tie logic: <loop thru highest score array>
  // 1. check if there is word with 10 letters -> return immediately; 
  // 2. fewer letter: mark fewer word name and length, and update along loop; -> return the first one of fewest;
  // 3. index first: above logic should satisfied index;

  for (let word in words) {

  }



};
