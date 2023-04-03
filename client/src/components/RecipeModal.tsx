import { useState } from 'react'
import { Transition } from '@headlessui/react'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'

interface RecipeModalProps {
    recipe: RecipeObj | null;
    handleCloseModal: () => void;
}

const RecipeModal: React.FC<RecipeModalProps> = ({ recipe, handleCloseModal }) => {

    const recipeDefault = {
        "label": "Steamed Spareribs In Black Bean Sauce",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/806/806b439e78f24ddcd312631772a03cf4.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIBxRVCtlrz9ObXfoboSE5vh%2FYOuxGw5Pj7AaRl1QFFVvAiEAoO0zV0tFNpz6D8pXQV8wl1TR4cjTJNmkPPhDy%2FMTLP4qwgUI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDFbL3kz3l8NS6CSvfiqWBRB%2FbItqr7rhTd6N5i4MKf00%2FuMYlOUT9A3%2FeeHyF8PAqvKKimlhH2jZ869X5ezIzeSyzHY1FG7lO88aHOrEQ%2B32nRSlPv18kiPNUr2h6jZPq7YUYYkZPQqwM2oyfERf5tRJ1ZzrfNSpDu%2Fis8sbwV%2BtCn%2FcQ5n842dltlWrxHQP01cazHyQ1%2FoflK9rSS2bZQhakJhJpaAixRlI11sGeVKZXUF7J6iT0ClFiWT4rpfF5iTkPitde8XWVQm5zD2oP4zbp3cqvBFmDbpEcFMYeJY8cSvk0tItUlSLdABFsRsinpyOxZBqtOisE1zMwN9skV0glHWQebbzjikbxIjtVT3RSGUXxdDEZdxy9OwxggVOgH%2B39w7xKUHfN7Cb3lmNeZi8fqtrfcij8mAiDIHaAJPjA2Y96chWUC85IDLbzWD%2BI7L5so5jTOQx%2FiR16BpoFMj2qynfyiH15fsKTYmsvRcCmVXNxN7O0obUMEGlqaf0GqKXOmSPNVvlrWPQ4GgJ4Yq6NBt9H4j%2FuT6aLARglIGqMKeTerrIkddNjA26I5atuGYa23tf74bk3HXHZu3NQ60IpFB4uGvaRjnISQclR3QwSxrf2Zbj8Yv2LV7PcjLJ6XrYxK80d2YnzjpMl37wPJ9gRHEouMTv5ZEwirMW2SSsbSNCA%2B2l0bt2j%2BRB1eqDFRukxnhxUC80m8PCHOWOT7NGhL7udtRUlpMqyRFjp3IKICKDJI5a0TgkBGasQV9fb%2FciHhbybpDTFvbXRSnTCDiJvYRVveBqVuScQlscZkgiyARQboBpP67Qu0G883vMTC6KM286bWx%2B7fuv%2B9xd%2BvWHhGbQOWmlotTJnnX6DtA9YIN4ZVxngTos79JeT%2FHQkQ3N3YzwMJrDqqEGOrEBdtTKRKP0W0HGF0wMNjqH%2BTdooitBaw64KYBe5%2F5PPmMn%2FsNx1ojcAhLqg7WVl8VDSRrwhd4V077Ap7XbdpJP8Ly8fSkWxRL9qLJp2Rbax9sZZSHF2FmmsQKSWVGpmpw38y2lyndiyPbpb%2FKQC3prOAu1fZIS7JkxNcCidPdiOINvPdcXUZMtbqzySGgBTaqbEHLrKabyaGOg50KjP1sQC903g9LWVtS1SazW5CpxOKp%2B&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230403T103337Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOOPKLK7T%2F20230403%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=e952faaaaea0f441d94dcd902a94b5bb5d3a005835b95b84087040b6561e0c85",
        "ingredientLines": [
            "1 1/2 lb pork sparerib - rib tips",
            "2 tbsp black bean sauce",
            "1 tbsp Chinese rice wine - or dry sherry",
            "2 tsp cornstarch",
            "1/2 tsp grated ginger on microplane grater",
            "2 clove garlic, minced",
            "1/4 tsp ground black pepper",
            "1 tsp cooking oil",
            "1 tsp sesame oil",
            "1 tsp sugar"
        ],
        "totalTime": 140,
        "yield": 4,
        "calories": 529,
        "url": "http://steamykitchen.com/203-chinese-steamed-spareribs-with-black-bean-sauce.html",
        "cautions": [
            "Gluten",
            "Wheat"
        ],
        "cuisineType": [
            "french"
        ],
        "dietLabels": [
            "Low-Carb",
            "Low-Sodium"
        ],
        "digest": [
            {
                "label": "Fat",
                "unit": "g",
                "total": 168.6134735366668
            },
            {
                "label": "Carbs",
                "unit": "g",
                "total": 28.408350833551122
            },
            {
                "label": "Protein",
                "unit": "g",
                "total": 110.98621862516687
            },
            {
                "label": "Cholesterol",
                "unit": "mg",
                "total": 544.3108440000001
            },
            {
                "label": "Sodium",
                "unit": "mg",
                "total": 555.439229550002
            }
        ]
    } 

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
                            alt={recipe?.label}
                            src={recipe?.image}
                        />
                   </div>
                   <div className='w-[190px] flex flex-col justify-start items-center p-2'>
                        <div>
                            <label className='font-bold uppercase'>{ recipe?.label }</label>
                        </div>
                        <div className='flex justify-between w-full my-1'>
                            <p className='first-letter:uppercase'>{ recipe?.cuisineType.join(', ') }</p>
                        </div>
                        <div className='flex justify-between w-full my-3'>
                            <div className='flex flex-col'>
                                <label className='text-[10px] tracking-widest uppercase text-gray-500'>time</label>
                                <p className='text-xs md:text-[15px]'>{ recipe?.totalTime }m</p>
                            </div>
                            <div className='flex flex-col'>
                                <label className='text-[10px] tracking-widest uppercase text-gray-500'>calories</label>
                                <p  className='text-xs md:text-[15px]'>{ recipe?.calories } kcal</p>
                            </div>
                            <div className='flex flex-col'>
                                <label className='text-[10px] tracking-widest uppercase text-gray-500'>yield</label>
                                <p  className='text-xs md:text-[15px]'>{ recipe?.yield }</p>
                            </div>
                        </div>
                   </div>
                </div>
                <div className='h-auto'>
                    <div className='flex justify-between w-full my-3'>
                        <div className='flex flex-col justify-center items-center'>
                            <label className='text-[10px] tracking-widest uppercase text-gray-500'>fat</label>
                            <p className='text-xs md:text-[15px] first-letter:uppercase'>{ Math.floor(recipe?.digest[0].total) }{ recipe?.digest[0].unit }</p>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <label className='text-[10px] tracking-widest uppercase text-gray-500'>carbs</label>
                            <p  className='text-xs md:text-[15px] first-letter:uppercase'>{ Math.floor(recipe?.digest[1].total) }{ recipe?.digest[1].unit }</p>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <label className='text-[10px] tracking-widest uppercase text-gray-500'>protein</label>
                            <p  className='text-xs md:text-[15px]'>{ Math.floor(recipe?.digest[2].total) }{ recipe?.digest[2].unit }</p>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <label className='text-[10px] tracking-widest uppercase text-gray-500'>Cholesterol</label>
                            <p  className='text-xs md:text-[15px]'>{ Math.floor(recipe?.digest[3].total) }{ recipe?.digest[3].unit }</p>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <label className='text-[10px] tracking-widest uppercase text-gray-500'>sodium</label>
                            <p  className='text-xs md:text-[15px]'>{ Math.floor(recipe?.digest[4].total) }{ recipe?.digest[4].unit }</p>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-[10px] tracking-widest uppercase text-gray-500'>ingredients</label>
                        <p className='text-xs md:text-[12px] p-2'>{ recipe?.ingredientLines.join(', ') }</p>
                    </div>
                </div>
                <div className='h-[86px] flex flex-col items-center justify-between'>
                    <div className='flex justify-between w-full'>
                        <div
                                className='h-[40px] w-44 rounded-xl flex items-center justify-center bg-green-500 hover:scale-105 ease-in duration-500 cursor-pointer'
                                onClick={handleClose}
                            >
                                add to grocery list
                        </div>
                        <div
                                className='h-[40px] w-44 rounded-xl flex items-center justify-center bg-green-500 hover:scale-105 ease-in duration-500 cursor-pointer'
                                onClick={handleClose}
                            >
                                see recipe
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