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

export const scoreWord = (word) => {
  // Implement this method for wave 3
  let scoreDict = {
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

  let score = 0;
  word = word.toUpperCase();
  for (var i = 0; i < word.length; i++) {
    if (word.charAt(i) in scoreDict) {
      score = score + scoreDict[word.charAt(i)];
    }
  }
  if (word.length > 6) {
    score += 8;
  }
  return score;
};

// export const highestScoreFrom = (words) => {
//   // Implement this method for wave 4
// };
