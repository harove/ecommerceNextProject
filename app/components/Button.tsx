import React, { ReactNode } from 'react'


interface ButtonProps{
    children: ReactNode,
    className?: string
}

const Button = ({children, className='', ...args}: ButtonProps): JSX.Element => {
  return (
    <button className={`rounded-lg py-2 bg-blue-600 text-white ${className}`} {...args}>
        {children}
    </button>
  )
}

export default Button