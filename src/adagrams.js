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
  // 1. Create variables to hold the highest scoring word and the highest score.
  let highestScoringWord = words[0];
  let highestScore = scoreWord(words[0]);
  // hold length of current winning word
  let winLength = words[0].length;

  //  2. Loop through the word list and grab each word and its score.
  for (let i = 1; i < words.length; i++) {
    let scoreCalculated = scoreWord(words[i]);
    //  3. If its score is higher than the highest score, replace the highest scoring word and highest score.
    if (scoreCalculated > highestScore) {
      highestScore = scoreCalculated;
      highestScoringWord = words[i];
      winLength = words[i].length;
    }
    //  4. If there is a tie, do the comparisons for length in place within the loop itself.
    else if (scoreCalculated === highestScore) {
      if (words[i].length === 10 && highestScoringWord.length < 10) {
        highestScore = scoreCalculated;
        highestScoringWord = words[i];
        winLength = words[i].length;
      } else if (
        words[i].length < winLength &&
        highestScoringWord.length < 10
      ) {
        highestScore = scoreCalculated;
        highestScoringWord = words[i];
        winLength = words[i].length;
      }
    }
  }
  //  5. Once the loop is finished, you'll have the highest scoring word.
  const winner = { score: highestScore, word: highestScoringWord };
  return winner;
};
