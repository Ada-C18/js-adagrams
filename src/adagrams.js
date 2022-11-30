const LETTER_POOL_COUNT = {
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
// --------------------------------------------------------wave 1------------------------------------------------
export const drawLetters = () => {
  // Implement this method for wave 1
  let count_obj = {};
  let letter_list = [];
  let new_letter = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 0; i < 10; i++) {
    new_letter = characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
    if (
      new_letter in count_obj &&
      LETTER_POOL_COUNT[new_letter] > count_obj[new_letter]
    ) {
      count_obj[new_letter] += 1;
      letter_list.push(new_letter);
    } else if (!(new_letter in count_obj)) {
      count_obj[new_letter] = 1;
      letter_list.push(new_letter);
    } else {
      continue;
    }
  }
  // console.log(letter_list.length);
  return letter_list;
};
// --------------------------------------------------------wave 2------------------------------------------------
export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  let handLettercount = {};
  for (let i = 0; i < lettersInHand.length; i++) {
    if (!(lettersInHand[i] in handLettercount)) {
      handLettercount[lettersInHand[i]] = 1;
    } else {
      handLettercount[lettersInHand[i]] += 1;
    }
  }
  for (let letter of input) {
    if (letter in handLettercount && handLettercount[letter] > 0) {
      handLettercount[letter] -= 1;
      continue;
    } else {
      return false;
    }
  }
  return true;
};
// --------------------------------------------------------wave 3------------------------------------------------
export const scoreWord = (word) => {
  // Implement this method for wave 3
  let upper_case_word = word.toUpperCase();
  let score_totla = 0;
  if (upper_case_word.length === 0) {
    return score_totla;
  }
  if (upper_case_word.length >= 7) {
    score_totla += 8;
  }
  for (let letter of upper_case_word) {
    if (letter in SCORE_CHART) {
      score_totla += SCORE_CHART[letter];
    }
  }
  return score_totla;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
  let best_word = [];
  let bestWordObj = {};
  for (let i = 0; i < words.length; i++) {
    let score = scoreWord(words[i]);
    if (best_word.length === 0) {
      best_word.push(words[i]);
      best_word.push(score);
    } else if (score > best_word[1]) {
      best_word[0] = words[i];
      best_word[1] = score;
    } else if (score === best_word[1]) {
      if (
        best_word[0].length === words[i].length ||
        best_word[0].length === 10
      ) {
        continue;
      } else if (
        best_word[0].length > words[i].length ||
        words[i].length === 10
      ) {
        best_word[0] = words[i];
      } else if (best_word[0].length < words[i].length) {
        continue;
      }
    }
  }
  bestWordObj["score"] = best_word[1];
  bestWordObj["word"] = best_word[0];
  return bestWordObj;
};
