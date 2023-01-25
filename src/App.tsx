import React, { useState } from 'react'
import { Square } from './components/Square';

function App() {
  const [squareSymbol, setSquareSymbol] = useState<string | undefined>()

  const arrayOfSquares: number[] = []
  for (let i = 1; i < 10; i++) {
    arrayOfSquares.push(i)
  }

  return (
    <div className='app'>
      <h1 className='headerText'>Let's play!</h1>
      <p className='turnText'>Next player: X</p>
      <div className='board'>
        {arrayOfSquares.map((numb: number) => (
          <Square
            setSquareSymbol={setSquareSymbol}
            squareSymbol={squareSymbol}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
