// Selection Sort
function selectionSort(arr: number[]): number[] {
  const length = arr.length;

  for (let i = 0; i < length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }

  return arr;
}

console.log("Selection sort", selectionSort([10, 20, 15, 2, 23, 90, 67]));

// Bubble Sort
function bubbleSort(arr: number[]): number[] {
  const length = arr.length;

  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      if (arr[j + 1] < arr[j]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
}

console.log("Bubble sort", bubbleSort([10, 20, 15, 2, 23, 90, 67]));
