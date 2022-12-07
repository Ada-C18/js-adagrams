// Global variables
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

const SCORE_CHART_DICT = {
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

// Helper Function accessed from stackOverflow
// Used to shuffle array
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

// Functions for Adagrams
export const drawLetters = () => {
  // Wave 1
  const letterPoolList = [];

  for (const [key, value] of Object.entries(LETTER_POOL)) {
    for (let i = 0; i < value; i++) {
      letterPoolList.push(key);
    }
  }
  const handList = [];
  shuffle(letterPoolList);
  for (let i = 0; i < 10; i++) {
    handList.push(letterPoolList.pop());
  }
  return handList;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Wave 2
  const lettersInHandCopy = Array.from(lettersInHand);
  for (let i = 0, len = input.length; i < len; i++) {
    if (lettersInHandCopy.includes(input[i])) {
      const index = lettersInHandCopy.indexOf(input[i]);
      lettersInHandCopy.splice(index, 1);
    } else {
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  // Wave 3
  let sum = 0;
  const len = word.length;
  const wordUpper = word.toUpperCase();

  if (len === 0) {
    return sum;
  } else if (len >= 7) {
    sum += 8;
  }

  for (let i = 0; i < len; i++) {
    let letter = wordUpper[i];
    sum += SCORE_CHART_DICT[letter];
  }
  return sum;
};

export const highestScoreFrom = (words) => {
  // Wave 4
  // Input: ["X", "XX", "XXX", "XXXX"]
  // Output: { word: "XXXX", score: scoreWord("XXXX") }
  // Keep track of the high score value and high score word
  let highWord = "";
  let highScore = 0;
  // For each word in the array, call the scoreWord function to determine score
  for (const word of words) {
    if (scoreWord(word) > highScore) {
      // Update the value and word if new score is greater previous
      highScore = scoreWord(word);
      highWord = word;
      // If a new score is EQUAL to the high score
      // Check to see if the word has fewer letters (preferred)
      // Check to see if the word has 10 letters or more (preferred over fewer)
      // Check to see if same length (prefer the first - don't update word)
    } else if (scoreWord(word) === highScore) {
      if (
        (highWord.length === 10 && word.length < highWord.length) ||
        word.length === highWord.length
      ) {
        continue;
      } else if (word.length < highWord.length || word.length === 10) {
        highWord = word;
      }
    }
  }
  let highestScore = {
    word: highWord,
    score: highScore,
  };
  return highestScore;
};
