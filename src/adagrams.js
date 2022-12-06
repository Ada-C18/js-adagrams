const LETTERPOOL = {
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
export const createScoreMap = () => {
  const ScoreMap = new Map();
  ScoreMap.set("A", 1);
  ScoreMap.set("B", 3);
  ScoreMap.set("C", 3);
  ScoreMap.set("D", 2);
  ScoreMap.set("E", 1);
  ScoreMap.set("F", 4);
  ScoreMap.set("G", 2);
  ScoreMap.set("H", 4);
  ScoreMap.set("I", 1);
  ScoreMap.set("J", 8);
  ScoreMap.set("K", 5);
  ScoreMap.set("L", 1);
  ScoreMap.set("M", 3);
  ScoreMap.set("N", 1);
  ScoreMap.set("O", 1);
  ScoreMap.set("P", 3);
  ScoreMap.set("Q", 10);
  ScoreMap.set("R", 1);
  ScoreMap.set("S", 1);
  ScoreMap.set("T", 1);
  ScoreMap.set("U", 1);
  ScoreMap.set("V", 4);
  ScoreMap.set("W", 4);
  ScoreMap.set("X", 8);
  ScoreMap.set("Y", 4);
  ScoreMap.set("Z", 10);

  return ScoreMap;
};

export const createLetterPool = () => {
  const letterPoolList = [];
  for (const [letter, value] of Object.entries(LETTERPOOL)) {
    letterPoolList.push(...letter.repeat(value));
  }
  return letterPoolList;
};

export const drawLetters = () => {
  let allLetters = createLetterPool(LETTERPOOL);
  let hand = [];
  for (let i = 0; i < 10; i++) {
    let randomIndex = Math.floor(Math.random() * allLetters.length);
    hand.push(allLetters[randomIndex]);
    allLetters.splice(randomIndex, 1);
    //consider adding map here
  }
  return hand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  let lettersInHandCopy = [...lettersInHand];

  for (let i = 0; i < input.length; i++) {
    if (lettersInHandCopy.includes(input[i])) {
      lettersInHandCopy.splice(input[i], 1);
    } else {
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
  const scoreMap = createScoreMap();

  let score = 0;

  for (const letter of word.toUpperCase()) {
    score += scoreMap.get(letter);
  }
  if (word.length >= 7) {
    score += 8;
  }
  return score;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4

  let highestScore = 0;
  let bestWord = "";

  for (const word of words) {
    let wordScore = scoreWord(word);

    if (wordScore > highestScore) {
      bestWord = word;
      highestScore = wordScore;
    } else if (wordScore === highestScore) {
      if (word.length === 10 && bestWord.length !== 10) {
        bestWord = word;
        highestScore = wordScore;
      } else if (word.length < bestWord.length && bestWord.length !== 10) {
        bestWord = word;
        highestScore = wordScore;
      }
    }
  }
  return { word: bestWord, score: highestScore };
};
