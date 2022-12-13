export const drawLetters = () => {
  const letterPool={
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
    Z: 1
  };
  const availableLetters = [];
    
  for (const [letter,frequency] of Object.entries(letterPool)){
    for (let i = 0;i< frequency;i++){
      availableLetters.push(letter)}   
  }
  const hand=[]
  for (let i = 0; i < 10; i++) {
    const thisLetter = availableLetters[Math.floor(Math.random() * availableLetters.length)]
    hand.push(thisLetter)
    let letterIndex = availableLetters.indexOf(thisLetter)
    availableLetters.splice(letterIndex, 1)
}

return hand;
};
    
export const usesAvailableLetters = (input, lettersInHand) => {
  const upperCase = input.toUpperCase();

  for (let letter of upperCase) {
    if (lettersInHand.includes(letter)) {
        let index = lettersInHand.indexOf(letter)
        lettersInHand.splice(index, 1)
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
