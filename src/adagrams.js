import LetterTiles from '../letters.json';

export const drawLetters = () => {
  let letterBank = [];
  let playerHand = [];
  
  for (let letter of Object.keys(LetterTiles)) {
    for (let step = 0; step < LetterTiles[letter].frequency; step++) {
      letterBank.push(letter)
    }
  }

  while (playerHand.length < 10) {
    let index = (Math.floor(Math.random() * letterBank.length));
    let currentLetter = letterBank[index];
    playerHand.push(currentLetter);
    letterBank.splice(index, 1);
  }
    return playerHand

};

export const usesAvailableLetters = (input, lettersInHand) => {
  const word = input.toUpperCase();
  let availableLetters = [...lettersInHand];

  for (let letter of word) {
    if (!availableLetters.includes(letter)) {
      return false
    }
    availableLetters.splice(availableLetters.lastIndexOf(letter), 1);
  }

  return true
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};


export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
