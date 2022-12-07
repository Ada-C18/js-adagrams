
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
  const SCORECHART = {
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

const input =  word.toUpperCase()

const wordlist = []
  for (let i = 0; i < word.length; i++){
    wordlist.push(input.charAt(i));
  }
  let score = 0

  if (wordlist.length >= 7 && wordlist.length < 11){
      score +=8
    }

  for (let i = 0; i < wordlist.length; i++){
      score += SCORECHART[wordlist[i]];
    
  }
  return score 
  };

export const highestScoreFrom = (words) => {
  
  
  const scoretList = []

  for (let i=0; i < words.length; i++){
    let score = scoreWord(words[i])
    scoretList.push({word:words[i], score: score, idx:i})
  }
  scoretList.sort(compare)
  console.log(scoretList)
  delete scoretList[scoretList.length-1].idx
  return scoretList[scoretList.length-1]

};

// Helper Function to compare two words

const compare = (word1,word2) => {
  if (word1.score > word2.score){
    return 1
  }
  if (word1.score < word2.score ){
    return -1
  }
  if (word1.word.length === word2.word.length ){
    if (word1.idx < word2.idx){
    return 1
    }
    else return -1
  }
  if(word1.word.length === 10){
    return 1
  }
  if (word2.word.length === 10){
    return -1
  }
  if (word1.word.length < word2.word.length){
    return 1
  }
return -1

}
