const letterDistribution = {
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
}

const scoreChart = {
  1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],  
  2: ["D", "G"],
  3: ["B", "C", "M", "P"],
  4: ["F", "H", "V", "W", "Y"],
  5: ["K"],
  8: ["J", "X"],
  10: ["Q", "Z"]
}

export const drawLetters = () => {
  let letterPool = [];
  let letterBank = [];
  for (let i=letterDistribution.length; i === 0; i--) {
    for (let j=0; j < i; j++) {
      letterPool.push(letterDistribution[i]);
    }
  }

  for (let i=0; i<10; i++) {
    let randomIndex = Math.floor(Math.random() * letterPool.length);
    let randomLetter = letterPool[randomIndex];
    letterBank.push(randomLetter);
    letterPool.splice(randomLetter, 1);
  }
  return letterBank;
  };

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
