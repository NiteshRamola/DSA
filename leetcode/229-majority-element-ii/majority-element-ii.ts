function majorityElement(nums: number[]): number[] {
    let candidate1: number | null = null;
    let candidate2: number | null = null;
    let count1: number = 0;
    let count2: number = 0;

    for (const num of nums) {
        if (candidate1 === num) {
            count1++;
        } else if (candidate2 === num) {
            count2++;
        } else if (count1 === 0) {
            candidate1 = num;
            count1 = 1;
        } else if (count2 === 0) {
            candidate2 = num;
            count2 = 1;
        } else {
            count1--;
            count2--;
        }
    }

    count1 = 0;
    count2 = 0;
    for (const num of nums) {
        if (num === candidate1) {
            count1++;
        } else if (num === candidate2) {
            count2++;
        }
    }

    const result: number[] = [];
    if (count1 > nums.length / 3) {
        result.push(candidate1);
    }
    if (count2 > nums.length / 3) {
        result.push(candidate2);
    }

    return result;
};