// Implement this method for wave 1
export const drawLetters = () => {
  const handObj = [{'A':9}, {'B':2}, {'C':2}, {'D':4}, {'E':12}, {'F':2}, {'G':3}, {'H':2}, {'I':9}, {'J':1},
  {'K':1}, {'L':4}, {'M':2}, {'N':6}, {'O':8}, {'P':2}, {'Q':1}, {'R':6}, {'S':4}, {'T':6}, {'U':4}, {'V':2}, {'W':2}, {'X':1}, {'Y':2}, {'Z':1}
  ]

  let handList = []
  let tempHandobj = Object.assign({}, handObj);

    // while hand list is less than 10 append a random letter to the list and if it 
  // is not 0 in the copy dictionary append and -1 from that letter
  // return the hand_list
  // 
  while (handList.length < 10) {
    let randNum = Math.floor(Math.random() * 26);
    let pickedLetter = tempHandobj[randNum]
    
    if (Object.values(pickedLetter) !== 0){
      handList.push(Object.keys(pickedLetter));
      tempHandobj.values()[randNum] -= 1;
    }
  }


};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
