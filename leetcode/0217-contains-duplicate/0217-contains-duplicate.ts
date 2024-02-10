function containsDuplicate(nums: number[]): boolean {
    const tracker = new Set<number>();

    const length = nums.length;
    for(let i = 0; i < length; i++){

        if(tracker.has(nums[i])){
            return true
        }

        tracker.add(nums[i])
    }

    return false;
};