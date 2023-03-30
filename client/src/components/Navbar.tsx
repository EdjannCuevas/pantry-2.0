import React from 'react'
import Stirfry from '../styles/images/stirfry.gif'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className='fixed w-full h-16 shadow-xl z-[100]'
    >
        <div className='bg-green-400 flex justify-around items-center w-full h-full px-2 2xl:px-16'>
          <div className='flex h-full items-center'>
            <div>
              <img
                alt='logo'
                className='w-[45px] h-[45px]'
                src={ Stirfry }
                onClick={() => navigate('/')}
              />
            </div>
            <h1 className='text-3xl font-bold uppercase'>Pan•try</h1>
          </div>
        </div>
    </div>
  )
}

export default Navbar