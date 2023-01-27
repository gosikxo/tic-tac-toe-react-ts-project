import React, { useState, useEffect } from 'react'
import { Square } from './components/Square'

function App() {
  const [arrayOfSquares, setArrayOfSquares] = useState<string[]>(['', '', '', '', '', '', '', '', ''])
  const [currentPlayer, setCurrentPlayer] = useState<string | undefined>()
  const [gameOver, setGameOver] = useState<boolean>(false)
  const [winner, setWinner] = useState<string | undefined>()

  const changePlayer = () => {
    if (currentPlayer === 'X') {
      setCurrentPlayer('O')
    } else {
      setCurrentPlayer('X')
    }
  }

  const handleClick = (i: number) => {
    if (!gameOver && currentPlayer === 'X' && arrayOfSquares[i] === '') {
      arrayOfSquares[i] = 'X'
      changePlayer()
    } else if (!gameOver && currentPlayer === 'O' && arrayOfSquares[i] === '') {
      arrayOfSquares[i] = 'O'
      changePlayer()
    }
    setArrayOfSquares([...arrayOfSquares])
  }

  const restartGame = () => {
    setArrayOfSquares(['', '', '', '', '', '', '', '', ''])
    setGameOver(false)
    setCurrentPlayer('X')
  }

  useEffect(() => {
    setCurrentPlayer('X')
  }, [setCurrentPlayer])

  useEffect(() => {
    if ((arrayOfSquares[0] === arrayOfSquares[1] &&
      arrayOfSquares[1] === arrayOfSquares[2] &&
      arrayOfSquares[0] === 'X') ||
      (arrayOfSquares[0] === arrayOfSquares[3] &&
        arrayOfSquares[3] === arrayOfSquares[6] &&
        arrayOfSquares[0] === 'X') ||
      (arrayOfSquares[0] === arrayOfSquares[4] &&
        arrayOfSquares[4] === arrayOfSquares[8] &&
        arrayOfSquares[0] === 'X') ||
      (arrayOfSquares[0] === arrayOfSquares[2] &&
        arrayOfSquares[2] === arrayOfSquares[4] &&
        arrayOfSquares[0] === 'X')) {
      setGameOver(true)
      setWinner('X')
    }
  }, [arrayOfSquares, setGameOver, setWinner])

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
            {winner} won!
          </p>
          <button onClick={restartGame} className='gameOverButton'>
            Play Again?
          </button>
        </div>
      }
      <div className='board'>
        {arrayOfSquares.map((square: string, idx: number) => (
          <Square
          text={square}
            onClick={() => {
              handleClick(idx)
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default App
