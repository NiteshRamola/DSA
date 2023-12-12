function removeDuplicates(nums: number[]): number {
    const uniqueSet = new Set<number>();

    for (const num of nums) {
        uniqueSet.add(num);
    }

    const uniqueArray = Array.from(uniqueSet);

    for (let i = 0; i < uniqueArray.length; i++) {
        nums[i] = uniqueArray[i];
    }

    return uniqueArray.length;
};