import React, { useState, useEffect } from 'react'
import Grocery from './Grocery'
import axios from 'axios';

const Recipes: React.FC<triggerProps> = ({ trigger, setTrigger }) => {
    const apiID = process.env.REACT_APP_RECIPE_API_ID;
    const apiKey = process.env.REACT_APP_RECIPE_API_KEY;
    const [ingredients, setIngredients] = useState<string[]>([]);
    const [recipes, setRecipes] = useState<JSX.Element[]>([]);
    
    useEffect(() => {
        const getRecipes = async () => {
            const fetchedSelected = await axios.get('/api/pantry/1goodsir/selected');
            const selected = fetchedSelected.data.map((foodItem: PantryObj) => {
                return foodItem.name;
            });
            setIngredients(selected);
            
            const spacedIngredients = selected.join('%20and%20').toLowerCase();
            const fetchedRecipes = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${spacedIngredients}&app_id=${apiID}&app_key=${apiKey}`);
            console.log(fetchedRecipes.data.hits, spacedIngredients)
            const recipeList = fetchedRecipes.data.hits.map((item: ResponseObj) => {
                const recipe = item.recipe;
                const name = recipe.label;
                const image = recipe.image;
                const recipe_ingredients = recipe.ingredientLines;
                const cook_time = recipe.totalTime;
                const servings = recipe.yield;
                const calories = Math.floor(recipe.calories/servings);
                const source = recipe.url;

                return (
                    <div className='flex bg-red-400 w-full h-[100px]'>
                        <div className='h-[80px] w-[80px]'>
                            <img
                                alt={name}
                                src={image}
                            />
                        </div>
                        <div>
                            <label>{ name }</label>
                        </div>
                    </div>
                );
            });
            setRecipes(recipeList);
        }
        getRecipes();
    },[]);


    return (
    <div className='max-w-[1240px] w-full h-auto md:h-full mx-auto flex flex-col justify-start items-center pt-16'>
        <div className='w-full h-20 bg-yellow-400 p-2'>
            {ingredients}
        </div>
        <div className='grid grid-cols-8 w-full h-[550px]'>
            <div className='col-span-6 p-2'>
                <div className='flex justify-center items-center h-[25px] border-2 border-b-0 border-white bg-green-500 rounded-sm rounded-b-none z-50 cursor-pointer'>
                    <h2 className='uppercase tracking-widest font-bold'>recipes</h2>
                </div>
                <div className='p-2 bg-white bg-opacity-75 h-[510px]'>
                    <div className='h-full flex md:grid grid-cols-2 overflow-scroll overflow-x-hidden'>
                        { recipes }
                    </div>
                </div>
            </div>
            <Grocery trigger={ trigger } setTrigger={ setTrigger } />
        </div>
    </div>
  )
}

export default Recipes