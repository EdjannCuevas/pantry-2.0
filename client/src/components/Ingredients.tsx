import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Ingredients: React.FC<triggerProps> = ({ trigger }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    getSelectedItems();
  },[trigger])

  const getSelectedItems = async () => {
    const fetchedSelected = await axios.get('/api/pantry/1goodsir/selected');
    const selected = fetchedSelected.data.map((foodItem: PantryObj) => {
      return foodItem.name;
    })
    setSelectedItems(selected);
  }

  return (
    <div className='pt-6'>
        <div className='flex h-[250px] md:h-[355px] flex-col rounded-3xl shadow-lg bg-white bg-opacity-80 pt-5 border-2 border-white'>
          {selectedItems}
        </div>
    </div>
  )
}

export default Ingredients