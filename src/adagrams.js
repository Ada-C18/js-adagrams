export const drawLetters = () => {
  const letterPool = {
    A : 9 ,
    N : 6  ,
    B : 2,
    O : 8 ,
    C : 2 ,
    P : 2,
    D : 4 ,
    Q : 1,
    E : 12 ,
    R : 6,
    F : 2,
    S : 4 ,
    G : 3,
    T : 6,
    H : 2,     
    U : 4,  
    I : 9,
    V : 2,
    J : 1,
    W : 2,
    K : 1,
    X : 1,
    L : 4,    
    Y : 2, 
    M : 2,
    Z : 1,   
  }

let newPool = letterPool
let hand = []
for (let i = 0; i < 10; i++){
  let randomIndex = Math.floor(Math.random() * 26)
  let key = Object.keys(newPool)[randomIndex]
  if (!hand.includes(key)){
    newPool[key] -= 1
    hand.push(key);
  } else if (hand.includes(key) && newPool[key] > 0){
    newPool[key] -= 1
    hand.push(key)
  } 
}
  {
    return hand;
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
