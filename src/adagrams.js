export const drawLetters = () => {
  // Implement this method for wave 1
  const LETTER_POOL = {
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

  let all_letters = [];

  for (const letter in LETTER_POOL) {
    for (let value = 0; value < LETTER_POOL[letter]; value++) {
      all_letters.push(letter);
    }
  }
  // Fisher-Yates shuffle algo
  for (let i = all_letters.length - 1; i >= 1; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = all_letters[j];
    all_letters[j] = all_letters[i]; // swapping begins here
    all_letters[i] = temp;
  }

  const handFunction = function (all_letters) {
    let hand = [];
    for (const letter of all_letters) {
      while (hand.length < 10) {
        hand.push(letter);
        break;
      }
    }
    return hand;
  };
  return handFunction(all_letters);
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  for (let i = 0; i < input.length; i++) {
    let letter = input[i];
    let letterIndex = lettersInHand.indexOf(letter); // indexOf letter inside lettersInHand
    if (letterIndex < 0) return false;
    lettersInHand.splice(letterIndex, 1); // (starting index, how many to remove starting from starting index)
  }
  return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
  const scoreChart = {
    1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
    2: ["D", "G"],
    3: ["B", "C", "M", "P"],
    4: ["F", "H", "V", "W", "Y"],
    5: ["K"],
    8: ["J", "X"],
    10: ["Q", "Z"],
  };

  let score = 0;
  const scoreLetters = Object.values(scoreChart); // seperates into array of arrays of letters
  const scorePoints = Object.keys(scoreChart); // seperates into array of numbers

  for (let i = 0; i < word.length; i++) {
    let currentLetter = word[i].toUpperCase();
    for (let j = 0; j < scoreLetters.length; j++) {
      if (scoreLetters[j].includes(currentLetter)) {
        score = score + parseInt(scorePoints[j]); // scorePoints[j] has same index of scoreLetters[j]
      }
    }
  }
  if (
    word.length === 7 ||
    word.length === 8 ||
    word.length === 9 ||
    word.length === 10
  ) {
    score = score + 8;
  }
  return score;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
  const scoreChart = {
    1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
    2: ["D", "G"],
    3: ["B", "C", "M", "P"],
    4: ["F", "H", "V", "W", "Y"],
    5: ["K"],
    8: ["J", "X"],
    10: ["Q", "Z"],
  };

  const scoreLetters = Object.values(scoreChart);
  const scorePoints = Object.keys(scoreChart);

  let highScore = 0;
  let highScoreWord = "";

  for (let word of words) {
    let score = 0;
    for (let i = 0; i < word.length; i++) {
      let currentLetter = word[i].toUpperCase();
      for (let j = 0; j < scoreLetters.length; j++) {
        if (scoreLetters[j].includes(currentLetter)) {
          score = score + parseInt(scorePoints[j]);
        }
      }
    }
    if (
      word.length === 7 ||
      word.length === 8 ||
      word.length === 9 ||
      word.length === 10
    ) {
      score = score + 8;
    }
    if (highScore < score) {
      highScore = score;
      highScoreWord = word;
    } else if (highScore === score) {
      if (word.length < 10) {
        if (highScoreWord.length === 10) {
          break;
        } else if (word.length < highScoreWord.length) {
          highScoreWord = word;
        }
      } else if (word.length === 10) {
        if (highScoreWord.length === 10) {
          break;
        }
        highScoreWord = word;
      }
    }
  }

  return { score: highScore, word: highScoreWord };
};
