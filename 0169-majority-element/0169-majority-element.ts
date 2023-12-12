function majorityElement(nums: number[]): number {
    const elementCountMap: Map<number, number> = new Map();

    for (const num of nums) {
        const count = (elementCountMap.get(num) || 0) + 1;
        elementCountMap.set(num, count);

        if (count > nums.length / 2) {
            return num;
        }
    }

};