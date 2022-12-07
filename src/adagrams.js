export const drawLetters = () => {
  const letterBank ={
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
  
  const letterArray = [];

  while(letterArray.length < 10){
    const randomLetter = (Object.keys(letterBank)[Math.floor(Math.random() * Object.keys(letterBank).length)]);
    const letterCount = letterArray.filter((x) => x === randomLetter).length;
    if (letterCount <letterBank[randomLetter]) {
      letterArray.push(randomLetter);
    }
  }
  return letterArray;
};


export const usesAvailableLetters = (input, lettersInHand) => {
  // function findCount(input) {
    const count = {};
    for (const element of input) {
      if (count[element]) {
        count[element] += 1;
      } else {
        count[element] = 1;
      }
  }
 // iterate through input and check if each letter is in letters in hand
 // find the count of each letter in letters in Hand
  for (const letter of input) {
    let handLetterCount = lettersInHand.filter((x) => x === letter).length;
    // let inputLetterCount = input.match(/element/g || []).length;
    if (lettersInHand.includes(letter) === false || handLetterCount < count[letter]) {
      // letter in lettersInHand === false 
      return false;
    }
  }
  return true;
};


// Has one parameter: word, which is a string of characters
// Returns an integer representing the number of points
// Each letter within word has a point value. The number of points of each letter is summed up to represent the total score of word
// Each letter's point value is described in the table below
// If the length of the word is 7, 8, 9, or 10, then the word gets an additional 8 points


export const scoreWord = (word) => {
  const letterValues ={
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
  const upperCaseWord = word.toUpperCase();
  for (const letter of upperCaseWord) {
  // word.forEach((letter) => {
    score += letterValues[letter];
  }
  
  if  (word.length === 7 || word.length === 8 || word.length === 9 || word.length === 10) {
    score += 8;
  }
  return score;
};


// Implement the function named highestScoreFrom in src/adagrams.js. This method should have the following properties:

// Has one parameter: words, which is an array of strings
// Returns a single object that represents the data of a winning word and its score. The object should have the following keys:
// word, whose value is a string of a word
// score, whose value is the score of that word
// In the case of tie in scores, use these tie-breaking rules:
// prefer the word with the fewest letters...
// ...unless one word has 10 letters. If the top score is tied between multiple words and one is 10 letters long, choose the one with 10 letters over the one with fewer tiles
// If the there are multiple words that are the same score and the same length, pick the first one in the supplied list
export const highestScoreFrom = (words) => {
// intialize score/value object
const highestScoringWord = {};
words.forEach((word) => {
  const wordScore = scoreWord(word);
  if (Object.keys(highestScoringWord).length === 0){
  highestScoringWord['word'] = word;
  highestScoringWord['score'] = wordScore;
  } else if (wordScore > highestScoringWord['score']){
  highestScoringWord['word'] = word;
  highestScoringWord['score'] = wordScore;
  } else if (wordScore === highestScoringWord['score']){
    if (word.length === 10 && highestScoringWord['score'].length < 10){
      highestScoringWord['word'] = word;
      highestScoringWord['score'] = wordScore;
    } else if (word.length < highestScoringWord['score'].length && highestScoringWord['score'].length !== 10){
      highestScoringWord['word'] = word;
      highestScoringWord['score'] = wordScore;
    }
  }
});
return highestScoringWord;
};



//  iterate through array of words and calculate score. 
//  set the intial score and value to the object
// for each loop, reassign score and value if the score is higher than the current one
// if the scores are tie, use the word with the shortest length
// if the score are tie but one word has 10 letters, that one wins
//  if there is a tie and both have the same length, pick the first one

