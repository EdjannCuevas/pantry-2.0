import { Transition } from '@headlessui/react'
import { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

interface RecipeModalProps {
    recipe: RecipeTableObj;
    handleCloseModal: () => void;
    handleLink: (arg: string) => void;
}

const RecipeModal: React.FC<RecipeModalProps> = ({ recipe, handleCloseModal, handleLink }) => {
    const image = recipe.image;
    const [recipeLines, setRecipeLines] = useState<JSX.Element[]>([]);

    const handleClose = () => {
        setTimeout(() => {
            handleCloseModal();
        }, 300);
    }

    useEffect(() => {
        const ingredients = recipe.ingredientLines.map((line: string) => {
            return (
                <li>{line}</li>
            );
        });
        setRecipeLines(ingredients);
    },[]);


  return (
    <Transition
      show={true}
      enter="transition-opacity duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-300"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen">
          <div
            onClick={handleClose}
            className="fixed inset-0 bg-gray-500 bg-opacity-75"></div>
          <div className="bg-white rounded-lg shadow-lg p-4 z-10 w-[380px]">
            <div className="flex flex-col w-full min-h-full">
                <div className='h-[400px] flex flex-col justify-between'>
                    <div className='h-[130px] flex justify-start items-center'>
                        <img
                            className='h-[120px]'
                            alt={recipe.label}
                            src={image}
                        />
                        <div className='w-[220px] h-full flex justify-center items-center p-6'>
                            <label className='font-bold uppercase'>{ recipe.label }</label>
                        </div>
                    </div>
                    <div className='h-[200px] overflow-y-auto'>
                        <div className='p-2'>
                            {recipeLines}
                        </div>
                    </div>
                    <div className='flex p-2 justify-between items-center w-full'>
                        <div
                            className='h-[40px] w-[150px] rounded-lg text-white flex items-center justify-center bg-amber-600 hover:scale-105 ease-in duration-500 p-2 cursor-pointer'
                            onClick={() => handleLink(recipe.url)}
                        >
                            <p className='flex justify-center items-center w-20 h-[30px] uppercase tracking-widest'>
                                Recipe
                            </p>
                        </div>
                        <div
                            className='h-[40px] w-[150px] rounded-lg text-white flex items-center justify-center bg-amber-600 hover:scale-105 ease-in duration-500 p-2 cursor-pointer'
                            onClick={handleClose}
                        >
                            <p className='flex justify-center items-center w-20 h-[30px] uppercase tracking-widest'>
                                <AiOutlineClose />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  )
}

export default RecipeModal;