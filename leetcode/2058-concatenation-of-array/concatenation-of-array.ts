function getConcatenation(nums: number[]): number[] {
    const length = nums.length;
    for(let i = 0; i < length; i++){
        nums[i + length] = nums[i];
    }

    return nums;
};