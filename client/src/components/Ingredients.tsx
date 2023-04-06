import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa'

const Ingredients: React.FC<triggerProps> = ({ trigger, setTrigger }) => {
  const [selectedItems, setSelectedItems] = useState<JSX.Element[]>([]);
  const navigate = useNavigate();

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
        const quantity = foodItem.qty;
        const select = foodItem.isSelected;

        return (
            <div
              className='flex h-[97px] p-1 w-full justify-center'
              onClick={() => handleSelection(id, select)}
            >
          <div className='flex border-2 rounded-xl my-1 bg-white border-green-500 cursor-pointer shadow-xl hover:scale-90 ease-in-out duration-300'>
              <div className='w-auto h-auto'>
                <img
                  className='w-[70px] rounded-lg m-1'
                  alt={ label }
                  src={ img }
                />
              </div>
              <div className='w-[80px] md:w-[135px] flex flex-col'>
                <div className='h-[20px] items-start justify-start'>
                  <p className='tracking-widest uppercase text-[8px] md:text-[10px] font-bold bg-green-500 px-1 bg-opacity-75 rounded-lg rounded-tr-lg rounded-r-none rounded-t-none'>
                      { label }
                  </p>
                </div>
                <div className='flex justify-around w-full h-full'>
                  <div className='flex flex-col justify-center items-center h-full'>
                      <label className='text-[8px] md:text-[10px] uppercase tracking-widest text-green-600'>qty</label>
                      <p className='text-[8px] md:text-[10px]'>{ quantity }</p>
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

  const handleRecipeSearch = async () => {
    setTrigger(!trigger);
    setTimeout(() => {
      navigate('/recipes');
    },1000);
  }


  return (
    <div className='pt-6'>
      <div className='flex justify-center items-center h-[25px] border-2 border-b-0 border-white bg-green-500 rounded-sm rounded-b-none z-50 cursor-pointer'>
        <h2 className='uppercase tracking-widest font-bold'>Search</h2>
      </div>
      <div className='flex min-h-[156px] sm:max-h-[236px] md:max-h-[250px] flex-col rounded-3xl rounded-t-none shadow-lg bg-white bg-opacity-80 border-2 border-white'>
        <div className='w-full'>
          <div className='w-full min-h-[108px] max-h-[190px] h-auto md:max-h-[198px] overflow-y-auto flex items-start justify-center'>
            <div className='grid grid-cols-2 w-full'>
              {selectedItems}
            </div>
          </div>
          <button
            className={`${selectedItems.length > 0 ? 'cursor-pointer shadow-lg' : 'cursor-not-allowed'} bg-green-500 border-2 border-green-500 w-full p-2 flex justify-center items-center text-white text-[24px] align-bottom rounded-b-3xl`}
            onClick={() => { handleRecipeSearch() }}
          >
            <FaSearch />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Ingredients;