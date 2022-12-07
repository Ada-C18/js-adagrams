const letterbank = {
  A : 9,
  B : 2,
  C : 2,
  D : 4,
  E : 12,
  F : 2,
  G : 3,
  H : 2,
  I : 9,
  J : 1,
  K : 1,
  L : 4,
  M : 2,
  N : 6,
  O : 8,
  P : 2,
  Q : 1,
  R : 6,
  S : 4,
  T : 6,
  U : 4,
  V : 2,
  W : 2,
  X : 1,
  Y : 2,
  Z : 1,
};
export const drawLetters = () => {
  // Implement this method for wave 1
  let letterbankArr = Object.entries(letterbank)
  let letterpool = [];
  for (const [key, value] of letterbankArr){
    for (const i of Array(26).values) {
      letterpool.push(key)
    }
  }
  
  let lastindex = letterbank.length - 1;

  while (lastindex > 0) {
    let randindex = Math.floor(Math.random() * lastindex);
    letterpool[lastindex], letterpool[randindex] = (letterpool[randindex], letterpool[lastindex])
    lastindex -= 1
  }
  return letterpool.slice(0,10)
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
