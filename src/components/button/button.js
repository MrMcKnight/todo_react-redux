import React from 'react'
import './button.scss'

const Button=({className, buttonName, onClick})=>
(
    <button 
    onClick={onClick} 
    className={className}>
        {buttonName}
    </button>
)


export default Button