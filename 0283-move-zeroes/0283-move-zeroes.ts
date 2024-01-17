/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
     nums.sort((a, b) => b === 0 ? -1 : 0);
};