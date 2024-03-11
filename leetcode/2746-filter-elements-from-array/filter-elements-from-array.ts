type Fn = (n: number, i: number) => any

function filter(arr: number[], fn: Fn): number[] {
    let currentIndex = 0;
    for(let i = 0; i < arr.length; i++){
        if(fn(arr[i], i)){
            arr[currentIndex] = arr[i];
            currentIndex++;
        }
    }
    
    arr.length = currentIndex;
    return arr;
};