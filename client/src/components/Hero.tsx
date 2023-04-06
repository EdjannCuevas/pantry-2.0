import React from 'react'
import { useNavigate } from 'react-router-dom'

const Hero:React.FC = () => {
    const navigate = useNavigate();
    return (
        <div
        style={{backgroundImage: `url('pantry-hero.png')`}}
        className="max-w-[1240px] w-full h-screen md:h-full mx-auto pt-16"
        >
        <div
            className='w-full h-full flex justify-center items-center bg-black bg-opacity-50'
        >
            <div className='h-[450px] w-[400px] flex flex-col items-center justify-start text-white'>
            <h1 className='text-[70px] uppercase font-bold'>Pantry</h1>
            <h2 className='p-4'>Pantry is a web app that helps users manage their pantry inventory and find recipes using ingredients they already have at home. With a simple interface and easy-to-use features, Pantry makes meal planning and grocery shopping a breeze.</h2>
            <div className='h-[100px] w-[200px] flex items-center justify-center'>
                <div
                onClick={() => navigate('/home')}
                className='h-[50px] w-[150px] flex items-center justify-center bg-gray-500 cursor-pointer hover:scale-105 ease-in-out duration-300 bg-opacity-75'
                >
                <p>Get started!</p>
                </div>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Hero