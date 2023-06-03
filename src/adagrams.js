const LETTER_POOL = {
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

const SCORE_CHART_DICT = {
    1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
    2: ['D', 'G'],
    3: ['B', 'C', 'M', 'P'],
    4: ['F', 'H', 'V', 'W', 'Y'],
    5: ['K'],
    8: ['J', 'X'],
    10: ['Q','Z']
};

export const drawLetters = () => {
  const arrLetterPool = [];

  // Convert letterPool to list
  for (let [letter, frequency] of Object.entries(LETTER_POOL)) {
    let countLetters = 0;
    while (countLetters < frequency) {
      arrLetterPool.push(letter);
      countLetters++;
    }
  }

  const drawnLetters = [];

  while (drawnLetters.length < 10) {
    let randomLetter = Math.floor(Math.random() * arrLetterPool.length);
    let removedLetter = arrLetterPool.splice(randomLetter, 1)[0];
    drawnLetters.push(removedLetter);
  }

  return drawnLetters;
};

// Test code
// console.log(drawLetters());

  //declare a new variable to hold the drawnLetters
  //add letters to the drawn letters list from the listOfAllLetters, removing each one from the list once selected
  //return the drawnLetters list
  

    // list_of_letters = []
       
    // for letter, frequency in LETTER_POOL.items():
    //     total_times_letter_appears = 0
    //     while total_times_letter_appears < frequency:
    //         list_of_letters.append(letter)
    //         total_times_letter_appears += 1
    
    // letters = []

    // while len(letters) < 10:
    //     random_letter = random.choice(list_of_letters)
    //     list_of_letters.remove(random_letter)
    //     letters.append(random_letter)

    // return letters 

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  let lettersInHandCopy = Array.from(lettersInHand);
  
  for (let i = 0; i < input.length; i++) {
    const currentLetter = input[i];
    //Line below is needed because the letterIndex is what is used to loop through the lettersInHandCopy array
    //If the currentLetter is not found, indexOf() returns -1.
    const letterIndex = lettersInHandCopy.indexOf(currentLetter)
    if (letterIndex !== -1) {
      lettersInHandCopy.splice (letterIndex, 1);
    } else {
      return false;
    }
  }
  return true;
  }

//   letter_bank_copy = list(letter_bank)

//   for letter in word.upper():
//       if  letter in letter_bank_copy:
//           letter_bank_copy.remove(letter)
//       else:
//           return False
//   return True
// };

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
