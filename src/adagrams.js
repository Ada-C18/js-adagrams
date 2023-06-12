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

export const drawLetters = () => {
  let letterPoolArr = [];
  for (const [key, value] of Object.entries(LETTER_POOL)) {
    let letter = Array(value).fill(key);
    letterPoolArr.push(...letter);
  }

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

  const SCORE_CHART = {
    "A": 1, "B": 3, "C": 3, "D": 2,
    "E": 1, "F": 4, "G": 2, "H": 4,
    "I": 1, "J": 8, "K": 5, "L": 1,
    "M": 3, "N": 1, "O": 1, "P": 3,
    "Q": 10, "R": 1, "S": 1, "T": 1,
    "U": 1, "V": 4, "W": 4, "X": 8,
    "Y": 4, "Z": 10
  };

  let sum = 0;
  word = word.toUpperCase();
  const higherPointValues = [7, 8, 9, 10];
  
  for (let letter of word) {
    let pointValue = SCORE_CHART[letter];
    sum += pointValue;
  }

  if (higherPointValues.includes(word.length)) {
    sum += 8;
  }
  return sum;
};

export const highestScoreFrom = (words) => {
  let scoreDict = {};
  let highestScoreWord = [];

  for (let word of words) {
    scoreDict[word] = scoreWord(word);
  }

  let maxScore = Math.max(...Object.values(scoreDict));

  for (let [word, pointValue] of Object.entries(scoreDict)) {
    if (pointValue === maxScore) {
      highestScoreWord.push(word);
    }
  }

  if (highestScoreWord.length > 1) {
    for (let word of highestScoreWord) {
      for (let i = 0; i < highestScoreWord.length; i++) {
        if (highestScoreWord[i].length === 10) {
          return { score: scoreWord(highestScoreWord[i]), word: highestScoreWord[i] };
        }
      }

      let bestestWord = highestScoreWord.reduce((a, b) => a.length <= b.length ? a : b);
      return { score: scoreWord(bestestWord), word: bestestWord };
    }
  } else {
    return { score: scoreWord(highestScoreWord[0]), word: highestScoreWord[0] };
  }
};
