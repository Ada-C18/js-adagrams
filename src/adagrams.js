
const poolOfLetters = {
  A : 9,
  B : 2,
  C : 2, 
  D : 4,
  E : 12,
  F : 2,
  G : 3,
  H : 2,
  I : 9,
  J : 1,
  K : 1,
  L : 4,
  M : 2,
  N : 6,
  O : 8,
  P : 2,
  Q : 1,
  R : 6,
  S : 4,
  T : 6,
  U : 4,
  V : 2,
  W : 2,
  X : 1,
  Y : 2,
  Z :1
}

export const drawLetters = () => {
  //Returns a list of strings, each string contains one letter

  const letterBank = [];
  const allTheLetters = [];
  for (const letter in poolOfLetters) {
    for (let i=0 ; i < poolOfLetters[letter]; i++) {
      allTheLetters.push(letter);
    }
  };
  
  while (letterBank.length < 10) {
      const index = Math.floor(Math.random()*allTheLetters.length);
      const letter = allTheLetters[index];
      letterBank.push(letter);
      allTheLetters.splice(index, 1); 
  } 
  return letterBank
};

export const usesAvailableLetters = (input, lettersInHand) => {

  /* Input: input is user input of a word. lettersInHand is a list of 10 strings (each a letter)
  Output: Returns True or False if word contains letters within lettersInHand */
  
  // const lettersInHandCopy = lettersInHand.map(letter => letter;);
  const lettersInHandCopy = lettersInHand.slice();
  const word = input.toUpperCase();
  
  for ( let i = 0 ; i < word.length ; i++) {
    if (!lettersInHandCopy.includes(word[i])) {
      return false;
    } else {
      for (let j = 0  ; j < lettersInHandCopy.length ; j++){
        if (lettersInHandCopy[j] === word[i]) {
          lettersInHandCopy.splice(j, 1);
          break
        } 
      };
    };
  };return true;
};

export const scoreWord = (word) => {

  /*
  Input: word that is a string of letters
  Output: The score of the word
  */
  
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
    Z: 10
  };

  let score = 0;
  for ( const letter of  word.toUpperCase()) {
    score += scoreChart[letter];
  };

  if ( word.length > 6) {
    score += 8 ;
  };

  return score ;
};

export const highestScoreFrom = (words) => {
  /*
  Input: words, which is a list of words.
  Output: Object with the key : word, whose value is a string of a word.
  and value :score, whose value is the score of that word.
  */

  let wordsScore = {} ;
  let returnWord = '' ;
  let highestScore = 0 ;

  // iterating through the array words and in each iteration call the function scorWord and set 
  // the word as an argument , the add the word and it's score as a key value pair in the Object wordsScore
  for (const word of words) {
    const score = scoreWord(word);
    wordsScore[word] = score;
  }

  for ( const word in wordsScore) {
    //  Only runs if highestScore = 0 
    if(! highestScore) {
      returnWord = word ;
      highestScore = wordsScore[word] ;
    } else if (wordsScore[word] > highestScore){
      returnWord = word ;
      highestScore = wordsScore[word] ;
    }
    // prefer the word with the fewest letters...unless one word has 10 letters
    else if (wordsScore[word] == highestScore){
      if (word.length < returnWord.length && returnWord.length !== 10){
        returnWord = word ;
        highestScore = wordsScore[word] ;
      } 
      // If the there are multiple words that are the same score and the same length, 
      // pick the first one in the supplied list
      else if (word.length === 10 && word.length !== returnWord.length) {
        returnWord = word ;
        highestScore = wordsScore[word] ;
      }
    }
  };
  return {word:returnWord , score: highestScore}
};
