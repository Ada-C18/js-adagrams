
let scoreChart = {
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


let LETTER_POOL = {
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



function minLenString(arr) {
  return arr.reduce((a, b) => a.length <= b.length ? a : b);
}

export const drawLetters = () => {
  let pool = {...LETTER_POOL};
  let hand = [];
  let choices = [];

  for (let letter of Object.keys(pool)) {
    for(let i= 0; i < pool[letter]; i++ ) {
      choices.push(letter);
    }
  }
  while(hand.length < 10) {
      let RandomLetter = choices[Math.floor(Math.random() * choices.length)] 
      hand.push(RandomLetter);
      const indexOfLetter = choices.indexOf(RandomLetter);
      choices.splice(indexOfLetter, 1);
    } return hand;
}


export const usesAvailableLetters = (input, lettersInHand) => {
  for(let letter of input.toUpperCase()) {
    if(lettersInHand.includes(letter)) {
     const indexOfLetter = lettersInHand.indexOf(letter);
     lettersInHand.splice(indexOfLetter,1);
    } else {
      return false;
    }  
  }
  return true;
}

export const scoreWord = (word) => { 
    let score = 0;
    for(let letter of word.toUpperCase()) {
      if (scoreChart.hasOwnProperty(letter)) {
        score += scoreChart[letter];       
    }
  }
    if (word.length <= 10 && word.length >= 7 ) {
      score += 8;
    }
    return score;
}

export const highestScoreFrom = (words) => {
  let scores = [];
  let scoreObject = {};
  for(let eachWord of words) {
    const score = scoreWord(eachWord); 
    scores.push(score);
    scoreObject[eachWord] = score;
  }

  let arr = Object.keys(scoreObject).map(function (key) { return scoreObject[key]; });
  let maxScore = Math.max.apply( null, arr ); 
 
  let maxKeys = []
  for (const [key, value] of Object.entries(scoreObject)) {
    if(value === maxScore){     
      maxKeys.push(key);
    }
  }
 
  let bestWord = minLenString(maxKeys);

  let equalPointsAndLetters = [];
  for(let words_max_points of maxKeys) {
    if(words_max_points.length === 10) {
      bestWord = words_max_points
      equalPointsAndLetters.push(bestWord)
      bestWord = equalPointsAndLetters[0]
    }   
  }
  return {"word": bestWord, "score":maxScore};
  }


  


 









    

    