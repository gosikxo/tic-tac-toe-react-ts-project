import React, { useState } from 'react'
import { Square } from './components/Square';

function App() {
  const [arrayOfSquares, setArrayOfSquares] = useState<string[]>(['', '', '', '', '', '', '', '', ''])
  const [currentId, setCurrentId] = useState<number>()
  const [currentPlayer, setCurrentPlayer] = useState<string | undefined>()
  const [gameOver, setGameOver] = useState<boolean>(false)

  console.log(arrayOfSquares)

  const restartGame = () => {
    setArrayOfSquares(['', '', '', '', '', '', '', '', ''])
    setGameOver(false)
  }

  return (
    <div className='app'>
      <h1 className='headerText'>Let's play!</h1>
      {!gameOver ?
        <p className='turnText'>
          Next player: {currentPlayer}
        </p>
        :
        <div className='endOfTheGame'>
          <p className='gameOver'>
            Game Over
          </p>
          <button onClick={restartGame} className='gameOverButton'>
            Play Again?
          </button>
        </div>
      }
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
            gameOver={gameOver}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
