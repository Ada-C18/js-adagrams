
export const drawLetters = () => {
   // Implement this method for wave 1
  const allLetters = []
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
    Z: 1
    };

    for (const [letter, value] of Object.entries(LETTER_POOL)) {
      for (let n = value; n > 0; --n) {
        allLetters.push(letter);
    }
  }
    const gameLetters = []
    let j = 98;
    for (let i = 0; i < 10; i++) {
      const number = Math.floor(Math.random() * j);
      const randomLetter = allLetters[number];
      gameLetters.push(randomLetter);
      allLetters.splice(number,1);
      j-=1;
    }
  console.log(gameLetters)
};

console.log(drawLetters())

// 2 inputs: string + list ten letters
//output : boolen

export const usesAvailableLetters = (input, lettersInHand) => {
  const inputUpper = input.toUpperCase();

  const lettersInHandUpper = lettersInHand.map(letter => {
    return letter.toUpperCase();
  });
  // console.log(lettersInHandUpper);

  const lettersInHandUpperObject = { };
  lettersInHandUpper.forEach(letter => {
    if (lettersInHandUpperObject[letter] == null) {
          lettersInHandUpperObject[letter] = 1
    } else {
      lettersInHandUpperObject[letter] += 1
    }
  })

  console.log(lettersInHandUpperObject);

  for (let letter of inputUpper){
    console.log(letter)
    if (letter in lettersInHandUpperObject && lettersInHandUpperObject[letter]>0){
      lettersInHandUpperObject[letter] -= 1;
      console.log(lettersInHandUpperObject)
      continue
    } else {
      return false
    }
  }
    return true
  };

// //  Implement this method for wave 2

console.log(usesAvailableLetters("carr",['I', 'R', 'A', 'h','O', 'c', 't', 'X','Q', 'O']))


// export const scoreWord = (word) => {
//   // Implement this method for wave 3
// };

// export const highestScoreFrom = (words) => {
//   // Implement this method for wave 4
// };
