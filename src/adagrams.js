//fix case style on variables!!!!!!!!!!!

const pool = {
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

// const letters_pool = [
//   'a', 'b', 'c', 'd',
//   'e', 'f', 'g', 'h',
//   'i', 'j', 'k', 'l',
//   'm', 'n', 'o', 'p',
//   'q', 'r', 's', 't',
//   'u', 'v', 'w', 'x',
//   'y', 'z'
// ];

// const freq_pool = [
//   9, 2, 2, 4,
//   12, 2, 3, 2,
//   9, 1, 1, 4,
//   2, 6, 8, 2,
//   1, 6, 4, 6,
//   4, 2, 2, 1,
//   2, 1
// ];

export const drawLetters = () => {
  // Implement this method for wave 1
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let hand = [];
  let hand_freq = {};
  //while number of letters in hand is less than 10
  while (hand.length < 10) {
    //choose a random letter from pool
    let random_int = Math.floor(Math.random() * 26);
    let random_letter = characters.charAt(random_int);

    if (!hand.includes(random_letter)) {
      hand.push(random_letter);
      hand_freq[random_letter] = 1;
    } else {
      if (hand_freq[random_letter] < pool[random_letter]) {
        hand.push(random_letter);
        hand_freq[random_letter] += 1;
      }
    }
  }

  //make sure letter isn't over done
  //add to hand (array)
  return hand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  for (let char of input) {
    if (lettersInHand.includes(char)) {
      const index = lettersInHand.indexOf(char);
      lettersInHand.splice(index, 1);
    } else {
      return false;
    }
  }

  return true;
};

export const scoreWord = (word) => {
  if (word.length === 0) {
    return 0;
  }
  const wordUpper = word.toUpperCase();

  const scoreChart = {
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

  for (let letter of wordUpper) {
    score += scoreChart[letter];
  }

  if (wordUpper.length > 6) {
    score += 8;
  }

  return score;
};

export const highestScoreFrom = (words) => {
  //words -> array of input words
  //create empty object OR create empty list and score=0
  //loop through words array,
  //if object empty, store "word: value" in object and word in an array
  //if object not empty:
  //if value of word === value of word in object:
  //add word: value to object
  //if value of word > value of word in object:
  //delete current word from object
  //add new word: value
  //otherwise, do nothing

  //find score value of each word in array
  //store values in array
  //find highest value
  //store value in variable
  //put word: value in object
  //if object length > 1:
  //if both words same length:
  //return first one in list ???
  //if word one or word two length is 10:
  //return whichever one has length of 10
  //if length of word one/two < word two/one
  //return word one/two
  //returns --> object ({word: 'winningWord', score: value})
  let highest = {};
  let highestWord = [];
  let highestScore = 0;

  for (let word of words) {
    if (highestWord.length === 0) {
      highestWord.push(word);
      highestScore = scoreWord(word);
    } else {
      if (highestScore === scoreWord(word)) {
        highestWord.push(word);
      } else if (highestScore < scoreWord(word)) {
        highestWord.length = 0;
        highestWord.push(word);
        highestScore = scoreWord(word);
      }
    }
  }

  if (highestWord.length > 1) {
    if (highestWord[0].length === highestWord[1].length) {
      highest["word"] = highestWord[0];
      highest["score"] = highestScore;
    } else if (highestWord[0].length === 10) {
      highest["word"] = highestWord[0];
      highest["score"] = highestScore;
    } else if (highestWord[1].length === 10) {
      highest["word"] = highestWord[1];
      highest["score"] = highestScore;
    } else if (highestWord[0].length < highestWord[1].length) {
      highest["word"] = highestWord[0];
      highest["score"] = highestScore;
    } else if (highestWord[0].length > highestWord[1].length) {
      highest["word"] = highestWord[1];
      highest["score"] = highestScore;
    }
  } else {
    highest["word"] = highestWord[0];
    highest["score"] = highestScore;
  }

  return highest;
  //words -> array of input words
  //loop through array,
  //find score value of each word in array
  //if tie:
  //if same length:
  //return first one in list
  //if word one or word two length is 10:
  //return whichever one has length of 10
  //if length of word one/two < word two/one
  // return word one/two
  // returns --> object ({word: 'winningWord', score: value})
};
