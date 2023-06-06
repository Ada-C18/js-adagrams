export const drawLetters = () => {
  const letterPool = [
    'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'D', 'D', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'F', 'F', 'G', 'G', 'G', 'H', 'H', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'J', 'K', 'L', 'L', 'L', 'L', 'M', 'M', 'N', 'N', 'N', 'N', 'N', 'N', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'P', 'P', 'Q', 'R', 'R', 'R', 'R', 'R', 'R', 'S', 'S', 'S', 'S', 'T', 'T', 'T', 'T', 'T', 'T', 'U', 'U', 'U', 'U', 'V', 'V', 'W', 'W', 'X', 'Y', 'Y', 'Z'
  ]

  const shuffledLetterPool = letterPool.sort(() => Math.random() - 0.5);
  
  let hand = shuffledLetterPool.slice(0, 10);

  return hand;

};

export const usesAvailableLetters = (input, lettersInHand) => {
  let loop_count = 0
  for (let letter of input) { 
    for (let handLetter of lettersInHand) {
      if (letter.toUpperCase() == handLetter.toUpperCase()) {
        loop_count ++
        const index = lettersInHand.indexOf(handLetter)
        if (index > -1) { 
          lettersInHand.splice(index, 1)
        }
      }
    }
  }
  if (loop_count === input.length) {
    return true 
  } else {
    return false
    }

};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
