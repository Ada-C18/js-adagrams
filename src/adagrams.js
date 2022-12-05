const scoreChart = {
  'A': 1, 'B': 3,
  'C': 3, 'D': 2,
  'E': 1, 'F': 4,
  'G': 2, 'H': 4,
  'I': 1, 'J': 8,
  'K': 5, 'L': 1,
  'M': 3, 'N': 1,
  'O': 1, 'P': 3,
  'Q': 10, 'R': 1,
  'S': 1, 'T': 1,
  'U': 1, 'V': 4,
  'W': 4, 'X': 8,
  'Y': 4, 'Z': 10
}


export const drawLetters = () => {
    const LETTER_POOL = {
      'A': 9, 'B': 2,
      'C': 2, 'D': 4,
      'E': 12, 'F': 2,
      'G': 3, 'H': 2, 
      'I': 9, 'J': 1, 
      'K': 1, 'L': 4,
      'M': 2, 'N': 6, 
      'O': 8, 'P': 2, 
      'Q': 1, 'R': 6,
      'S': 4, 'T': 6, 
      'U': 4, 'V': 2, 
      'W': 2, 'X': 1,
      'Y': 2, 'Z': 1,
    };

    const letters = [];
    for (const num in LETTER_POOL) {
      for (let i = 0; i < LETTER_POOL[num]; i++) {
        letters.push(num);
      }
    }

    const random = letters.sort(() => 0.5 - Math.random());
    let hand = random.slice(0, 10);

    return hand;
  };

export const usesAvailableLetters = (input, lettersInHand) => {
  const hashTable = new Map();
  let word = input.toUpperCase();
  let stringLettersInHand = (lettersInHand.join("")).toUpperCase();
  for (let i = 0; i < stringLettersInHand.length; i++) {
    lettersInHand
    if(hashTable.has(stringLettersInHand[i])) {
      hashTable.set(stringLettersInHand[i], hashTable.get(stringLettersInHand[i])+1);
    } else {
      hashTable.set(stringLettersInHand[i], 1);
    }
  }
  
  for (let i = 0; i < word.length; i++) {
    if(hashTable.has(word[i]) && hashTable.get(word[i]) > 0) {
      hashTable.set(word[i],hashTable.get(word[i])-1);
    } else {
      return false;
    }
  }
  return true;

};

export const scoreWord = (word) => {
  // Implement this method for wave 3
  let score = 0;
  if (7 <=word.length && word.length <= 10){
    score += 8;
  }
  for(let i = 0; i < word.length; i++){
    score += scoreChart[word[i].toUpperCase()];
  }
  return score;
  
}

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
  let highestScore = 0;
  for (let i = 0; i < words.length; i++) {
    if (scoreWord(words[i]) > highestScore) {
      highestScore = scoreWord(words[i]);
    }
  }
  let highestScoringWords = [];
  for (let i = 0; i < words.length; i++){
    if (scoreWord(words[i]) == highestScore) {
      highestScoringWords.push(words[i]);
    }
  }

  for (let i = 0; i < highestScoringWords.length; i++) {
    if (highestScoringWords[i].length == 10)  {
      return ({word:highestScoringWords[i],score:highestScore});
    }
  }
  
  highestScoringWords.sort((a,b)=> a.length - b.length);
  return ({word:highestScoringWords[0],score:highestScore});

};



// const findShort = str => {
//   // Convert string into an array of individual words:
//   const arr = str.split(' ');
//   // Sort array in ascending order:
//   arr.sort((a, b) => a.length - b.length);
//   // Return the first (shortest) element in the array:
//   return arr[0];

// def get_highest_word_score(word_list):
//     highest_score = 0
//     for word in word_list:
//         if score_word(word) > highest_score:
//             highest_score = score_word(word)

//     highest_scoring_words = []
//     for word in word_list:
//         if score_word(word) == highest_score:
//             highest_scoring_words.append(word)

//     for word in highest_scoring_words:
//         if len(word) == 10:
//             return ([word, highest_score])
//         if len(word) < 10:
//             least_words = min(highest_scoring_words, key=len)

//     return ([least_words, highest_score])
