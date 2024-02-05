// 1. Array Reverse Using an Extra Array:
function reverseArray1(arr: number[]): number[] {
  const reversedArray: number[] = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArray.push(arr[i]);
  }

  return reversedArray;
}

console.log(reverseArray1([10, 20, 15, 2, 23, 90, 67]));

// 2. Array Reverse without using an Extra Array:
function reverseArray2(arr: number[]): number[] {
  const n = arr.length;
  for (let i = 0; i < Math.floor(n / 2); i++) {
    const temp = arr[i];
    arr[i] = arr[n - 1 - i];
    arr[n - 1 - i] = temp;
  }

  return arr;
}

console.log(reverseArray2([10, 20, 15, 2, 23, 90, 67]));

// 3. Array Reverse Inbuilt Methods:
function reverseArray3(arr: number[]): number[] {
  return arr.reverse();
}

console.log(reverseArray3([10, 20, 15, 2, 23, 90, 67]));

// 4. Array Reverse Recursion:
function reverseArray4(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  }

  const [first, ...rest] = arr;
  return reverseArray4(rest).concat(first);
}

console.log(reverseArray4([10, 20, 15, 2, 23, 90, 67]));

// 5. Array Reverse Stack:
function reverseArray5(arr: number[]): number[] {
  const stack: number[] = [];
  for (const num of arr) {
    stack.push(num);
  }

  const reversedArray: number[] = [];
  while (stack.length > 0) {
    const popped = stack.pop();
    if (popped !== undefined) {
      reversedArray.push(popped);
    }
  }

  return reversedArray;
}

console.log(reverseArray5([10, 20, 15, 2, 23, 90, 67]));
