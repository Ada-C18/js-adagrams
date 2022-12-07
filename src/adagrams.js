
const points = {'A': 1, 'E': 1, 'I': 1, 'O': 1, 'U': 1, 'L': 1,
'N': 1, 'R': 1, 'S': 1, 'T': 1, 'D': 2, 'G': 2, 'B': 3, 'C':3, 'M': 3, 'P': 3,
'F': 4, 'H': 4, 'V': 4, 'W': 4, 'Y': 4, 'K': 5, 'J': 8, 'X': 8, 
'Q': 10, 'Z': 10}

export const drawLetters = () => {
  // Implement this method for wave 1

  const letterPool = 'AAAAAAAAABBCCDDDDEEEEEEEEEEEEFFGGGHHIIIIIIIIIJKLLLLMMNNNNNNOOOOOOOOPPQRRRRRRSSSSTTTTTTUUUUVVWWXYYZ'
  let tempPool = letterPool.map((x) => x)

  let drawnLetters = [];

  for (let i = 0; drawnLetters.length<10; i++) {
    let letter = letterPool[Math.floor(Math.random() * letterPool.length)]
    if (tempPool.includes(letter)) {
      tempPool = tempPool.replace(letter, '');
      drawnLetters.push(letter);
    }
  }
  return drawnLetters;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  let newList = lettersInHand.map((x)=>x)
  let inputUpper = input.toUpperCase()

  for (let i = 0; i < input.length; i++) {
    if (newList.includes(inputUpper[i])) {
      const index = newList.indexOf(inputUpper[i])
      newList.splice(index, 1)
      continue;
    } else {
      return false; 
    }
  }
  return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
  let score = 0;
  if (!word) {
    return score;
  }

  const wordUpper = word.toUpperCase()

  for (let index in wordUpper) {
    score += points[wordUpper[index]]
  }
  if (word.length >= 7) {
    score += 8
  }
  return score;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
  let highestWord = ''
  let highestScore = 0
  
  for (let index in words) {
    let score = scoreWord(words[index])
      if (score > highestScore) {
        highestScore = score
        highestWord = words[index]
      } else if (score == highestScore){
        if (
          highestWord.length != 10 && (
            words[index].length < highestWord.length ||
            words[index].length == 10
          )) {
          highestWord = words[index]
          }
        }
      }
  let wordScore = {'score': highestScore, 'word': highestWord}
  return wordScore
  };
