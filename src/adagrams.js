const alphabet = [
  ["A", 9],
  ["B", 2],
  ["C", 2],
  ["D", 4],
  ["E", 12],
  ["F", 2],
  ["G", 3],
  ["H", 2],
  ["I", 9],
  ["J", 1],
  ["K", 1],
  ["L", 4],
  ["M", 2],
  ["N", 6],
  ["O", 8],
  ["P", 2],
  ["Q", 1],
  ["R", 6],
  ["S", 4],
  ["T", 6],
  ["U", 4],
  ["V", 2],
  ["W", 2],
  ["X", 1],
  ["Y", 2],
  ["Z", 1],
];

function createLetterPool(alphabet) {
  const letterPool = [];
  for (let i = 0; i < alphabet.length; ++i) {
    for (let j = 0; j < alphabet[i][1]; ++j) {
      letterPool.push(alphabet[i][0]);
    }
  }
  return letterPool;
}

export const drawLetters = () => {
  const handOfTenLetters = [];
  const letterPoolList = createLetterPool(alphabet);
  for (let i = 0; i < 10; i++) {
    const randomLetter =
      letterPoolList[Math.floor(Math.random() * letterPoolList.length)];
    const handCount = handOfTenLetters.filter((x) => x === randomLetter).length;
    const poolCount = letterPoolList.filter((x) => x === randomLetter).length;
    if (handCount < poolCount) {
      handOfTenLetters.push(randomLetter);
    }
  }
  return handOfTenLetters;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  for (let char of input) {
    const inputLetterCount = Array.from(input).filter((x) => x === char).length;
    const handLetterCount = lettersInHand.filter(
      (x) => x === char.toUpperCase()
    ).length;

    if (inputLetterCount !== handLetterCount) {
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
