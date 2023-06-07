export const drawLetters = () => {
  const letterPool = [
    ...Array(9).fill('A'),
    ...Array(2).fill('B'),
    ...Array(2).fill('C'),
    ...Array(4).fill('D'),
    ...Array(12).fill('E'),
    ...Array(2).fill('F'),
    ...Array(3).fill('G'),
    ...Array(2).fill('H'),
    ...Array(9).fill('I'),
    'J',
    'K',
    ...Array(4).fill('L'),
    ...Array(2).fill('M'),
    ...Array(6).fill('N'),
    ...Array(8).fill('O'),
    ...Array(2).fill('P'),
    'Q',
    ...Array(6).fill('R'),
    ...Array(4).fill('S'),
    ...Array(6).fill('T'),
    ...Array(4).fill('U'),
    ...Array(2).fill('V'),
    ...Array(2).fill('W'),
    'X',
    ...Array(2).fill('Y'),
    'Z',
  ];
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
