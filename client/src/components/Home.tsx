import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Pantry from './Pantry';
import Ingredients from './Ingredients';

const Home: React.FC<triggerProps> = ({ trigger, setTrigger }) => {
  const apiID = process.env.REACT_APP_FOOD_API_ID;
  const apiKey = process.env.REACT_APP_FOOD_API_KEY;
  const [calories, setCalories] = useState(0);
  const [protein, setProtein] = useState(0);
  const [fat, setFat] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [expDate, setExpDate] = useState('');
  const [itemLabel, setItemLabel] = useState('');
  const [itemImage, setItemImage] = useState('');
  const [foodItems, setFoodItems] = useState<JSX.Element[]>([]);

  useEffect(() => {
    handleDefaultSuggestions();
  },[])

  const defaultSuggestions = ['banana', 'egg', 'butter', 'bread', 'tomato', 'oil', 'milk', 'apple', 'flour', 'sugar'];

  const handleDefaultSuggestions = () => {
    const itemButtons = defaultSuggestions.map((food: string) => {

      return (
        <div
          key={food}
          className='flex justify-center items-center border-2 border-green-500 bg-white rounded-xl p-1 m-1 cursor-pointer hover:scale-105 ease-in duration-500'
          onClick={ async () => {
            handleSelect(food);
          }}
        >
        + {food}
        </div>
      )
    })
    setFoodItems(itemButtons);
  }

  const handleAddButton = async () => {
    try {
      await axios.post('/api/pantry', {
        uid: '1goodsir',
        name : itemLabel,
        exp_date : expDate,
        img_source: itemImage,
        qty: quantity,
        cal: calories,
        fat: fat,
        protein: protein,
        isSelected: false,
      });

    } catch (error) {
      console.log(error)
    };

    setItemImage('');
    setQuantity(0);
    setItemLabel('');
    setCalories(0);
    setFat(0);
    setProtein(0);
    setExpDate('');
    setTrigger(!trigger);
  }

  const getPantry = async () => {
    try {
      const fetchedItems = await axios.get('/pantry/1goodsir');
      console.log(fetchedItems.data);

    } catch (error) {
      console.log(error)
    }
  }

  const handleSelect = async (foodItem: string) => {
    const fetchedFood = await axios.get(`https://api.edamam.com/api/food-database/v2/parser?app_id=${apiID}&app_key=${apiKey}&ingr=${foodItem}&nutrition-type=cooking&category=generic-foods`);
    const label = !fetchedFood.data.hints[0].food.label ? (!fetchedFood.data.hints[1].food.label ? (!fetchedFood.data.hints[2].food.label ? '' : fetchedFood.data.hints[2].food.label) : fetchedFood.data.hints[1].food.label) : fetchedFood.data.hints[0].food.label;
    const image = !fetchedFood.data.hints[0].food.image ? (!fetchedFood.data.hints[1].food.image ? (!fetchedFood.data.hints[2].food.image ? '' : fetchedFood.data.hints[2].food.image) : fetchedFood.data.hints[1].food.image) : fetchedFood.data.hints[0].food.image;
    const calories = !fetchedFood.data.hints[0].food.nutrients.ENERC_KCAL ? (!fetchedFood.data.hints[1].food.nutrients.ENERC_KCAL ? (!fetchedFood.data.hints[2].food.nutrients.ENERC_KCAL ? 0 : fetchedFood.data.hints[2].food.nutrients.ENERC_KCAL) : fetchedFood.data.hints[1].food.nutrients.ENERC_KCAL) : fetchedFood.data.hints[0].food.nutrients.ENERC_KCAL;
    const fat = !fetchedFood.data.hints[0].food.nutrients.FAT ? (!fetchedFood.data.hints[1].food.nutrients.FAT ? (!fetchedFood.data.hints[2].food.nutrients.FAT ? 0 : fetchedFood.data.hints[2].food.nutrients.FAT) : fetchedFood.data.hints[1].food.nutrients.FAT) : fetchedFood.data.hints[0].food.nutrients.FAT;
    const protein = !fetchedFood.data.hints[0].food.nutrients.PROCNT ? (!fetchedFood.data.hints[1].food.nutrients.PROCNT ? (!fetchedFood.data.hints[2].food.nutrients.PROCNT ? 0 : fetchedFood.data.hints[2].food.nutrients.PROCNT) : fetchedFood.data.hints[1].food.nutrients.PROCNT) : fetchedFood.data.hints[0].food.nutrients.PROCNT;
    setItemImage(image);
    setItemLabel(label);
    setCalories(calories);
    setFat(fat);
    setProtein(protein);
  }

  return (
    <div className='max-w-[1240px] w-full h-auto md:h-full mx-auto flex justify-center items-center pt-16'>
      <div className='w-full h-full'>
        <div className='h-full'>
          <div className='flex flex-col md:grid grid-cols-7 w-full h-full p-2'>
            <div className='p-2 col-span-3'>
              <div className='flex h-[250px] md:h-[220px] flex-col rounded-3xl shadow-lg bg-white bg-opacity-80 pt-2 border-2 border-white'>
                <div className='flex flex-col justify-center items-start px-6'>
                  <p className=' text-gray-500'>
                    Add items to your pantry
                  </p>
                  <input
                    type='search'
                    className='h-10 border-2 p-2'
                    onChange={(e) => {
                      e.target.value
                      ?
                      (  
                        setTimeout(async () => {
                          const fetchedItems = await axios.get(`https://api.edamam.com/auto-complete?app_id=${apiID}&app_key=${apiKey}&q=${e.target.value}&limit=5`);
                          const itemButtons = fetchedItems.data.map((food: string) => {

                            return (
                              <div
                                key={food}
                                className='flex justify-center items-center border-2 border-green-500 bg-white rounded-xl p-1 m-1 cursor-pointer hover:scale-105 ease-in duration-500'
                                onClick={ async () => {
                                  handleSelect(food);
                                }}
                              >
                              + {food}
                              </div>
                            )
                          })
                          setFoodItems(itemButtons);
                        }, 1000)
                      )
                      :
                      (
                        handleDefaultSuggestions()
                      )
                    }}
                  />
                  </div>
                <div className='flex w-full h-[132px] md:h-[102px] flex-wrap overflow-y-scroll px-4'>
                  {
                    foodItems.length > 0
                    ?
                      (
                        itemImage.length > 0
                        ?
                          <div
                            className='flex justify-center items-center border-2 border-green-500 bg-white rounded-xl m-auto cursor-pointer hover:scale-105 ease-in duration-500 relative group'
                          >
                            <div
                              className='flex justify-center items-center w-[25px] mr-3 border-r-2 hover:scale-110 ease-in duration-500 text-gray-400'
                              onClick={() => {
                                setItemLabel('');
                                setItemImage('');
                                setExpDate('');
                                getPantry();
                              }}
                            >
                              X
                            </div>
                            <div className='flex items-center mr-3 h-12 w-12'>
                              <img
                                alt={itemLabel}
                                className='mx-1 rounded-lg m-auto'
                                src={itemImage}
                              />
                            </div>
                            <div className='flex flex-col'>
                              <div>
                                <p className='tracking-widest uppercase font-bold bg-green-500 px-1 bg-opacity-75 rounded-lg rounded-t-none'>
                                  { itemLabel }
                                </p>
                              </div>
                              <div className='flex p-1'>

                                <div className='flex flex-col items-center justify-center'>
                                  <label className='text-[8px] md:text-[10px] uppercase text-gray-400'>
                                    Qty
                                  </label>

                                  <input
                                    min='1'
                                    placeholder='1'
                                    type='number'
                                    className='h-8 w-12 border-2 p-2 mx-2'
                                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                                  />
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                  <label className='text-[8px] md:text-[10px] text-gray-400 uppercase'>
                                    Expiry Date
                                  </label>

                                  <input
                                    min={new Date().toISOString().split('T')[0]} 
                                    type='date'
                                    className='h-8 w-36 border-2 p-2 mx-2'
                                    onChange={(e) => setExpDate(e.target.value)}
                                  />
                                </div>
                              </div>

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
                    disabled={expDate.length === 0}
                    className={`${itemImage && expDate.length > 0 ? 'bg-green-500 border-2 border-green-500 shadow-lg' : 'bg-green-400 shadow-lg border-2 border-green-400'} w-full p-2 align-bottom rounded-b-3xl`}
                    onClick={() => {
                      handleAddButton();
                    }}
                    >
                    Add
                  </button>
                </div>
              </div>
              <Ingredients trigger={trigger} setTrigger={setTrigger} />
            </div>
            <Pantry trigger={trigger} setTrigger={setTrigger} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;