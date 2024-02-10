function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const indexMap: Map<number, number> = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (indexMap.has(nums[i]) && (i - indexMap.get(nums[i])! <= k)) {
            return true;
        }

        indexMap.set(nums[i], i);
    }
    
    
    
    return false;
};