let LETTER_POOL = {
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

export const drawLetters = () => {
  let letterPoolArr = [];
  for (const [key, value] of Object.entries(LETTER_POOL)) {
    let letter = Array(value).fill(key);
    letterPoolArr.push(...letter);

  let letterBank = [];
  while (letterBank.length < 10) {
    let index = Math.floor(Math.random() * letterPoolArr.length);
    let letter = letterPoolArr[index];
    letterBank.push(letter);
    letterPoolArr.splice(index, 1);
  }
  return letterBank;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  let lettersCopy = [...lettersInHand];
  input = input.toUpperCase();
  
  for (let letter of input) {
    if (lettersCopy.includes(letter)) {
      lettersCopy.splice(lettersCopy.indexOf(letter), 1);
    } else {
      return false;
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
