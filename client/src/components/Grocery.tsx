import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Grocery: React.FC<triggerProps> = ({ trigger, setTrigger }) => {
    const [groceries, setGroceries] = useState<JSX.Element[]>([]);

    useEffect(() => {
        const getGroceries = async () => {
            // const fetchedGroceries = [{"id":2,"label":"Apple Coffee Cake","image":"https://edamam-product-images.s3.amazonaws.com/web-img/1dc/1dc940e9728188eebfd08a01a5d2e38c.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCgwLqMx0ic7sS2Upvs53aN9sf0DGZAIyOTaZ1pRf1mowIgaw96JfRiZhhx2spuHznFGxNmS%2F836c8zSiNifsdAeycqwgUI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDEbTPeyH7qAMUzEVriqWBb1fX6tXsx%2BWJczdtV4bNIJsQluMXQAg7g8T3dWKi%2BRtRQ0aDt95SMn%2Ffv5RfgjwitMu0USH8jGByJ1KGaDUlj%2BcuW8GwbcA%2Fj2e0ps3G7vR%2BxAZs%2BD7cPsh98cCpP6EgSX3U%2BN9csLcMSU9VALWruzAOr3JiDEhZCiTtDQf2Br%2FOD%2BDVd42HjaENkd0%2BzEAhgbC%2BkfeZR6fmIXpI3olTENsNwQwpKSXTMwi25TH%2FfZwjEmKhjogQnmTvtGW5zkGVyT6d12B5mu%2BclGrdVK64C8ijunzRuwOmlKVykEugnHfadfRo8XJEVwEMcJHb%2FZfluql0mhCJTpV%2FDaQBexamekbgJeaJVa%2FJN%2B4pXU7dH6a5AK0TKCvJI2Zi5lbWv9fLqK4%2FPrMWYchsy1fU6MPDHIfbpeHuzg1i3PYiLrtSLcUnVuLP6bn9hOtCP8BfrwErw%2FXEN3pc4ty3NAyRiVXKg40biCGpyCxZf%2BmVoYt7mkxtox9Ba4rgGiyNLKOfPz8ktuqM6ICupSydcTdeLsyIt0wDVxgZ4LeStqTPbLmvq%2BRR7UCrFIjndgd0X9Y0nYMs%2F9kAoswC6Xe73FZxqXZ8h%2BjjJqMryAqC9xEkf9PRqZu9VvzHXZbZalL4Y%2B0RKYD10Dq4YAHLrlIhO9jNUHFIwkeipVyQ8nx5avRSF4OMq05kqI7Vn3TEdcW%2FD7zfiSG0oDE%2F2oGlkQDW%2BXlhT1j3zfRfQzRUcctYznL%2FcU8V1tbWIxHmIuGwJmmfYIAqXLPnOc2UI7tNipDvLvlAnBgOV5RREeTiLWn6BFK2BTDe7ci0jeEFSeYcWUZYRwROg%2BAMxk%2FVeTIUr3lqynEa4ylf42z3YI3rwgPWveucKnUeLVjLbFy8%2F%2FIMNm5q6EGOrEBRDvsXCnIbKQSIBlSPIeUB8j%2Bs1%2BZbauvMCHAuYgM04zzfX3QM%2FKxfQC70pl%2FLT7hsYZqNVLp07nRTW11hCJmpuQ82oYI0Lli4muaTnU5LWrr%2Bxd10jnxyGNyl7j2B5eRQzmsXFKi%2Bwn7Kb2HG2dJX6JKKlXtUUoraseC%2FwyOwIT4P%2FPQkpvMJERT1jTl7Qn4qGTiJbHIBlz%2FLeHSIwgAeOv0UJHlqSxQqCeM1Qsk6n1j&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230403T145637Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPQWAVT2H%2F20230403%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=e4d7b9f280ad92eee4499f31e153aef5dd947d64c352495a35836d337e40fb5a","ingredientLines":["1 cup flour","1 teaspoon baking powder","1/2 teaspoon salt","1/2 cup of sugar","1 teaspoon ground cinnamon","5 1/2 Tbsp unsalted butter, room temperature","1 egg, beaten","1/2 cup whole milk","1 medium Cortland or other baking apple, peeled and sliced"],"url":"http://simplyrecipes.com/recipes/apple_coffee_cake/","uid":"1goodsir"},{"id":3,"label":"Baked Apple Pancake with Apple Cider Syrup recipes","image":"https://edamam-product-images.s3.amazonaws.com/web-img/f9e/f9e94813362a938b3ff9b2bf0ed3ee07?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCgwLqMx0ic7sS2Upvs53aN9sf0DGZAIyOTaZ1pRf1mowIgaw96JfRiZhhx2spuHznFGxNmS%2F836c8zSiNifsdAeycqwgUI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDEbTPeyH7qAMUzEVriqWBb1fX6tXsx%2BWJczdtV4bNIJsQluMXQAg7g8T3dWKi%2BRtRQ0aDt95SMn%2Ffv5RfgjwitMu0USH8jGByJ1KGaDUlj%2BcuW8GwbcA%2Fj2e0ps3G7vR%2BxAZs%2BD7cPsh98cCpP6EgSX3U%2BN9csLcMSU9VALWruzAOr3JiDEhZCiTtDQf2Br%2FOD%2BDVd42HjaENkd0%2BzEAhgbC%2BkfeZR6fmIXpI3olTENsNwQwpKSXTMwi25TH%2FfZwjEmKhjogQnmTvtGW5zkGVyT6d12B5mu%2BclGrdVK64C8ijunzRuwOmlKVykEugnHfadfRo8XJEVwEMcJHb%2FZfluql0mhCJTpV%2FDaQBexamekbgJeaJVa%2FJN%2B4pXU7dH6a5AK0TKCvJI2Zi5lbWv9fLqK4%2FPrMWYchsy1fU6MPDHIfbpeHuzg1i3PYiLrtSLcUnVuLP6bn9hOtCP8BfrwErw%2FXEN3pc4ty3NAyRiVXKg40biCGpyCxZf%2BmVoYt7mkxtox9Ba4rgGiyNLKOfPz8ktuqM6ICupSydcTdeLsyIt0wDVxgZ4LeStqTPbLmvq%2BRR7UCrFIjndgd0X9Y0nYMs%2F9kAoswC6Xe73FZxqXZ8h%2BjjJqMryAqC9xEkf9PRqZu9VvzHXZbZalL4Y%2B0RKYD10Dq4YAHLrlIhO9jNUHFIwkeipVyQ8nx5avRSF4OMq05kqI7Vn3TEdcW%2FD7zfiSG0oDE%2F2oGlkQDW%2BXlhT1j3zfRfQzRUcctYznL%2FcU8V1tbWIxHmIuGwJmmfYIAqXLPnOc2UI7tNipDvLvlAnBgOV5RREeTiLWn6BFK2BTDe7ci0jeEFSeYcWUZYRwROg%2BAMxk%2FVeTIUr3lqynEa4ylf42z3YI3rwgPWveucKnUeLVjLbFy8%2F%2FIMNm5q6EGOrEBRDvsXCnIbKQSIBlSPIeUB8j%2Bs1%2BZbauvMCHAuYgM04zzfX3QM%2FKxfQC70pl%2FLT7hsYZqNVLp07nRTW11hCJmpuQ82oYI0Lli4muaTnU5LWrr%2Bxd10jnxyGNyl7j2B5eRQzmsXFKi%2Bwn7Kb2HG2dJX6JKKlXtUUoraseC%2FwyOwIT4P%2FPQkpvMJERT1jTl7Qn4qGTiJbHIBlz%2FLeHSIwgAeOv0UJHlqSxQqCeM1Qsk6n1j&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230403T145637Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPQWAVT2H%2F20230403%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=7a33b2fba4fe5ce640cf135487c49ac4d4f568664ce00fe4f8bd43bd9be0b0d6","ingredientLines":["1 cup brown sugar","2 cups apple cider","cinnamon sticks","1 large unpeeled apple, thinly sliced","2 tablespoons packed brown sugar","½ teaspoon cinnamon","4 eggs (can sub egg whites for some of the eggs)","⅔ cup skim milk","⅔ cup bread flour (can sub all-purpose or whole wheat)","2 tablespoons applesauce","1 tablespoon sugar"],"url":"http://pinchofyum.com/baked-apple-pancake-with-apple-cider-syrup","uid":"1goodsir"},{"id":4,"label":"Spiced Apple Berry Oatmeal","image":"https://edamam-product-images.s3.amazonaws.com/web-img/f16/f161ca1cbbb6178782fef9198b396624.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCgwLqMx0ic7sS2Upvs53aN9sf0DGZAIyOTaZ1pRf1mowIgaw96JfRiZhhx2spuHznFGxNmS%2F836c8zSiNifsdAeycqwgUI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDEbTPeyH7qAMUzEVriqWBb1fX6tXsx%2BWJczdtV4bNIJsQluMXQAg7g8T3dWKi%2BRtRQ0aDt95SMn%2Ffv5RfgjwitMu0USH8jGByJ1KGaDUlj%2BcuW8GwbcA%2Fj2e0ps3G7vR%2BxAZs%2BD7cPsh98cCpP6EgSX3U%2BN9csLcMSU9VALWruzAOr3JiDEhZCiTtDQf2Br%2FOD%2BDVd42HjaENkd0%2BzEAhgbC%2BkfeZR6fmIXpI3olTENsNwQwpKSXTMwi25TH%2FfZwjEmKhjogQnmTvtGW5zkGVyT6d12B5mu%2BclGrdVK64C8ijunzRuwOmlKVykEugnHfadfRo8XJEVwEMcJHb%2FZfluql0mhCJTpV%2FDaQBexamekbgJeaJVa%2FJN%2B4pXU7dH6a5AK0TKCvJI2Zi5lbWv9fLqK4%2FPrMWYchsy1fU6MPDHIfbpeHuzg1i3PYiLrtSLcUnVuLP6bn9hOtCP8BfrwErw%2FXEN3pc4ty3NAyRiVXKg40biCGpyCxZf%2BmVoYt7mkxtox9Ba4rgGiyNLKOfPz8ktuqM6ICupSydcTdeLsyIt0wDVxgZ4LeStqTPbLmvq%2BRR7UCrFIjndgd0X9Y0nYMs%2F9kAoswC6Xe73FZxqXZ8h%2BjjJqMryAqC9xEkf9PRqZu9VvzHXZbZalL4Y%2B0RKYD10Dq4YAHLrlIhO9jNUHFIwkeipVyQ8nx5avRSF4OMq05kqI7Vn3TEdcW%2FD7zfiSG0oDE%2F2oGlkQDW%2BXlhT1j3zfRfQzRUcctYznL%2FcU8V1tbWIxHmIuGwJmmfYIAqXLPnOc2UI7tNipDvLvlAnBgOV5RREeTiLWn6BFK2BTDe7ci0jeEFSeYcWUZYRwROg%2BAMxk%2FVeTIUr3lqynEa4ylf42z3YI3rwgPWveucKnUeLVjLbFy8%2F%2FIMNm5q6EGOrEBRDvsXCnIbKQSIBlSPIeUB8j%2Bs1%2BZbauvMCHAuYgM04zzfX3QM%2FKxfQC70pl%2FLT7hsYZqNVLp07nRTW11hCJmpuQ82oYI0Lli4muaTnU5LWrr%2Bxd10jnxyGNyl7j2B5eRQzmsXFKi%2Bwn7Kb2HG2dJX6JKKlXtUUoraseC%2FwyOwIT4P%2FPQkpvMJERT1jTl7Qn4qGTiJbHIBlz%2FLeHSIwgAeOv0UJHlqSxQqCeM1Qsk6n1j&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230403T145637Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPQWAVT2H%2F20230403%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=cecbccd0b3a85b6c648bb15313b49c5f896c8d6895be4919073ed686cee6c510","ingredientLines":["2 cups water","1¾ cups apple juice","1 cup steel-cut oats","1 medium apple, cored and chopped","½ teaspoon apple pie spice","¼ teaspoon salt","½ cup blueberries, raspberries, or blackberries","1 cup fat-free milk","¼ cup chopped pecans or almonds, toasted (optional)"],"url":"http://www.eatingwell.com/recipe/263479/spiced-apple-berry-oatmeal/","uid":"1goodsir"}]
            // const groceries = fetchedGroceries.map((recipeItem: RecipeTableObj) => {
            const fetchedGroceries = await axios.get(`/api/recipes/1goodsir`);
            const groceries = fetchedGroceries.data.map((recipeItem: RecipeTableObj) => {
                return (
                    <div className='w-full h-[120px] p-2'>
                        <div className='flex justify-start items-center w-full h-full border-2 border-amber-600 bg-white rounded-lg hover:scale-105 ease-in duration-300 p-2 cursor-pointer'>
                            <div className='rounded-xl h-[90px] w-[90px] overflow-hidden'>
                                <img
                                    key={recipeItem.label}
                                    src={recipeItem.image}    
                                />
                            </div>
                            <div className='w-[150px] flex justify-center items-center p-2'>
                                <label className='font-bold uppercase tracking-wide'>{ recipeItem.label }</label>
                            </div>
                        </div>
                    </div>
                );
            })
            setGroceries(groceries);
        }
        getGroceries();
    },[trigger]);

    return (
    <div className='col-span-2 p-2'>
        <div className='flex justify-center items-center h-[25px] border-2 border-b-0 border-white bg-green-500 rounded-sm rounded-b-none z-50 cursor-pointer'>
            <h2 className='uppercase tracking-widest font-bold'>grocery lists</h2>
        </div>
        <div className='bg-white bg-opacity-75 p-2 w-full h-[510px]'>
            <div className='flex h-full flex-col overflow-y-auto'>
                { groceries }
            </div>
        </div>
    </div>
    )
}

export default Grocery