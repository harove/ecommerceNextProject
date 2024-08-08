import Image from 'next/image'
import React from 'react'
import Menu from './Menu'

function Navbar() {
  return (
    <div className='w-full bg-gray-600'>
      <div className="container m-auto py-4 flex justify-between items-center">
        <Image src='/coder.png' alt='code menu' width={200} height={200}/>
        <Menu/>
      </div>
    </div>
  )
}

export default Navbar