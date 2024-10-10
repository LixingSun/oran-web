export const isLargrThanStandad = (input: number) => {
    let result: boolean;
    
    if (input > 25) {
        result = true
    } else if (input < 25) {
        result = false
    }

    return result;
}

export const skippedFunction = (input: string) => input.toUpperCase();

export const arrayMapping = (arr: number[]) => {
    const result = [];

    arr.forEach(item => {
        result.push(item);
    });

    return result;
}

