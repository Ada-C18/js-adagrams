<<<<<<< HEAD


export const drawLetters = () => {
  // Implement this method for wave 1
=======
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

export const drawLetters = () => {
>>>>>>> 206792d809721ba7d1638a7562961ebacc2a14d8
  let letterBank = [];
  let letterCopy = JSON.parse(JSON.stringify(LETTER_POOL));
  let keyList = Object.keys(letterCopy);

  while (letterBank.length < 10) {
    let randomLetter = keyList[Math.floor(Math.random() * keyList.length)];
    if (letterCopy[randomLetter] > 0) {
      letterBank.push(randomLetter);
      letterCopy[randomLetter]--;
    }
  }
  return letterBank;
};

export const usesAvailableLetters = (input, lettersInHand) => {
<<<<<<< HEAD
  let letterCount = {};
  //loop through input and add each letter to a new list, count how many times each letter occur
  //count how many times each letter occurs in lettersInHand and compare

  const letters = input.split("");

  return letters.every((attemptedLetter) =>
    lettersInHand.includes(attemptedLetter)
  );
=======
  let letters = input.toUpperCase();
  for (const letter of letters) {
    if (!lettersInHand.includes(letter)) {
      return false;
    }
  }

  const letterCounts = {};
  for (const letter of letters) {
    if (!letterCounts[letter]) {
      letterCounts[letter] = 1;
    } else {
      letterCounts[letter]++;
    }
  }

  for (const [letter, count] of Object.entries(letterCounts)) {
    if (count > lettersInHand.filter((l) => l === letter).length) {
      return false;
    }
  }

  return true;
};

const SCORE_CHART = {
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
>>>>>>> 206792d809721ba7d1638a7562961ebacc2a14d8
};

// for (let letter of input) {
//   if (lettersInHand.includes(letter)) {
//     return true; }

// for (let letter of input) {
//   if (!(letter in letterCount)) {
//     letterCount[letter] = 0;
//   }
//   letterCount[letter]++;
// }

export const scoreWord = (word) => {
<<<<<<< HEAD
  let score = 0;

  let letterValues = {
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

  word = word.toUpperCase();

  for (let i = 0; i < word.length; i++) {
    score += letterValues[word[i]];
  }

  if (word.length > 6) {
    score += 8;
  }
  return score;
};
export const highestScoreFrom = (words) => {
  //   returns an object that represents the data of a winning word and its score
  //   - `word`, whose value is a string of a word
  //   - `score`, whose value is the score of that word
  // - In the case of tie in scores, use these tie-breaking rules:
  //   - prefer the word with the fewest letters...
  //   - unless one word has 10 letters.
  //   - If the there are multiple words that are the same score and the same length, pick the first one in the supplied list

  let winningWords = {};
  let winningScore = 0;

  for (const word of words) {
    const score = scoreWord(word);

    if (score > winningScore) {
      winningScore = score;
      winningWords["score"] = score;
      winningWords["word"] = word;
      //if word score is the same as the winning score (there is a tie), return the one that is a length of 10
    } else if (score === winningScore) {
      if (winningWords["word"].length === 10) {
        return winningWords;
      }
      if (word.length === 10) {
        winningWords["score"] = score;
        winningWords["word"] = word;
        //if neither of the words have a length of ten but are the same score, return the word that has the fewest letters
      } else if (word.length < winningWords["word"].length) {
        winningWords["score"] = score;
        winningWords["word"] = word;
      }
    }
  }

  return winningWords;
=======
  
  if (word.length === 0) {
    return 0;
  }

  let score = 0;
  const letters = word.toUpperCase().split("");
  for (const letter of letters) {
    score += SCORE_CHART[letter] || 0;
  }

  if (letters.length >= 7) {
    score += 8;
  }

  return score;
};

export const highestScoreFrom = (words) => {
  if (!words || words.length === 0) {
    return null;
  }

  // Calculate the scores of all words
  const scores = words.map((word) => ({
    word,
    score: scoreWord(word),
  }));

  // Sort the words by score, with the highest score first
  scores.sort((a, b) => b.score - a.score);

  // Find the first word with the highest score
  const highestScores = scores.filter((s) => s.score === scores[0].score);
  const [highestScore] = highestScores;
  
  // If there are multiple words with the same high score, find the one with 10 letters
  // If there are no words with 10 letters, find the one with the fewest letters
  // If all words have the same number of letters, return the first one
  const tieBreakers = [
    (s) => s.word.length === 10,
    (s) => s.word.length < highestScores[0].word.length,
    (s) => true,
  ];
  
  for (const tieBreaker of tieBreakers) {
    const winner = highestScores.find(tieBreaker);
    if (winner) {
      return winner;
    }
  }

  // If no word was found, return null
  return null;
>>>>>>> 206792d809721ba7d1638a7562961ebacc2a14d8
};
