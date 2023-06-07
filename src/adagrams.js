export const drawLetters = () => {
  const letter_count = {
    "A" : 9,
    "N" : 6, 
    "B" : 2, 
    "C" : 2, 
    "D" : 4, 
    "E" : 12,
    "F" : 2,  	
    "G" : 3,	
    "H" : 2,
    "I" : 9,	
    "J" : 1,
    "K" : 1,	
    "L" : 4,	
    "M" : 2, 	
    "N" : 6,
    "O" : 8,
    "P" : 2, 
    "Q" : 1,
    "R" : 6,
    "S" : 4,
    "T" : 6,
    "U" : 4,
    "V" : 2,
    "W" : 2, 
    "X" : 1, 
    "Y" : 2, 
    "Z" : 1
  };

  const letter_bank  = [];
  const drawn = [];

  const keyList = Object.keys(letter_count);
  for(let key of keyList) {
    let frequency = 0;
    while(frequency < letter_count[key]){
      letter_bank.push(key)
      frequency ++
    }; 
  }; 

  for(let i = 0; i < 10; i++) {
    let select_char = Math.floor(Math.random() * (letter_bank.length -1));
    drawn.push(letter_bank[select_char]);
    letter_bank.splice(select_char, 1);
  };
  
  return drawn;
}; 

export const usesAvailableLetters = (input, lettersInHand) => {
  for(let char of input) {
    if(lettersInHand.includes(char)){
      lettersInHand.splice(char, 1);
    }else{
      return false;
    }
  };

  return true;
};

export const scoreWord = (word) => {
  const score_card = {
    A: 1, E: 1, I: 1, O: 1, U: 1, L: 1, N: 1, R: 1, S: 1, T: 1,
    D: 2, G: 2,
    B: 3, C: 3, M: 3, P: 3,
    F: 4, H: 4, V: 4, W: 4, Y: 4,
    K: 5,
    J: 8, X: 8,
    Q: 10, Z: 10
  };

  let total_score = 0 ;

  for(let rawChar of word) {
    let char = rawChar.toUpperCase();
    if(Object.keys(score_card).includes(char)){
      total_score += score_card[char];
    }
  };
  if (word.length >= 7) {
    total_score += 8;
  }
  return total_score;
};

export const highestScoreFrom = (words) => {
  let word_with_score = [];
  let maxScore = 0 ;
  let max_word = "";
  let scoreObject = {};
  for(let each_word of words){
    let score = scoreWord(each_word)
    if (score in scoreObject) {
      scoreObject[score].push(each_word)
    }
    else {
      scoreObject[score] = [each_word]
    }
    if(score >= maxScore){
      maxScore = score 
    }
  }

  let wordToChoose = scoreObject[maxScore][0];
  if (scoreObject[maxScore].length > 1) {
    if (wordToChoose.length !== 10) {
      for (let each_word of scoreObject[maxScore]) {
        if (each_word.length < wordToChoose.length) {
          wordToChoose = each_word;
        }
        if (wordToChoose.length !== 10 && each_word.length === 10) {
          wordToChoose = each_word;
          break;
        }
      }
    }
  }
  return { "word": wordToChoose, "score": maxScore};
};
