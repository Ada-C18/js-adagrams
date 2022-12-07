
//import { random } from "core-js/core/number";



export const drawLetters = () =>{
  // Implement this method for wave 1
  let LETTER_POOL={
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
  let remainingletterspool=[];
  //create a varibale (let perhaps)parse out the letters
  let letterChoice=Object.assign({},LETTER_POOL)
  while (remainingletterspool.length < 10){
    let randoNum=(Math.floor(Math.random() * 26))
    //chooses a random number between 0-26
    let selectKey=Object.keys(letterChoice)[randoNum]
    //accesses the key and value associated 
    if (letterChoice[selectKey]!==0){
      remainingletterspool.push(selectKey);
      // adds the key to the empty list
      letterChoice[selectKey]-=1;
    } 
    }// if letter exists pops the key
    return remainingletterspool;
    
  

}


export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  let word=input.toUpperCase()
  let trueInput=true;
  for (const letter of word){
    if (!lettersInHand.includes(letter)){
      trueInput=false;
    }
    lettersInHand.splice(0,1,letter)
  }
    return trueInput;
  };

  let LETTER_POOLZ=
    {'A': 1, 
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
    'Z': 10,}
  
export const scoreWord = (word) => {
  // Implement this method for wave 3
  let score=0
  for (let letter of word.toUpperCase()){
    score+=LETTER_POOLZ[letter];}
  if (word.length>6){
  score+=8;
    
  }
  return score;
};

export const highestScoreFrom = (words) => {
  let highestScore={'score':0,'word':''};
  for (let word of words){
    if(scoreWord(word) > highestScore['score']){
      highestScore['score']=scoreWord(word);
      highestScore['word']=word;
    
    }else if(scoreWord(word)===highestScore['score']){
      if ((word.length<highestScore['word'].length)&&(highestScore['word'].length!==10)){
        highestScore['word']=word;
      }else if((word.length===10)&&(highestScore['word'].length!==10)){
        highestScore['word']=word;
      }
  }
  }
  return highestScore;
  
};



  
  

