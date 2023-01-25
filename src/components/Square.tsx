import React from 'react'

export const Square = ({
    squareSymbol,
    setSquareSymbol
}: {
    squareSymbol: string | undefined,
    setSquareSymbol: Function
}) => {

    const handleClick = () => {
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
