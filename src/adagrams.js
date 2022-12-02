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

// GIT ADD AND GIT COMMIT ABOVE WAVE 2!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//export const scoreWord = (word) => {
// Implement this method for wave 3
//};

//export const highestScoreFrom = (words) => {
// Implement this method for wave 4
//};
