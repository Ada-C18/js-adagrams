const letterPoolCount = {
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
  // Implement this method for wave 1
  const letterList = Object.keys(letterPoolCount);
  // console.log(letterList);
  let hand = [];
  while (hand.length < 10) {
    const randomLetter =
      letterList[Math.floor(Math.random() * letterList.length)];
    // console.log(randomLetter);
    // let randomLetter = Object.keys(letterPoolCount)[Math.floor(Math.random()*Object.keys(letterPoolCount).length)]
    if (
      hand.filter((x) => x === randomLetter).length <
      letterPoolCount[randomLetter]
    ) {
      hand.push(randomLetter);
    }
    continue;
  }
  return hand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  let inputCaps = input.toUpperCase();
  const inputLetters = inputCaps.split("");
  console.log(inputLetters)

  const itemCounter = (array, item) => {
    return array.filter((currentItem) => currentItem === item).length;
  };

  for (let letter of inputLetters) {
    // const result = arrayToCount.filter(i => i === 2).length;
    // let handCount = lettersInHand.filter((i) => i === letter).length;
    // let inputCount = inputLetters.filter((i) => i === letter).length;
    let handCount = itemCounter(lettersInHand, letter);
    let inputCount = itemCounter(inputLetters, letter);
    // console.log(`${handCount} and ${inputCount}`)
    if (!lettersInHand.includes(letter) || inputCount > handCount) {
      return false;
    }
    continue;
  }
  return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
  let wordCaps = word.toUpperCase();
  let score = 0;
  if (wordCaps.length >= 7 && wordCaps.length <= 10) {
    score += 8;
  }
  // if (wordCaps.length >= 7 && wordCaps.length <= 10) {
  //   let score = 8;
  // } else {
  //   let score = 0;
  // }
  // console.log(score)
  for (let letter of wordCaps) {
    score += scoreChart[letter];
  }
  return score;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
  let winningWord = words[0];
  let winningScore = scoreWord(winningWord);

  for (let word of words) {
    if (scoreWord(word) > winningScore) {
      winningWord = word;
      winningScore = scoreWord(word);
    } else if (scoreWord(word) === winningScore) {
      if (word.length === 10 && winningWord.length !== 10) {
        winningWord = word;
        winningScore = scoreWord(word);
      } else if (
        word.length < winningWord.length &&
        winningWord.length !== 10
      ) {
        winningWord = word;
        winningScore = scoreWord(word);
      }
    }
    continue;
  }
  let highestScore = {};
  highestScore["word"] = winningWord;
  highestScore["score"] = winningScore;
  return highestScore;
};
