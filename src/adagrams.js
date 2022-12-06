
//import { random } from "core-js/core/number";



export const drawLetters = () => {
  // Implement this method for wave 1
  const LETTER_POOL={
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
  }
  let remaining_letters_pool=[];
  //create a varibale (let perhaps)parse out the letters
  let letterChoice=Object.assign({},LETTER_POOL)
  while (remaining_letters_pool.length<10){
    let randoNum=(Math.floor(Math.random() * 26))
    //chooses a random number between 0-26
    let selectKey=Object.keys(letterChoice)[randoNum]
    //accesses the key and value associated 
    if (letterChoice[selectKey]!==0){
      remaining_letters_pool.push(selectKey);
      // adds the key to the empty list
      letterChoice[selectKey]=-1;
      // if letter exists pops the key
  return remaining_letters_pool;
    }
  }
}


export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  let word=input.toUpperCase()
  let trueInput=true;
  for (const letter of word){
    if(lettersInHand.includes(letter)){
      trueInput=false;}
    
    lettersInHand.splice(0,1,letter)
    return trueInput;
  }
}


export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
