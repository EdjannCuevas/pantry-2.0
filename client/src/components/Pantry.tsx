import axios from 'axios';
import React, { useState, useEffect } from 'react'

const Pantry: React.FC<triggerProps> = ({ trigger, setTrigger }) => {
    const [pantryItems, setPantryItems] = useState<JSX.Element[]>([]);

    useEffect(() => {
        const getPantryItems = async () => {
            // const fetchedPantryItems = [{"id":3,"uid":"1goodsir","name":"Rye Bread","exp_date":"","img_source":"https://www.edamam.com/food-img/2d1/2d1b8db0fe95a564cb25432a83ca8a66.jpg","qty":2,"cal":259,"fat":3.3,"protein":8.5,"isSelected":false},{"id":1,"uid":"1goodsir","name":"Pork","exp_date":"2023-04-08","img_source":"https://www.edamam.com/food-img/d55/d553f23d42b9c8fb314416ccd5cde3d2.jpg","qty":1,"cal":198,"fat":12.58,"protein":19.74,"isSelected":false},{"id":7,"uid":"1goodsir","name":"Avocado","exp_date":"2023-04-06","img_source":"https://www.edamam.com/food-img/984/984a707ea8e9c6bf5f6498970a9e6d9d.jpg","qty":10,"cal":160,"fat":14.66,"protein":2,"isSelected":false},{"id":2,"uid":"1goodsir","name":"Pork Sparerib","exp_date":"2023-04-06","img_source":"https://www.edamam.com/food-img/e54/e548d7ddfea41f3ffa55cb712ae4e4a8.jpg","qty":2,"cal":277,"fat":23.4,"protein":15.47,"isSelected":false},{"id":4,"uid":"1goodsir","name":"Chicken Leg","exp_date":"2023-04-08","img_source":"https://www.edamam.com/food-img/f53/f53de7dd1054370cdfd98e18ccf77dbe.jpg","qty":1,"cal":214,"fat":15.95,"protein":16.37,"isSelected":false},{"id":6,"uid":"1goodsir","name":"Ground Coffee","exp_date":"2023-04-08","img_source":"https://www.edamam.com/food-img/336/336e810373dd353a955a6896699b586e.jpg","qty":2,"cal":353,"fat":0.5,"protein":12.2,"isSelected":false},{"id":5,"uid":"1goodsir","name":"Orange Blossom Honey","exp_date":"2023-04-30","img_source":"https://www.edamam.com/food-img/198/198c7b25c23b4235b4cc33818c7b335f.jpg","qty":1,"cal":304,"fat":10.6,"protein":0.3,"isSelected":false},{"id":3,"uid":"1goodsir","name":"Rye Bread","exp_date":"","img_source":"https://www.edamam.com/food-img/2d1/2d1b8db0fe95a564cb25432a83ca8a66.jpg","qty":2,"cal":259,"fat":3.3,"protein":8.5,"isSelected":false},{"id":1,"uid":"1goodsir","name":"Pork","exp_date":"2023-04-08","img_source":"https://www.edamam.com/food-img/d55/d553f23d42b9c8fb314416ccd5cde3d2.jpg","qty":1,"cal":198,"fat":12.58,"protein":19.74,"isSelected":false},{"id":7,"uid":"1goodsir","name":"Avocado","exp_date":"2023-04-06","img_source":"https://www.edamam.com/food-img/984/984a707ea8e9c6bf5f6498970a9e6d9d.jpg","qty":10,"cal":160,"fat":14.66,"protein":2,"isSelected":false},{"id":2,"uid":"1goodsir","name":"Pork Sparerib","exp_date":"2023-04-06","img_source":"https://www.edamam.com/food-img/e54/e548d7ddfea41f3ffa55cb712ae4e4a8.jpg","qty":2,"cal":277,"fat":23.4,"protein":15.47,"isSelected":false},{"id":4,"uid":"1goodsir","name":"Chicken Leg","exp_date":"2023-04-08","img_source":"https://www.edamam.com/food-img/f53/f53de7dd1054370cdfd98e18ccf77dbe.jpg","qty":1,"cal":214,"fat":15.95,"protein":16.37,"isSelected":false},{"id":6,"uid":"1goodsir","name":"Ground Coffee","exp_date":"2023-04-08","img_source":"https://www.edamam.com/food-img/336/336e810373dd353a955a6896699b586e.jpg","qty":2,"cal":353,"fat":0.5,"protein":12.2,"isSelected":false},{"id":5,"uid":"1goodsir","name":"Orange Blossom Honey","exp_date":"2023-04-30","img_source":"https://www.edamam.com/food-img/198/198c7b25c23b4235b4cc33818c7b335f.jpg","qty":1,"cal":304,"fat":10.6,"protein":0.3,"isSelected":false}]
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
                            className='border-2 w-full border-green-500 bg-white flex h-[90px] shadow-lg hover:scale-105 ease-in duration-300 px-2 md:px-4 cursor-pointer relative group'
                            onClick={() => handleSelection(id, select)}
                        >
                            <div className='flex justify-start w-full'>
                                <div className='flex items-center justify-center pr-2 md:pr-4'>
                                    <img
                                        alt={label}
                                        className='h-[70px] w-[90px] md:w-[80px] rounded-lg shadow-2xl hover:scale-105 ease-in-out duration-300'
                                        src={ img }
                                    />
                                </div>
                                <div className='flex w-full flex-col justify-start items-start'>
                                    <div className='flex w-full justify-between'>
                                        <p className='w-full tracking-widest uppercase text-xs md:text-sm font-bold bg-green-500 px-1 bg-opacity-75 rounded-lg rounded-t-none'>
                                            { label }
                                        </p>
                                        <div className='hidden absolute -translate-y-5 translate-x-40 md:translate-x-96 z-10 text-sm group-hover:block w-17 tracking-widest uppercase font-bold bg-green-400 bg-opacity-75 px-1 rounded-lg rounded-b-none cursor-pointer'>
                                            <p
                                                onClick={() => handleDelete(id)}
                                                className='text-[10px]'>
                                                delete
                                            </p>
                                        </div>
                                    </div>
                                    <div className='flex w-full justify-between h-[50px] pt-2'>
                                        <div className='flex flex-col justify-center items-center h-full rounded-full'>
                                            <label className='text-[8px] md:text-[10px] tracking-widest uppercase text-green-600'>qty</label>
                                            <p className='text-[9px] md:text-[15px]'>{ quantity }</p>
                                        </div>
                                        <div className='flex flex-col justify-center items-center h-full rounded-full'>
                                            <label className='text-[8px] md:text-[10px] tracking-widest uppercase text-orange-600'>calories</label>
                                            <p className='text-[9px] md:text-[15px]'>{ calories }kcal</p>
                                        </div>
                                        <div className='flex flex-col justify-center items-center h-full rounded-full'>
                                            <label className='text-[8px] md:text-[10px] tracking-widest uppercase text-amber-600'>protein</label>
                                            <p className='text-[9px] md:text-[15px]'>{ protein }g</p>
                                        </div>
                                        <div className='flex flex-col justify-center items-center h-full rounded-full'>
                                            <label className='text-[8px] md:text-[10px] tracking-widest uppercase text-yellow-500'>fat</label>
                                            <p className='text-[9px] md:text-[15px]'>{ fat }g</p>
                                        </div>
                                        <div className='flex flex-col justify-center items-center h-full rounded-full'>
                                            <label className='text-[8px] md:text-[10px] tracking-widest uppercase text-gray-500'>expiry</label>
                                            <p className='text-[9px] md:text-[15px]'>{ expDate }</p>
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

    const handleDelete = async (id: number) => {
        try {
            await axios.delete((`/api/pantry/${id}`))
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
            <div className='w-full h-[580px] rounded rounded-t-none shadow-lg border-2 border-t-0 border-white bg-white bg-opacity-80 pt-4 overflow-y-auto'>
                <div className='flex flex-col'>
                    { pantryItems }
                </div>
            </div>
        </div>
    </div>
    )
}

export default Pantry