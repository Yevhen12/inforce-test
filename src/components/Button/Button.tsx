import React from 'react'

type ButtonType = {
    color: string
    hover: string
    action: React.MouseEventHandler<HTMLButtonElement>
    text: string
}

const Button: React.FC<ButtonType> = ({ color, action, text, hover }) => {
    return (
        <button
            type='button'
            className={`${color} text-sm font-semibold text-white px-4 py-2 rounded shadow-defaultBtn duration-200 active:opacity-70 hover:${hover}`}
            onClick={action}
        >
            {text}
        </button>
    )
}

export default Button