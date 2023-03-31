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