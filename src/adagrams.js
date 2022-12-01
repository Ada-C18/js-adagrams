import collect from 'collect.js';

const LETTER_DATA = [
  { letter: "A", quantity: 9, value: 1 },
  { letter: "B", quantity: 2, value: 3 },
  { letter: "C", quantity: 2, value: 3 },
  { letter: "D", quantity: 4, value: 2 },
  { letter: "E", quantity: 12, value: 1 },
  { letter: "F", quantity: 2, value: 4 },
  { letter: "G", quantity: 3, value: 2 },
  { letter: "H", quantity: 2, value: 4 },
  { letter: "I", quantity: 9, value: 1 },
  { letter: "J", quantity: 1, value: 8 },
  { letter: "K", quantity: 1, value: 5 },
  { letter: "L", quantity: 4, value: 1 },
  { letter: "M", quantity: 2, value: 3 },
  { letter: "N", quantity: 6, value: 1 },
  { letter: "O", quantity: 8, value: 1 },
  { letter: "P", quantity: 2, value: 3 },
  { letter: "Q", quantity: 1, value: 10 },
  { letter: "R", quantity: 6, value: 1 },
  { letter: "S", quantity: 4, value: 1 },
  { letter: "T", quantity: 6, value: 1 },
  { letter: "U", quantity: 4, value: 1 },
  { letter: "V", quantity: 2, value: 4 },
  { letter: "W", quantity: 2, value: 4 },
  { letter: "X", quantity: 1, value: 8 },
  { letter: "Y", quantity: 2, value: 4 },
  { letter: "Z", quantity: 1, value: 10 },
];

const letterSoup = (letterData) => {
  let letterList = []

  for (const data of letterData) {
    for (let runner = 0; runner < data['quantity']; runner++) {
      letterList.push(data['letter']);
    }
  } return letterList;
}

const todaysSoup = collect(letterSoup(LETTER_DATA));

export const drawLetters = () => {
  let letters = []

  while (letters.length < 10) {
    let collectionLetters = collect(letters);

    const randomLetter = todaysSoup[(Math.random() * letters.length)+1];
    
    if (collectionLetters.count(randomLetter) < todaysSoup.count(randomLetter)) {
      letters.push(randomLetter);
    }
  }
  return console.log(letters)
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
