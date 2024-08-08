import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full bg-gray-100 border-t mt-10'>
        <div className="container m-auto py-2 text-sm text-gray-700 flex justify-between items-center">
            <p className="">Desarrollado por Edgar</p>
            <div>
                <p className="">powered by</p>
                <Image src='/next.svg' alt='next svg' width={100} height={100}/>
            </div>
        </div>
    </footer>
  )
}

export default Footer