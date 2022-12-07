const lettersMap = {
  A: 9, B: 2, C: 2, 
  D: 4, E: 12, F: 2, 
  G: 3, H: 2, I: 9, 
  J: 1, K: 1, L: 4,
  M: 2, N: 6, O: 8,
  P: 2, Q: 1, R: 6, 
  S: 4, T: 6, U: 4, 
  V: 2, W: 2, X: 1,
  Y: 2, Z: 1
}

export const drawLetters = () => {
  let lettersArr = [];
  let hand = [];

  for (const key in lettersMap) {
    lettersArr.push(...Array(lettersMap[key]).fill(key));
  }

  for (let i = 0; i < 10; i++) {
    let j = Math.floor(Math.random() * (lettersArr.length - i) + i);
    let selectedLetter = lettersArr[j];
    hand.push(selectedLetter);
    lettersArr[j] = lettersArr[i];
    lettersArr[i] = selectedLetter;
  }

  return hand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  for (let letter in input) {
    let index = lettersInHand.indexOf(input[letter])
    if (index === -1) return false
    else lettersInHand.splice(index, 1);
  }
  return true;
};

export const scoreWord = (word) => {
  const scoreMap = {
    A: 1, B: 3, C: 3,
    D: 2, E: 1, F: 4,
    G: 2, H: 4, I: 1,
    J: 8, K: 5, L: 1,
    M: 3, N: 1, O: 1,
    P: 3, Q: 10, R: 1,
    S: 1, T: 1, U: 1,
    V: 4, W: 4, X: 8,
    Y: 4, Z: 10,
  }

  word = word.toUpperCase().split('');
  let score = word.reduce((score, letter) => score + scoreMap[letter], 0)
  if (word.length >= 7 && word.length <= 10) score += 8;

  return score;
};

export const highestScoreFrom = (words) => {
  const wordScoreObjs = words
    .map((word, index) => ({ index, word, score: scoreWord(word) }))
    .sort((a, b) => -1 * (a.score - b.score));

  const firstObj = wordScoreObjs[0]
  const highScore = firstObj.score;
  const highScoreObjs = wordScoreObjs.filter((wordObj) => wordObj.score === highScore );

  if (highScoreObjs.length === 1) {
    return { word: firstObj.word, score: firstObj.score }
  }

  const tenLetterObjs = highScoreObjs.filter((wordScoreObjs) => wordScoreObjs.word.length === 10);

  if (tenLetterObjs.length > 0) {
    const sortedTenLetterObjs = tenLetterObjs.sort((a, b) => a.index - b.index);
    const firstLetterObjs = sortedTenLetterObjs[0];
    return { word: firstLetterObjs.word, score: firstLetterObjs.score };
  }

  const byWordLength = highScoreObjs.sort((a, b) => a.word.length - b.word.length);
  const shortestWordObj = byWordLength[0];
  return { word: shortestWordObj.word, score: shortestWordObj.score };
};
