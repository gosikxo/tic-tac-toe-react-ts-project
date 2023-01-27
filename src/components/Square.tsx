import React from 'react'

export const Square = (props: { onClick: () => void, text: string}) => {

    return (
        <button
            className='square'
            onClick={props.onClick}
        >
            {props.text}
        </button>
    )
}
