import {
  LETTER_POOL, 
  SCORE_MAP
} from "../src/data.js";

export const drawLetters = () => {
  // Implement this method for wave 1
  const drawPool = [];
  for (let [key, value] of Object.entries(LETTER_POOL)) {
    for (let i = 0; i < value; i++) {
      drawPool.push(key);
    }
  }
  const hand = []; 
  for (let i = 0; i < 10; i++) {
    let pieceIndex = Math.floor(Math.random() * drawPool.length);
    let piece = drawPool[pieceIndex];
    hand.push(piece);
    const index = drawPool.indexOf(piece);
    if (index > -1) {
      drawPool.splice(index, 1);
    }
  }
  return hand;
};

const letterFreq = (string) => {
  const freqMap = {};
  for (const letter of string) {
    freqMap[letter] = freqMap[letter] ? freqMap[letter] + 1 : 1;
  }
  return freqMap;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  const uppercaseInput = input.toUpperCase();
  const splitInput = uppercaseInput.split("");
  const inputFreq = letterFreq(splitInput);
  const handFreq = letterFreq(lettersInHand);

  for (const letter of splitInput) {
    if (!handFreq[letter]) {
      return false;
    } else if (inputFreq[letter] > handFreq[letter]) {
      return false;
    } 
  }
  return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
  let points = 0;
  word = word.toUpperCase();
  const newWord = word.split("");
  for (const letter of newWord) {
    points += SCORE_MAP[letter];
  } if (newWord.length >= 7) {
    points += 8;
  }    
  return points;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
  let highScore = ['', 0];
  for (let i = 0; i < words.length; i++) {
    if (scoreWord(words[i]) > highScore[1]) {
      highScore[1] = scoreWord(words[i])
      highScore[0] = words[i]
    } else if (scoreWord(words[i]) === highScore[1]) {
      let highWord = highScore[0]; {
      if (highWord.length === 10) {continue; } 
      if (words[i].length===10) {
        highScore[0] = words[i];
      } else if (words[i].length < highWord.length) {
        highScore[0] = words[i];
      }
      } 
    }
    
  }
  return {'score': highScore[1], 'word': highScore[0]};
};
