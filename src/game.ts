function checkIfPlayerWon(player: 'X' | 'O', arr: Array<string>) {
    if (arr[0] === player && arr[1] === player && arr[2] === player) return true;
    if (arr[3] === player && arr[4] === player && arr[5] === player) return true;
    if (arr[6] === player && arr[7] === player && arr[8] === player) return true;
    if (arr[0] === player && arr[4] === player && arr[8] === player) return true;
    if (arr[2] === player && arr[4] === player && arr[6] === player) return true;
    if (arr[0] === player && arr[3] === player && arr[6] === player) return true;
    if (arr[1] === player && arr[4] === player && arr[7] === player) return true;
    if (arr[2] === player && arr[5] === player && arr[8] === player) return true;
 
    return false;
 }
 
 export function isGameOver(arrayOfSquares: Array<string>) {
 
   if (checkIfPlayerWon('X', arrayOfSquares)) {
     return 'X_WON'
   }
 
   if (checkIfPlayerWon('O', arrayOfSquares)) {
     return 'O_WON'
   }
 
   if (arrayOfSquares.every(square => square !== "")){
     return 'DRAW'
   }
 }