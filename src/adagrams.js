import _, { map } from 'underscore';

export const drawLetters = () => {
  // Implement this method for wave 1
  const letterSampleArray = [];
  const letters = {
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
  for (const letter in letters) {
    for (let i=0;i<letters[letter];i++) {
      letterSampleArray.push(letter);
    };
  };
  const returnLetters = _.sample(letterSampleArray,10);
  return returnLetters;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  const hand = MultiSet(lettersInHand);
  const word = MultiSet(input);
  for (const letter in word) {
    if (!(letter in hand)) {
      return false;
    }
    hand[letter] = hand[letter] - word[letter];
    if ((hand[letter]<0)) {
      return false;
    };
  };
  return true;
};

const MultiSet = (aString) => {
  const returnObject = {}
  for (const letter of aString){
    if (!(letter in returnObject)) {
      returnObject[letter] = 0
    };
    returnObject[letter]++;
  };
  return returnObject;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
  const letterDict = {
    D:2,
    G:2,
    B:3,
    C:3, 
    M:3, 
    P:3,
    F:4,
    H:4, 
    V:4, 
    W:4, 
    Y:4,
    K:5,
    J:8, 
    X:8,
    Q:10,
    Z:10,
    A:1,
    E:1,
    I:1,
    O:1,
    U:1,
    L:1,
    N:1,
    R:1,
    S:1,
    T:1
}
  
  let score = 0;
  word = word.toUpperCase();
  for (const letter of word){
    score += letterDict[letter];
    };
  
  if (word.length > 6) {
    score += 8
  };
  return score;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
  const scoreDict = {}
  for (const word of words) {
    scoreDict[word] = scoreWord(word);
  };
  let maxi = 0
  let returnArray = []
  for (const key in scoreDict) {
    if (scoreDict[key] > maxi) {
      returnArray = [key];
      maxi = scoreDict[key]
    }
    else if (scoreDict[key] === maxi) {
      returnArray.push(key)
    }
  };
  let word = returnArray[0]
  if (returnArray.length>1) {
    word =  longestString(returnArray)
  }
  const retValue = {"score":maxi, "word":word}
  return retValue
};

const longestString = (arr) => {
  let word = "XXXXXXXXXXX"
  for (let i=0;i<arr.length;i++) {
    if (arr[i].length===10 && word.length!=10) {
      return arr[i]
    }
    else if (word.length > arr[i].length) {
      word = arr[i]
    };
  };
  return word;
};
