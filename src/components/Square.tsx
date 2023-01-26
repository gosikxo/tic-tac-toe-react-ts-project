import React, { useEffect } from 'react'

export const Square = ({
    arrayOfSquares,
    setArrayOfSquares,
    currentId,
    setCurrentId,
    text,
    currentPlayer,
    setCurrentPlayer,
    gameOver
}: {
    arrayOfSquares: string[],
    setArrayOfSquares: Function,
    currentId: number,
    setCurrentId: Function,
    text: string,
    currentPlayer: string | undefined,
    setCurrentPlayer: Function,
    gameOver: boolean
}) => {

    useEffect(() => {
        setCurrentId(currentId)
        setCurrentPlayer('X')
    }, [currentId, setCurrentId, setCurrentPlayer])

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
