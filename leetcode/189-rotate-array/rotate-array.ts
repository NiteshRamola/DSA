/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    while (nums.length <= k) {
        k = k - nums.length;
    }
    const temp = nums.splice(0, nums.length-k)
    nums.push(...temp)
};