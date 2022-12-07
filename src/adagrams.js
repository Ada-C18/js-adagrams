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

export const drawLetters = () => {
  // Implement this method for wave 1
  const playersHand = [];
  const otherLetters = [];
  const copyOfLetterPool = {...letterPool};
  for (let letter in copyOfLetterPool) {
    for (let i = 0; i < copyOfLetterPool[letter]; i++) {
      otherLetters.push(letter);
    }
  }
  for (let i = 0; i < 10; i++) {
    let index = Math.floor(Math.random() * otherLetters.length);
    // add to playersHand
    playersHand.push(otherLetters[index]);
    // remove from other letters
    otherLetters.splice(index, 1);
  }
  return playersHand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  const lengthOfHand = input.length;
  let lettersInHandCopy = [...lettersInHand];
  for (let i = 0; i < lengthOfHand; i++) {
    let letter = input[i];
    if (lettersInHandCopy.includes(letter)) {
      let j = lettersInHandCopy.indexOf(letter);
      lettersInHandCopy.splice(j, 1);
    } else {
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  //Implement this method for wave 3
  const pointSystem = {
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

  let score = 0;
  const capsWord = word.toUpperCase();
  for (let letter of capsWord) {
    if (letter in pointSystem) {
      score += pointSystem[letter];
    }
  }
  if (word.length >= 7) {
    score += 8;
  }
  return score;
};

export const highestScoreFrom = (words) => {
    // Implement this method for wave 4
  // {word: "WWW", scoreWord: 12}
  let scoreDict = {
    word: words[0],
    score: 0,
  };
  //for word in words list, call scoreWord function on each word
  // assign word and score to word and score in scoreDict
  for (let word of words) {
    let score = scoreWord(word);
    if (score > scoreDict.score) {
      scoreDict.score = score;
      scoreDict.word = word;
      // check to see if the value === highScore if so its a tye
    } else if (score === scoreDict.score) {
      if (scoreDict.word.length === 10) {
        continue;
      } else if (word.length === 10) {
        scoreDict.score = score;
        scoreDict.word = word;
      } else if (word.length < scoreDict.word.length) {
        scoreDict.word = word;
        scoreDict.score = score;
      }
    }
  }
  return scoreDict;
} 
  // in case of a tye
    // winner is 1 with less letters
    // check if length is < other player
    // else if length == 10 === winner
    // is total tye then return what is in the list first
  // return winning object/dict
