import axios from 'axios';
import React, { useState, useEffect } from 'react'

const Pantry: React.FC<triggerProps> = ({ trigger, setTrigger }) => {
    const [pantryItems, setPantryItems] = useState<JSX.Element[]>([]);

    useEffect(() => {
        const getPantryItems = async () => {
            // const fetchedPantryItems = [{"id":3,"uid":"1goodsir","name":"Pork Sparerib","exp_date":"","img_source":"https://www.edamam.com/food-img/e54/e548d7ddfea41f3ffa55cb712ae4e4a8.jpg","qty":1,"cal":277,"fat":23.4,"protein":15.47},{"id":4,"uid":"1goodsir","name":"Chilies","exp_date":"2023-04-08","img_source":"https://www.edamam.com/food-img/e3d/e3d161d6cfe5ef287053aed5461738ba.jpg","qty":4,"cal":32,"fat":0.44,"protein":1.74},{"id":5,"uid":"1goodsir","name":"Avocado","exp_date":"2023-04-04","img_source":"https://www.edamam.com/food-img/984/984a707ea8e9c6bf5f6498970a9e6d9d.jpg","qty":4,"cal":160,"fat":14.66,"protein":2},{"id":6,"uid":"1goodsir","name":"Chicken","exp_date":"2023-04-07","img_source":"https://www.edamam.com/food-img/d33/d338229d774a743f7858f6764e095878.jpg","qty":1,"cal":215,"fat":15.06,"protein":18.6},{"id":7,"uid":"1goodsir","name":"Chia","exp_date":"2023-04-05","img_source":"https://www.edamam.com/food-img/bcc/bcc6e6bf3175772ad00b414636467257.jpg","qty":1,"cal":486,"fat":30.74,"protein":16.54},{"id":8,"uid":"1goodsir","name":"Pork","exp_date":"2023-04-08","img_source":"https://www.edamam.com/food-img/d55/d553f23d42b9c8fb314416ccd5cde3d2.jpg","qty":2,"cal":198,"fat":12.58,"protein":19.74}]
            // const pantryItems = fetchedPantryItems.map((foodItem: PantryObj) => {
            const fetchedPantryItems = await axios.get('/api/pantry/1goodsir');
            const pantryItems = fetchedPantryItems.data.filter((foodItem: PantryObj) => !foodItem.isSelected).map((foodItem: PantryObj) => {
                const id = foodItem.id;
                const label = foodItem.name;
                const img = foodItem.img_source;
                const expDate = foodItem.exp_date;
                const fat = foodItem.fat;
                const calories = foodItem.cal;
                const protein = foodItem.protein;
                const quantity = foodItem.qty;
                const select = foodItem.isSelected;
    
                return (
                    <div className='flex py-1 px-4'>
                        <div
                            className='border-2 w-full border-green-500 bg-white flex h-[90px] rounded-xl hover:scale-105 ease-in duration-500 px-4'
                            onClick={() => handleSelection(id, select)}
                        >
                            <div className='flex justify-start w-full'>
                                <div className='flex items-center justify-center pr-4'>
                                    <img
                                        alt={label}
                                        className='h-[70px] w-[80px] rounded-lg'
                                        src={ img }
                                    />
                                </div>
                                <div className='flex w-full flex-col justify-start items-start'>
                                    <p className='tracking-widest uppercase font-bold bg-green-500 px-1 bg-opacity-75 rounded-lg rounded-t-none'
                                    >
                                        { label }
                                    </p>
                                    <div className='flex w-full justify-between h-[50px] pt-2'>
                                        <div className='flex flex-col justify-center items-center h-full'>
                                            <label className='text-[10px] tracking-widest uppercase text-gray-500'>qty</label>
                                            <p className='text-[15px]'>{ quantity }</p>
                                        </div>
                                        <div className='flex flex-col justify-center items-center h-full'>
                                            <label className='text-[10px] tracking-widest uppercase text-gray-500'>calories</label>
                                            <p className='text-[15px]'>{ calories }kcal</p>
                                        </div>
                                        <div className='flex flex-col justify-center items-center h-full'>
                                            <label className='text-[10px] tracking-widest uppercase text-gray-500'>protein</label>
                                            <p className='text-[15px]'>{ protein }g</p>
                                        </div>
                                        <div className='flex flex-col justify-center items-center h-full'>
                                            <label className='text-[10px] tracking-widest uppercase text-gray-500'>fat</label>
                                            <p className='text-[15px]'>{ fat }g</p>
                                        </div>
                                        <div className='flex flex-col justify-center items-center h-full'>
                                            <label className='text-[10px] tracking-widest uppercase text-gray-500'>exp. date</label>
                                            <p className='text-[15px]'>{ expDate }</p>
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
        getPantryItems();

    }, [trigger]);
    
    
    const handleSelection = async (id: number, selected: boolean) => {
        try {
            await axios.put((`/api/pantry/${id}`), {
                isSelected: !selected
            });
            setTimeout(() => {
                setTrigger(!trigger);
            }, 500);
        } catch (error) {
            console.log(error);
        }
    }
    

    return (
    <div className='w-full h-[620px] col-span-4'>
        <div className='w-full h-full p-2'>
            <div className='flex justify-center items-center h-[25px] border-2 border-b-0 border-white bg-green-500 rounded-sm rounded-b-none z-50 cursor-pointer'>
                <h2 className='uppercase tracking-widest font-bold'>Pantry</h2>
            </div>
            <div className='w-full h-[580px] rounded rounded-t-none shadow-lg border-2 border-t-0 border-white bg-white bg-opacity-80 pt-4 overflow-y-scroll'>
                <div className='flex flex-col'>
                    { pantryItems }
                </div>
            </div>
        </div>
    </div>
    )
}

export default Pantry