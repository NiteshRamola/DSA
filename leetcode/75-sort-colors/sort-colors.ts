/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
  const length = nums.length;

  for (let i = 0; i < length - 1; i++) {
    let swapped = false;
    for (let j = 0; j < length - i - 1; j++) {
      if (nums[j + 1] < nums[j]) {
        swapped = true;
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }

    if (!swapped) {
      break;
    }
  }
};
