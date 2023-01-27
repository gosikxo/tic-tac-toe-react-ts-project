import React, { useState, useEffect } from 'react'
import { Square } from './components/Square'
import { isGameOver } from './game'

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
    const result = isGameOver(arrayOfSquares);

    if (result === 'O_WON') {
      setWinner('O won!');
    }
    if (result === 'X_WON') {
      setWinner('X won!');
    }
    if (result === 'DRAW') {
      setWinner('It\'s a draw')
    }

    if (result) {
      setGameOver(true);
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
            {winner}
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
