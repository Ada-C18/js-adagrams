class Adagrams {
  static drawLetters = () => {
    // Implement this method for wave 1
    const letterPool = {
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

    let letterList = [];

    for (const [key, value] of Object.entries(letterPool)) {
      for (let i = 0; i < value; i++) {
        letterList.push(key);
      }
    }

    let hand = [];
    while (hand.length < 10) {
      hand.push(
        letterList.pop(Math.floor(Math.random() * (letterList.length - 1)))
      );
    }

    return hand;
  };

  static usesAvailableLetters = (input, lettersInHand) => {
    // Implement this method for wave 2
    let hand = [, ...lettersInHand];
    input = input.toUpperCase();
    for (const char of input) {
      if (hand.includes(char) === false) {
        return false;
      } else {
        const index = hand.indexOf(char);
        if (index > -1) {
          hand.splice(index, 1);
          console.log(hand);
        }
      }
    }
    return true;
  };

  static scoreWord = (word) => {
    // Implement this method for wave 3
    const pointValues = {
      D: 2,
      G: 2,
      B: 3,
      C: 3,
      M: 3,
      P: 3,
      F: 4,
      H: 4,
      V: 4,
      W: 4,
      Y: 4,
      K: 5,
      J: 8,
      X: 8,
      Q: 10,
      Z: 10,
      A: 1,
      E: 1,
      I: 1,
      O: 1,
      U: 1,
      L: 1,
      N: 1,
      R: 1,
      S: 1,
      T: 1,
    };

    let score = 0;

    word = word.toUpperCase();

    for (const letter of word) {
      score += pointValues[letter];
    }

    if (word.length > 6) {
      score += 8;
    }
    return score;
  };

  static highestScoreFrom = (words) => {
    // Implement this method for wave 4
    let highestScore = Adagrams.scoreWord(words[0]);

    for (const word of words) {
      if (Adagrams.scoreWord(word) >= highestScore) {
        highestScore = Adagrams.scoreWord(word);
      }
    }

    const highestScoreWords = words.filter(
      (word) => Adagrams.scoreWord(word) === highestScore
    );

    const lengthTenWords = highestScoreWords.filter(
      (word) => word.length === 10
    );

    const lengthMinWord = highestScoreWords.reduce(
      (shortestWord, currentWord) => {
        return currentWord.length < shortestWord.length
          ? currentWord
          : shortestWord;
      }
    );

    return lengthTenWords.length > 0
      ? { word: lengthTenWords[0], score: highestScore }
      : { word: lengthMinWord, score: highestScore };
  };
}

export default Adagrams;
