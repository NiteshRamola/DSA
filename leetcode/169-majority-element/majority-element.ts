function majorityElement(nums: number[]): number {
    let obj = {}
    for (const num of nums) {
        const count = (obj[num] || 0) + 1;
        obj[num] = count;

        if (count > nums.length / 2) {
            return num;
        }
    }
};