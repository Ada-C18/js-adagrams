export const drawLetters = () => {
  const ENGLISH_LETTERS = generateAlphabet();
  const LETTERS_FREQUENCY = [
    9, 2, 2, 4, 12, 2, 3, 2, 9, 1, 1, 4, 2, 6, 8, 2, 1, 6, 4, 6, 4, 2, 2, 1, 2,
    1,
  ];
  const NUM_OF_DRAW_LETTERS = 10;

  const lettersInHand = [];
  let randomIndex;
  while (lettersInHand.length < NUM_OF_DRAW_LETTERS) {
    randomIndex = Math.floor(Math.random() * ENGLISH_LETTERS.length);

    if (LETTERS_FREQUENCY[randomIndex]) {
      lettersInHand.push(ENGLISH_LETTERS[randomIndex]);
      LETTERS_FREQUENCY[randomIndex] -= 1;
    } else continue;
  }
  // console.log(`lettersInHand=   ${lettersInHand}`);
  return lettersInHand;
};

function generateAlphabet(capital = true) {
  return [...Array(26)].map((_, i) =>
    String.fromCharCode(i + (capital ? 65 : 97))
  );
}

export const usesAvailableLetters = (input, lettersInHand) => {
  const mapLetters = {};
  for (const letter of lettersInHand) {
    if (letter in mapLetters) {
      mapLetters[letter] += 1;
    } else {
      mapLetters[letter] = 1;
    }
  }

  for (const letter of input) {
    if (mapLetters[letter] > 0) {
      mapLetters[letter] -= 1;
    } else {
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  const SCORE_CHART_DICT = {
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
  };
  let score = 0;
  const wordUp = word.toUpperCase();
  if (wordUp.length >= 7 && wordUp.length <= 10) {
    score = 8;
  }
  for (const letter of wordUp) {
    score += SCORE_CHART_DICT[letter];
  }
  return score;
};

export const highestScoreFrom = (words) => {
  let mapWordsScores = {};
  for (const word of words) {
    mapWordsScores[word] = scoreWord(word);
  }
  const maxScore = Math.max(...Object.values(mapWordsScores));
  const equalScoreWords = [];
  for (const [_word_, _score_] of Object.entries(mapWordsScores)) {
    if (_score_ === maxScore) {
      if (_word_.length === 10) {
        return { word: _word_, score: maxScore };
      }
      equalScoreWords.push(_word_);
    }
  }
  equalScoreWords.sort((a, b) => a.length - b.length);
  return { word: equalScoreWords[0], score: maxScore };
};
