import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Ingredients: React.FC<triggerProps> = ({ trigger, setTrigger }) => {
  const [selectedItems, setSelectedItems] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const getSelectedItems = async () => {
      // const fetchedSelected = [{"id":3,"uid":"1goodsir","name":"Rye Bread","exp_date":"","img_source":"https://www.edamam.com/food-img/2d1/2d1b8db0fe95a564cb25432a83ca8a66.jpg","qty":2,"cal":259,"fat":3.3,"protein":8.5,"isSelected":false},{"id":1,"uid":"1goodsir","name":"Pork","exp_date":"2023-04-08","img_source":"https://www.edamam.com/food-img/d55/d553f23d42b9c8fb314416ccd5cde3d2.jpg","qty":1,"cal":198,"fat":12.58,"protein":19.74,"isSelected":false},{"id":7,"uid":"1goodsir","name":"Avocado","exp_date":"2023-04-06","img_source":"https://www.edamam.com/food-img/984/984a707ea8e9c6bf5f6498970a9e6d9d.jpg","qty":10,"cal":160,"fat":14.66,"protein":2,"isSelected":false},{"id":2,"uid":"1goodsir","name":"Pork Sparerib","exp_date":"2023-04-06","img_source":"https://www.edamam.com/food-img/e54/e548d7ddfea41f3ffa55cb712ae4e4a8.jpg","qty":2,"cal":277,"fat":23.4,"protein":15.47,"isSelected":false},{"id":4,"uid":"1goodsir","name":"Chicken Leg","exp_date":"2023-04-08","img_source":"https://www.edamam.com/food-img/f53/f53de7dd1054370cdfd98e18ccf77dbe.jpg","qty":1,"cal":214,"fat":15.95,"protein":16.37,"isSelected":false},{"id":6,"uid":"1goodsir","name":"Ground Coffee","exp_date":"2023-04-08","img_source":"https://www.edamam.com/food-img/336/336e810373dd353a955a6896699b586e.jpg","qty":2,"cal":353,"fat":0.5,"protein":12.2,"isSelected":false},{"id":5,"uid":"1goodsir","name":"Orange Blossom Honey","exp_date":"2023-04-30","img_source":"https://www.edamam.com/food-img/198/198c7b25c23b4235b4cc33818c7b335f.jpg","qty":1,"cal":304,"fat":10.6,"protein":0.3,"isSelected":false},{"id":3,"uid":"1goodsir","name":"Rye Bread","exp_date":"","img_source":"https://www.edamam.com/food-img/2d1/2d1b8db0fe95a564cb25432a83ca8a66.jpg","qty":2,"cal":259,"fat":3.3,"protein":8.5,"isSelected":false},{"id":1,"uid":"1goodsir","name":"Pork","exp_date":"2023-04-08","img_source":"https://www.edamam.com/food-img/d55/d553f23d42b9c8fb314416ccd5cde3d2.jpg","qty":1,"cal":198,"fat":12.58,"protein":19.74,"isSelected":false},{"id":7,"uid":"1goodsir","name":"Avocado","exp_date":"2023-04-06","img_source":"https://www.edamam.com/food-img/984/984a707ea8e9c6bf5f6498970a9e6d9d.jpg","qty":10,"cal":160,"fat":14.66,"protein":2,"isSelected":false},{"id":2,"uid":"1goodsir","name":"Pork Sparerib","exp_date":"2023-04-06","img_source":"https://www.edamam.com/food-img/e54/e548d7ddfea41f3ffa55cb712ae4e4a8.jpg","qty":2,"cal":277,"fat":23.4,"protein":15.47,"isSelected":false},{"id":4,"uid":"1goodsir","name":"Chicken Leg","exp_date":"2023-04-08","img_source":"https://www.edamam.com/food-img/f53/f53de7dd1054370cdfd98e18ccf77dbe.jpg","qty":1,"cal":214,"fat":15.95,"protein":16.37,"isSelected":false},{"id":6,"uid":"1goodsir","name":"Ground Coffee","exp_date":"2023-04-08","img_source":"https://www.edamam.com/food-img/336/336e810373dd353a955a6896699b586e.jpg","qty":2,"cal":353,"fat":0.5,"protein":12.2,"isSelected":false},{"id":5,"uid":"1goodsir","name":"Orange Blossom Honey","exp_date":"2023-04-30","img_source":"https://www.edamam.com/food-img/198/198c7b25c23b4235b4cc33818c7b335f.jpg","qty":1,"cal":304,"fat":10.6,"protein":0.3,"isSelected":false}]
      // const selected = fetchedSelected.map((foodItem: PantryObj) => {
      const fetchedSelected = await axios.get('/api/pantry/1goodsir/selected');
      const selected = fetchedSelected.data.map((foodItem: PantryObj) => {
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
          <div className='border-2 h-[80px] rounded-xl my-1 bg-white border-green-500 cursor-pointer'>
            <div
              className='flex'
              onClick={() => handleSelection(id, select)}
            >
              <div className='rounded-lg overflow-hidden m-2 ml-4 mr-3'>
                <img
                  className='w-[74px]'
                  alt={ label }
                  src={ img }
                />
              </div>
              <div className='w-full flex flex-col'>
                <div className='flex h-[20px] items-start justify-start'>
                  <p className='tracking-widest uppercase font-bold bg-green-500 px-1 bg-opacity-75 rounded-lg rounded-t-none'>
                      { label }
                  </p>
                </div>
                <div className='flex justify-around w-full h-full'>
                  <div className='flex flex-col justify-center items-center h-full'>
                      <label className='text-[10px] tracking-widest uppercase text-gray-500'>qty</label>
                      <p className='text-[15px]'>{ quantity }</p>
                  </div>
                  <div className='flex flex-col  justify-center items-center h-full'>
                    <label className='text-[10px] uppercase tracking-widest text-gray-500'>Exp. Date</label>
                    <p className='text-[15px]'>{ expDate }</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })
      setSelectedItems(selected);
    }
    getSelectedItems();
  },[trigger]);

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
    <div className='pt-6'>
        <div className='flex h-[251px] md:h-[355px] flex-col rounded-3xl shadow-lg bg-white bg-opacity-80 border-2 border-white'>
          <div className='w-full'>
            <div className='flex items-center justify-center w-full h-[45px] rounded-t-3xl bg-green-400'>
              <div className='flex items-center justify-center'>
                <label className='uppercase tracking-widest'> Search for recipes</label>
              </div>
            </div>
            <div className='w-full h-[160px] md:h-[265px] overflow-y-scroll px-4'>
              <div className='flex flex-col'>
                {selectedItems}
              </div>
            </div>
            <button
              className={`${selectedItems.length > 0 ? 'bg-green-500 shadow-lg' : 'bg-green-400 shadow-lg border-t-2'} w-full p-2 align-bottom rounded-b-3xl`}
              onClick={() => {
              }}
            >
              Search
            </button>
          </div>
        </div>
    </div>
  )
}

export default Ingredients;