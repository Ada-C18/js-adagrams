const LETTER_POOL = {
  "A": 9, "B": 2, "C": 2, "D": 4, "E": 12, "F": 2, "G": 3, "H": 2,
  "I": 9, "J": 1, "K": 1, "L": 4, "M": 2, "N": 6, "O": 8, "P": 2,
  "Q": 1, "R": 6, "S": 4, "T": 6, "U": 4, "V": 2, "W": 2, "X": 1,
  "Y": 2, "Z": 1  
};
const LETTER_VALUE = {
  A:1, E:1, I:1, O:1, U:1, L:1, N:1, R:1, S:1, T:1,
  D:2, G:2,
  B:3, C:3, M:3, P:3,
  F:4, H:4, V:4, W:4, Y:4,
  K:5,
  J:8, X:8,
  Q:10, Z:10
};

let allLetters = [];
const atoz = "abcdefghijklmnopqrstuvwxyz".toUpperCase()
for (let letter of atoz) {
  for (let i=0; i<LETTER_POOL[letter]; i++) {
    allLetters.push(letter);
  }
};

class Adagrams {
  // constructor() {}

  drawLetters = () => {
    let inHand = [];
    let allLetters_copy = [...allLetters];
    
    for (let i=0; i<10; i++) {
      let allLetters_length = allLetters_copy.length;
      let randomIndex = Math.floor(Math.random()*allLetters_length);
      inHand.push(allLetters_copy[randomIndex]);
      allLetters_copy.splice(randomIndex,1);
    }
    return inHand;
  }
  
  usesAvailableLetters = (input, lettersInHand) => {
    for (let letter of input) {
      if (lettersInHand.includes(letter)){
        lettersInHand.splice(letter,1);
      } else {
        return false;
      }
    }
    return true;
  }
  
  scoreWord = (word) => {
    let input_word = word.toUpperCase();
    let total = 0;
    if (input_word.length >= 7){
      total += 8;
    }
    
    for (let letter of input_word) {
      total += LETTER_VALUE[letter];
    };
    return total;
  }
  
  highestScoreFrom = (words) => {
    let result = {word: "", score: 0};
  
    for (let word of words) {
      let word_score = scoreWord(word);
      
      if (result.score < word_score){
        result.word = word;
        result.score = word_score;
      } else if (result.score == word_score) {
        let word_length = word.length;
        let result_length = result.word.length;
        
        if (result_length === 10) {
          result = result;
        } else if (word_length === 10) {
          result.word = word;
        } else if (word_length < result_length){
          result.word = word;
        }
      }
    }
    return result;
  }

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
