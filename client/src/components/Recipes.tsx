import React, { useState, useEffect } from 'react'
import Grocery from './Grocery'
import axios from 'axios';
import RecipeModal from './RecipeModal'; 

const Recipes: React.FC<triggerProps> = ({ trigger, setTrigger }) => {
    const apiID = process.env.REACT_APP_RECIPE_API_ID;
    const apiKey = process.env.REACT_APP_RECIPE_API_KEY;
    const [ingredients, setIngredients] = useState<JSX.Element[]>([]);
    const [recipes, setRecipes] = useState<JSX.Element[]>([]);
    const [isModalOn, setIsModalOn] = useState<boolean>(false);
    const [recipeObj, setRecipeObj] = useState<RecipeObj>();
    
    useEffect(() => {
        const getRecipes = async () => {
            // const fetchedSelected = [{"id":3,"uid":"1goodsir","name":"Rye Bread","exp_date":"","img_source":"https://www.edamam.com/food-img/2d1/2d1b8db0fe95a564cb25432a83ca8a66.jpg","qty":2,"cal":259,"fat":3.3,"protein":8.5,"isSelected":true},{"id":1,"uid":"1goodsir","name":"Pork","exp_date":"2023-04-08","img_source":"https://www.edamam.com/food-img/d55/d553f23d42b9c8fb314416ccd5cde3d2.jpg","qty":1,"cal":198,"fat":12.58,"protein":19.74,"isSelected":true},{"id":7,"uid":"1goodsir","name":"Avocado","exp_date":"2023-04-06","img_source":"https://www.edamam.com/food-img/984/984a707ea8e9c6bf5f6498970a9e6d9d.jpg","qty":10,"cal":160,"fat":14.66,"protein":2,"isSelected":true},{"id":2,"uid":"1goodsir","name":"Pork Sparerib","exp_date":"2023-04-06","img_source":"https://www.edamam.com/food-img/e54/e548d7ddfea41f3ffa55cb712ae4e4a8.jpg","qty":2,"cal":277,"fat":23.4,"protein":15.47,"isSelected":true},{"id":4,"uid":"1goodsir","name":"Chicken Leg","exp_date":"2023-04-08","img_source":"https://www.edamam.com/food-img/f53/f53de7dd1054370cdfd98e18ccf77dbe.jpg","qty":1,"cal":214,"fat":15.95,"protein":16.37,"isSelected":false},{"id":6,"uid":"1goodsir","name":"Ground Coffee","exp_date":"2023-04-08","img_source":"https://www.edamam.com/food-img/336/336e810373dd353a955a6896699b586e.jpg","qty":2,"cal":353,"fat":0.5,"protein":12.2,"isSelected":false},{"id":5,"uid":"1goodsir","name":"Orange Blossom Honey","exp_date":"2023-04-30","img_source":"https://www.edamam.com/food-img/198/198c7b25c23b4235b4cc33818c7b335f.jpg","qty":1,"cal":304,"fat":10.6,"protein":0.3,"isSelected":false},{"id":3,"uid":"1goodsir","name":"Rye Bread","exp_date":"","img_source":"https://www.edamam.com/food-img/2d1/2d1b8db0fe95a564cb25432a83ca8a66.jpg","qty":2,"cal":259,"fat":3.3,"protein":8.5,"isSelected":false},{"id":1,"uid":"1goodsir","name":"Pork","exp_date":"2023-04-08","img_source":"https://www.edamam.com/food-img/d55/d553f23d42b9c8fb314416ccd5cde3d2.jpg","qty":1,"cal":198,"fat":12.58,"protein":19.74,"isSelected":false},{"id":7,"uid":"1goodsir","name":"Avocado","exp_date":"2023-04-06","img_source":"https://www.edamam.com/food-img/984/984a707ea8e9c6bf5f6498970a9e6d9d.jpg","qty":10,"cal":160,"fat":14.66,"protein":2,"isSelected":false},{"id":2,"uid":"1goodsir","name":"Pork Sparerib","exp_date":"2023-04-06","img_source":"https://www.edamam.com/food-img/e54/e548d7ddfea41f3ffa55cb712ae4e4a8.jpg","qty":2,"cal":277,"fat":23.4,"protein":15.47,"isSelected":false},{"id":4,"uid":"1goodsir","name":"Chicken Leg","exp_date":"2023-04-08","img_source":"https://www.edamam.com/food-img/f53/f53de7dd1054370cdfd98e18ccf77dbe.jpg","qty":1,"cal":214,"fat":15.95,"protein":16.37,"isSelected":false},{"id":6,"uid":"1goodsir","name":"Ground Coffee","exp_date":"2023-04-08","img_source":"https://www.edamam.com/food-img/336/336e810373dd353a955a6896699b586e.jpg","qty":2,"cal":353,"fat":0.5,"protein":12.2,"isSelected":false},{"id":5,"uid":"1goodsir","name":"Orange Blossom Honey","exp_date":"2023-04-30","img_source":"https://www.edamam.com/food-img/198/198c7b25c23b4235b4cc33818c7b335f.jpg","qty":1,"cal":304,"fat":10.6,"protein":0.3,"isSelected":false}]
            const fetchedSelected = await axios.get('/api/pantry/1goodsir/selected');
            const selectedObj = fetchedSelected.data.filter((foodItem: PantryObj) => foodItem.isSelected);
            const selected = fetchedSelected.data.map((foodItem: PantryObj) => {
                return foodItem.name;
            });
            const ingredientsElements = selectedObj.map((foodItem: PantryObj) => {
                return (
                    <div className='min-w-[100px] h-12 m-2'>
                        <div
                            className='flex justify-center items-center w-full h-full rounded-xl bg-white border-green-500 border-2 p-2 hover:scale-75 ease-out duration-500 cursor-pointer'
                            onClick={() => handleSelection(foodItem.id, foodItem.isSelected)}
                        >
                            <label>{ foodItem.name }</label>
                        </div>
                    </div>
                );
            })
            setIngredients(ingredientsElements);
            
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
    },[trigger]);

    const handleOpenModal = (recipe: RecipeObj) => {
        console.log(recipe);
        setRecipeObj(recipe);
        setIsModalOn(true);
    }

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

    const handleCloseModal = () => setIsModalOn(false);

    return (
    <div className='max-w-[1240px] w-full h-auto md:h-full mx-auto flex flex-col justify-start items-center pt-16'>
        <div className='flex w-full h-16 p-2'>
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