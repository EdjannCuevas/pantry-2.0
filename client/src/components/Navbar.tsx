import React from 'react'
import Stirfry from '../styles/images/stirfry.gif'

const Navbar = () => {
  return (
    <div className='fixed w-full h-16 shadow-xl z-[100]'
    >
        <div className='bg-green-400 flex justify-between items-center w-full h-full px-2 2xl:px-16'>
          <div className='flex h-full items-center'>
            <div>
              <img
                alt='logo'
                className='w-[45px] h-[45px]'
                src={ Stirfry }></img>
            </div>
            <h1 className='text-3xl font-bold uppercase'>Pantry</h1>
          </div>
        </div>
    </div>
  )
}

export default Navbar