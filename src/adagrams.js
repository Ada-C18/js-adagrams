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
  // assumes equal probabily for every letter in the alphabet (which is not true)
  // const keys = Object.keys(letterPool);
  // const pickLetter = () => {
  //   let letter = keys[Math.floor(Math.random() * keys.length)];
  //   return letter;
  // };

  // const randomLetters = [];

  // while (randomLetters.length <= 10) {
  //   if (randomLetters.length === 10) break;
  //   let letter = pickLetter();
  //   const check = randomLetters.filter((character) => character === letter);
  //   if (check.length < letterPool[letter]) {
  //     randomLetters.push(letter);
  //   }
  // }
  // return randomLetters;

  const letters = []; // created this to make a more accurate draw reflective of probability (instead of 1/26 from drawing from keys)
  for (let key of Object.keys(letterPool)) {
    let looped = letterPool[key];
    for (let i = 0; i < looped; i++) {
      letters.push(key);
    }
  }

  const pickLetter = () => {
    let letter = letters[Math.floor(Math.random() * letters.length)];
    return letter;
  };

  const randomLetters = [];

  while (randomLetters.length <= 10) {
    if (randomLetters.length === 10) break;
    let letter = pickLetter();
    const check = randomLetters.filter((character) => character === letter);
    if (check.length < letterPool[letter]) {
      randomLetters.push(letter);
    }
  }
  return randomLetters;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  const letterPool = {};
  for (let letter of lettersInHand) {
    letterPool[letter] = lettersInHand.filter(
      (character) => character === letter
    ).length;
  };
  for (let letter of input) {
    const check = input.split(letter).length - 1;
    if (!lettersInHand.includes(letter) ||check > letterPool[letter]) {
      return false;
    // } else if (check > letterPool[letter]) {
    //   return false;
    // }
    }
  };
  return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
  const points = {
    1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
    2: ["D", "G"],
    3: ["B", "C", "M", "P"],
    4: ["F", "H", "V", "W", "Y"],
    5: ["K"],
    8: ["J", "X"],
    10: ["Q", "Z"],
  };
  let score = 0;
  if (word.length >= 7) {
    score += 8;
  }

  for (const letter of word) {
    for (const point of Object.keys(points)) {
      const intPoint = parseInt(point);
      if (points[intPoint].includes(letter.toUpperCase())) {
        score += intPoint;
        break;
      }
    }
  }
  return score;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
  //create variables that will hold highest score and highest word
  let highestWordScore = 0;
  let highestWord;

  for (let word of words) {
    let score = scoreWord(word);
    //check if the score of the word is greater than the current highest score
    if (score > highestWordScore) {
      highestWord = word;
      highestWordScore = score;
    //if equal to current highest score, will go into tie breaking logic
    } else if (score === highestWordScore) {
      // if equal 10 or shorter than length of the current highest word while the lenght of the current highest word is not 10, then make it new highest score word
      if (
        (word.length === 10 || word.length < highestWord.length) &&
        highestWord.length !== 10
      ) {
        highestWord = word;
      }
    }
  }
  return {
    word: highestWord,
    score: highestWordScore,
  };
};
