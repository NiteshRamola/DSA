function maxChunksToSorted(arr: number[]): number {
    let max = 0;
    let chunks = 0;

    for (let i = 0; i < arr.length; i++) {
        max = Math.max(arr[i], max);
        if (max <= i) chunks++;
    }

    return chunks;
};