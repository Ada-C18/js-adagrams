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

const letterValues = {
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

// Wave 1
export const drawLetters = () => {
  const letters = Object.keys(letterPool);
  const hand = [];
  const letterCount = {};

  while (hand.length < 10) {
    const letter = letters[Math.floor(Math.random() * letters.length)];
    if (letter in letterCount) {
      letterCount[letter] += 1;
    } else {
      letterCount[letter] = 1;
    }
    if (letterCount[letter] < letterPool[letter]) {
      hand.push(letter);
    }
  }
  return hand;
};

// Wave 2
export const usesAvailableLetters = (input, lettersInHand) => {
  for (let i in input) {
    if (lettersInHand.includes(input[i])) {
      const hand_index = lettersInHand.indexOf(input[i]);
      lettersInHand.splice(hand_index, 1);
    } else {
      return false;
    }
  }
  return true;
};

// Wave 3
export const scoreWord = (word) => {
  let upper_word = word.toUpperCase();
  let word_score = 0;

  if (upper_word.length === 0) {
    return word_score;
  }

  for (let i in upper_word) {
    word_score += letterValues[upper_word[i]];
  }

  if (upper_word.length >= 7 && upper_word.length <= 10) {
    word_score += 8;
  }
  return word_score;
};

// Wave 4
/////////////////Pseudocode//////////////////
// 1. create two new variables to hold best_word_score and best_word
// 2. iterate over list of words and call scoreWord function,
//        if score is > than last word, replace value of best_word_score with new score and
//                                           reassign value of best_word to be current word
//        if score = last word, replace value of best_word_score  with score of shortest word
//                                           and update best_word
//                                           unless one word has 10 letters - update best score and best word
//        if score = last word and are the same length, keep the current score and word
// 3. return the best word and score in an object word:score

export const highestScoreFrom = (words) => {
  console.log(words);
  let bestScore = scoreWord(words[0]);
  let bestWord = words[0];

  for (const word of words) {
    const wordScore = scoreWord(word);

    // normal case - word has higher score than best word
    if (wordScore > bestScore) {
      bestScore = wordScore;
      bestWord = word;

      // ties
    } else if (wordScore === bestScore) {
      // if scores are tied and words are same length, tie goes to current best word
      //if the scores are the same short word is best word
      if (
        (word.length === 10 || word.length < bestWord.length) &&
        bestWord.length !== 10
      ) {
        bestScore = wordScore;
        bestWord = word;
      }
    }
  }
  return {
    word: bestWord,
    score: bestScore,
  };
};
