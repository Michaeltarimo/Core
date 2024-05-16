import React from 'react'

const Button = ({ children, className = "" }) => {
    return (
        <button href="#" className={`rounded-sm bg-theme py-3 font-semibold text-whiter ${className}`}>
            {children}
        </button>
    )
}

export default Button