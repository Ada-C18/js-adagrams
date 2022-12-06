export const drawLetters = () => {
  // Implement this method for wave 1
};

export const usesAvailableLetters = (input, lettersInHand) => {
  let letterCount = {};
  //loop through input and add each letter to a new list, count how many times each letter occur
  //count how many times each letter occurs in lettersInHand and compare

  const letters = input.split('');

  return letters.every(attemptedLetter => lettersInHand.includes(attemptedLetter));
};

  // for (let letter of input) {
  //   if (lettersInHand.includes(letter)) {
  //     return true; }

  // for (let letter of input) {
  //   if (!(letter in letterCount)) {
  //     letterCount[letter] = 0;
  //   }
  //   letterCount[letter]++;
  // }
  // if (letterCount[letter] > lettersInHand) {
  //   return false;
  // }
  // return true;

export const scoreWord = (word) => {
  // Implement this method for wave 3
  
}
export const highestScoreFrom = (words) => {
  // Implement this method for wave 4 \

}