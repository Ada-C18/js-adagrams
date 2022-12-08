



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
  const pointValues = {
    'A': 1, 
    'B': 3, 
    'C': 3, 
    'D': 2, 
    'E': 1, 
    'F': 4, 
    'G': 2, 
    'H': 4, 
    'I': 1, 
    'J': 8, 
    'K': 5, 
    'L': 1, 
    'M': 3, 
    'N': 1, 
    'O': 1, 
    'P': 3, 
    'Q': 10, 
    'R': 1, 
    'S': 1, 
    'T': 1, 
    'U': 1, 
    'V': 4, 
    'W': 4, 
    'X': 8, 
    'Y': 4, 
    'Z': 10
  };

  let total = 0;
  let wordUpper = word.toUpperCase();
 
  if (6 < word.length && word.length < 11) {
    console.log("we in here");
    total += 8
  }
 console.log(total);
  for (let letter of wordUpper){
    let letPoint = pointValues[letter];
    total += letPoint;
  }
  console.log(total);
  return total;
};

export const highestScoreFrom = (words) => {
  let winning_word = ""
  let winning_score = -1
  console.log(words);
  for (word of words){
      score = score_word(word)
      if score > winning_score:
          winning_word = word
          winning_score = score
      elif score == winning_score and len(winning_word) != 10:
          if len(word) == 10 or len(word) < len(winning_word):
              winning_word = word           
  }; 
  return (winning_word, winning_score)
};
