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

  return playerHand;
}

export const usesAvailableLetters = (input, lettersInHand) => {
   // check whether type(input) === str
  // create a dictionary that will house the lettersInHand (key) and number of occurences (value)
  let playerHand = {}
  for (let i of lettersInHand) {
    if (i in playerHand) {
      playerHand[i] += 1
    } else {
      playerHand[i] = 1
    }
  } 
  // return false if:
  // - used letter in not available in hand
  for (let j of input) {
    if (!(j in playerHand)) {
      return false;
    } else {
      playerHand[j] -= 1
    }
  }
  // return true if:
  // - used letter is available in hand
  // return false if:
  // - letter has been used in input word more times than is availible in hand
  return Object.values(playerHand).every(
    value => value >= 0
  )
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
