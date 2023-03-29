import React from 'react'

const Home = () => {
  return (
    <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-start pt-24 bg-red-400'
    >
      <div className='w-full h-full flex flex-col bg-blue-200'>
        <div className='bg-red-200 h-[290px] md:h-[250px]'>
          <div className='flex flex-col md:grid grid-cols-2 w-full h-full'>
            <div className='bg-red-600 p-4'>
              <div className='flex h-[110px] md:h-[220px] flex-col justify-start items-center rounded-3xl bg-white p-5'>
                Add items to your pantry
                <input className='h-10' type='text'/>
              </div>
            </div>
            <div className='bg-green-300 p-4'>
              <div className='flex h-[110px] md:h-[220px] rounded-3xl bg-white'>

              </div>
            </div>
          </div>
        </div>
        <div className='w-full bg-blue-500 h-[430px]'>
          <div className='w-full h-full p-4'>
            <div className=' w-full h-full rounded bg-white'>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;