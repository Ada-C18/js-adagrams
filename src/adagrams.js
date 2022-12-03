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
  const letters = input.toUpperCase().split("");
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
};

export const scoreWord = (word) => {
  
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
  const [highestScore] = scores.filter(
    (s) => s.score === scores[0].score
  );

  // If there are multiple words with the same high score, find the one with 10 letters
  // If there are no words with 10 letters, find the one with the fewest letters
  // If all words have the same number of letters, return the first one
  const tieBreakers = [
    (s) => s.word.length === 10,
    (s) => s.word.length < highestScore.word.length,
    (s) => true,
  ];

  for (const tieBreaker of tieBreakers) {
    const winner = scores.find(tieBreaker);
    if (winner) {
      return winner;
    }
  }

  // If no word was found, return null
  return null;
};

