function majorityElement(nums: number[]): number {
    let candidate: number | null = null;
    let count = 0;

    for (const num of nums) {
        if (count === 0) {
            candidate = num;
        }

        count += (num === candidate) ? 1 : -1;
    }

    count = 0;
    for (const num of nums) {
        if (num === candidate) {
            count++;
        }
    }

    return candidate!;

};