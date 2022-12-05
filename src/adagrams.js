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
};

export const drawLetters = () => {
  let lettersStr = '';
  Object.entries(LETTER_POOL).map(([key, value]) => {
    lettersStr += key.repeat(value);
  });
  const lettersArr = lettersStr.split('');

  const indices = [];
  const letters = [];
  while (letters.length < 10) {
    const randomIndex = Math.floor(Math.random() * lettersArr.length);
    if (!indices.includes(randomIndex)) {
      indices.push(randomIndex);
      letters.push(lettersArr[randomIndex]);
    }
  }
  return letters;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  const letterFrequency = {};

  for (const letter of lettersInHand) {
    // if (letter in letterFrequency) {
    //   letterFrequency[letter] += 1;
    // } else {
    //   letterFrequency[letter] = 1;
    // }
    letterFrequency[letter] = letter in letterFrequency ? +1 : 1;
  }

  for (const char of input) {
    if (letterFrequency[char] >= 1) {
      letterFrequency[char] -= 1;
    } else if (!letterFrequency[char]) {
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  const letterScores = {
    1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
    2: ['D', 'G'],
    3: ['B', 'C', 'M', 'P'],
    4: ['F', 'H', 'V', 'W', 'Y'],
    5: ['K'],
    8: ['J', 'X'],
    10: ['Q', 'Z'],
  };

  let score = 0;

  for (const scoreValue in letterScores) {
    for (const letter of word) {
      if (letterScores[scoreValue].includes(letter.toUpperCase())) {
        score += parseFloat(scoreValue);
      }
    }
  }

  if (word.length > 6 && word.length < 11) {
    score += 8;
  }

  return score;
};

export const highestScoreFrom = (words) => {
  const wordWScore = [];
  for (const word of words) {
    wordWScore.push({
      word: word,
      score: scoreWord(word),
    });
  }

  let highest = wordWScore[0];
  for (const wordObj of wordWScore) {
    if (wordObj.score > highest.score) {
      highest = wordObj;
    }
  }

  const wordObjBestScore = checkTie(highest, wordWScore);
  return wordObjBestScore;
};

const checkTie = (highest, wordWScore) => {
  const sameScores = [];
  for (const wordObj of wordWScore) {
    if (wordObj.score === highest.score) {
      sameScores.push(wordObj);
    }
  }

  if (sameScores.length === 1) {
    return highest;
  }

  let tieBreakerWordObj = sameScores[0];
  for (const wordObj of sameScores) {
    const word = wordObj.word;
    if (word.length === 10) {
      return wordObj;
    } else if (word.length < tieBreakerWordObj.word.length) {
      tieBreakerWordObj = wordObj;
    }
  }
  return tieBreakerWordObj;
};
