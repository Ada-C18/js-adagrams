export const drawLetters = () => {
  // Implement this method for wave 1
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2

  const wordList = input.split("");

  //initialize empty dictionary/object

  let letterCount = {};

  //loop through word and conver to uppercase()
  //if letter not in the letter count dictionary add it
  for (letter of wordList) {
    if (!letterCount[letter]) {
      letterCount[letter] = 1;
    } else {
      letterCount[letter]++;
    }
  }

  var lCount = Object.keys(letterCount).length;

  if (lCount > lettersInHand(letter)) {
    return false;
  } else {
    return true;
  }
};

// word.forEach(element => { upper.push(element.toUpperCase());

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
