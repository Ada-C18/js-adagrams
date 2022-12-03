class Adagrams {
  drawLetters = () => {
    // Implement this method for wave 1
    const poolOfLettersDict = {
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
    const lettersInHand = new Array();
    let counter = 0;
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    while (counter < 10) {
      let choice = characters.charAt(Math.floor(Math.random() * 26));
      if (poolOfLettersDict[choice] > 0) {
        lettersInHand.push(choice);
        counter += 1;
        poolOfLettersDict[choice] -= 1;
      }
    }
    return lettersInHand;
  };

  usesAvailableLetters = (input, lettersInHand) => {
    const dictLettersInHand = {};
    for (let i = 0; i < lettersInHand.length; i++) {
      if (lettersInHand[i] in dictLettersInHand) {
        let val = dictLettersInHand[lettersInHand[i]];
        dictLettersInHand[lettersInHand[i]] = val + 1;
      } else {
        dictLettersInHand[lettersInHand[i]] = 1;
      }
    }
    for (let i = 0; i < input.length; i++) {
      if (input[i] in dictLettersInHand) {
        let val1 = dictLettersInHand[input[i]];
        val1 = val1 - 1;
        dictLettersInHand[input[i]] = val1;
        if (val1 === 0) {
          delete dictLettersInHand[input[i]];
        }
      } else {
        return false;
      }
    }
    return true;
  };

  scoreWord = (word) => {
    // Implement this method for wave 3
    let scoreDict = {
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
    word = word.toUpperCase();
    for (let i = 0; i < word.length; i++) {
      if (word.charAt(i) in scoreDict) {
        score = score + scoreDict[word.charAt(i)];
      }
    }
    if (word.length > 6) {
      score += 8;
    }
    return score;
  };
  // pseudocode for wave 4:
  // Call the above scoreWord function and calculate score of each word within the word array and
  // store it in a dictionary object named wordScoreDict with key as the word and value as score of each word and
  // in the same loop keep a track of the maxscore
  // initialize another resultant dictionary winningWord which will return the winning word and score
  // Loop through all keys in wordScoreDict dictionary object and check if any value matches with
  // maxvalue. If it does match, checjk if the length of that word is equal to 10.
  // if it equals 10, then return it and break the loop
  // also check minimum word length side by side in each key value and at the end, return the word
  // which has min word length and its score in result dictionary object.

  highestScoreFrom = (words) => {
    // Implement this method for wave 4
    let wordScoreDict = {};
    let maxScore = -1;
    let maxWord = "";
    for (let i = 0; i < words.length; i++) {
      let score = this.scoreWord(words[i]);
      wordScoreDict[words[i]] = score;
      if (score > maxScore) {
        maxScore = score;
        maxWord = words[i];
      }
      // maxScore = Math.max(maxScore, score);
    }
    let winningWord = {};
    let minWordLength = maxWord.length;

    for (const key in wordScoreDict) {
      let sum = wordScoreDict[key];
      if (sum === maxScore) {
        if (key.length === 10) {
          winningWord = { word: key, score: sum };
          break;
        }
        if (key.length <= minWordLength) {
          minWordLength = key.length;
          winningWord = { word: key, score: sum };
        }
      }
    }
    return winningWord;
  };
}
export default Adagrams;
