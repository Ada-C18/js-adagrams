export const drawLetters = () => {
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

  let letters = new Array();

  for (const letter in letterPool) {
    for (let i = 0; i < letterPool[letter]; i++) {
      letters.push(letter);
    }
  }

  const hand = [...letters].sort(() => 0.5 - Math.random());

  return hand.slice(0, 10);
};

export const usesAvailableLetters = (input, lettersInHand) => {
  let availLetters = new Array();
  for (let i = 0; i < 5; i++) {
    let letter = lettersInHand[i];
    availLetters.push(letter);
  }

  let word = input.toUpperCase();

  for (let i = 0; i < word.length; i++) {
    let letter = word[i];

    if (availLetters.includes(letter)) {
      availLetters.splice(availLetters.indexOf(letter), 1);
    } else {
      return false;
    }
  }

  return true;
};

export const scoreWord = (word) => {
  let score = 0;

  const letterScores = {
    1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
    2: ["D", "G"],
    3: ["B", "C", "M", "P"],
    4: ["F", "H", "V", "W", "Y"],
    5: ["K"],
    8: ["J", "X"],
    10: ["Q", "Z"],
  };

  const wordUpper = word.toUpperCase();

  for (let i = 0; i < wordUpper.length; i++) {
    let letter = wordUpper[i];
    for (const points in letterScores) {
      if (letterScores[points].includes(letter)) {
        score += Number(points);
      }
    }
  }

  if (word.length >= 7) {
    score += 8;
  }

  return score;
};

export const highestScoreFrom = (words) => {
  let highestScore = 0;
  let topWord = "";

  let tieList = [];
};
