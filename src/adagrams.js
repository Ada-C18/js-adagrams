const letterDistribution = ['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 
'B', 'B', 'C', 'C', 'D', 'D', 'D', 'D', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 
'E', 'E', 'E', 'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H', 'I', 'I', 'I', 'I', 
'I', 'I', 'I', 'I', 'I', 'J', 'K', 'L', 'L', 'L', 'L', 'M', 'M', 'N', 'N', 
'N', 'N', 'N', 'N', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'P', 'P', 'Q', 
'R', 'R', 'R', 'R', 'R', 'R', 'S', 'S', 'S', 'S', 'T', 'T', 'T', 'T', 'T', 
'T', 'U', 'U', 'U', 'U', 'V', 'V', 'W', 'W', 'X', 'Y', 'Y', 'Z']

const scoreChart = {
  'A': 1,
  'E': 1,
  'I': 1,
  'O': 1,
  'U': 1,
  'L': 1,
  'N': 1,
  'R': 1,
  'S': 1,
  'T': 1,
  'D': 2,
  'G': 2,
  'B': 3,
  'C': 3,
  'M': 3,
  'P': 3,
  'F': 4,
  'H': 4,
  'V': 4,
  'W': 4,
  'Y': 4,
  'K': 5,
  'J': 8,
  'X': 8,
  'Q': 10,
  'Z': 10
}

export const drawLetters = () => {
  let letterPool = letterDistribution;
  let letterBank = [];
  
  for (let i=0; i<10; i++) {
    let randomIndex = Math.floor(Math.random() * letterPool.length);
    let randomLetter = letterPool[randomIndex];
    letterBank.push(randomLetter);
    letterPool.splice(randomIndex, 1);
  }
  return letterBank;
  };

export const usesAvailableLetters = (input, lettersInHand) => {
  let letterBank = lettersInHand.slice();
  for (let letter of input) {
    if (letterBank.includes(letter)) {
      letterBank.splice(letter, 1);
    } else {
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  let totalScore = 0;
  let letters = Array.from(word.toUpperCase());
  for (let i=0; i < letters.length; i++) {
    totalScore += scoreChart[letters[i]];
  }
  if (word.length >= 7 && word.length < 11) {
    totalScore += 8;
  }
  return totalScore;
};

export const highestScoreFrom = (words) => {
  // words = ['list', 'of', 'words']
  // call scoreWord() on each (forEach?)
  // returns an object {'word': winningWord, 'score': winningWordScore}
  const wordScores = words.map(scoreWord);
  let highScore = 0;
  let challenger = undefined;
  let challengerCounter = 0
  for (let score of wordScores) {
    if (score > highScore) {
      highScore = score;
    } else if (score === highScore) {
      challenger = {'word': words[challengerCounter], 'score': score};
    }
    challengerCounter += 1;
  }

  let scoreIndex = wordScores.indexOf(highScore);
  let winningWord = words[scoreIndex];
  let winningPair = {'word': winningWord, 'score': highScore};
  
  if (challenger) {
    const champion = tiebreaker(challenger, winningPair);
    return champion;
  }

  return winningPair;
};

const tiebreaker = (challenger, winningPair) => {
  if (challenger['word'].length === winningPair['word'].length) {
    return winningPair;
  } else if (challenger['word'].length === 10) {
    return challenger;
  } else if (winningPair['word'].length === 10) {
    return winningPair;
  } else if (challenger['word'].length < winningPair['word'].length) {
    return challenger;
  } else {
    return winningPair;
  }
}