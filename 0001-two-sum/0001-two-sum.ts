function twoSum(nums: number[], target: number): number[] {
    const numIndicesMap: { [key: number]: number } = {};

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (numIndicesMap.hasOwnProperty(complement)) {
            return [numIndicesMap[complement], i];
        }

        numIndicesMap[nums[i]] = i;
    }

    return null;
};