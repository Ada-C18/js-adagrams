export const drawLetters = () => {
  const letterPool = {
    A: 9,
    B: 2,
    C: 2,
    D: 4,
    E: 12,
    F: 2,
    G: 3,
    H: 2,
    I: 9,
    J: 1,
    K: 1,
    L: 4,
    M: 2,
    N: 6,
    O: 8,
    P: 2,
    Q: 1,
    R: 6,
    S: 4,
    T: 6,
    U: 4,
    V: 2,
    W: 2,
    X: 1,
    Y: 2,
    Z: 1,
  };
  
  

  const letters = Object.keys(letterPool);
  let hand = [];
  while (hand.length < 10) {
    let letter = letters[Math.floor(Math.random() * letters.length)];
    letterPool[letter] = letterPool[letter] - 1;
    if (letterPool[letter] > 0) {
      hand.push(letter);
    };
  };
  return hand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  const testWord = input.toUpperCase();
  let hand = [];

  for(let letter of lettersInHand) {
    hand.push(letter);
  };

  for(let characters of testWord){
    if (hand.includes(characters)) {
      hand.splice(characters, 1);
    } else {
      return false;
    };
  };

  return true
};

export const scoreWord = (word) => {
  const scoreChart= {
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

  let score = 0;
  const scoreWord = word.toUpperCase();

  for (let letter of scoreWord) {
        score += scoreChart[letter]
  }

  if (word.length >= 7) {
        score += 8
  }
    return score
};

export const highestScoreFrom = (words) => {
  const scoredWords = new Map();

  words.forEach(word => {
    scoredWords.set(word,scoreWord(word));
  });

  let scores = scoredWords.values();
  let highScore = Math.max(...scores);


  const scoredWordsArray = Array.from(scoredWords.entries());
  function checkWord(word) {
    return word[1] === highScore;
    
  }

  const highScoreWords = scoredWordsArray.filter(checkWord)


    let smallestWordLength = Infinity
    let previousWord = ["", 0]
    highScoreWords.forEach(wordEntry => {
      let wordLength = wordEntry[0].length
      if (previousWord[0].length === 10)
        return //prevents if statement on next line from running
      if (wordLength === 10) {
        previousWord = wordEntry
      } else if (wordLength < smallestWordLength) {
        smallestWordLength = wordLength
        previousWord = wordEntry
      }
    })
    return {"score": previousWord[1], "word": previousWord[0]}


};
