import React, { useState } from 'react'
import { Square } from './components/Square';

function App() {
  const [arrayOfSquares, setArrayOfSquares] = useState<string[]>(['', '', '', '', '', '', '', '', '',])
  const [currentId, setCurrentId] = useState<number>()
  const [currentPlayer, setCurrentPlayer] = useState<string | undefined>()

  console.log(arrayOfSquares)

  return (
    <div className='app'>
      <h1 className='headerText'>Let's play!</h1>
      <p className='turnText'>Next player: {currentPlayer}</p>
      <div className='board'>
        {arrayOfSquares.map((square: string, idx: number) => (
          <Square
            arrayOfSquares={arrayOfSquares}
            setArrayOfSquares={setArrayOfSquares}
            currentId={idx}
            setCurrentId={setCurrentId}
            text={square}
            currentPlayer={currentPlayer}
            setCurrentPlayer={setCurrentPlayer}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
