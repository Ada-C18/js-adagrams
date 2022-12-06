
export const drawLetters = () => {
  const LETTERPOOL = {
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
  const letterPoolList = [];
  Object.entries(LETTERPOOL).forEach(([key, value]) => {
    for (let i=0; i < value; i++) {
      letterPoolList.push(key);
      console.log(key,value)
    }
  })

  const user_hand = []
  for (let i=0; i<10; i ++){
    const  i = Math.floor(Math.random() * letterPoolList.length);
    const randomLetter = letterPoolList[i];
    user_hand.push(randomLetter);
    letterPoolList.splice(i,1)
  }

  return user_hand
};
export const usesAvailableLetters = (input, lettersInHand) => {
  const word =  input.toUpperCase()

  const wordlist = []
  for (let i = 0; i < word.length; i++){
    wordlist.push(word.charAt(i));
  }

  const dictLetterHand={}
  for(let i = 0; i < lettersInHand.length; i++){
    dictLetterHand[lettersInHand[i]] = (dictLetterHand[lettersInHand[i]] ?? 0) + 1

  }
  for (let i = 0; i < word.length; i++){
    if (!dictLetterHand[word.charAt(i)]) {
      return false
    }
    dictLetterHand[word.charAt(i)] = dictLetterHand[word.charAt(i)] - 1
  }
  return true

};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
