function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const indexMap: Map<number, number> = new Map();

    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];

        if (indexMap.has(currentNum) && (i - indexMap.get(currentNum)! <= k)) {
            return true;
        }

        indexMap.set(currentNum, i);
    }
    
    
    
    return false;
};