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
  //array letter bag for (const element of array1) 'in' for objects 'of' for arrays PYTHON VERSION of dict.items()
  for (const [letter, amount] of Object.entries(letterObj)) {
    for (let i = 0; i < amount; i++) {
      letterBag.push(letter);
    }
  }
  //we need 10 letters
  let pickedLetter;
  for (let i = 0; i < 10; i++) {
    //logic of pop, since i can't pass an argument to it:
    //1. random pick from handDict   // minus one from letterDict
    let index = Math.floor(Math.random() * letterBag.length);
    //2. use the random index in letterbag to grab it.
    pickedLetter = letterBag[index];
    //3. remove it from the bag
    letterBag.splice(index, 1);
    //4. push to hand
    hand.push(pickedLetter);
  }

  return hand;
};

//wave 2
export const usesAvailableLetters = (input, lettersInHand) => {
  //iterate over each letter, if letter in lettersInHand remove it from lettersInHand to make sure it can't be used again.
  for (const l of input) {
    const letterIdx=lettersInHand.indexOf(l)
    if (letterIdx !== -1) {
      lettersInHand.splice(letterIdx,1);
    } else {
      //If a letter isn't in lettersInHand return false to discontinue play.
      return false;
    }
  }
  //returns true because it went through full loop without returning out
  return true;
};

export const scoreWord = (word) => {
  //wave3
  // convert word to uppercase
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
  //guard condition returns score
  if (typeof word !== 'string' || word === '') {
    return score;
  }
  //if letter is score object, add the value of that letter to 'score'
  for (let letter of word) {
    if (letter in scoreObj) {
      score += scoreObj[letter];
    }
  }
  //if length of word is more than 7 chars, add 8 points
  if (word.length >= 7) {
    score += 8;
  }
  return score;
};
//wave 4
export const highestScoreFrom = (words) => {
  let wordArr = [];
  let highScoreObj = { word: '', score: 0 };
  let tieArr = [];
  let lowestLetterObj = { word: 'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz', score: 0 };

  //Make array with {word:'str',score: NUMBER} objects
  for (const word of words) {
    //use helper function above to score and add to array
    const wordObj = { word: word, score: scoreWord(word) };
    wordArr.push(wordObj);
    // if current object's score is higher than the highScoreObj object <---reassign to current object
    if (wordObj.score > highScoreObj.score) {
      highScoreObj = wordObj;
    }
  }

  //use highScoreObj and lowestLetterObj in a compound conditional that checks for high score
  //lowestLetterObjest letter num && any that equal it equality && obj.word.length === 10, then append them
  for (const obj of wordArr) {
    if (obj.score === highScoreObj.score) {
      tieArr.push(obj);
    }
    tieArr.push(highScoreObj);
  }
  //TIE LOGIC
  if (tieArr.length > 1) {
    for (const obj of tieArr) {
      if (obj.word.length === 10) {
        return (highScoreObj = obj);
      }
// equality of letter length
      if (obj.word.length === lowestLetterObj.word.length) {
        highScoreObj = lowestLetterObj;
      }
//checking for lowest letter length
      if (obj.word.length < lowestLetterObj.word.length) {
        lowestLetterObj = obj;
        highScoreObj = lowestLetterObj;
      }
    }
  }
  return highScoreObj;
};

//compare scores [{word:score},{word:score},{word:score}] by iterating 'let highScoreObj={word:'',score: 0} highScoreObj<i.score highScoreObj===i.score
//return obj{word:score}
//tie: word with fewest letters word.length < word
//tie: unless word.length === 10;
//tie: if word === word+1 return word (first)
