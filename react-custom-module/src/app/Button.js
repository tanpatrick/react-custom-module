import React from 'react'

const Button = ({ label = 'Button label goes here' }) => {
    return (
        <input type="button" value={label} />
    )
}

export default Button