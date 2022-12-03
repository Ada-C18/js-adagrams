export const drawLetters = () => {
  // Implement this method for wave 1
  // Returns an array of ten strings(or letters),
  // representing the hand of letters that the player has drawn.

  //1. Convert LETTERPOOL INTO LETTERARRAY
  const LETTERARRAY = convertFreqDictToArr(LETTERPOOL);
  //2. Make a deepcopy of LETTERPOOL dict, which can be modified as letters are drawn
  let deepCopyLETTERPOOL = deepCopyDict(LETTERPOOL);
  //3. Initialize an output array that will contain 10 letters drawn
  let outputArray = [];
  //4. Draw 10 letters and make sure a letter is not repeated past max limit.
  //(i.e. its Frequency or value in LETTERPOOL dict).
  while (outputArray.length < 10) {
    const drawnLetter = randomDraw(LETTERARRAY);
    if (deepCopyLETTERPOOL[drawnLetter] > 0) {
      outputArray.push(drawnLetter);
      deepCopyLETTERPOOL[drawnLetter] -= 1;
    }
  }
  return outputArray;
};
// Helper method for Wave 1
const convertFreqDictToArr = (freqDict) => {
  const outputArr = [];
  for (const key in freqDict) {
    for (let i = 0; i < freqDict[key]; i++) {
      outputArr.push(key);
    }
  }
  return outputArr;
};
// Helper function for Wave 1
const randomDraw = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

// Helper function for Wave 1
const deepCopyDict = (dict) => {
  return JSON.parse(JSON.stringify(dict));
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  // Returns `true` if every letter in the `input` word is available (in the right quantities) in the `lettersInHand`
  // Returns `false` if not; if there is a letter in `input` that is not present in the `lettersInHand` or has too much of compared to the `lettersInHand`

  //1. convert lettersInHAnd to a frequency dictionary, so that frequency
  //can be modified as letters are read.
  const handDict = convertArrToDictWithFreqAsVal(lettersInHand);
  //2. Match each letter in "input" to handDict keys and make sure its present in
  //the right quantities (values of dict keys).
  return isSubset(input, handDict);
};

//Helper function for wave 2
const convertArrToDictWithFreqAsVal = (arr) => {
  const output_dict = {};
  for (const elem of arr) {
    if (output_dict[elem]) {
      output_dict[elem] += 1;
    } else {
      output_dict[elem] = 1;
    }
  }
  return output_dict;
};

//Helper function for wave 2
const isSubset = (arr, dict) => {
  for (const letter of arr) {
    if (!dict[letter]) {
      return false;
    } else if (dict[letter] === 0) {
      return false;
    } else {
      dict[letter] -= 1;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
  //Returns an integer representing the total score of `word` by summing
  //the point value of each letter within `word`.

  //1. Look up the value of each letter of the word in LETTERSCORE and
  //add its value to the score.
  let score = 0;
  for (const letter of word) {
    score += LETTERSCORES[letter.toUpperCase()]; //edge case: lower case letters
  }
  // 2.If the length of the word is 7, 8, 9, or 10,
  // then the word gets an additional 8 points to the score.
  if (word.length >= 7) {
    score += 8;
  }
  return score;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
  // Returns a single object that represents the data of a winning word and its score.
  // TieBreaking Rule 1: Prefer the word with the fewest letters unless one word has 10 letters.
  // Rule 2. If the there are multiple words that are the same score and the same length, pick the first one in the supplied list.

  // 1. Check each word in the words list and calculate its score. Keep track of highest score, highest scoring word and lowest_length.
  let highestScore = scoreWord(words[0]);
  let highestScoringWord = words[0];
  let output_obj = {};

  for (const word of words) {
    let score = scoreWord(word);

    if (score > highestScore) {
      highestScore = score;
      highestScoringWord = word;
    }

    if (score === highestScore) {
      if (word.length === 10 && word.length > highestScoringWord.length) {
        highestScoringWord = word;
      } else if (
        word.length < highestScoringWord.length &&
        highestScoringWord.length < 10
      ) {
        highestScoringWord = word;
      }
    }
  }

  output_obj["score"] = highestScore;
  output_obj["word"] = highestScoringWord;
  return output_obj;
};

const LETTERPOOL = {
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
// |            Letter            | Value |
// | :--------------------------: | :---: |
// | A, E, I, O, U, L, N, R, S, T |   1   |
// |             D, G             |   2   |
// |          B, C, M, P          |   3   |
// |        F, H, V, W, Y         |   4   |
// |              K               |   5   |
// |             J, X             |   8   |
// |             Q, Z             |  10   |
const LETTERSCORES = {
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
