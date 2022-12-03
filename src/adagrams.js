class Adagrams {


  static drawLetters = () => {
    // Implement this method for wave 1
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
    const letters = [];
    for (const key in LETTER_POOL) {
      for (let i = 0; i < LETTER_POOL[key]; i++) {
        letters.push(key);
      }
    }

    const shuffled = letters.sort(() => 0.5 - Math.random());
    let userHand = shuffled.slice(0, 10);
    // console.log(userHand);
    return userHand;
  };





  static usesAvailableLetters = (input, lettersInHand) => {
    // Implement this method for wave 2
    const itemCounter = (array, item) => {
      let counter = 0;
      array.flat(Infinity).forEach((x) => {
        if (x == item) {
          counter++;
        }
      });
      return counter;
    };

    for (let letter of input) {
      if (!lettersInHand.includes(letter)) {
        return false;
      } else {
        if (
          itemCounter(input.split(""), letter) >
          itemCounter(lettersInHand, letter)
        ) {
          return false;
        }
      }
    }
    return true;
  };


  static scoreWord = (word) => {
    // Implement this method for wave 3
    const SCORE_CHART = {
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
    
    const wordUpper = word.toUpperCase();

    let score = 0;
    if (wordUpper.length < 7) {
      score += 0;
    } else {
      score += 8;
    }

    if (wordUpper.length === 0) {
      return score;
    } else {
      for (const letter of wordUpper) {
        if (letter in SCORE_CHART) {
          score += SCORE_CHART[letter];
        }
      }
    }
    return score;
  };

  static highestScoreFrom = (words) => {
    // Implement this method for wave 4
    //pseudocode
    //empty an array arr.length = 0: https://www.javascripttutorial.net/array/4-ways-empty-javascript-array/

    let highestScore = 0;
    let highestScoreList = [];

    for (const word of words) {
      let score = scoreWord(word);
      if (score > highestScore) {
        highestScore = score;
        highestScoreList.length = 0;
        highestScoreList.push(word);
      } else if (score === highestScore) {
        highestScoreList.push(word);
      }
    }
    let shortestWord = highestScoreList[0];
    let lenShortestWord = shortestWord.length;

    for (const item of highestScoreList) {
      if (item.length === 10) {
        return { word: item, score: highestScore };
      } else if (item.length < lenShortestWord) {
        shortestWord = item;
        lenShortestWord = shortestWord.length;
      }
    }

    return { word: shortestWord, score: highestScore };
  };
}

export default Adagrams;