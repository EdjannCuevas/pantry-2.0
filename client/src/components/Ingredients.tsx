import React, { useState, useEffect } from 'react'
import axios from 'axios';

interface IngredientsObj {
  // id: number,
  name: string,
  // img_source: string,
  // exp_date: string,
  // fat: number,
  // cal: number,
  // protein: number,
  // isSelected: boolean,
  // qty: number,
}

interface IngredientsProps {
  // setTrigger: (arg: boolean) => void;
  trigger: boolean
}

const Ingredients: React.FC<IngredientsProps> = ({ trigger }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    getSelectedItems();
  },[trigger])

  const getSelectedItems = async () => {
    const fetchedSelected = await axios.get('/api/pantry/1goodsir/selected');
    const selected = fetchedSelected.data.map((foodItem: IngredientsObj) => {
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