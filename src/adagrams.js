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

const createBagOfLetters = () => {
  /**
* Returns an array containing all the letters of the "LETTER_POOL" dictionary 
according to the frequency associated with each letter.
* Ex: Since the value of 'A' is 9, the first 9 elements of this list will be 'A' 
appearing 9 times, and so on.
* bag_of_letters = ['A', 'A', ..., 'B', ...]
**/
  const bagOfLetters = [];
  for (const letter in LETTER_POOL) {
    for (let i = 0; i < LETTER_POOL[letter]; i++) {
      bagOfLetters.push(letter);
    }
  }
  return bagOfLetters;
};
export const drawLetters = () => {
  const handOfLetters = [];
  const bagOfLetters = createBagOfLetters();
  for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * bagOfLetters.length); //Math.random() provides a random number between 0 (inclusive) and 1 (exclusive). When we multiply this by the length of the list and use the Math.floor function, we get a random number between 0 (inclusive) and length of array (exclusive).
    const letterPicked = bagOfLetters.splice(randomIndex, 1)[0]; //Splice returns an array of removed object(s), so I'm taking the first element here using [0]
    handOfLetters.push(letterPicked);
  }
  return handOfLetters;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  const copyOfLettersInHand = [...lettersInHand];
  const upperCaseInput = input.toUpperCase();
  for (let char of upperCaseInput) {
    if (copyOfLettersInHand.includes(char)) {
      const indexOfChar = copyOfLettersInHand.indexOf(char);
      copyOfLettersInHand.splice(indexOfChar, 1);
    } else {
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  let finalScore = 0;
  const upperCaseWord = word.toUpperCase();
  for (let char of upperCaseWord) {
    finalScore += SCORE_CHART[char];
  }
  if (word.length > 6 && word.length < 11) {
    finalScore += 8;
  }
  if (isNaN(finalScore)) {
    finalScore = 0;
  }
  return finalScore;
};

export const highestScoreFrom = (words) => {
  const wordInfo = [];
  for (let word of words) {
    const wordDict = {};
    wordDict["word"] = word;
    wordDict["score"] = scoreWord(word);
    wordDict["length"] = word.length;
    wordInfo.push(wordDict);
  }
  let maxWords = [];
  let maxScore = 0;

  for (let wordDict of wordInfo) {
    if (wordDict["score"] == maxScore) {
      maxWords.push(wordDict["word"]);
    } else if (wordDict["score"] > maxScore) {
      maxScore = wordDict["score"];
      maxWords = [];
      maxWords.push(wordDict["word"]);
    }
  }

  if (maxWords.length === 1) {
    return {
      word: maxWords[0],
      score: maxScore,
    };
  }

  let minLetterCount = 10;
  let shortestWord = null;

  for (let word of maxWords) {
    if (word.length === 10) {
      return {
        word: word,
        score: maxScore,
      };
    } else if (word.length < minLetterCount) {
      minLetterCount = word.length;
      shortestWord = word;
    }
  }
  return {
    word: shortestWord,
    score: maxScore,
  };
};
