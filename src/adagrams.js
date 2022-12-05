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

const SCORE_CHART = {
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
  const letterPoolCopy = JSON.parse(JSON.stringify(LETTER_POOL));
  let hand = [];
  while (hand.length < 10) {
    let letters = Object.keys(letterPoolCopy);
    const randomLetter = letters[Math.floor(Math.random() * letters.length)];
    if (letterPoolCopy[randomLetter] > 0) {
      hand.push(randomLetter);
      letterPoolCopy[randomLetter] -= 1;
    }
  }
  return hand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  const lettersInHandCopy = JSON.parse(JSON.stringify(lettersInHand));
  if (input.length > lettersInHandCopy.length) {
    return false;
  }
  for (let letter of input) {
    const index = lettersInHandCopy.indexOf(letter);
    if (index < 0) {
      return false;
    } else if (index >= 0) {
      lettersInHandCopy.splice(index, 1);
    }
  }
  return true;
};

export const scoreWord = (word) => {
  let score = 0;
  if (word.length === 0) {
    return score;
  }
  for (const letter of word.toUpperCase()) {
    if (letter in SCORE_CHART) {
      score += SCORE_CHART[letter];
    }
  }
  if (word.length > 6) {
    score += 8;
  }
  return score;
};

// Initialize winningWord to the first element of our top scored words list
// Loop over the `topWords` list if we need to tiebreak
// If there is only 1 element this loop will not be entered and we move right to the return statement
// If we've already found a 10 letter word, we don't want to replace it       
// if we found a word that has 10 letters, and it's longer than what we are currently storing in winning_word
//         update winning_word to the current word
// if winning_word is less than 10 letters and we've found a word that's shorter than the winning_word
//       update winning_word to the current word
//      
// return winning_word

export const highestScoreFrom = (words) => {
  const scoredWords = {};
  let winningWord = {};
  const topWords = [];
  let topScore = 0;

  for (const word of words) {
    let wordScore = scoreWord(word);
    scoredWords[word] = wordScore;

    if (wordScore > topScore) {
      topScore = wordScore;
    }
  }
  for (const [word, score] of Object.entries(scoredWords)) {
    if (score === topScore) {
      topWords.push(word);
      winningWord["word"] = word;
      winningWord["score"] = topScore;
    }
  }
  if (topWords.length > 1) {
    const winner = topWords[0];
    for (const word of topWords) {
      if (winner.length === 10) {
        winningWord["word"] = winner;
      } else if (word.length === 10 && winner.length < 10) {
        winningWord["word"] = word;
      } else if (word.length <= winner.length) {
        winningWord["word"] = word;
      }
    }
  }
  return winningWord;
};
