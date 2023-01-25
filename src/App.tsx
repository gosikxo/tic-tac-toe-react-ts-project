import React, { useState } from 'react'
import { Square } from './components/Square';

function App() {
  const [squareSymbol, setSquareSymbol] = useState<string | undefined>()
  const [currentId, setCurrentId] = useState<number | undefined>()

  const arrayOfSquares: number[] = []
  for (let i = 1; i < 10; i++) {
    arrayOfSquares.push(i)
  }

  console.log({currentId})


  return (
    <div className='app'>
      <h1 className='headerText'>Let's play!</h1>
      <p className='turnText'>Next player: X</p>
      <div className='board'>
        {arrayOfSquares.map((numb: number) => (
          <Square
            setSquareSymbol={setSquareSymbol}
            squareSymbol={squareSymbol}
            currentId={numb}
            setCurrentId={setCurrentId}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
