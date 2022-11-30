import _, { map } from 'underscore';
import {letters, letterDict} from './CONSTANTS.js'

export class Adagrams {

static drawLetters = () => {
  // Implement this method for wave 1
  const letterSampleArray = [];
  
  for (const letter in letters) {
    for (let i=0;i<letters[letter];i++) {
      letterSampleArray.push(letter);
    };
  };
  const returnLetters = _.sample(letterSampleArray,10);
  return returnLetters;
};

static usesAvailableLetters = (input, lettersInHand) => {
  const hand = new MultiSet(lettersInHand);
  const word = new MultiSet(input);
  return word.isSubSet(hand);
};

static scoreWord = (word) => {
  let score = 0;
  let nonLetterCount = 0;
  word = word.toUpperCase();
  for (const letter of word){
    if (letter>='A' && letter<='Z'){
      score += letterDict[letter];
    } else {
      nonLetterCount++;
    }
  };
  if (word.length-nonLetterCount > 6) {
    score += 8;
  };
  return score;
};

static highestScoreFrom = (words) => {
  // Implement this method for wave 4
  let maxi = 0;
  let returnArray = [];
  for (const word of words) {
    let currentScore = Adagrams.scoreWord(word);
    if (currentScore > maxi) {
      returnArray = [word];
      maxi = currentScore;
    }
    else if (currentScore === maxi) {
      returnArray.push(word);
    };
  };

  let word
  if (returnArray.length>1) {
    word =  AGUtilities.pickString(returnArray);
  }
  else {
    word = returnArray[0];
  };
  return {"score":maxi, "word":word};
};};

class MultiSet {

  constructor(aString) {
    const returnObject = {}
    for (const letter of aString){
      if (!(letter in returnObject)) {
        returnObject[letter] = 0
      };
      returnObject[letter]++;
    };
    this.mSet = returnObject;
  };

  isSubSet(superSet) {
    for (const letter in this.mSet) {
      if (!(letter in superSet.mSet)) {
        return false;
      }
      superSet.mSet[letter] = superSet.mSet[letter] - this.mSet[letter];
      if ((superSet.mSet[letter]<0)) {
        return false;
      }
    };
    return true;
  };
};

class AGUtilities {

  static pickString = (arr) => {
    let word = "XXXXXXXXXXX"
    for (let i=0;i<arr.length;i++) {
      if (arr[i].length===10 && word.length!=10) {
        return arr[i];
      }
      else if (word.length > arr[i].length) {
        word = arr[i];
      };
    };
    return word;
  };};

export default Adagrams
// module.exports =  {Adagrams}
