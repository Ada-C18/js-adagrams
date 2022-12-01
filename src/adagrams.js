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
  // Implement this method for wave 1
  // choose letter randomly from letters object. If chosen decrease it

  // make array to hold letters
  let lettersArr = [];

  // made copy of letters object
  let lettersCopy = JSON.parse(JSON.stringify(letters));

  // // made array of keys
  const keys = Object.keys(letters);

  let i = 0;
  while (i < 10) {
    let randomNum = Math.floor(Math.random() * keys.length);
    let chosenLetter = keys[randomNum];

    if (lettersCopy[chosenLetter] > 0) {
      lettersArr.push(chosenLetter);
      lettersCopy[chosenLetter] -= 1;

      i++;
    }
  }
  return lettersArr;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2

  //  version 1

  for (let i = 0; i < input.length; i++) {
    if (!lettersInHand.includes(input[i])) {
      return false;
    } else {
      console.log(lettersInHand[lettersInHand.indexOf(input[i])]);
      lettersInHand.splice(lettersInHand.indexOf(input[i]), 1);
    }
  }
  return true;
};

//  version 2

//   for (let i = 0; i < input.length; i++) {
//     if (lettersInHand.includes(input[i])) {
//       lettersInHand.splice((lettersInHand.indexOf(input[i]), 1));
//       // console.log(lettersInHand[lettersInHand.indexOf(input[i])]);
//     } // if (!lettersInHand.includes(input[i])) {
//     //   return false;
//     // }
//   }

//   console.log(lettersInHand);
// };

export const scoreWord = (word) => {
  // Implement this method for wave 3
  let letterPoints = {};

  // all letters and points
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

  // const keys = Object.keys(letters);

  // make all letters uppercase in word
  // for each letter in word access it's value in dictionary
  // use reduce to sum up total points
  // reduce syntax :sum = objects.reduce((accumulator, currentValue) => accumulator + currentValue.x,

  // guard clause:
  if (word.length === 0) {
    return 0;
  }

  // if valid input:
  word = word.toUpperCase().split("");
  console.log(word);
  let total = 0;

  // get total points
  total = word.reduce((acc, letter) => acc + letterPoints[letter], 0);

  if (word.length >= 7) {
    total += 8;
  }
  return total;
};

// export const highestScoreFrom = (words) => {
//   // Implement this method for wave 4
// };
