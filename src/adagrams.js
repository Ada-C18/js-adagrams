const LETTERPOOL = {
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


const createLetterList = () => {
  const letters = [];
  const letterList = [];
  for (const [key, value] of Object.entries(LETTERPOOL)) {
    letters.push(key.repeat(value)) ;
  }
  for (const ele of letters) {
    for (const letter of ele) {
      letterList.push(letter);
    }
  }
  
  return letterList;
};



const pool = createLetterList();

const createRandomizer = () => {
  const randomIndex = Math.floor(Math.random() * (pool.length + 1));
  const randomLetter = pool[randomIndex];
  return randomLetter
};



export const drawLetters = () => {
  // Implement this method for wave 1
  // const pool = createLetterList(LETTERPOOL);
  const drawnLetters = [];

  while (drawnLetters.length < 10) {
    const randomLetter = createRandomizer();
    const occurences = drawnLetters.filter( letter => letter === randomLetter).length

    if (occurences < LETTERPOOL[randomLetter]) {
      drawnLetters.push(randomLetter);
    }
  }
  return drawnLetters;
  
};



export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  const word = input.toUpperCase();
  const wordArray = word.split('');
  const handString = lettersInHand.toString();
  const validLetters = []
 
  for (const letter of word) {
    if (lettersInHand.includes(letter)) {
      const wordOccur = wordArray.filter( word => word === letter).length;
      const handOccur = lettersInHand.filter( hand => hand === letter).length;
      validLetters.push(letter)
      if (wordOccur > handOccur) {
        return false
      } 
    }
    else {
      return false
    }
  if (validLetters.length === word.length) {
    return true
  }

  }

      
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
  const SCORECHART = {
    'A':1,
    'E':1,
    'I':1,
    'O':1,
    'U':1,
    'L':1,
    'N':1,
    'R':1,
    'S':1,
    'T':1,
    'D':2,
    'G':2,
    'B':3,
    'C':3,
    'M':3,
    'P':3,
    'F':4,
    'H':4,
    'V':4,
    'W':4,
    'Y':4,
    'K':5,
    'J':8,
    'X':8,
    'Q':10,
    'Z':10
  };

  let sumScore = 0;
  const words = word.toUpperCase();

  
  
  for (const letter of words) {
    let value = SCORECHART[letter];
    sumScore += value;
  }
  if (words.length >= 7 && words.length <= 10) {
    sumScore += 8;
  }


return sumScore;

};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
  const wordListDict = {};
  const maxWordList = [];
  const wordLenTenList = [];
  const highestWordList = [];
  let resultDict = {}

  // calculate the highest score of all the words
  
  // calculate the score of each word in word_list
  for (const word of words) {
    wordListDict[word] = scoreWord(word); 
  }
  // calculate highest score in scoreWord dictionary
  let scores = Object.values(wordListDict);
  let highestWordScore = Math.max(...scores);
  
  // append all words with the highest score to the highest word dictionary
  
  for (const [key, value] of Object.entries(wordListDict)) {
    if (wordListDict[key] === highestWordScore) {
      highestWordList.push(key)
    }
  }
  // if there is more than one word with the highest score 
  // and if one of any of those words are 10 letters use that word
  if (highestWordList.length > 1) {
    for (const word of highestWordList) {
      if (word.length === 10) {
        wordLenTenList.push(word);
        resultDict['word'] = wordLenTenList[0];
        resultDict['score'] = highestWordScore;
        return resultDict
      }
      else {
        const lens = highestWordList.map(words => words.length)
        console.log(lens)
        const shortestWord = Math.min(...lens)
        for (const item of highestWordList) {
          if (item.length === shortestWord) {
            resultDict['word'] = item;
            resultDict['score'] = highestWordScore;
          }
        }
      }  
    }
  } 
  else {
    resultDict['word'] = highestWordList[0];
    resultDict['score'] = highestWordScore;
  }
  // if no 10 letter words use the shortest word
  // console.log(wordListDict);
  // console.log(`score ${highestWordScore}`);
  // console.log(wordLenTenList);
  console.log(resultDict);
  return resultDict;
  

};
