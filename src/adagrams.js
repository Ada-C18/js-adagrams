import { letterPoolArr, letterScore } from './demo/constants';

class Adagrams {
  drawLetters() {
    // Implement this method for wave 1
    let lettersInHand = [];
    let myLetterPoolArr = JSON.parse(JSON.stringify(letterPoolArr));
    for (let i = 0; i < 10; i++) {
      const randInt =
        Math.floor(Math.random() * myLetterPoolArr.length - 1) + 1;
      const myLetter = myLetterPoolArr[randInt];
      lettersInHand.push(myLetter);
      myLetterPoolArr.splice(randInt, 1);
    }
    return lettersInHand;
  }

  usesAvailableLetters(input, lettersInHand) {
    // Implement this method for wave 2
    let myLettersInHand = JSON.parse(JSON.stringify(lettersInHand));
    for (let i = 0; i < input.length; i++) {
      const currLetter = input[i].toUpperCase();
      if (myLettersInHand.includes(currLetter)) {
        const index = myLettersInHand.indexOf(currLetter);
        myLettersInHand.splice(index, 1);
      } else {
        return false;
      }
    }
    return true;
  }

  scoreWord(word) {
    // Implement this method for wave 3
    let score = 0;
    if (!word) {
      return score;
    }

    for (let i = 0; i < word.length; i++) {
      score += letterScore[word[i].toUpperCase()];
    }
    if (word.length >= 7 && word.length <= 10) {
      score += 8;
    }
    return score;
  }

  highestScoreFrom(words) {
    // Implement this method for wave 4
    if (!words) {
      return {
        word: null,
        score: null
      };
    } else if (words.length === 1) {
      return {
        word: words[0],
        score: this.scoreWord(words[0])
      };
    }

    let bestWord = words[0];
    let bestScore = this.scoreWord(bestWord);
    for (let i = 1; i < words.length; i++) {
      const currWord = words[i];
      const currWordScore = this.scoreWord(currWord);
      if (
        currWordScore > bestScore ||
        (currWordScore === bestScore &&
          currWord.length === 10 &&
          bestWord.length !== 10) ||
        (currWordScore === bestScore &&
          currWord.length < bestWord.length &&
          bestWord.length !== 10)
      ) {
        bestScore = currWordScore;
        bestWord = currWord;
      }
    }

    return {
      word: bestWord,
      score: bestScore
    };
  }
}

export default Adagrams;
