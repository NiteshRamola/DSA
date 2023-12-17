function maximumDifference(nums: number[]): number {
    if (!nums || nums.length < 2) {
        return -1;
    }

    let minElement = nums[0];
    let maxDifference = -1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > minElement) {
            maxDifference = Math.max(maxDifference, nums[i] - minElement);
        } else {
            minElement = nums[i];
        }
    }

    return maxDifference;
}