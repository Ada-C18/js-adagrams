export const drawLetters = () => {
  const letterPool = {
    A : 9 ,
    N : 6  ,
    B : 2,
    O : 8 ,
    C : 2 ,
    P : 2,
    D : 4 ,
    Q : 1,
    E : 12 ,
    R : 6,
    F : 2,
    S : 4 ,
    G : 3,
    T : 6,
    H : 2,     
    U : 4,  
    I : 9,
    V : 2,
    J : 1,
    W : 2,
    K : 1,
    X : 1,
    L : 4,    
    Y : 2, 
    M : 2,
    Z : 1,   
  }

let newPool = letterPool
let hand = []
for (let i = 0; i < 10; i++){
  let randomIndex = Math.floor(Math.random() * 26)
  let key = Object.keys(newPool)[randomIndex]
  if (!hand.includes(key)){
    newPool[key] -= 1
    hand.push(key);
  } else if (hand.includes(key) && newPool[key] > 0){
    newPool[key] -= 1
    hand.push(key)
  } 
}
  {
    return hand;
  }
};

export const usesAvailableLetters = (input, lettersInHand) => {
  let letterArray = []
  for (const letter of input){
    
    letterArray.push(letter);
  }
    for (const letter of input) {
    const letterCountInHand = lettersInHand.filter(x=>x===letter).length
    const letterCountInInput = letterArray.filter(x=>x===letter).length
    if (letterCountInInput === letterCountInHand){
      continue;
    } else {
      return false;
    }   
}
return true;
};

export const scoreWord = (word) => {
  const scoreChart = {
   
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
     Z: 10
  }
  let counter = 0
  
  if (word.length >= 7 && word.length < 11){
    counter += 8
  }
  for (const letter of word) {
    counter += scoreChart[letter.toUpperCase()]
  }
  return counter;
};

export const highestScoreFrom = (words) => {
  let winningWord = {
    'word': 0,
    'score': 0
  }
  let scoredWords = [];
  let highest = 0;
  for (const word of words){
    let scores = scoreWord(word);
    if (scores > highest){
      highest = scores;
      scoredWords.push(scores);
      winningWord.word = word;
      winningWord.score = scores;
    } 
    if (scores === highest && word.length === 10){
      winningWord.word = word;
    }
    if (scores === highest && word.length && winningWord.word.length === 10){
      break;
    } 
    if (scores === highest && word.length < winningWord.word.length) {
        winningWord.word = word;
      } 
    }
  return winningWord;
};
