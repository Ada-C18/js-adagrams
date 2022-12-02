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
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
