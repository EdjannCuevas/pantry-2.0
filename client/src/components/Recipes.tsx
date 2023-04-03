import React, { useState, useEffect } from 'react'
import Grocery from './Grocery'

interface RecipesProps {
    trigger: boolean,
    setTrigger: (arg: boolean) => void,
    ingredients: string[];
}

const Recipes: React.FC<RecipesProps> = ({ trigger, setTrigger, ingredients }) => {
    const [recipes, setRecipes] = useState<JSX.Element[]>([]);

    useEffect(() => {
        
    },[recipes]);


    return (
    <div className='max-w-[1240px] w-full h-auto md:h-full mx-auto flex flex-col justify-start items-center pt-16'>
        <div className='w-full h-20 bg-yellow-400'>
            {ingredients}
        </div>
        <div className='grid grid-cols-8 w-full h-[550px]'>
            <div className='col-span-6 p-2'>
                <div className='flex justify-center items-center h-[25px] border-2 border-b-0 border-white bg-green-500 rounded-sm rounded-b-none z-50 cursor-pointer'>
                    <h2 className='uppercase tracking-widest font-bold'>recipes</h2>
                </div>
                <div className='p-2 bg-white bg-opacity-75 h-[510px]'>
                    <div className='h-full'>

                    </div>
                </div>
            </div>
            <Grocery trigger={ trigger } setTrigger={ setTrigger } />
        </div>
    </div>
  )
}

export default Recipes