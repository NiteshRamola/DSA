// Problem statement
// You have been given an integer array/list 'ARR' of size 'N'. Write a solution to check if it could become non-decreasing by modifying at most 1 element.

// We define an array as non-decreasing, if ARR[i] <= ARR[i + 1] holds for every i (0-based) such that (0 <= i <= N - 2).

function nonDecreasingArray(arr: number[]): boolean {
  let modified = false;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      if (modified) {
        return false;
      }

      if (i > 0 && arr[i - 1] > arr[i + 1]) {
        arr[i + 1] = arr[i];
      } else {
        arr[i] = arr[i + 1];
      }

      modified = true;
    }
  }

  return true;
}

console.log(nonDecreasingArray([-1, -1, 0, 2, 1, 3, 4]));
