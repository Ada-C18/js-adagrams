//import { hasOwnMetadata } from "core-js/fn/reflect";

//import { forEach } from "core-js/core/array";

export const drawLetters = () => {
  const hand = [];

  const letterPool = {
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
    Z: 1
  };

  const makePoolArr = function() {
    const poolArr = [];
    for (const [letter, quantity] of Object.entries(letterPool)) {
      for (let i = 0; i < quantity; i++) {
        poolArr.push(letter);
      }
    }

    return poolArr
  };
  
  const getRandNum = function(poolArr) {
    const maxLength = poolArr.length - 1;
    const randNum = Math.floor(Math.random() * maxLength);
    return randNum
  };

  const poolArr = makePoolArr();

  while(hand.length < 10) {
    //let letterPoolCopy = letterPool;
    //const poolArr = makePoolArr();
    const randNum = getRandNum(poolArr);
    const letterValue = function () {
      return poolArr[randNum];
    }
      
    hand.push(letterValue());
    poolArr.splice(randNum, 1);
      //letterPool[letterValue()] = (letterPool[letterValue()]) - 1;

  };
  
  return hand
};

export const usesAvailableLetters = (input, lettersInHand) => {
  let validLetterCounter = 0
  for(let letter of input) {
      let index = lettersInHand.indexOf(letter);
      if(lettersInHand.includes(letter)){
        lettersInHand.splice(index, 1);
        validLetterCounter += 1
      } else {
        return false
      };
    };
  if(input.length === validLetterCounter){
    return true  
  };

};

export const scoreWord = (word) => {
  const scoreChart = {
    "A": 1,
    "B": 3,
    "C": 3,
    "D": 2,
    "E": 1,
    "F": 4,
    "G": 2,
    "H": 4,
    "I": 1,
    "J": 8,
    "K": 5,
    "L": 1,
    "M": 3,
    "N": 1,
    "O": 1,
    "P": 3,
    "Q": 10,
    "R": 1,
    "S": 1,
    "T": 1,
    "U": 1,
    "V": 4,
    "W": 4,
    "X": 8,
    "Y": 4,
    "Z": 10
  }
  // for(let [letter, ptValue] in scoreChart){
  //   console.log(scoreChart[letter])
  // };

  let score = 0
  //console.log(score)
  //console.log('word:', word)
  if(word === "") {
    return score
  };

  for(let letter of word.toUpperCase()) {
    //console.log(letter)
    score += scoreChart[letter];
    //console.log(score)
  }

  if(word.length > 6){
    score += 8;
  }
  
  return score
};

export const highestScoreFrom = (words) => {
  const wordsAndScores = [];
  for(let word of words){
    let wordObj = {
      "word": word,
      "score": scoreWord(word)
    };
    wordsAndScores.push(wordObj);
  }
  //console.log(wordsAndScores);

  const scores = [];
  for(let wordObj of wordsAndScores){
    scores.push(wordObj["score"])
  };
//console.log(scores)

const max_score = Math.max(...scores);
//console.log(max_score)

const indices = [];
for(let i = 0; i < scores.length; i++){
  if (scores[i] === max_score){
    indices.push(i);
  }
};
//console.log(indices)

const possibleAnswers = [];
if(indices.length === 1){
  return wordsAndScores[indices[0]]
} else {
  for(let index of indices){
    possibleAnswers.push(wordsAndScores[index])
  };
  //console.log(possibleAnswers)
};

  const possibleWords = [];
  for(let wordObj of possibleAnswers){
    possibleWords.push(wordObj["word"])
  };
  //console.log(possibleWords)

  const wordLengths = [];
  for(let possibleWord of possibleWords){
    wordLengths.push(possibleWord.length)
  };
  //console.log(wordLengths)

  if(wordLengths.includes(10)){
    const indexOfTen = wordLengths.indexOf(10);
    //console.log(possibleAnswers[indexOfTen])
    return possibleAnswers[indexOfTen]
  }
  const smallestLength = Math.min(...wordLengths);
  //console.log(smallestLength);
  const indexOfSmallestLength = wordLengths.indexOf(smallestLength);
  return possibleAnswers[indexOfSmallestLength]
};

