// K’th Smallest/Largest Element in Unsorted Array

// Given an array arr[] of size N and a number K, where K is smaller than the size of the array.
// Find the K’th smallest element in the given array. Given that all array elements are distinct.

function kThElement(arr: number[], k: number): number[] {
  arr.sort((a, b) => a - b);

  return [arr[k - 1], arr[arr.length - k]];
}

console.log(kThElement([-3, -1, 0, -2, 1, 4, 5, 3], 3));
