interface PantryObj {
    id: number,
    name: string,
    img_source: string,
    exp_date: string,
    fat: number,
    cal: number,
    protein: number,
    isSelected: boolean,
    qty: number,
}

interface triggerProps {
    setTrigger: (arg: boolean) => void,
    trigger: boolean,
}

interface digestObj {
    label: string;
    total: float;
    unit: string;
}

interface RecipeObj {
    label: string,
    image: string,
    ingredientLines: string[],
    totalTime: number,
    yield: number,
    calories: number
    url: string,
    cautions: string[],
    cuisineType: string[],
    dietLabels: string[],
    digest: digestObj[],
}

interface RecipeTableObj {
    id: number,
    label: string,
    image: string,
    ingredientLines: string[],
    url: string,
}

interface ResponseObj {
    recipe: RecipeObj;
}