import LetterTiles from '../letters.json';

export const drawLetters = () => {
  let letterBank = [];
  let playerHand = [];
  
  for (let letter of Object.keys(LetterTiles)) {
    for (let step = 0; step < LetterTiles[letter].frequency; step++) {
      letterBank.push(letter)
    }
  }

  while (playerHand.length < 10) {
    let index = (Math.floor(Math.random() * letterBank.length));
    let currentLetter = letterBank[index];
    playerHand.push(currentLetter);
    letterBank.splice(index, 1);
  }
    return playerHand;

};

export const usesAvailableLetters = (input, lettersInHand) => {
  const word = input.toUpperCase();
  let availableLetters = [...lettersInHand];

  for (let letter of word) {
    if (!availableLetters.includes(letter)) {
      return false;
    }
    availableLetters.splice(availableLetters.lastIndexOf(letter), 1);
  }

  return true;
};

export const scoreWord = (word) => {
  let score = 0;
  word = word.toUpperCase();

  for (let letter of word) {
    score += LetterTiles[letter].value
  }

  if (7 <= word.length && word.length <= 10) {
    score += 8
  }

  return score;
};

export const highestScoreFrom = (words) => {
  let allScores = {};
  let bestWord = null;
  let bestScore = 0;

  words.forEach((word) => {allScores[word] = scoreWord(word)});

  for (let word of words) {
    let currentScore = allScores[word]
    if (currentScore > bestScore) {
      bestWord = word;
      bestScore = currentScore;
    } else if (currentScore === bestScore) {
        if (word.length === 10 && bestWord.length != 10) {
          bestWord = word;
        } else if (word.length < bestWord.length && bestWord.length != 10) {
              bestWord = word;
            }
      }
    }
  return {"word": bestWord, "score": bestScore};
};