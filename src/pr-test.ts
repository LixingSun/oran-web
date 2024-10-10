export const isPositive = (input: number) => {
    let result: boolean;
    
    if (input > 0) {
        result = true
    } else {
        result = false
    }

    return result;
}