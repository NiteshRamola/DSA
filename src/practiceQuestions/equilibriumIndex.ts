// Problem statement
// You are given an array Arr consisting of N integers. You need to find the equilibrium index of the array.

// An index is considered as an equilibrium index if the sum of elements of the array to the left of that index is equal to the sum of elements to the right of it.

// Note:

// 1. The array follows 0-based indexing, so you need to return the 0-based index of the element.
// 2. Note that the element at the equilibrium index won’t be considered for either left sum or right sum.
// 3. If there are multiple indices which satisfy the given condition, then return the left-most index i.e if there are indices i,j,k…. which are equilibrium indices, return the minimum among them
// 4. If no such index is present in the array, return -1.

function equilibriumIndex(arr: number[]): number {
  const n = arr.length;
  let totalSum = 0;
  let leftSum = 0;

  for (let i = 0; i < n; i++) {
    totalSum += arr[i];
  }

  for (let i = 0; i < n; i++) {
    totalSum -= arr[i];

    if (leftSum === totalSum) {
      return i;
    }

    leftSum += arr[i];
  }

  return -1;
}

console.log(equilibriumIndex([1, 2, 2, 9, 3, 2]));
