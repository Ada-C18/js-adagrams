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

const scoreChart = {
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

export const drawLetters = () => {
  const letterHand = [];
  const letterDistribution = [];

  for (const letter in letterPool) {
    for (let i = 0; i < letterPool[letter]; i++) {
      letterDistribution.push(letter);
    }
  }

  while (letterHand.length < 10) {
    const randomIndex = Math.floor(Math.random() * letterDistribution.length);
    const randomLetter = letterDistribution[randomIndex];
    console.log(randomIndex);

    letterHand.push(randomLetter);
    letterDistribution.splice(randomIndex, 1);
  }
  return letterHand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  for (let letter in input) {
    if (lettersInHand.includes(input[letter])) {
      delete lettersInHand[letter];
    } else {
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  let upperCaseWord = word.toUpperCase();
  // set word to upperCase variable and use uppercase method
  let sum = 0;

  if (upperCaseWord.length === 0) {
    return 0;
  }

  for (const letter of upperCaseWord) {
    sum += scoreChart[letter];
  }

  if (upperCaseWord.length >= 7 && upperCaseWord.length <= 10) {
    sum += 8;
  }

  return sum;
};

export const highestScoreFrom = (words) => {
  let highestWord = '';
  let highestScore = 0;

  for (const word of words) {
    let wordScore = scoreWord(word);
    let wordLen = word.length;
    let highestWordLen = highestWord.length;

    if (wordScore > highestScore) {
      highestWord = word;
      highestScore = wordScore;
    } else if (wordScore === highestScore) {
      if (highestWordLen === 10) {
        continue;
      } else if (wordLen === 10) {
        highestWord = word;
      } else if (wordLen < highestWordLen) {
        highestWord = word;
      }
    }
  }

  return { word: highestWord, score: highestScore };
};
