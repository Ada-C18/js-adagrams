const letterPool = {
  A: [9, 1],
  B: [2, 3],
  C: [2, 3],
  D: [4, 2],
  E: [12, 1],
  F: [2, 4],
  G: [3, 2],
  H: [2, 4],
  I: [9, 1],
  J: [1, 8],
  K: [1, 5],
  L: [4, 1],
  M: [2, 3],
  N: [6, 1],
  O: [8, 1],
  P: [2, 3],
  Q: [1, 10],
  R: [6, 1],
  S: [4, 1],
  T: [6, 1],
  U: [4, 1],
  V: [2, 4],
  W: [2, 4],
  X: [1, 8],
  Y: [2, 4],
  Z: [1, 10],
};

class Adagrams {
  // constructor() {}

  drawLetters = () => {
    let allLetters = [];
    for (const letter in letterPool) {
      const amount = letterPool[letter][0];
      const letterArray = new Array(amount).fill(letter);
      allLetters = allLetters.concat(letterArray);
    }
    const userLetters = [];
    for (let i = 0; i < 10; i++) {
      const index = Math.floor(Math.random() * allLetters.length);
      const randomLetter = allLetters[index];
      userLetters.push(randomLetter);
      allLetters = allLetters
        .slice(0, index)
        .concat(allLetters.slice(index + 1));
    }
    return userLetters;
  };

  usesAvailableLetters = (input, lettersInHand) => {
    for (let letter of input) {
      if (lettersInHand.includes(letter)) {
        lettersInHand.splice(letter, 1);
      } else {
        return false;
      }
    }
    return true;
  };

  validateWord = (word) => {
    if (word.length < 1) {
      return false;
    }
    console.log(this.drawLetters());
    return this.usesAvailableLetters(word, userLetters);
  };

  scoreWord = (word) => {
    if (word.length < 3) {
      return null;
    }

    let score = 0;
    if (word) {
      for (const letter of word.toUpperCase()) {
        console.log(letterPool[letter][1]);
        score += letterPool[letter][1];
        console.log(`${letter}, ${score}`);
      }
      if (word.length >= 7) {
        score += 8;
      }
    }
    return score;
  };

  highestScoreFrom = (words) => {
    let result = { word: "", score: 0 };

    for (let word of words) {
      let word_score = this.scoreWord(word);

      if (result.score < word_score) {
        result.word = word;
        result.score = word_score;
      } else if (result.score == word_score) {
        let word_length = word.length;
        let result_length = result.word.length;

        if (result_length === 10) {
          result = result;
        } else if (word_length === 10) {
          result.word = word;
        } else if (word_length < result_length) {
          result.word = word;
        }
      }
    }
    return result;
  };
}

export default Adagrams;

// export const drawLetters = () => {
//   let inHand = [];
//   let allLetters_copy = [...allLetters];

//   for (let i=0; i<10; i++) {
//     let allLetters_length = allLetters_copy.length;
//     let randomIndex = Math.floor(Math.random()*allLetters_length);
//     inHand.push(allLetters_copy[randomIndex]);
//     allLetters_copy.splice(randomIndex,1);
//   }
//   return inHand;
// };

// export const usesAvailableLetters = (input, lettersInHand) => {
//   for (let letter of input) {
//     if (lettersInHand.includes(letter)){
//       lettersInHand.splice(letter,1);
//     } else {
//       return false;
//     }
//   }
//   return true;
// };

// export const scoreWord = (word) => {
//   let input_word = word.toUpperCase();
//   let total = 0;
//   if (input_word.length >= 7){
//     total += 8;
//   }

//   for (let letter of input_word) {
//     total += LETTER_VALUE[letter];
//   };
//   return total;
// };

// export const highestScoreFrom = (words) => {
//   let result = {word: "", score: 0};

//   for (let word of words) {
//     let word_score = scoreWord(word);

//     if (result.score < word_score){
//       result.word = word;
//       result.score = word_score;
//     } else if (result.score == word_score) {
//       let word_length = word.length;
//       let result_length = result.word.length;

//       if (result_length === 10) {
//         result = result;
//       } else if (word_length === 10) {
//         result.word = word;
//       } else if (word_length < result_length){
//         result.word = word;
//       }
//     }
//   }
//   return result;
// };
