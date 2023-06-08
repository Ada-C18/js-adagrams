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


const createLetterList = () => {
  const letters = [];
  const letterList = [];
  for (const [key, value] of Object.entries(LETTERPOOL)) {
    letters.push(key.repeat(value)) ;
  }
  for (const ele of letters) {
    for (const letter of ele) {
      letterList.push(letter);
    }
  }
  console.log(letterList)
  return letterList;
};



const pool = createLetterList();

const createRandomizer = () => {
  const randomIndex = Math.floor(Math.random() * (pool.length + 1));
  const randomLetter = pool[randomIndex];
  return randomLetter
};



export const drawLetters = () => {
  // Implement this method for wave 1
  // const pool = createLetterList(LETTERPOOL);
  const drawnLetters = [];

  while (drawnLetters.length < 10) {
    const randomLetter = createRandomizer();
    const occurences = drawnLetters.filter( letter => letter === randomLetter).length

    if (occurences < LETTERPOOL[randomLetter]) {
      drawnLetters.push(randomLetter);
    }
  }
  return drawnLetters;
  
};



export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  const word = input.toUpperCase();
  const wordArray = word.split('');
  
  
  for (const letter of word) {
    const occurencesHand = lettersInHand.filter( letter => letter === letter).length; 
    const occurencesWord = wordArray.filter( letter => letter === letter).length;
    if (occurencesWord <= occurencesHand) {
      if (lettersInHand.includes(letter)) {
        return true

    }
      else {
        return false
      }
      
    }
    
    else {
      return false
    }
  }
  
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
