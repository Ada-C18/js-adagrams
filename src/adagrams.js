export const drawLetters = () => {
  // Implement this method for wave 1
  let hand = [];
  let letterBag = [];
  const letterObj = {
    A: 9,
    N: 6,
    B: 2,
    O: 8,
    C: 2,
    P: 2,
    D: 4,
    Q: 1,
    E: 12,
    R: 6,
    F: 2,
    S: 4,
    G: 3,
    T: 6,
    H: 2,
    U: 4,
    I: 9,
    V: 2,
    J: 1,
    W: 2,
    K: 1,
    X: 1,
    L: 4,
    Y: 2,
    M: 2,
    Z: 1,
  };
  //array letter bag for (const element of array1) 'in' for objects 'of' for arrays
  for (const [letter, value] of Object.entries(letterObj)) {
    for (let i = 0; i < value; i++) {
      letterBag.push(letter);
    }
  }
  //for 10 iterations
  let pickedLetter;
  for (let i = 0; i < 10; i++) {
    //random pick from handDict   // minus one from letterDict
    pickedLetter = letterBag.pop([
      Math.floor(Math.random() * letterBag.length),
    ]);
    // push to hand
    hand.push(pickedLetter);
  }

  return hand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  for (const l of input) {
    if (lettersInHand.includes(l)) {
      lettersInHand.splice(l, 1);
    } else {
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  //wave3
  word = word.toUpperCase();
  const scoreObj = {
    A: 1,
    E: 1,
    I: 1,
    O: 1,
    U: 1,
    L: 1,
    N: 1,
    R: 1,
    S: 1,
    T: 1,
    D: 2,
    G: 2,
    B: 3,
    C: 3,
    M: 3,
    P: 3,
    F: 4,
    H: 4,
    V: 4,
    W: 4,
    Y: 4,
    K: 5,
    J: 8,
    X: 8,
    Q: 10,
    Z: 10,
  };
  let score = 0;
  //guard condition
  if (typeof word !== 'string' || word === "") {
    return score;
  }
  for (let letter of word) {
    if (letter in scoreObj) {
      score += scoreObj[letter];
    }
  }
  if (word.length >= 7) {
    score += 8;
  }
  return score;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
  // if letter in object: score+=i
  //compare scores {{word:score},{word:score},{word:score}} by order? by iterating 'let highest=0' highest<i highest===i
  //return obj{word:score}
  //tie: word with fewest letters word.length < word
  //tie: unless word.length === 10;
  //tie: if word === word+1 return word (first)
};
