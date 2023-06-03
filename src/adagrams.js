const LETTER_POOL = {
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
    Z: 1,
}

const LETTER_VALUE = {
    A: 1, 
    B: 3, 
    C: 3, 
    D: 2, 
    E: 1, 
    F: 4, 
    G: 2, 
    H: 4, 
    I: 1, 
    J: 8, 
    K: 5, 
    L: 1, 
    M: 3, 
    N: 1, 
    O: 1, 
    P: 3, 
    Q: 10, 
    R: 1, 
    S: 1, 
    T: 1, 
    U: 1, 
    V: 4, 
    W: 4, 
    X: 8, 
    Y: 4, 
    Z: 10,
}

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
}

export const drawLetters = () => {
  const alphabet = Object.keys(LETTER_POOL);
  const drawnLetters = [];

  while (drawnLetters.length < 10) {
    const randomLetter = alphabet[getRandomInt(26)];
    const quantity = LETTER_POOL[randomLetter]; 
    let counter = 0;

    for (let i = 0; i < drawnLetters.length; i++) {
      if (drawnLetters[i] === randomLetter) {
        counter += 1;
      } 
    }
    if (counter < quantity) {
      drawnLetters.push(randomLetter);
    }
  }
  return drawnLetters;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  const lettersInHandMap = new Map()
  lettersInHand.forEach(letter => lettersInHandMap.set(letter));
  const inputUpper = input.toUpperCase();

  for (const letter of inputUpper) {
    if (lettersInHandMap.has(letter) === true) {
      lettersInHandMap.delete(letter);
    } else {
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  const wordUpper = word.toUpperCase();
  let score = 0;

  for (const letter of wordUpper) {
    score += LETTER_VALUE[letter];
  }

  if (wordUpper.length > 6) {
    score += 8;
  }

  return score;
};

const tieBreaker = (potentialWinningWords) => {
  const tenLetterWords = [];
  const shortestWords = [];
  let shortestWordLength = 11
  
  for (const word of potentialWinningWords) {
    if (word.length === 10) {
      tenLetterWords.push(word)
    } else if (word.length < shortestWordLength) {
      shortestWordLength = word.length;
    }
  }

  for (const word of potentialWinningWords) {
    if (word.length === shortestWordLength) {
      shortestWords.push(word);
    }
  }

  if (tenLetterWords.length > 0) {
    return tenLetterWords[0];
  } else {
    return shortestWords[0];
  }
};

export const highestScoreFrom = (words) => {
  const wordsScores = new Map();
  let scoreCounter = 0;
  const potentialWinners = [];

  for (const word of words) {
    wordsScores.set(word, scoreWord(word));
    if (wordsScores.get(word) > scoreCounter) {
      scoreCounter = wordsScores.get(word);
    }
  }

  for (const word of wordsScores.keys()) {
    if (wordsScores.get(word) === scoreCounter) {
      potentialWinners.push(word);
    }
  }

  if (potentialWinners.length === 1) {
    const winningWord = {
      'word': potentialWinners[0],
      'score': wordsScores.get(potentialWinners[0]),
    };
    return winningWord;
  } else {
    const tieBreakerWinner = tieBreaker(potentialWinners);
    const winningWord = {
      'word': tieBreakerWinner,
      'score': wordsScores.get(tieBreakerWinner),
    };
    return winningWord;
  }
};
