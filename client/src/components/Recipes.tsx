import React, { useEffect } from 'react'
import Grocery from './Grocery'

const Recipes: React.FC<triggerProps> = ({ trigger, setTrigger }) => {
    useEffect(() => {

    })

    return (
    <div className='max-w-[1240px] w-full h-auto md:h-full mx-auto flex flex-col justify-start items-center pt-16'>
        <div className='w-full h-20 bg-yellow-400'>

        </div>
        <div className='grid grid-cols-8 w-full h-[550px]'>
            <div className='col-span-6 p-2'>
                <div className='flex justify-center items-center h-[25px] border-2 border-b-0 border-white bg-green-500 rounded-sm rounded-b-none z-50 cursor-pointer'>
                    <h2 className='uppercase tracking-widest font-bold'>recipes</h2>
                </div>
                <div className='bg-white w-full h-[510px]'>

                </div>
            </div>
            <Grocery trigger={ trigger } setTrigger={ setTrigger } />
        </div>
    </div>
  )
}

export default Recipes