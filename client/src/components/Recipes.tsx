import React, { useState, useEffect } from 'react'
import Grocery from './Grocery'
import axios from 'axios';
import RecipeModal from './RecipeModal'; 

const Recipes: React.FC<triggerProps> = ({ trigger, setTrigger }) => {
    const apiID = process.env.REACT_APP_RECIPE_API_ID;
    const apiKey = process.env.REACT_APP_RECIPE_API_KEY;
    const [ingredients, setIngredients] = useState<string[]>([]);
    const [recipes, setRecipes] = useState<JSX.Element[]>([]);
    const [isModalOn, setIsModalOn] = useState<boolean>(false);
    const [recipeObj, setRecipeObj] = useState<RecipeObj>();
    
    useEffect(() => {
        const getRecipes = async () => {
            const fetchedSelected = await axios.get('/api/pantry/1goodsir/selected');
            const selected = fetchedSelected.data.map((foodItem: PantryObj) => {
                return foodItem.name;
            });
            setIngredients(selected);
            
            const spacedIngredients = selected.join('%20and%20').toLowerCase();
            const fetchedRecipes = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${spacedIngredients}&app_id=${apiID}&app_key=${apiKey}`);
            const recipeList = fetchedRecipes.data.hits.map((item: ResponseObj) => {
                const recipe = item.recipe;
                const name = recipe.label;
                const image = recipe.image;
                const recipe_ingredients = recipe.ingredientLines;
                const cook_time = recipe.totalTime;
                const servings = recipe.yield;
                const calories = Math.floor(recipe.calories/servings);
                const source = recipe.url;
                const cautions = recipe.cautions;
                const cuisine_type = recipe.cuisineType;
                const diet_labels = recipe.dietLabels;
                const digest = recipe.digest.filter((content: digestObj) => content.label === 'Fat' || content.label === 'Carbs' || content.label === 'Protein' || content.label === 'Cholesterol' || content.label === 'Sodium').map((content: digestObj) => {
                    return { label: content.label,unit: content.unit, total: content.total }
                });

                return (
                    <div className='h-[120px] w-full py-1 px-2'>
                        <div
                            className='flex bg-white rounded-xl z-50 border-2 border-green-500 hover:scale-105 ease-in duration-500 cursor-pointer'
                            onClick={() => {
                                handleOpenModal({
                                    label: name,
                                    image: image,
                                    ingredientLines: recipe_ingredients,
                                    totalTime: cook_time,
                                    yield: servings,
                                    calories: calories,
                                    url: source,
                                    cautions: cautions,
                                    cuisineType: cuisine_type,
                                    dietLabels: diet_labels,
                                    digest: digest,
                                });
                            }}
                        >
                            <div className='rounded-xl overflow-clip h-[90px] w-[90px] m-2'>
                                <img
                                    alt={name}
                                    src={image}
                                />
                            </div>
                            <div className='flex flex-col w-[300px]'>
                                <div className='flex justify-center items-center bg-green-500 rounded-b-xl'>
                                    <label className='font-bold uppercase tracking-wide text-sm overflow-hidden h-[20px]'>{ name }</label>
                                </div>
                                <div className='flex w-full h-[50px] md:h-[80px] justify-between items-center'>
                                    <div>
                                        <label className='text-gray-500 lowercase text-xs'>Time</label>
                                        <p className='text-[13px] md:text-sm'>{ cook_time } mins</p>
                                    </div>
                                    <div>
                                        <label className='text-gray-500 lowercase text-xs'>Servings</label>
                                        <p className='text-[13px] md:text-sm'>{ servings }</p>
                                    </div>
                                    <div>
                                        <label className='text-gray-500 lowercase text-xs'>Calories/serving</label>
                                        <p className='text-[13px] md:text-sm'>{ calories } kcal</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            });
            setRecipes(recipeList);
        }
        getRecipes();
    },[]);

    const handleOpenModal = (recipe: RecipeObj) => {
        console.log(recipe);
        setRecipeObj(recipe);
        setIsModalOn(true);
    }

    const handleCloseModal = () => setIsModalOn(false);

    return (
    <div className='max-w-[1240px] w-full h-auto md:h-full mx-auto flex flex-col justify-start items-center pt-16'>
        <div className='w-full h-20 bg-yellow-400 p-2'>
            {ingredients}
        </div>
        <div className='flex flex-col md:grid grid-cols-8 w-full h-[550px]'>
            <div className='col-span-6 p-2'>
                <div className='flex justify-center items-center h-[25px] border-2 border-b-0 border-white bg-green-500 rounded-sm rounded-b-none z-50 cursor-pointer'>
                    <h2 className='uppercase tracking-widest font-bold'>recipes</h2>
                </div>
                <div className='p-2 bg-white bg-opacity-75 h-[510px]'>
                    <div className='h-full flex flex-col md:grid grid-cols-2 overflow-scroll overflow-x-hidden p-2'>
                        { recipes }
                    </div>
                </div>
            </div>
            <Grocery trigger={ trigger } setTrigger={ setTrigger } />
        </div>
        { isModalOn && recipeObj ? <RecipeModal recipe={ recipeObj } handleCloseModal={ handleCloseModal } /> : null }
    </div>
  )
}

export default Recipes