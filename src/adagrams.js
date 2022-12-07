class Adagrams {
  static drawLetters() {
    const letterDict = {
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

    let letterList = [];

    //populate list with individual letters (accounts for distribution)
    for (const [key, value] of Object.entries(letterDict)) {
      for (let i = 0; i < value; i++) {
        letterList.push(key);
      }
    }

    //select 10 random unique letters from letterlist
    let drawList = []
    for (let i = 0; i < 10; i++) {
      let randIndex = Math.floor(Math.random() * (letterList.length));
      drawList.push(letterList[randIndex]);
      letterList.splice(randIndex, 1);
    }
    return drawList;
  }

  static usesAvailableLetters(input, lettersInHand) {
    for (const letter of input) {
      if (lettersInHand.includes(letter)) {
        const letterIndex = lettersInHand.indexOf(letter);
        lettersInHand.splice(letterIndex, 1);
      } else {
        return false;
      }
    }
    return true;
  }

  static scoreWord(word = '') {

    const WORD = word.toUpperCase();
    let points = 0;

    for (const letter of WORD) {
      points += Number(this.getPointsByLetter(letter));
    }

    if (WORD.length >= 7) {
      points += 8;
    }
    return points;
  }

  // helper function
  static getPointsByLetter(letter) {
    const pointDict = {
      1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
      2: ['D', 'G'],
      3: ['B', 'C', 'M', 'P'],
      4: ['F,', 'H', 'V', 'W', 'Y'],
      5: ['K'],
      8: ['J', 'X'],
      10: ['Q', 'Z']
    }
    return Object.keys(pointDict).find(points => pointDict[points].includes(letter));
  }

  static highestScoreFrom(words) {
    let winningWord = '';
    let winningScore = 0;
    for (const word of words) {
      let score = this.scoreWord(word);
      if (score > winningScore) {
        winningWord = word;
        winningScore = score;
      } else if (score === winningScore) {
        if (winningWord.length === 10) {
          continue
        } else if (word.length === 10) {
          winningWord = word;
        } else if (word.length < winningWord.length) {
          winningWord = word;
        }
      }
    }
    return { 'word': winningWord, 'score': winningScore }
  }
}

export default Adagrams;