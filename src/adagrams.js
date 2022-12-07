export const drawLetters = () => {
  const oringinalPool = [
    "A",
    "A",
    "A",
    "A",
    "A",
    "A",
    "A",
    "A",
    "A",
    "B",
    "B",
    "C",
    "C",
    "D",
    "D",
    "D",
    "D",
    "E",
    "E",
    "E",
    "E",
    "E",
    "E",
    "E",
    "E",
    "E",
    "E",
    "E",
    "E",
    "F",
    "F",
    "G",
    "G",
    "G",
    "H",
    "H",
    "I",
    "I",
    "I",
    "I",
    "I",
    "I",
    "I",
    "I",
    "I",
    "J",
    "K",
    "L",
    "L",
    "L",
    "L",
    "M",
    "M",
    "N",
    "N",
    "N",
    "N",
    "N",
    "N",
    "O",
    "O",
    "O",
    "O",
    "O",
    "O",
    "O",
    "O",
    "P",
    "P",
    "Q",
    "R",
    "R",
    "R",
    "R",
    "R",
    "R",
    "S",
    "S",
    "S",
    "S",
    "T",
    "T",
    "T",
    "T",
    "T",
    "T",
    "U",
    "U",
    "U",
    "U",
    "V",
    "V",
    "W",
    "W",
    "X",
    "Y",
    "Y",
    "Z",
  ];

  let hand = [];
  let gamePool = oringinalPool.slice();

  while (hand.length < 10) {
    let letter = gamePool[Math.floor(Math.random() * gamePool.length)];

    hand.push(letter);

    let index = gamePool.indexOf(letter);
    if (index > -1) {
      gamePool.splice(index, 1);
    }
  }
  return hand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  let word = input.toUpperCase();
  let copy = lettersInHand.slice();
  let result = true;

  for (let letter of word) {
    if (copy.includes(letter)) {
      let index = copy.indexOf(letter);
      if (index > -1) {
        copy.splice(index, 1);
      }
    } else {
      result = false;
    }
  }
  return result;
};

export const scoreWord = (word) => {
  const onePoint = ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"];
  const twoPoint = ["D", "G"];
  const threePoint = ["B", "C", "M", "P"];
  const fourPoint = ["F", "H", "V", "W", "Y"];
  const fivePoint = ["K"];
  const eightPoint = ["J", "X"];
  const tenPoint = ["Q", "Z"];

  let points = 0;

  if (word === null || word === "") {
    return points;
  }

  let upperWord = word.toUpperCase();

  if (upperWord.length > 6) {
    points += 8;
  }

  for (let letter of upperWord) {
    if (onePoint.includes(letter)) {
      points += 1;
    } else if (twoPoint.includes(letter)) {
      points += 2;
    } else if (threePoint.includes(letter)) {
      points += 3;
    } else if (fourPoint.includes(letter)) {
      points += 4;
    } else if (fivePoint.includes(letter)) {
      points += 5;
    } else if (eightPoint.includes(letter)) {
      points += 8;
    } else if (tenPoint.includes(letter)) {
      points += 10;
    }
  }

  return points;
};

export const highestScoreFrom = (words) => {
  let score = 0;
  let tied = [];

  for (let word of words) {
    let currentScore = scoreWord(word);
    if (currentScore > score) {
      score = currentScore;
    }
  }

  for (let word of words) {
    if (scoreWord(word) === score) {
      tied.push(word);
    }
  }

  let winningWord = tied[0];

  for (let word of tied) {
    if (word.length === 10 && winningWord.length !== 10) {
      winningWord = word;
    } else if (word.length < winningWord.length && winningWord.length !== 10) {
      winningWord = word;
    }
  }
  return { score: score, word: winningWord };
};
