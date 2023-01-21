const letterBank = {
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

export const drawLetters = () => {
  // Implement this method for wave 1
  const lettersArr = Object.keys(letterBank);

  let letterPoolFreq = {};
  let letterPool = [];

  while (letterPool.length < 10) {
    let randomIndex = Math.floor(Math.random() * lettersArr.length);
    let randLetter = lettersArr[randomIndex];

    if (!(randLetter in letterPoolFreq)){ // this is checking that if random letter not in letterpool it's frequency now = 1
      letterPoolFreq[randLetter] = 1;
      letterPool.push(randLetter);
    } else if (letterPoolFreq[randLetter] < letterBank[randLetter]){ // this is checking that if the val of letterpool[randletter] < the val of letterBank[randletter]
      letterPoolFreq[randLetter] += 1;
      letterPool.push(randLetter);
    }
  }
  return letterPool;
};


export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  const inputLetterFreq = {};
  const lettersInHandFreq = {};

  for (let i = 0; i < input.length; i++ ){
    let letter = input[i];
    if (!(lettersInHand.includes(letter))) {
      return false;
    } else if (!(letter in inputLetterFreq)){
      inputLetterFreq[letter] = 1;
    }else{
      inputLetterFreq[letter] += 1;
    }}

  for (let i = 0; i < lettersInHand.length; i++ ){
    let letter = lettersInHand[i];
    if (!(letter in lettersInHandFreq)){
      lettersInHandFreq[letter] = 1;
    }else{
      lettersInHandFreq[letter] += 1;
    }}

  for (let i = 0; i < input.length; i++ ) {
    let letter = input[i];
    if (inputLetterFreq[letter] > lettersInHandFreq[letter]){
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
  // create a dictionary that maps the letter to the points
  // create a total score variable that the appropriate points will be added to based on the occurence of the letter in the word
  // for each occurence of a letter in word, add the appropriate points value to the total score variable
  // if the length of the word is larger than 8 add an additional 8 points
  // return total score
  const scoreChart = {
    'A': 1,
    'B': 3,
    'C': 3,
    'D': 2,
    'E': 1,
    'F': 4,
    'G': 2,
    'H': 4,
    'I': 1,
    'J': 8,
    'K': 5,
    'L': 1,
    'M': 3,
    'N': 1,
    'O': 1,
    'P': 4,
    'Q': 10,
    'R': 1,
    'S': 1,
    'T': 1,
    'U': 1,
    'V': 4,
    'W': 4,
    'X': 8,
    'Y': 4,
    'Z':10
  }

  let totalScore = 0;
  if (!word){
    return totalScore;
  }
  for (let i = 0; i < word.length; i++ ){
    let letter = word[i].toUpperCase();
    totalScore += scoreChart[letter];
  }
  
  if (word.length >= 7) {
    totalScore += 8;
  }
return totalScore;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
  // create an empty result object 
    // iterate over every string in words array, and apply the scoreWord function to them
      // append the object of a key word and the corresponding word and the key score and its map its corresponding score to the result object
  // sort the result object by its score values
  // find the max score and declare it as a variable, 
  // create a new list top score and iterate through the list
    //search through the dict for where this max score occurs, and append the corresponding word, score objects
    //compare these scores to the following logic ...
  // if there is a tie, meaning top scores list != 0:
    // if the word.length === 10, return that word, score pair
    // else if the tied words.length are equal, return the first word to occur in the object
    // else return the word with the minimum word.length
  // return the highest scoring word/score paired in the sorted result object
};
