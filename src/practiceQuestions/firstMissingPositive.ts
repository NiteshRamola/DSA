// Problem statement
// You are given an array 'ARR' of integers of length N. Your task is to find the first missing positive integer in linear time and constant space.
// In other words, find the lowest positive integer that does not exist in the array. The array can have negative numbers as well.

// For example, the input [3, 4, -1, 1] should give output 2 because it is the smallest positive number that is missing in the input array.

function firstMissingPositive(arr: number[]): number {
  const n = arr.length;

  let positiveCount = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] > 0) {
      [arr[i], arr[positiveCount]] = [arr[positiveCount], arr[i]];
      positiveCount++;
    }
  }

  const positiveArr = arr.slice(0, positiveCount);

  for (let i = 0; i < positiveCount; i++) {
    const num = Math.abs(positiveArr[i]);
    if (num <= positiveCount) {
      positiveArr[num - 1] = -Math.abs(positiveArr[num - 1]);
    }
  }

  for (let i = 0; i < positiveCount; i++) {
    if (positiveArr[i] > 0) {
      return i + 1;
    }
  }

  return positiveCount + 1;
}

console.log(firstMissingPositive([-1, -2, 0, 2, 3, 4]));
