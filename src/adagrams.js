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

export const drawLetters = () => {
  // Implement this method for wave 1

  const letters = [];
  for (const key in LETTER_POOL) {
    
    for (let i = 0; i < LETTER_POOL[key]; i++) {
      letters.push(key)

    };
  
  };

  const shuffled = letters.sort(() => 0.5 - Math.random());
  let userHand = shuffled.slice(0,10);
  // console.log(userHand);
  return userHand;
};


// console.log(drawLetters())


const itemCounter = (array, item) => {
  let counter = 0
  array.flat(Infinity).forEach(x => {
    if(x == item){ counter++ }
  });
  return counter;
}

// console.log(itemCounter(["M","i","n","n","h"], "n"))


export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  // const capInput = "Dog".toUpperCase()
  // console.log(capInput)
  // const wordList = []
  // for (const letter of capInput){
  //   wordList.push(letter);
  //   }
  //   console.log(wordList);
    // console.log(drawLetters());
    console.log(input)
    for (let letter of input) {
       console.log(letter)
      //  console.log(wordList)
       console.log(letter);
         if (!lettersInHand.includes(letter)) {
           return false
         } else {
           if (itemCounter(input.split(""),letter) > itemCounter(lettersInHand,letter)) {
             console.log(itemCounter(input.split(""),letter));
             console.log(itemCounter(lettersInHand,letter));
             return false;
          //  } else {
          //    return true;
           }
         }
  }
  return true

};
// usesAvailableLetters()




export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
