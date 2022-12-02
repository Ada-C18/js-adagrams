let letterDict = {
  'A': 9,
  'B': 2,
  'C': 2,
  'D': 4,
  'E': 12,
  'F': 2,
  'G': 3,
  'H': 2,
  'I': 9,
  'J': 1,
  'K': 1,
  'L': 4,
  'M': 2,
  'N': 6,
  'O': 8,
  'P': 2,
  'Q': 1,
  'R': 6,
  'S': 4,
  'T': 6,
  'U': 4,
  'V': 2,
  'W': 2,
  'X': 1,
  'Y': 2,
  'Z': 1
}
export const drawLetters = () => {
  // Implement this method for wave 1
  let letterBank = []
  let letterDict_deepcopy = JSON.parse(JSON.stringify(letterDict));
  while (letterBank.length < 10) {
    const keyList = Object.keys(letterDict_deepcopy);
    let randomLetter = keyList[Math.floor(Math.random() * keyList.length )];
    // console.log(randomLetter)
    if (letterDict_deepcopy[randomLetter] > 0) {
      letterBank.push(randomLetter)
      letterDict_deepcopy[randomLetter] -= 1
    }
  } return letterBank
};
export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  let caseWord = input.toUpperCase()
  for (let i of caseWord) {
    if (!lettersInHand.includes(i)) {
      return false
    } else {
      // remove letter i from letters in hand
      const index = lettersInHand.indexOf(i);
      if (index > -1) { // only splice array when item is found
        lettersInHand.splice(index, 1); // 2nd parameter means remove one item only
      }
    }
  }
  return true
};



// # Wave 2

// def uses_available_letters(word, letter_bank):
//     letter_bank_copy = letter_bank.copy()
//     if len(word) > len(letter_bank_copy):
//         return False
//     for letter in word.upper():
//         if letter in letter_bank_copy:
//             letter_bank_copy.remove(letter)
//         else:
//             return False

//     return True


export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
