const letterQuantity = {
  "A": 9,
  "B": 2,
  "C": 2,
  "D": 4,
  "E": 12,
  "F": 2,
  "G": 3,
  "H": 2,
  "I": 9,
  "J": 1,
  "K": 1,
  "L": 4,
  "M": 2,
  "N": 6,
  "O": 8,
  "P": 2,
  "Q": 1,
  "R": 6,
  "S": 4,
  "T": 6,
  "U": 4,
  "V": 2,
  "W": 2,
  "X": 1,
  "Y": 2,
  "Z": 1
};
const letterValue = {
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
};

export const drawLetters = () => {
  // Implement this method for wave 1
  let letterHand = 0;
  const lettersDrawn = {};
  const letters = [];
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  while (letterHand < 10){
    let letter = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    if (!lettersDrawn[letter]){
      lettersDrawn[letter] = 1;
      letterHand += 1;
      letters.push(letter);
    } else if (lettersDrawn[letter] < letterQuantity[letter]){
      lettersDrawn[letter] += 1;
      letterHand += 1;
      letters.push(letter);

    } else {
      continue;
    }
  }
  return letters;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  const letterBankCount = {};
  for (const letter of lettersInHand){
    if (!letterBankCount[letter]){
      letterBankCount[letter] = 1;
    } else {
      letterBankCount[letter] += 1;
    }
  }
  for (const letter of input){
    if (letter in letterBankCount && letterBankCount[letter] > 0){
      letterBankCount[letter] -= 1;
      continue;
    } else{
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
  let upperWord = word.toUpperCase();
  let score = 0;
  if (upperWord.length >= 7){
    score += 8;
  }
  for (const letter of upperWord) {
    score += letterValue[letter];
  }
  return score;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
  const wordScores = {};
  const bestWord = {};
  for (const word of words){
    let score = scoreWord(word);
    wordScores[word] = score;
  }
  for (const [key, value] of Object.entries(wordScores)){
    if (Object.keys(bestWord).length === 0 || bestWord["score"] < value){
      bestWord["word"] = key;
      bestWord["score"] = value;
    } else if (bestWord["score"] === value){
      if (bestWord["word"].length == key.length || bestWord["word"].length === 10){
        continue;
      } else if (bestWord["word"].length > key.length || key.length === 10){
        bestWord["word"] = key;
        bestWord["score"] = value;
      } else if (bestWord["word"].length < key.length){
        continue;
      }
    }
  }
  return bestWord;
};
