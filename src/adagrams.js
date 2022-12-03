export const drawLetters = () => {
  // Implement this method for wave 1
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
// Helper method for Wave 1
const randomDraw = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

// Helper method for Wave 1
const deepCopyDict = (dict) => {
  return JSON.parse(JSON.stringify(dict));
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  // - Returns `true` if every letter in the `input` word is available (in the right quantities) in the `lettersInHand`
  // - Returns `false` if not; if there is a letter in `input` that is not present in the `lettersInHand` or has too much of compared to the `lettersInHand`

  //1. convert lettersInHAnd to a frequency dictionary, so that frequency
  //can be modified as letters are read.
  const handDict = convertArrToDictWithFreqAsVal(lettersInHand);
  //2. Match each letter in "Input" to handDict keys and make sure its present in
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
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
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
