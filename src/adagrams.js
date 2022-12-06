

export const drawLetters = () => {
  // Implement this method for wave 1
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
  let letterCount = {};
  //loop through input and add each letter to a new list, count how many times each letter occur
  //count how many times each letter occurs in lettersInHand and compare

  const letters = input.split("");

  return letters.every((attemptedLetter) =>
    lettersInHand.includes(attemptedLetter)
  );
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
};
