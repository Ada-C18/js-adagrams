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

const makeLetterList = (obj) => {
  const letterArr = [];
  for (const letter in obj) {
    for (let i = 0; i < obj[letter]; i++) {
      letterArr.push(letter);
    }
  }
  return letterArr;
};

export const drawLetters = () => {
  const letterList = makeLetterList(letterPool);
  const hand = [];
  let randomNum;
  let listLength = letterList.length;

  for (let i = 0; i < 10; i++) {
    //Select a random number from the letter list and add it to hand
    randomNum = Math.floor(Math.random() * listLength);
    hand.push(letterList[randomNum]);
    //Swap chosen letter with last item in current portion of letter list
    [letterList[randomNum], letterList[listLength - 1]] = [
      letterList[listLength - 1],
      letterList[randomNum],
    ];
    //Decrease "searched" area of letter list by 1
    listLength -= 1;
  }
  return hand;
};

//Convert word/letter to dictionary for easier comparison between letter counts
const wordToObj = (word) => {
  const wordObj = {};
  let currentVal;
  for (const letter of word) {
    currentVal = wordObj[letter.toUpperCase()] ?? 0;
    wordObj[letter.toUpperCase()] = currentVal + 1;
  }
  return wordObj;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  const letterObj = wordToObj(lettersInHand);
  const wordObj = wordToObj(input);

  for (const letter in wordObj) {
    //If letter isn't in hand or count of letter is higher in word than hand, return false
    if (!(letter in letterObj) || wordObj[letter] > letterObj[letter]) {
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
