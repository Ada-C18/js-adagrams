export const drawLetters = () => {
  let alphabetPool = 'aaaaaaaaaabbccddddeeeeeeeeeeeeffggghhiiiiiiiiijkllllmmnnnnnnooooooooppqrrrrrrssssttttttuuuuvvwwxyyz'
  alphabetPool = alphabetPool.toUpperCase()
  let i = 0;
  let playerHand = []
  
  do {
    i++;
    let singleLetter = alphabetPool.charAt(Math.random() * alphabetPool.length);
    playerHand.push(singleLetter);
    alphabetPool = alphabetPool.replace(singleLetter, '');
  } while (i < 10);
}

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
