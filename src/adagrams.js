// import Math from 'core-js/library/fn/math';
const LETTER_POOL = {
  'A': 9, 
  'B': 2, 
  'C': 2, 
  'D': 4, 
  'E': 12, 
  'F': 2, 
  'G': 3, 
  'H': 2, 
  'I': 9, 
  'J': 1, 
  'K': 1, 
  'L': 4, 
  'M': 2, 
  'N': 6, 
  'O': 8, 
  'P': 2, 
  'Q': 1, 
  'R': 6, 
  'S': 4, 
  'T': 6, 
  'U': 4, 
  'V': 2, 
  'W': 2, 
  'X': 1, 
  'Y': 2, 
  'Z': 1
}

const SCORE_CHART = {
  'A': 1,
  'E': 1,
  'I': 1,
  'O': 1,
  'U': 1,
  'L': 1,
  'N': 1,
  'R': 1,
  'S': 1,
  'T': 1,
  'D': 2,
  'G': 2,
  'B': 3,
  'C': 3,
  'M': 3,
  'P': 3,
  'F': 4,
  'H': 4,
  'V': 4,
  'W': 4,
  'Y': 4,
  'K': 5,
  'J': 8,
  'X': 8,
  'Q': 10,
  'Z': 10,
}

export const drawLetters = () => {
  const letterList = [];
  const hand = [];
  for (const letter of Object.keys(LETTER_POOL)){
    for (let i = 0; i < LETTER_POOL[letter]; i++){
      letterList.push(letter)
    }
  }

  for (let i = 0; i < 10; i++) {
    let index = Math.floor(Math.random() * letterList.length);
    hand.push(letterList[index]);
    letterList.splice(index, 1);
  }

  return hand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  const inputFreq = {};
  const handFreq = {};

  for (const letter of input) {
    if (!(letter in inputFreq)) {
      inputFreq[letter] = countFrequency(input, letter);
    }
  }
  for (const letter of lettersInHand) {
    if (!(letter in handFreq)) {
      handFreq[letter] = countFrequency(lettersInHand, letter);
    }
  }

  for (const letter of Object.keys(inputFreq)){
    if (!(letter in handFreq)) {
      return false;
    }
    else if (inputFreq[letter] > handFreq[letter]) {
      return false;
    }
  }

  return true;

};

export const scoreWord = (word) => {
  let score = 0;
  let formattedWord = word.toUpperCase()

  for (const letter of formattedWord){
    score = score + SCORE_CHART[letter];
  }

  if (formattedWord.length >= 7) {
    score += 8;
  }

  return score;
};

export const highestScoreFrom = (words) => {
  const winningWord = {
    word: '',
    score: 0
  };

  for (const word of words) {
    let currentScore = scoreWord(word)
    if (currentScore > winningWord['score']) {
      winningWord['word'] = word;
      winningWord['score'] = currentScore;
    } else if (currentScore === winningWord['score']) {
      if (word.length === winningWord['word'].length || winningWord['word'].length === 10) {
        continue;
      } else if (word.length === 10) {
        winningWord['word'] = word;
        winningWord['score'] = currentScore;
      } else if (word.length < winningWord['word'].length) {
        winningWord['word'] = word;
        winningWord['score'] = currentScore;
      }
    }
  }

  return winningWord;

};

const countFrequency = (input, target) => {
  let count = 0
  for (const element of input) {
    if (element === target) {
      count ++;
    }
  }
  return count;
}