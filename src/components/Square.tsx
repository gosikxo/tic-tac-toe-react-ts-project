import React from 'react'

export const Square = ({
    arrayOfSquares,
    currentId,
    setCurrentId
}: {
    arrayOfSquares: string[],
    currentId: number,
    setCurrentId: Function
}) => {

    const handleClick = (i: number) => {
        setCurrentId(currentId)
    }
    return (
        <button
            className='square'
            onClick={() => handleClick(currentId)}
        >

        </button>
    )
}
