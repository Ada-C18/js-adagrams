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

const scoreChart = {
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

//creates string of all letters in letter pool by distribution
const getLetters = () => {
  let multiStr = "";
  for (const letter in letterPool) {
    multiStr += letter.repeat(letterPool[letter]);
  }
  return multiStr;
};
//const letterBank = getLetters();

export const drawLetters = () => {
  const randomHand = [];
  let letterBank = getLetters();
  for (let i = 0; i < 10; i++) {
    let randomLetter =
      letterBank[Math.floor(Math.random() * letterBank.length)];
    randomHand.push(randomLetter);
    letterBank = letterBank.replace(randomLetter, "");
  }
  return randomHand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  let filteredHand = lettersInHand;

  for (let i = 0; i < input.length; i++) {
    console.log(input[i]);

    if (filteredHand.includes(input[i]) === false) {
      return false;
    } else if (filteredHand.includes(input[i]) === true) {
      let letter = input[i];
      const index = filteredHand.indexOf(letter);
      delete filteredHand[index];
      console.log(filteredHand);
    }
  }
  return true;
};

export const scoreWord = (word) => {
  let totalScore = 0;
  let scoredLetter = 0;
  word = word.toUpperCase();

  for (let i = 0; i < word.length; i++) {
    scoredLetter = scoreChart[word[i]];
    totalScore = totalScore + scoredLetter;
  }

  if (word.length >= 7) {
    totalScore += 8;
  }
  return totalScore;
};

export const highestScoreFrom = (words) => {
  let scoredWords = {};

  //get item = {scored_word:score}, add item to scoredWords object
  for (let i = 0; i < words.length; i++) {
    let scoreCalculated = scoreWord(words[i]);
    //console.log(scoreCalculated)
    scoredWords[words[i]] = scoreCalculated;
    //let scoredWords[words[i]] = scoreCalculated
  }

  // get max of scores from scoredWords{}
  let tieList = [];
  let winningWord = "";
  let winningScore = 0;

  for (let [word, score] of Object.entries(scoredWords)) {
    //console.log(scoredWords)
    if (score > winningScore) {
      winningScore = score;
      winningWord = word;
      console.log(scoredWords);
      // console.log(winningWord)
      // console.log(winningScore)
    }
    // else if (score === winningScore) {
    //   tieList.push(winningWord, word);
    //   console.log(score);
    // }
    //ensure that all words in tieList have scores === winningScore
  }

  //find ties
  for (let [word, score] of Object.entries(scoredWords)) {
    if (score === winningScore) {
      tieList.push(word);
      console.log(tieList);
    }
  }
  if (tieList.length > 1) {
    //find min length
    //return word with min length
    let sortedList = tieList.sort((a, b) => a.length - b.length);
    if (sortedList[sortedList.length - 1].length === 10) {
      winningWord = sortedList[sortedList.length - 1];
    } else {
      winningWord = sortedList[0];
    }
  }

  const result = { score: winningScore, word: winningWord };

  return result;
};
