function maxChunksToSorted(arr: number[]): number {
    let maxSoFar = arr[0];
    let minSoFar = arr[arr.length-1];
    let maxArr = [arr[0]];
    let minArr = [];
    let count = 0;

    for(let i = 0; i< arr.length; i++) {
        maxSoFar = Math.max(maxSoFar, arr[i]);
        maxArr[i] = maxSoFar;
    }

    for(let i = arr.length-1; i >= 0; i--) {
        minSoFar = Math.min(minSoFar, arr[i]);
        minArr[i] = minSoFar;
    }
    
    for(let i = 0; i < arr.length-1; i++) {
        if(maxArr[i] <= minArr[i +1]) count++;
    }

    return count + 1;
};