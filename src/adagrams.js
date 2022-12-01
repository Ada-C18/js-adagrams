export const drawLetters = () => {
  let lettersArr = [];
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
  // console.log(lettersCopy);

  // for(let i = 0; i < 11; i++){
  //   return lette
  // }
  return lettersArr;
};

// export const usesAvailableLetters = (input, lettersInHand) => {
//   // Implement this method for wave 2
// };

// export const scoreWord = (word) => {
//   // Implement this method for wave 3
// };

// export const highestScoreFrom = (words) => {
//   // Implement this method for wave 4
// };
