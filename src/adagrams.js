// Wave 1
export const drawLetters = () => {
  const letters = {
    A: 9,
    O: 8,
    B: 2,
    N: 6,
    C: 2,
    P: 2,
    E: 12,
    R: 6,
    D: 4,
    Q: 1,
    G: 3,
    T: 6,
    F: 2,
    S: 4,
    I: 9,
    V: 2,
    H: 2,
    U: 4,
    J: 1,
    W: 2,
    K: 1,
    X: 1,
    L: 4,
    Y: 2,
    M: 2,
    Z: 1,
  };

  // ############
  //  alt
  // ###########
  let lettersHand = [];

  let lettersCopy = JSON.parse(JSON.stringify(letters));

  let lettersPool = [];

  Object.entries(lettersCopy).forEach(([letter, amount]) => {
    for (let i = 0; i < amount; i++) {
      lettersPool.push(letter);
    }
  });

  let i = 0;
  while (i < 10) {
    let randomNum = Math.floor(Math.random() * lettersPool.length);
    let chosenLetter = lettersPool[randomNum];
    lettersPool.splice(randomNum, 1);

    lettersHand.push(chosenLetter);
    lettersCopy[chosenLetter] -= 1;

    i++;
  }
  return lettersHand;
};

// Wave 2
export const usesAvailableLetters = (input, lettersInHand) => {
  for (const i in input) {
    if (!lettersInHand.includes(input[i])) {
      return false;
    } else {
      console.log(lettersInHand[lettersInHand.indexOf(input[i])]);
      lettersInHand.splice(lettersInHand.indexOf(input[i]), 1);
    }
  }
  return true;
};

// Wave 3
export const scoreWord = (word) => {
  let letterPoints = {};

  // all letters and points; This was my attempt at playing with the attribute/property functionality
  letterPoints.A =
    letterPoints.E =
    letterPoints.I =
    letterPoints.O =
    letterPoints.U =
    letterPoints.L =
    letterPoints.N =
    letterPoints.R =
    letterPoints.S =
    letterPoints.T =
      1;
  letterPoints.D = letterPoints.G = 2;

  letterPoints.B = letterPoints.C = letterPoints.M = letterPoints.P = 3;

  letterPoints.F =
    letterPoints.H =
    letterPoints.V =
    letterPoints.W =
    letterPoints.Y =
      4;

  letterPoints.K = 5;

  letterPoints.J = letterPoints.X = 8;

  letterPoints.Q = letterPoints.Z = 10;

  if (word.length === 0) {
    return 0;
  }

  word = word.toUpperCase().split("");
  let total = 0;

  total = word.reduce((acc, letter) => acc + letterPoints[letter], 0);

  if (word.length >= 7) {
    total += 8;
  }
  return total;
};

// Wave 4
export const highestScoreFrom = (words) => {
  const wordScores = [];

  for (const word of words) {
    wordScores.push({ word: word, score: scoreWord(word) });
  }

  const maxScore = Math.max(...wordScores.map((wordObj) => wordObj.score));

  const maxScoreList = wordScores.filter(
    (wordObj) => wordObj.score === maxScore
  );

  const winner = maxScoreList.reduce((prev, current) =>
    prev.word.length >= 10 ||
    (prev.word.length < current.word.length && !(current.word.length === 10))
      ? prev
      : current
  );
  return winner;
};
