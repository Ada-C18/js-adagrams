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

  const ten_strings = []; //create an empty list to return ten strings

  for (let letter in adaGrams) {
    for (let i = 0; i < adaGrams[letter]; i++) {
      //while i is less than the frequency of the letter
      ten_strings.push(letter); //it appends that letter to poolArr
    } //it creates an array of the form [A,A,A,A,A,A,A,A,A,B.B.C,C,...]
  }

  const shuffleLetters = (ten_strings) => {
    //javascript.info/task/shuffle
    for (let i = ten_strings.length - 1; i > 0; i--) {
      //assigns length of array minus one to i and while i is posititve it loops subrtracting one from i each iteration
      let j = Math.floor(Math.random() * (i + 1)); // math.random returns a value from 0-1, add 1 to i so we can caputre last index in poolArr, the result is a random number from 0-(len-1)
      [ten_strings[i], ten_strings[j]] = [ten_strings[j], ten_strings[i]]; //the two letters switch their index
    }
    return ten_strings.slice(0, 10); //after shuffle the first 10 are returned
  };
  return shuffleLetters(ten_strings);
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  const wordUp = input.toUpperCase();
  const lettersInHandCopy = lettersInHand.slice(); //creates a copy that can be editted without copy I couldn't reuse a letter while playing

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
        score += parseInt(letterScore); //the key is not an int so it needs to be converted before it is added
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
