export const drawLetters = () => {
  // Implement this method for wave 1
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
};

export const scoreWord = (word) => {
  // Implement this method for wave 3

  // if word.length <= 7, add 8pts to counter, else counter = 0
  if (word.length<= 7) {
    score === 8;
  } else {
    score === 0;
  }
  // loop through letter in word
  for (let i=0; i < word.length; ++i) {
    // if letter in obj add point value to counter

    if (word[i] in obj) { //need to correct object name
      score += obj[word[i]];
    } //conditional
  } //loop
  // return counter
  return score;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4


};
