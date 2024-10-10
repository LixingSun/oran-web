export const isLargrThanStandad = (input: number) => {
    let result: boolean;
    
    if (input > 25) {
        result = true
    } else if (input < 25) {
        result = false
    }

    return result;
}