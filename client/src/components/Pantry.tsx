import axios from 'axios';
import React, { useState, useEffect } from 'react'

interface PantryObj {
    name: string,
    img_source: string,
    exp_date: string,
    fat: number,
    cal: number,
    protein: number,
    qty: number,
}

const Pantry = () => {
    const [pantryItems, setPantryItems] = useState<JSX.Element[]>([]);
    // const [reload, setReload] = useState(false);

    useEffect(() => {
      getPantryItems()
    }, [])
    

    // const pantryItemsArray = [{"id":4,"uid":"1goodsir","name":"Chilies","exp_date":"2023-04-08","img_source":"https://www.edamam.com/food-img/e3d/e3d161d6cfe5ef287053aed5461738ba.jpg","qty":4,"cal":32,"fat":0.44,"protein":1.74}];
    const getPantryItems = async () => {
        const fetchedPantryItems = await axios.get('/api/pantry/1goodsir');
        const pantryItems = fetchedPantryItems.data.map((foodItem: PantryObj) => {
            const label = foodItem.name;
            const img = foodItem.img_source;
            const expDate = foodItem.exp_date;
            const fat = foodItem.fat;
            const calories = foodItem.cal;
            const protein = foodItem.protein;
            const quantity = foodItem.qty;

            return (
                <div className='flex p-2'>
                    <div className='border-2 w-full border-black flex p-4 h-[70px] rounded-xl hover:scale-105 ease-in duration-500'>
                        <div className='flex items-center justify-start w-full h-full'>
                            <div className='flex items-center justify-center pr-4'>
                                <img
                                    alt={label}
                                    className='h-[60px] w-[60px] rounded-lg mx-2'
                                    src={ img }
                                />
                            </div>
                            <div className='flex w-full flex-col items-center'>
                                <p className='tracking-widest uppercase'>{ label }</p>
                                <div className='flex w-full justify-between'>
                                    <div className='flex flex-col justify-center items-center h-full'>
                                        <label className=' text-xs tracking-widest uppercase text-gray-500'>qty</label>
                                        <p>{ quantity }</p>
                                    </div>
                                    <div className='flex flex-col justify-center items-center h-full'>
                                        <label className=' text-xs tracking-widest uppercase text-gray-500'>calories</label>
                                        <p>{ calories }kcal</p>
                                    </div>
                                    <div className='flex flex-col justify-center items-center h-full'>
                                        <label className=' text-xs tracking-widest uppercase text-gray-500'>protein</label>
                                        <p>{ protein }g</p>
                                    </div>
                                    <div className='flex flex-col justify-center items-center h-full'>
                                        <label className=' text-xs tracking-widest uppercase text-gray-500'>fat</label>
                                        <p>{ fat }g</p>
                                    </div>
                                    <div className='flex flex-col justify-center items-center h-full'>
                                        <label className=' text-xs tracking-widest uppercase text-gray-500'>exp. date</label>
                                        <p>{ expDate }</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            )
        })
        setPantryItems(pantryItems);
    }

    return (
    <div className='w-full h-[430px]'>
            <div className='w-full h-full p-2'>
                    <div className='h-[25px] border-2 border-black rounded-sm z-50'>
                        <h2>Pantry</h2>
                    </div>
                <div className='w-full h-[330px] rounded shadow-lg border-2 border-black'>
                    <div className='flex md:grid grid-cols-2'>
                        { pantryItems }
                    </div>
                </div>
        </div>
    </div>
    )
}

export default Pantry