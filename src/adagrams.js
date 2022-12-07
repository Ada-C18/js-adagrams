const adaGrams = {
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
  1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
  2: ["D", "G"],
  3: ["B", "C", "M", "P"],
  4: ["F", "H", "V", "W", "Y"],
  5: ["K"],
  8: ["J", "X"],
  10: ["Q", "Z"],
};

export const drawLetters = () => {
  // Implement this method for wave 1

  const ten_strings = [];

  for (let letter in adaGrams) {
    for (let i = 0; i < adaGrams[letter]; i++) {
      ten_strings.push(letter);
    }
  }

  const shuffleLetters = (ten_strings) => {
    for (let i = ten_strings.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [ten_strings[i], ten_strings[j]] = [ten_strings[j], ten_strings[i]];
    }
    return ten_strings.slice(0, 10);
  };
  return shuffleLetters(ten_strings);
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  const wordUp = input.toUpperCase();
  const lettersInHandCopy = lettersInHand.slice();

  for (const letter of wordUp) {
    if (!lettersInHandCopy.includes(letter)) {
      return false;
    }
    lettersInHandCopy.splice(lettersInHandCopy.indexOf(letter), 1);
  }
  return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
  let score = 0;

  const wordUp = word.toUpperCase();

  if (wordUp.length >= 7) {
    score += 8;
  }

  for (const letter of wordUp) {
    for (const letterScore in scoreChart) {
      if (scoreChart[letterScore].includes(letter)) {
        score += parseInt(letterScore);
      }
    }
  }
  return score;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
  let highestWordObject = { word: "", score: 0 };
  for (let word in words) {
    if (scoreWord(words[word]) > highestWordObject.score) {
      highestWordObject.word = words[word];
      highestWordObject.score = scoreWord(words[word]);
    } else if (
      scoreWord(words[word]) === highestWordObject.score &&
      words[word].length < highestWordObject.word.length &&
      highestWordObject.word.length < 10
    ) {
      highestWordObject.word = words[word];
      highestWordObject.score = scoreWord(words[word]);
    } else if (
      scoreWord(words[word]) === highestWordObject.score &&
      words[word].length === 10 &&
      highestWordObject.word.length < 10
    ) {
      highestWordObject.word = words[word];
      highestWordObject.score = scoreWord(words[word]);
    }
  }
  return highestWordObject;
};
