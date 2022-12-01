// Implement this method for wave 1


export const drawLetters = () => {
  const letterBank = {'A':9, 'B':2, 'C':2, 'D':4, 'E':12, 'F':2, 'G':3, 'H':2, 'I':9, 'J':1,
  'K':1, 'L':4, 'M':2, 'N':6, 'O':8, 'P': 2 , 'Q':1, 'R':6, 'S':4, 'T':6, 'U':4, 'V':2, 'W':2, 
  'X':1, 'Y':2, 'Z':1}
  

  let handList = []
  let tempHandobj = Object.assign({}, letterBank);

  while (handList.length < 10) {
    let randNum = Math.floor(Math.random() * 26);
    let pickedLetter = Object.keys(tempHandobj)[randNum];
    
    if (tempHandobj[pickedLetter] !== 0){
      handList.push(pickedLetter);
      tempHandobj[pickedLetter] -= 1;
    }
  }
  return handList;

};

export const usesAvailableLetters = (input, lettersInHand) => {
  let word = input.toUpperCase()
  let validInput = true;            
  
  for (const letter of word) {
    if (!lettersInHand.includes(letter)) {
      validInput = false;
    }
    lettersInHand.splice(0, 1, letter)
  }
  return validInput;
};

  // Implement this method for wave 3
export const scoreWord = (word) => {

  let upperWord = word.toUpperCase()
  let score = 0;
  
  let list1 = ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'];
  let list2 = ['D', 'G'];
  let list3 = ['B', 'C', 'M', 'P'];
  let list4 = ['F', 'H', 'V', 'W', 'Y'];
  let list5 = ['K'];
  let list8 = ['J', 'X'];
  let list10 = ['Q', 'Z'];
  
  for (const char of upperWord){
    if (list1.includes(char)){
      score += 1;
    } else if (list2.includes(char)){
      score += 2; 
    } else if (list3.includes(char)){
      score += 3;
    } else if (list4.includes(char)){
      score += 4;
    } else if (list5.includes(char)){
      score += 5;
    } else if (list8.includes(char)){
      score += 8 ;
    } else if (list10.includes(char)){
      score += 10;
    }
  }
  if (upperWord.length >= 7){
    score += 8;
  }
  
return score;
};


// Implement this method for wave 4
export const highestScoreFrom = (words) => {
  let winningWord = {}
  let highestScore = 0
  let highestStr = ''
  // want to use a function closure 
  let wordScore = scoreWord()
  for (const word of words){
    if (wordScore > highestScore){
      let highestScore = wordScore;
      let highestStr = word;
  } else if (wordScore === highestScore){
      if ((word.length < highestStr.length) && (highestStr.length !== 10)){
        let highestStr = word;
      } else if ((word.length === 10) && (highestStr.length !== 10)) {
        let highestStr = word;
      }
  }
}
let result = (winningWord[highestStr] = highestScore);
return result;
};