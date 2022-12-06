var _ = require("underscore-contrib");

export const drawLetters = () => {
  const letterPool = [
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

  var drawnLetters = _.sample(letterPool, 10);
  return drawnLetters;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  /* input is the word the user entered.
  letters in hand is the array of drawn letters.
  returns true if every letter is in letters in hand (in right quantities)
  returns false if not.
  */

  var result = true;
  //make a counter dict

  var letter_counter = {};
  //for each letter in the hand, if it's not in the letter_counter, put it in with value 1.
  //if it is already in letter_counter, add one to it's count.
  for (var i = 0; i < lettersInHand.length; i++) {
    letter_counter[lettersInHand[i]] = letter_counter[lettersInHand[i]]
      ? letter_counter[lettersInHand[i]] + 1
      : 1;
  }
  //take away each letter count.
  //if you get to a letter in input and it's not in the dict, result is false.
  for (const letter of input) {
    if (letter in letter_counter) {
      if (letter_counter[letter] === 0) {
        result = false;
      }
      letter_counter[letter] -= 1;
    } else {
      result = false;
    }
  }
  return result;

  //python:
  //   for character in word:
  //       if character in letter_bank_dict:
  //           if letter_bank_dict[character] == 0:
  //               result = False
  //           letter_bank_dict[character] -= 1
  //       else:
  //           result = False
  //   return result
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
