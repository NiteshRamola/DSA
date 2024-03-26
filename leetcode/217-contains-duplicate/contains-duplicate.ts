function containsDuplicate(nums: number[]): boolean {
    const tracker = new Set<number>();

    for(let i = 0; i < nums.length; i++){

        if(tracker.has(nums[i])){
            return true
        }

        tracker.add(nums[i])
    }

    return false;
};