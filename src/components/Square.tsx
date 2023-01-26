import React, { useEffect } from 'react'

export const Square = ({
    arrayOfSquares,
    setArrayOfSquares,
    currentId,
    setCurrentId,
    text,
    currentPlayer,
    setCurrentPlayer
}: {
    arrayOfSquares: string[],
    setArrayOfSquares: Function,
    currentId: number,
    setCurrentId: Function,
    text: string,
    currentPlayer: string | undefined,
    setCurrentPlayer: Function
}) => {

    useEffect(() => {
        setCurrentId(currentId)
        setCurrentPlayer('X')
    }, [currentId, setCurrentId, setCurrentPlayer])

    const handleClick = (i: number) => {
        if (currentPlayer === 'X') {
            arrayOfSquares[i] = 'X'
        } else {
            arrayOfSquares[i] = 'O'
        }
        setArrayOfSquares([...arrayOfSquares])
        changePlayer()
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
