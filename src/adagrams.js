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
  const hand = [];

  while (hand.length < 10) {
    const randomIndex = Math.floor(Math.random() * letterPool.length);
    const letter = letterPool[randomIndex];

    if (hand.filter((l) => l === letter).length < letterPool.filter((l) => l === letter).length) {
      hand.push(letter);
    }
  }

  return hand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  const handCopy = [...lettersInHand];

  for (const letter of input) {
    const index = handCopy.indexOf(letter);

    if (index === -1) {
      return false;
    }

    handCopy.splice(index, 1);
  }

  return true;
};


export const scoreWord = (word) => {
    const letterScores = {
      A: 1, E: 1, I: 1, O: 1,
      U: 1, L: 1, N: 1, R: 1,
      S: 1, T: 1, D: 2, G: 2,
      B: 3, C: 3, M: 3, P: 3,
      F: 4, H: 4, V: 4, W: 4,
      Y: 4, K: 5, J: 8, X: 8,
      Q: 10, Z: 10,
  };

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
