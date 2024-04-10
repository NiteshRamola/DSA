/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
  let l = 0;
  let r = nums.length - 1;
  let i = 0;

  while (i <= r) {
    if (nums[i] == 0) {
      [nums[l], nums[i]] = [nums[i], nums[l]];
      l += 1;
    } else if (nums[i] == 2) {
      [nums[r], nums[i]] = [nums[i], nums[r]];
      r -= 1;
      i -= 1;
    }
    i += 1;
  }
};
