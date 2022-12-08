



export const drawLetters = () => {
  
  const letterPool = {
    'A': 9, 
    'B': 2, 
    'C': 2, 
    'D': 4, 
    'E': 12, 
    'F': 2, 
    'G': 3, 
    'H': 2, 
    'I': 9, 
    'J': 1, 
    'K': 1, 
    'L': 4, 
    'M': 2, 
    'N': 6, 
    'O': 8, 
    'P': 2, 
    'Q': 1, 
    'R': 6, 
    'S': 4, 
    'T': 6, 
    'U': 4, 
    'V': 2, 
    'W': 2, 
    'X': 1, 
    'Y': 2, 
    'Z': 1
  };

  let letterList = [];

  for (let letter in letterPool){
    let freq = letterPool[letter];
    for (let i = 0 ; i < freq ; i++) {
      letterList.push(letter);
    } 
  }

  let hand = [];
  while (hand.length < 10){
    let index = Math.floor(Math.random()*letterList.length);
    let letterDrawn = letterList[index];
    hand.push(letterDrawn);
    letterList.splice(index, 1);
  }
  return hand;

};

export const usesAvailableLetters = (input, lettersInHand) => {
  let hand = [...lettersInHand];
  let word = input;
  console.log(hand);
  console.log(word);

  for (let letter of word){
      if (!hand.includes(letter)){
        return false;}
      else{
          let index = hand.indexOf(letter);
          hand.splice(index,1);}
  }  
  return true
}

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
