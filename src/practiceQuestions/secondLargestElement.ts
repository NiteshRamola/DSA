// Problem statement
// You have been given an array/list 'ARR' of integers. Your task is to find the second largest element present in the 'ARR'.

// Note:
// a) Duplicate elements may be present.

// b) If no such element is present return -1.
// Example:
// Input: Given a sequence of five numbers 2, 4, 5, 6, 8.

// Output:  6

function secondLargestElement(nums: number[]): number {
  let firstLargest = Number.MIN_VALUE;
  let secondLargest = Number.MIN_VALUE;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = nums[i];
    } else if (nums[i] > secondLargest && nums[i] !== firstLargest) {
      secondLargest = nums[i];
    }
  }
  return secondLargest !== Number.MIN_VALUE ? secondLargest : -1;
}

console.log(secondLargestElement([1, 2, 3, 4, 5, 6]));
