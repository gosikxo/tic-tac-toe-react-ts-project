import React, { useEffect, useState } from 'react'
import { Square } from './components/Square';

function App() {
  const [arrayOfSquares, setArrayOfSquares] = useState<string[]>(['', '', '', '', '', '', '', '', '',])
  const [currentId, setCurrentId] = useState<number>()

  console.log(arrayOfSquares)

  return (
    <div className='app'>
      <h1 className='headerText'>Let's play!</h1>
      <p className='turnText'>Next player: X</p>
      <div className='board'>
        {arrayOfSquares.map((square: string, idx: number) => (
          <Square
            arrayOfSquares={arrayOfSquares}
            setArrayOfSquares={setArrayOfSquares}
            currentId={idx}
            setCurrentId={setCurrentId}
            text={square}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
