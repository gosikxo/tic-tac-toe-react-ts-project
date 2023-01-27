import React, { useEffect } from 'react'

export const Square = ({
    arrayOfSquares,
    setArrayOfSquares,
    currentId,
    setCurrentId,
    text,
    currentPlayer,
    setCurrentPlayer,
    gameOver,
    setGameOver,
    setWinner
}: {
    arrayOfSquares: string[],
    setArrayOfSquares: Function,
    currentId: number,
    setCurrentId: Function,
    text: string,
    currentPlayer: string | undefined,
    setCurrentPlayer: Function,
    gameOver: boolean,
    setGameOver: Function,
    setWinner: Function
}) => {

    useEffect(() => {
        setCurrentId(currentId)
        setCurrentPlayer('X')
    }, [currentId, setCurrentId, setCurrentPlayer])

    useEffect(() => {
        if ((arrayOfSquares[currentId] === arrayOfSquares[currentId + 1] &&
            arrayOfSquares[currentId + 1] === arrayOfSquares[currentId + 2] &&
            (currentId === 0 || currentId === 3 || currentId === 6) &&
            arrayOfSquares[currentId] === 'X') ||
            (arrayOfSquares[currentId] === arrayOfSquares[currentId + 3] &&
                arrayOfSquares[currentId + 3] === arrayOfSquares[currentId + 6] &&
                arrayOfSquares[currentId] === 'X') ||
            (arrayOfSquares[currentId] === arrayOfSquares[currentId + 4] &&
                arrayOfSquares[currentId + 4] === arrayOfSquares[currentId + 8] &&
                arrayOfSquares[currentId] === 'X') ||
            (arrayOfSquares[currentId] === arrayOfSquares[currentId + 2] &&
                arrayOfSquares[currentId + 2] === arrayOfSquares[currentId + 4] &&
                arrayOfSquares[currentId] === 'X')) {
            setGameOver(true)
            setWinner('X')
        } else if ((arrayOfSquares[currentId] === arrayOfSquares[currentId + 1] &&
            arrayOfSquares[currentId + 1] === arrayOfSquares[currentId + 2] &&
            (currentId === 0 || currentId === 3 || currentId === 6) &&
            arrayOfSquares[currentId] === 'O') ||
            (arrayOfSquares[currentId] === arrayOfSquares[currentId + 3] &&
                arrayOfSquares[currentId + 3] === arrayOfSquares[currentId + 6] &&
                arrayOfSquares[currentId] === 'O') ||
            (arrayOfSquares[currentId] === arrayOfSquares[currentId + 4] &&
                arrayOfSquares[currentId + 4] === arrayOfSquares[currentId + 8] &&
                arrayOfSquares[currentId] === 'O') ||
            (arrayOfSquares[currentId] === arrayOfSquares[currentId + 2] &&
                arrayOfSquares[currentId + 2] === arrayOfSquares[currentId + 4] &&
                arrayOfSquares[currentId] === 'O')) {
            setGameOver(true)
            setWinner('O')
        }
    }, [arrayOfSquares, currentId, setGameOver, setWinner])

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

    const changePlayer = () => {
        if (currentPlayer === 'X') {
            setCurrentPlayer('O')
        } else {
            setCurrentPlayer('X')
        }
    }

    return (
        <button
            className='square'
            onClick={() => handleClick(currentId)}
        >
            {text}
        </button>
    )
}
