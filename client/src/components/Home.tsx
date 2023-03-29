import { useState } from 'react'
import axios from 'axios';

const Home = () => {
  const apiID = process.env.REACT_APP_API_ID;
  const apiKey = process.env.REACT_APP_API_KEY;
  const [quantity, setQuantity] = useState(1);
  const [itemLabel, setItemLabel] = useState('');
  const [itemImage, setItemImage] = useState('');
  const [foodItems, setFoodItems] = useState([]);

  const handleSelect = async (foodItem: string) => {
    const fetchedFood = await axios.get(`https://api.edamam.com/api/food-database/v2/parser?app_id=${apiID}&app_key=${apiKey}&ingr=${foodItem}&nutrition-type=cooking&category=generic-foods`);
    const label = !fetchedFood.data.hints[0].food.label ? (!fetchedFood.data.hints[1].food.label ? (!fetchedFood.data.hints[2].food.label ? '' : fetchedFood.data.hints[2].food.label) : fetchedFood.data.hints[1].food.label) : fetchedFood.data.hints[0].food.label;
    const image = !fetchedFood.data.hints[0].food.image ? (!fetchedFood.data.hints[1].food.image ? (!fetchedFood.data.hints[2].food.image ? '' : fetchedFood.data.hints[2].food.image) : fetchedFood.data.hints[1].food.image) : fetchedFood.data.hints[0].food.image;
    setItemImage(image);
    setItemLabel(label);
  }

  return (
    <div className='max-w-[1240px] w-full h-full mx-auto flex justify-center items-start pt-24'
    >
      <div className='w-full h-full flex flex-col'>
        <div className='h-[290px] md:h-[250px]'>
          <div className='flex flex-col md:grid grid-cols-2 w-full h-full'>
            <div className='p-4'>
              <div className='flex h-[110px] md:h-[220px] flex-col rounded-3xl shadow-lg bg-white pt-5 border-2 border-black'>
                <div className='flex flex-col justify-start items-start px-6'>
                  <p className=' text-gray-500'>
                    Add items to your pantry
                  </p>
                  <input
                    type='search'
                    className='h-10 border-2 p-2'
                    onChange={(e) => {
                      setTimeout(async () => {
                        const fetchedItems = await axios.get(`https://api.edamam.com/auto-complete?app_id=${apiID}&app_key=${apiKey}&q=${e.target.value}&limit=5`);
                        const itemButtons = fetchedItems.data.map((food: string) => {

                          return (
                            <div
                              key={food}
                              className='flex justify-center items-center border-2 rounded-xl p-1 m-1 cursor-pointer hover:scale-105 ease-in duration-500'
                              onClick={async () => {
                                handleSelect(food);
                              }}
                            >
                              + {food}
                            </div>
                          )
                        })
                        setFoodItems(itemButtons);
                      }, 1000);
                    }}
                  />
                  </div>
                <div className='flex w-full h-[92px] flex-wrap overflow-y-scroll px-4'>
                  {
                    foodItems.length > 0
                    ?
                      (
                        itemImage.length > 0
                        ?
                          <div
                            className='flex justify-center items-center border-2 rounded-xl p-2 pl-0 m-auto cursor-pointer hover:scale-105 ease-in duration-500 relative group'
                          >
                            <div
                              className='flex justify-center items-center w-[25px] h-[30px] border-r-2 hover:scale-110 ease-in duration-500'
                              onClick={() => {
                                setItemLabel('');
                                setItemImage('');
                              }}
                            >
                            X
                            </div>
                            <img
                              className='h-12 w-12 mx-1 rounded-full m-auto'
                              src={itemImage}
                            />
                            {itemLabel}
                            <div className='flex flex-col items-center justify-center'>
                              <label className='text-xs text-gray-400'>Qty</label>
                              <input
                                min='1'
                                placeholder='1'
                                type='number'
                                className='h-10 w-14 border-2 p-2 mx-2'
                              />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                              <label className='text-xs text-gray-400'>Exp. Date</label>
                              <input
                                min={new Date().toISOString().split('T')[0]} 
                                type='date'
                                className='h-10 w-50 border-2 p-2 mx-2'
                              />
                            </div>
                          </div>
                        :
                          foodItems
                      )
                    :
                      ''
                  }
                </div>
                <div className='w-full'>
                  <button
                    className={`${itemImage ? 'bg-green-400 shadow-lg' : 'bg-white shadow-lg border-t-2'} w-full p-2 align-bottom rounded-b-3xl`}
                    onClick={() => {
                    }}
                    >
                    Add
                  </button>
                </div>
              </div>
            </div>
            <div className='p-4'>
              <div className='flex h-[110px] md:h-[220px] rounded-3xl shadow-lg bg-white border-2 border-black'>

              </div>
            </div>
          </div>
        </div>
        <div className='w-full h-[430px]'>
          <div className='w-full h-full p-4'>
            <div className=' w-full h-full rounded shadow-lg bg-white border-2 border-black'>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;