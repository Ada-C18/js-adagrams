export const drawLetters = () => {
  const letterpool = {
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
  let letters=[]
  for(const letter of Object.keys(letterpool)){
    for(let i = 0; i < letterpool[letter];i++){
      letters.push(letter);

    }
  };
  let hand=[]
  while (hand.length < 10){
    let randomIndex = Math.floor(Math.random()* letters.length)
    hand.push(letters[randomIndex]);
    letters.splice(randomIndex,1)
    
  };
  return hand
}
export const usesAvailableLetters = (input, lettersInHand) => {
  for(let char of input){
    const index = lettersInHand.indexOf(char)
    if (index < 0){
      return false
    } else {
      lettersInHand.splice(index,1)
    }
  }
  return true
};

export const scoreWord = (word) => {
  const letterValue = {"A": 1, "E": 1, "I": 1, "O": 1, "U": 1, "L": 1, "N": 1, "R": 1, "S": 1, "T": 1, "D": 2, "G": 2, "B": 3, "C": 3, "M": 3, "P": 3, "F": 4, "H": 4, "V": 4, "W": 4, "Y": 4, "K": 5, "J": 8, "X": 8, "Q": 10, "Z": 10}
  let point = 0
  for (let letter of word ){
      point +=letterValue[letter.toUpperCase()]
  } if (word.length >= 7){
    point += 8
  }
  return point
};

export const highestScoreFrom = (words) => {
  
};
