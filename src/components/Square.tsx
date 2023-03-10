import React from 'react'

export const Square = (props: { onClick: () => void, text: string }) => {
    const changeButtonClass = () => {
        if (props.text === 'X') {
            return 'x'
        } else if (props.text === 'O') {
            return 'o'
        }
    }

    return (
        <button
            className={`square ${changeButtonClass()}`}
            onClick={props.onClick}
        >
            {props.text}
        </button>
    )
}
