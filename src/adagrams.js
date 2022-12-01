export const drawLetters = () => {
  // Implement this method for wave 1
  var poolOfLettersDict = {
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
  const lettersInHand = new Array();
  let counter = 0;
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  while (counter < 10) {
    var choice = characters.charAt(Math.floor(Math.random() * 26));
    //choice = choice.toUpperCase();
    if (poolOfLettersDict[choice] > 0) {
      lettersInHand.push(choice);
      counter += 1;
      poolOfLettersDict[choice] -= 1;
    }
  }
  return lettersInHand;
};

export const checkIfLetterPresent = (letter, letterBank) => {
  const lettersCopy = Array.from(letterBank);
  for (var i = 0; i < lettersCopy.length; i++) {
    if (letter == lettersCopy[i]) {
      const index = lettersCopy.indexOf(letterBank[i]);
      if (index > -1) {
        // only splice array when item is found
        letterBank.splice(index, 1); // 2nd parameter means remove one item only
      }
      return true;
    }
  }
  return false;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  for (var i = 0; i < input.length; i++) {
    if (checkIfLetterPresent(input[i], lettersInHand) == true) {
      continue;
    } else {
      return false;
    }
  }
  return true;
};

// export const scoreWord = (word) => {
//   // Implement this method for wave 3
// };

// export const highestScoreFrom = (words) => {
//   // Implement this method for wave 4
// };
