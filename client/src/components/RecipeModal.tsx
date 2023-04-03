import { Transition } from '@headlessui/react'

interface RecipeModalProps {
    recipe: RecipeObj;
    handleCloseModal: () => void;
}

const RecipeModal: React.FC<RecipeModalProps> = ({ recipe, handleCloseModal }) => {

    const handleClose = () => {
        setTimeout(() => {
            handleCloseModal();
        }, 300);
    }

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
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75"></div>
          <div className="bg-white rounded-lg shadow-lg p-4 z-10 w-[390px]">
            <div className="flex flex-col w-full min-h-full">
                <div className='flex h-[180px]'>
                   <div className='h-[180px] w-[180px] overflow-hidden rounded-xl'>
                        <img
                            alt={recipe.label}
                            src={recipe.image}
                        />
                   </div>
                   <div className='w-[190px] flex flex-col justify-start items-center p-2'>
                        <div>
                            <label className='font-bold uppercase'>{ recipe.label }</label>
                        </div>
                        <div className='flex justify-between w-full my-1'>
                            <p className='first-letter:uppercase'>{ recipe.cuisineType.join(', ') } Cuisine</p>
                        </div>
                        <div className='flex justify-between w-full my-3'>
                            <div className='flex flex-col'>
                                <label className='text-[10px] tracking-widest uppercase text-gray-500'>time</label>
                                <p className='text-xs md:text-[15px]'>{ recipe.totalTime }m</p>
                            </div>
                            <div className='flex flex-col'>
                                <label className='text-[10px] tracking-widest uppercase text-gray-500'>calories</label>
                                <p  className='text-xs md:text-[15px]'>{ recipe.calories / recipe.yield } kcal</p>
                            </div>
                            <div className='flex flex-col'>
                                <label className='text-[10px] tracking-widest uppercase text-gray-500'>yield</label>
                                <p  className='text-xs md:text-[15px]'>{ recipe.yield }</p>
                            </div>
                        </div>
                   </div>
                </div>
                <div className='h-auto'>
                    <div className='flex justify-between w-full my-3 p-2'>
                        <div className='flex flex-col justify-center items-center'>
                            <label className='text-[10px] tracking-widest uppercase text-gray-500'>fat</label>
                            <p className='text-xs md:text-[15px] first-letter:uppercase'>{ Math.floor(recipe.digest[0].total /  recipe.yield) }{ recipe.digest[0].unit }</p>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <label className='text-[10px] tracking-widest uppercase text-gray-500'>carbs</label>
                            <p  className='text-xs md:text-[15px] first-letter:uppercase'>{ Math.floor(recipe.digest[1].total /  recipe.yield) }{ recipe.digest[0].unit }</p>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <label className='text-[10px] tracking-widest uppercase text-gray-500'>protein</label>
                            <p  className='text-xs md:text-[15px]'>{ Math.floor(recipe.digest[2].total / recipe.yield) }{ recipe.digest[2].unit }</p>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <label className='text-[10px] tracking-widest uppercase text-gray-500'>Cholesterol</label>
                            <p  className='text-xs md:text-[15px]'>{ Math.floor(recipe.digest[3].total / recipe.yield) }{ recipe.digest[3].unit }</p>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <label className='text-[10px] tracking-widest uppercase text-gray-500'>sodium</label>
                            <p  className='text-xs md:text-[15px]'>{ Math.floor(recipe.digest[4].total / recipe.yield) }{ recipe.digest[4].unit }</p>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-[10px] tracking-widest uppercase text-gray-500'>ingredients:</label>
                        <div className='h-[120px] m-2 overflow-scroll overflow-x-hidden'>
                            <p className='text-xs md:text-[12px]'>{ recipe.ingredientLines.join(', ') }</p>
                        </div>
                    </div>
                </div>
                <div className='h-[86px] flex flex-col items-center justify-between'>
                    <div className='flex justify-between w-full'>
                        <div
                                className='h-[40px] w-44 rounded-xl flex items-center justify-center bg-green-500 hover:scale-105 ease-in duration-500 cursor-pointer'
                                onClick={handleClose}
                            >
                                save recipe
                        </div>
                        <div
                                className='h-[40px] w-44 rounded-xl flex items-center justify-center bg-green-500 hover:scale-105 ease-in duration-500 cursor-pointer'
                                onClick={handleClose}
                            >
                                instructions
                        </div>
                        </div>    
                   <div
                        className='h-[40px] w-full rounded-xl flex items-center justify-center bg-green-500 hover:scale-105 ease-in duration-500 cursor-pointer'
                        onClick={handleClose}
                    >
                        close
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