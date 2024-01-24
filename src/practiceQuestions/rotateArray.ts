// Problem statement
// Given an array 'arr' with 'n' elements, the task is to rotate the array to the left by 'k' steps, where 'k' is non-negative.

// Example:
// 'arr '= [1,2,3,4,5]
// 'k' = 1  rotated array = [2,3,4,5,1]
// 'k' = 2  rotated array = [3,4,5,1,2]
// 'k' = 3  rotated array = [4,5,1,2,3] and so on.

function rotateArray(arr: number[], k: number): number[] {
  const n = arr.length;
  const rotateIndex = k % n;
  const rotatedArray = [];

  for (let i = 0; i < n; i++) {
    const rotatedIndex = (i + rotateIndex) % n;
    rotatedArray[i] = arr[rotatedIndex];
  }

  return rotatedArray;
}

console.log(rotateArray([1, 2, 2, 9, 3, 2], 3));
