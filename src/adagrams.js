export const drawLetters = () => {
  let playersHand = [];
  const letterPool = getLetterPool(LETTER_POOL);

  while (playersHand.length !== 10) {
    let letter = randomLetter(letterPool);
    playersHand.push(letter);
  }

  return playersHand;
};

// grab numbers and then make sure we can use that letter

export const usesAvailableLetters = (input, lettersInHand) => {
  input = input.toUpperCase();
  let availableBank = counter(lettersInHand);
  for (const letter of input) {
    if (letter in lettersInHand || availableBank[letter]) {
      availableBank[letter] -= 1;
    } else {
      return false;
    }
  }
  return true;
  // Implement this method for wave 2
};

export const scoreWord = (word) => {
  // Implement this method for wave 3

  word = word.toUpperCase();

  const ps = {};

  ps.A = ps.E = ps.I = ps.O = ps.U = ps.L = ps.N = ps.R = ps.S = ps.T = 1;
  ps.D = ps.G = 2;
  ps.B = ps.C = ps.M = ps.P = 3;
  ps.F = ps.H = ps.V = ps.W = ps.Y = 4;
  ps.K = 5;
  ps.J = ps.X = 8;
  ps.Q = ps.Z = 10;
  let score = 0;

  for (const letter of word) {
    for (const [key, point] of Object.entries(ps)) {
      if (letter === key) {
        score += point;
      }
    }
  }
  if (6 < word.length && word.length <= 10) {
    score += 8;
  }
  return score;
};
export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
  let scores = {};

  for (const word of words) {
    let key = scoreWord(word);
    if (scores[key] === undefined) {
      let list = [];
      list.push(word);
      scores[key] = list;
    } else {
      scores[key].push(word);
    }
  }
  const highestScore = Math.max(...Object.keys(scores));

  if (scores[highestScore].length > 1) {
    let result;

    for (const word of scores[highestScore]) {
      if (word.length === 10) {
        return { word: word, score: highestScore };
      } else {
        const minLen = Math.min(
          ...scores[highestScore].map((word) => word.length)
        );
        if (word.length === minLen) {
          result = { word: word, score: highestScore };
        }
      }
    }
    return result;
  } else {
    return { word: scores[highestScore][0], score: highestScore };
  }
};

const getLetterPool = (amountOfLetters) => {
  let pool = [];
  Object.entries(amountOfLetters).forEach(([char, num]) => {
    for (let i = 0; i < num; i++) {
      pool.push(char);
    }
  });
  return pool;
};
const counter = (letterBank) => {
  let letterFreq = {};
  for (let letter of letterBank) {
    if (letter in letterFreq) {
      letterFreq[letter] += 1;
    } else {
      letterFreq[letter] = 1;
    }
  }
  return letterFreq;
};
const randomLetter = (letters) => {
  let index = Math.floor(Math.random() * letters.length);

  let letter = letters[index];
  letters.splice(index, 1);

  return letter;
};

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
