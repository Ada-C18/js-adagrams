// import { of } from "core-js/library/fn/array";
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

export const drawLetters = () => {
  let letterPoolArray = [];
  let letterBag = [];

  for (const [letter, freq] of Object.entries(letterPool)) {
    for (let i = 0; i < freq; i++) {
      letterPoolArray.push(letter);
    }
  }

  for (let i = 0; i < 10; i++) {
    let randomIndex = Math.floor(Math.random() * letterPoolArray.length);

    letterBag.push(letterPoolArray[randomIndex]);
    letterPoolArray.splice(randomIndex, 1);
  }
  return letterBag;

};

export const usesAvailableLetters = (input, lettersInHand) => {
  for (let letter of input) {
    if (lettersInHand.includes(letter)) {
      const letterIndex = lettersInHand.indexOf(letter);
      lettersInHand.splice(letterIndex, 1);
    } else {
      return false;
    }
  }
  return true;
};

const scoreTable = {
    1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
    2: ['D', 'G'],
    3: ['B', 'C', 'M', 'P'],
    4: ['F', 'H', 'V', 'W', 'Y'],
    5: ['K'],
    8: ['J', 'X'],
    10: ['Q', 'Z']
};

// def score_word(word):
//     total_score = 0
//     letter_count = dict(Counter(word.upper()))
//     for letter in letter_count:
//         for score, letters in score_table.items():
//             if letter in letters:
//                 total_score += score * letter_count[letter]
//     if len(word) >= 7:
//         total_score += 8
//     return total_score

export const scoreWord = (rawInput) => {
  if (!rawInput){
    return 0;
  }
  let word = rawInput.toUpperCase();
  let totalScore = 0;
  let freq = {};
  for (let i = 0; i < word.length; i++) {
    let char = word.charAt(i);
    if (freq[char]) {
      freq[char] += 1;
    } else {
      freq[char] = 1;
    }
  }

  for (let char in freq) {
    for (const [score, stringLetters] of Object.entries(scoreTable)) {
      if (stringLetters.includes(char)) {
        totalScore += Number(score) * freq[char];
      }
    }
  }
  if (word.length > 6){
    totalScore += 8;

  }
  return totalScore;
};

// If the length of the word is 7, 8, 9, or 10, then the word gets an additional 8 points
// const object1 = {
//   a: 'somestring',
//   b: 42
// };

// for (const [key, value] of Object.entries(object1)) {
//   console.log(`${key}: ${value}`);
// }

// expected output:
// "a: somestring"
// "b: 42"

// function getFrequency(string) {
//   var freq = {};
//   for (var i=0; i<string.length;i++) {
//       var character = string.charAt(i);
//       if (freq[character]) {
//          freq[character]++;
//       } else {
//          freq[character] = 1;
//       }
//   }

//   return freq;
// };
export const highestScoreFrom = (words) => {
  let highestScore = 0;
  let winningWord = null;
  for (let word of words){
    let wordScore = scoreWord(word)
    if(wordScore > highestScore){
      highestScore = wordScore;
      winningWord = word;
    } else if (wordScore === highestScore){
      if(word.length === winningWord.length || winningWord.length === 10){
        continue

      } else if (word.length === 10){
        winningWord = word;

      } else if (word.length < winningWord.length){
        winningWord = word;

    }
  }
} return {word: winningWord, score: highestScore}
};




// def get_highest_word_score(word_list):
//   highest_score = 0
//   winning_word = None
//   for word in word_list:
//       if score_word(word) > highest_score:
//           highest_score = score_word(word)
//           winning_word = word
//       elif score_word(word) == highest_score:
//           if (len(word) == len(winning_word)
//           or len(winning_word) == 10):
//               continue
//           elif len(word) == 10:
//               winning_word = word
//           elif len(word) < len(winning_word):
//               winning_word = word
//   return (winning_word, highest_score)



