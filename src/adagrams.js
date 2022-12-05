import { PassThrough } from "stream";

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

const valueOfLetter = {
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

export const drawLetters = () => {
  let allLetters = "";
  for (let letter in letterPool) {
    const amountOftimes = letterPool[letter];
    for (let i = 0; i < amountOftimes; i++) {
      allLetters += letter;
    }
  }
  let hand = [];
  for (let i = 0; i < 10; i++) {
    let letter = allLetters.charAt(
      Math.floor(Math.random() * allLetters.length)
    );
    allLetters = allLetters.replace(letter, "");
    hand.push(letter);
  }
  return hand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  let arrayOfInputValues = Array.from(input);
  let allLettersInHand = "";
  for (let letter of lettersInHand) {
    allLettersInHand += letter;
  }
  for (let i = 0; i < arrayOfInputValues.length; i++) {
    let isStringValid = allLettersInHand.includes(arrayOfInputValues[i]);
    if (isStringValid === true) {
      allLettersInHand = allLettersInHand.replace(arrayOfInputValues[i], "");
    } else {
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  let score = 0;
  word = word.toUpperCase();
  if (word.length >= 7) {
    score += 8;
  }
  word = word.trim();
  for (let letter of word) {
    score += valueOfLetter[letter];
  }
  return score;
};

export const highestScoreFrom = (words) => {
  // This has all the information regarding the scores
  let scoreInfo = [];
  for (let oneWord of words) {
    let infoAboutWords = {};
    let score = scoreWord(oneWord);
    infoAboutWords["score"] = score;
    infoAboutWords["word"] = oneWord;
    infoAboutWords["length"] = oneWord.length;
    scoreInfo.push(infoAboutWords);
  }

  // This finds the highest score
  let highestScoreInfo = {};

  // this will be the one where highestscoreInfo is less than scoreInfo[Index]
  for (let Index = 0; Index < scoreInfo.length; Index++) {
    if (highestScoreInfo.length === 0) {
      highestScoreInfo["score"] = scoreInfo[Index]["score"];
      highestScoreInfo["word"] = scoreInfo[Index]["word"];
    } else if (highestScoreInfo["score"] > scoreInfo[Index]["score"]) {
      break;
    } else if (highestScoreInfo["score"] < scoreInfo[Index]["score"]) {
      highestScoreInfo["score"] = scoreInfo[Index]["score"];
      highestScoreInfo["word"] = scoreInfo[Index]["word"];
    } else if (highestScoreInfo["score"] === scoreInfo[Index]["score"]) {
      highestScoreInfoWord = highestScoreInfo["word"];
      highestScoreInfoWordLength = highestScoreInfoWord.length;
      scoreInfoWord = scoreInfo[Index]["word"];
      scoreInfoWordLength = scoreInfoWord.length;
      if (highestScoreInfoWordLength === 10) {
        return highestScoreInfo;
      } else if (scoreInfoWordLength === 10) {
        highestScoreInfo["score"] = scoreInfo[Index]["score"];
        highestScoreInfo["word"] = scoreInfo[Index]["word"];
        return highestScoreInfo;
      } else if (highestScoreInfoWordLength > scoreInfoWordLength) {
        highestScoreInfo["score"] = scoreInfo[Index]["score"];
        highestScoreInfo["word"] = scoreInfo[Index]["word"];
        return highestScoreInfo;
      } else if (highestScoreInfoWordLength < scoreInfoWordLength) {
        return highestScoreInfo;
      }

      // highestScoreInfo["score"] = scoreInfo[Index]["score"];
      // highestScoreInfo["word"] = scoreInfo[Index]["word"];
      // console.log(scoreInfo[Index]["score"]);
    }

    // this is to access the length of the word
    // let wordFound = highestScoreInfo["word"];
    //   console.log(wordFound.length);
    // Access the data information
    // compare one from each other
    // console.log(scoreInfo[Index]);
    // want to access the score
    // console.log(scoreInfo[Index]["score"]);
    // want to access the word
    // console.log(scoreInfo[Index]["word"]);
  }
  // console.log(highestScoreFrom);
  return highestScoreInfo;

  // console.log(infoAboutWords);
  // tie cases
  // words with fewest letter
  // word.length === 10 (winner) > words with fewest letter
  // if same length of multiple words pick the first in the array of words

  // returns the max value {word: "string", score: # }
};
