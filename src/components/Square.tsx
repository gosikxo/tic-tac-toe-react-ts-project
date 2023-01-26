import React from 'react'

export const Square = ({
    arrayOfSquares,
    setArrayOfSquares,
    currentId,
    setCurrentId,
    text
}: {
    arrayOfSquares: string[],
    setArrayOfSquares: Function,
    currentId: number,
    setCurrentId: Function,
    text: string
}) => {

    const handleClick = (i: number) => {
        setCurrentId(currentId)
        arrayOfSquares[i] = 'X'
        setArrayOfSquares([...arrayOfSquares])
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
