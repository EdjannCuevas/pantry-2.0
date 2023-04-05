import { Transition } from '@headlessui/react'
import { AiOutlineClose } from 'react-icons/ai'
import axios from 'axios';

interface RecipeModalProps {
    recipe: RecipeObj;
    handleCloseModal: () => void;
    handleLink: (arg: string) => void;
    trigger: boolean;
    setTrigger: (arg: boolean) => void;
}

const RecipeModal: React.FC<RecipeModalProps> = ({ recipe, handleCloseModal, handleLink, trigger, setTrigger }) => {

    const handleClose = () => {
        setTimeout(() => {
            handleCloseModal();
        }, 300);
    }

    const handleSave = async (recipe: RecipeObj) => {
        try {
            await axios.post('/api/recipes/', {
              uid: '1goodsir',
              label : recipe.label,
              image : recipe.image,
              ingredientLines: recipe.ingredientLines,
              url: recipe.url,
            });
            setTrigger(!trigger);

        } catch (error) {
        console.log(error);
        };
        setTimeout(() => {
            handleCloseModal();
        }, 700);
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
          <div
            onClick={handleClose}
            className="fixed inset-0 bg-gray-500 bg-opacity-75"
          ></div>
          <div className="bg-white rounded-lg shadow-lg p-4 z-10 w-[370px]">
            <div className="flex flex-col w-full min-h-full">
                <div className='flex h-[180px]'>
                   <div className='h-[180px] w-[180px] rounded-xl'>
                        <img
                            className='h-[180px] w-[180px] rounded-xl'
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
                                <label className='text-[10px] tracking-widest uppercase text-green-500'>time</label>
                                <p className='text-xs md:text-[15px]'>{ recipe.totalTime }m</p>
                            </div>
                            <div className='flex flex-col'>
                                <label className='text-[10px] tracking-widest uppercase text-blue-500'>calories</label>
                                <p  className='text-xs md:text-[15px]'>{ Math.floor(recipe.calories / recipe.yield) } kcal</p>
                            </div>
                            <div className='flex flex-col'>
                                <label className='text-[10px] tracking-widest uppercase text-amber-500'>yield</label>
                                <p  className='text-xs md:text-[15px]'>{ recipe.yield }</p>
                            </div>
                        </div>
                   </div>
                </div>
                <div className='h-auto'>
                    <div className='flex justify-between w-full my-3 p-2'>
                        <div className='flex flex-col justify-center items-center'>
                            <label className='text-[10px] tracking-widest uppercase text-yellow-500'>fat</label>
                            <p className='text-xs md:text-[15px] first-letter:uppercase'>{ Math.floor(recipe.digest[0].total /  recipe.yield) }{ recipe.digest[0].unit }</p>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <label className='text-[10px] tracking-widest uppercase text-purple-500'>carbs</label>
                            <p  className='text-xs md:text-[15px] first-letter:uppercase'>{ Math.floor(recipe.digest[1].total /  recipe.yield) }{ recipe.digest[0].unit }</p>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <label className='text-[10px] tracking-widest uppercase text-orange-500'>protein</label>
                            <p  className='text-xs md:text-[15px]'>{ Math.floor(recipe.digest[2].total / recipe.yield) }{ recipe.digest[2].unit }</p>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <label className='text-[10px] tracking-widest uppercase text-gray-500'>Cholesterol</label>
                            <p  className='text-xs md:text-[15px]'>{ Math.floor(recipe.digest[3].total / recipe.yield) }{ recipe.digest[3].unit }</p>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <label className='text-[10px] tracking-widest uppercase text-black'>sodium</label>
                            <p  className='text-xs md:text-[15px]'>{ Math.floor(recipe.digest[4].total / recipe.yield) }{ recipe.digest[4].unit }</p>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-[10px] tracking-widest uppercase text-gray-500'>ingredients:</label>
                        <div className='h-[120px] m-2 overflow-y-auto'>
                            <p className='text-xs md:text-[12px]'>{ recipe.ingredientLines.join(', ') }</p>
                        </div>
                    </div>
                </div>
                <div className='h-[86px] flex flex-col items-center justify-between p-2'>
                    <div className='flex justify-between w-full'>
                        <div
                                className='h-[40px] w-44 rounded-xl m-2 text-white flex items-center justify-center bg-amber-600 hover:scale-105 ease-in duration-500 cursor-pointer'
                                onClick={() => handleSave(recipe)}
                            >
                                <p className='flex justify-center items-center w-20 h-[30px] uppercase tracking-widest'>
                                    save
                                </p>
                        </div>
                        <div
                                className='h-[40px] w-44 rounded-xl m-2 text-white flex items-center justify-center bg-amber-600 hover:scale-105 ease-in duration-500 cursor-pointer'
                                onClick={() => handleLink(recipe.url)}
                            >
                                <p className='flex justify-center items-center w-20 h-[30px] uppercase tracking-widest'>
                                    recipe
                                </p>
                        </div>
                        </div> 
                    <div className='w-full h-[60px]'>
                        <div
                                className='h-[40px] w-full p-2 text-white flex rounded-t-lg items-center justify-center bg-gray-500 hover:scale-105 ease-in duration-500 cursor-pointer'
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