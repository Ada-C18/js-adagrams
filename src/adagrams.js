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

  //later, change letter_counter to letterCounter
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
};

export const scoreWord = (word) => {
  //In my last program, I made the dictionary every time. I'm going to hardcode it it.
  //make a dictionary with keys = letters and values = score for that letter.
  const letterScores = {};
  letterScores["A"] = 1;
  letterScores["E"] = 1;
  letterScores["I"] = 1;
  letterScores["O"] = 1;
  letterScores["U"] = 1;
  letterScores["L"] = 1;
  letterScores["N"] = 1;
  letterScores["R"] = 1;
  letterScores["S"] = 1;
  letterScores["T"] = 1;
  letterScores["D"] = 2;
  letterScores["G"] = 2;
  letterScores["B"] = 3;
  letterScores["C"] = 3;
  letterScores["M"] = 3;
  letterScores["P"] = 3;
  letterScores["F"] = 4;
  letterScores["H"] = 4;
  letterScores["V"] = 4;
  letterScores["W"] = 4;
  letterScores["Y"] = 4;
  letterScores["K"] = 5;
  letterScores["J"] = 8;
  letterScores["X"] = 8;
  letterScores["Q"] = 10;
  letterScores["Z"] = 10;

  word = word.toUpperCase();

  var score = 0;
  for (const char of word) {
    //look for char in keys of letterScores.
    //add associated value to score
    score += letterScores[char];
  }

  if (word.length >= 7) {
    score += 8;
  }

  return score;
};

export const highestScoreFrom = (words) => {
  /* this should take as input a list of all the words
  then return a hash that has the best word and the score of that best word
  */
  var wordScoresList = [];
  for (const word of words) {
    wordScoresList.push({ word: word, score: scoreWord(word) });
  }
  //wordScoresList is now a list of objects that have the word and the score of the word
  //now i need to find the word with the max score.
  var sortedWordScoresList = wordScoresList.sort((a, b) => b.score - a.score);

  var maxWordScore = sortedWordScoresList[0];

  //handling ties.
  //if two words have the same value, return the one with the fewest letters
  var maxScore = maxWordScore.score;
  //make list of words with max score
  var potentialWinners = [];
  for (const wordScore of wordScoresList) {
    if (wordScore.score === maxScore) {
      wordScoresList.push(wordScore);
    }
  }
  if (potentialWinners.length === 1) {
    return potentialWinners[0];
  }

  //now sort potential winners by length of word and return the shortest one.
  var sortedPotentialWinners = potentialWinners.sort(
    (a, b) => b.word.length - a.word.length
  );

  //now return the shortest one (for now.  we'll add more tie breaking in a second.)
  return sortedPotentialWinners[0];
};
