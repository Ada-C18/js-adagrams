
const poolOfLetters = {
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
    Z :1
}

export const drawLetters = () => {
  //Returns a list of strings, each string contains one letter

  const letterBank = [];
  const allTheLetters = [];
  for (const letter in poolOfLetters) {
    for (let i=0 ; i < poolOfLetters[letter]; i++) {
      allTheLetters.push(letter);
    }
  };
  
  while (letterBank.length < 10) {
      const index = Math.floor(Math.random()*allTheLetters.length);
      const letter = allTheLetters[index];
      letterBank.push(letter);
      allTheLetters.splice(index, 1); 
  } 
  return letterBank
};

export const usesAvailableLetters = (input, lettersInHand) => {

};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
