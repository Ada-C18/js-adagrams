export const drawLetters = () => {
  // Implement this method for wave 1
  const LETTER_POOL = {
    "A": 9,
    "B": 2,
    "C": 2,
    "D": 4,
    "E": 12,
    "F": 2,
    "G": 3,
    "H": 2,
    "I": 9,
    "J": 1,
    "K": 1,
    "L": 4,
    "M": 2,
    "N": 6,
    "O": 8,
    "P": 2,
    "Q": 1,
    "R": 6,
    "S": 4,
    "T": 6,
    "U": 4,
    "V": 2,
    "W": 2,
    "X": 1,
    "Y": 2,
    "Z": 1
  };

  const theLetters = [];
  for (const letter in LETTER_POOL) {
    for (let i = 0; i < LETTER_POOL[letter]; i++) {
      theLetters.push(letter)
    }
  }

  const theHand = [];
  for (let i = 0; i < 10; i++) {
    const i = Math.floor(Math.random() * theLetters.length);
    const letter = theLetters[i];
    theHand.push(letter);
    theLetters.splice(i,1);

  }
  return theHand

};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  const availableLetters = lettersInHand.map((x) => x);
  for (const letter of input) {
    if (availableLetters.includes(letter.toUpperCase())) {
      let indexToBeRemoved = availableLetters.indexOf(letter);
      availableLetters.splice(indexToBeRemoved, 1);
    } else {
      return false;
      }
    }
    return true;
  }; 


export const scoreWord = (word) => {
  // Implement this method for wave 3
  let score = 0;
  const SCOREOBJ = {
    'F': 4,'H': 4,'V': 4,'W': 4,'Y': 4,
    'K': 5,'J': 8,'X': 8,'Q':10,'Z':10,
    'A': 1,'E': 1,'I': 1,'O': 1,'U': 1,
    'L': 1,'N': 1,'R': 1,'S': 1,'T': 1, 'D': 2, 
    'G': 2,'B': 3,'C': 3,'M': 3,'P': 3 };
  word = word.toUpperCase()
  for (let letter of word) {
      score += SCOREOBJ[letter];
    }
  if (word.length >= 7) {
    score += 8; }
    return score;
};

export const highestScoreFrom = (words) => {
    // Implement this method for wave 4
    
  let highestScore = 0;
  let topWord = "";
    // let tieArray = [];
  for (const word of words) {
    let score = scoreWord(word)
    if (highestScore < score) {
      highestScore = score;
      topWord = word;
    }
    else if (highestScore === score && word.length === 10 && topWord.length !== 10) {
      topWord = word;
    }
    else if (highestScore === score && word.length < topWord.length && topWord.length !== 10) {
      topWord = word;
    }
  }
  const theWinner = {"word": topWord, "score": highestScore}; 
  return theWinner;
  };

  