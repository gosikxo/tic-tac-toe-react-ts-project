import React from 'react'

export const Square = ({
    squareSymbol,
    setSquareSymbol,
    currentId,
    setCurrentId
}: {
    squareSymbol: string | undefined,
    setSquareSymbol: Function,
    currentId: number | undefined,
    setCurrentId: Function
}) => {

    const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setCurrentId(currentId)
        setSquareSymbol('X')

    }
    return (
        <button
            className='square'
            onClick={handleClick}
        >
            {squareSymbol}
        </button>
    )
}
