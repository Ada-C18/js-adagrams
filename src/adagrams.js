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

  const letterList = [];
  for (const [letter, value] of Object.entries(LETTER_POOL)) {
    for (let i = 0; i < value; i++) {
      letterList.push(letter);
    }
  }

  const hand = [];
  for (let i = 0; i < 10; i++) {
    let rand_index = Math.floor(Math.random() * letterList.length);
    hand.push(letterList[rand_index]);
    letterList.splice(rand_index, 1);
  }
  return hand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  const word = input.toUpperCase();
  let handCopy = lettersInHand.slice();
  for (const letter of word) {
    if (!handCopy.includes(letter)) {
      return false;
    }
    let index = handCopy.indexOf(letter);
    handCopy.splice(index, 1);
  }
  return true;
};

export const scoreWord = (word) => {
  const scoreDict = {
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
  let wordScore = 0;
  for (const letter of word) {
    wordScore += scoreDict[letter];
  }
  if (7 <= word.length) {
    wordScore += 8;
  }
  return wordScore;
};

export const highestScoreFrom = (words) => {
  // use map function to calculate score for each word and add {word, score} to list
  const buildWordScoreObject = (word) => {
    let wordScore = {};
    wordScore["word"] = word;
    wordScore["score"] = scoreWord(word);
    return wordScore;
  };

  const wordScores = words.map(buildWordScoreObject);

  let highScore = 0;

  // iterate through wordScores and compare each score to highScore
  let winner;

  for (const wordObj of wordScores) {
    // if word.score is greater, let winner = word, update highScore to word.score
    if (wordObj["score"] > highScore) {
      winner = wordObj;
      highScore = wordObj["score"];
      // if a tie, check whether lengths are equal OR if current winner is 10 letters: if yes, prefer current winner
    } else if (wordObj["score"] === highScore) {
      if (
        wordObj["word"].length === winner["word"].length ||
        winner["word"].length === 10
      ) {
        //do nothing
        // if not, check if length of new word is 10: if yes, it's the winner
      } else if (wordObj["word"].length === 10) {
        winner = wordObj;
        highScore = wordObj["score"];
        // else, prefer the shorter word
      } else if (wordObj["word"].length < winner["word"].length) {
        winner = wordObj;
        highScore = wordObj["score"];
      }
    }
  }
  // once all words have been considered, return the winner
  return winner;
};
