export const drawLetters = () => {
  const LETTER_POOL = {'A': 9, 'B': 2, 'C': 2,'D': 4, 'E': 12, 'F': 2, 'G': 3, 'H': 2, 'I': 9,'J': 1, 'K': 1, 'L': 4, 'M': 2, 'N': 6, 'O': 8, 'P': 2,  'Q': 1, 'R': 6, 'S': 4, 'T': 6, 'U': 4, 'V': 2, 'W': 2, 'X': 1, 'Y': 2, 'Z': 1};
  
  let avaliableLetters = [];
  for (const [letter, freq] of Object.entries(LETTER_POOL)){
  let i = 0; i < freq; i++
  avaliableLetters.push(letter);
  }
  let hand = [];
  for (let i = 0; i < 10; i ++) {
  let randomNum = Math.floor(Math.random() * avaliableLetters.length);
  hand.push(avaliableLetters[randomNum]);
  avaliableLetters.splice(randomNum, 1);
}
return hand;
}; 

export const usesAvailableLetters = (input, lettersInHand) => {
  for (let i = 0; i < input.length; i ++){
    console.log(input[i])
    if (!lettersInHand.includes(input[i])){
      return false; 
    } else if (lettersInHand.includes(input[i])) {
      lettersInHand.splice(input[i], 1);
      console.log(lettersInHand)
      console.log(input)
    }
    } 
  return true; 
  } 

export const scoreWord = (word) => {
  let score = 0
  let pointValue = {
          1:['A', 'E', 'I', 'O', 'U','L', 'N', 'R', 'S', 'T'], 
          2:['D', 'G'], 
          3:['B', 'C', 'M', 'P'], 
          4:['F', 'H', 'V', 'W', 'Y' ],
          5:['K'],
          8:['J', 'X'],
          10:['Q', 'Z'] 
          }
  for (let letter of word) {
    for (const [points, letters] of Object.entries(pointValue)) {
      if (letters.includes(letter)) {
      score += points
  }
  }
    if (word.length > 7) {
    score += 8
  }
}
  return score;
};
// def score_word(word):
//     score = 0
//     word = word.upper()
//     points = {
//         1:['A', 'E', 'I', 'O', 'U','L', 'N', 'R', 'S', 'T'], 
//         2:['D', 'G'], 
//         3:['B', 'C', 'M', 'P'], 
//         4:['F', 'H', 'V', 'W', 'Y' ],
//         5:['K'],
//         8:['J', 'X'],
//         10:['Q', 'Z'] 
//         }
//     for letter in word:    
//         for key, value in points.items():
//             if letter in value:
//                 score += key    
//     if len(word) >= 7:
//         score += 8
//     return score




export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
