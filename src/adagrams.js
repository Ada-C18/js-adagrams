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
let scoreDict = {
  'A': 1,
  'B': 3,
  'C': 3,
  'D': 2,
  'E': 1,
  'F': 4,
  'G': 2,
  'H': 4,
  'I': 1,
  'J': 8,
  'K': 5,
  'L': 1,
  'M': 3,
  'N': 1,
  'O': 1,
  'P': 3,
  'Q': 10,
  'R': 1,
  'S': 1,
  'T': 1,
  'U': 1,
  'V': 4,
  'W': 4,
  'X': 8,
  'Y': 4,
  'Z': 10
  }

export const drawLetters = () => {
  const letterList = Object.entries(letterDict)
  let letterFreq = [];
  for (let i = 0; i < 26; ++i) {
    for (let j = 0; j < letterList[i][1]; ++j) {
        letterFreq.push(letterList[i][0]);
    }
  }
  let letterBank = []
  let letterDict_deepcopy = JSON.parse(JSON.stringify(letterDict));
  while (letterBank.length < 10){
    let randomLetter = letterFreq[Math.floor(Math.random() * 26)];
    if (letterDict_deepcopy[randomLetter] > 0) {
      letterBank.push(randomLetter)
      letterDict_deepcopy[randomLetter] -= 1
    }
  };
  return letterBank

}

// export const drawLetters = () => {
//   // Implement this method for wave 1
//   let letterBank = []
//   let letterDict_deepcopy = JSON.parse(JSON.stringify(letterDict));
//   while (letterBank.length < 10) {
//     const keyList = Object.keys(letterDict_deepcopy);
//     let randomLetter = keyList[Math.floor(Math.random() * keyList.length )];
//     // console.log(randomLetter)
//     if (letterDict_deepcopy[randomLetter] > 0) {
//       letterBank.push(randomLetter)
//       letterDict_deepcopy[randomLetter] -= 1
//     }
//   } return letterBank
// };

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

export const validateLetter = function charIsLetter(char) {
  if (typeof char !== 'string') {
    return false;
  }

  return /^[a-zA-Z]+$/.test(char);
}
export const scoreWord = (word) => {
  // Implement this method for wave 3
  if (word.length === 0) return 0;
  
  let caseWord = word.toUpperCase();
  let total = 0;
  for (let i = 0; i < caseWord.length; i++){
    if(validateLetter(word[i])== true){
    let val = scoreDict[caseWord[i]]
    total += val;}
  }
  if (word.length >= 7) total += 8
  return total;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
let wordMap = new Map()
let maxScore = 0
let winningWords = []
let tenLetterWinningWords = []

  for (let word of words) {
    let score = scoreWord(word)
    wordMap.set(word, score)
    if (score > maxScore) {
      maxScore = score
    }
  } 
  // destructuring
  for (let [word,score] of wordMap) {
    if (score === maxScore) {
      if (word.length === 10) {
        tenLetterWinningWords.push(word)
      } else {
      winningWords.push(word)
    }
  }
  }
  if (tenLetterWinningWords.length > 0) {
    return {word : tenLetterWinningWords[0], score : maxScore}
    } else {
      if (winningWords.length > 1 && winningWords.length != 10 ) {
        winningWords.sort((a, b) => a.length - b.length)
      } return {word : winningWords[0], score : maxScore}
    }
};
