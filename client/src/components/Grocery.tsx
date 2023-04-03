import React from 'react'

const Grocery: React.FC<triggerProps> = ({ trigger, setTrigger }) => {
    return (
    <div className='col-span-2 p-2'>
        <div className='flex justify-center items-center h-[25px] border-2 border-b-0 border-white bg-green-500 rounded-sm rounded-b-none z-50 cursor-pointer'>
            <h2 className='uppercase tracking-widest font-bold'>grocery lists</h2>
        </div>
        <div className='bg-white bg-opacity-75 p-2 w-full h-[510px]'>

        </div>
    </div>
    )
}

export default Grocery