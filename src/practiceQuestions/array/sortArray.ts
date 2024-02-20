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
    let swapped = false;
    for (let j = 0; j < length - i - 1; j++) {
      if (arr[j + 1] < arr[j]) {
        swapped = true;
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }

    if (!swapped) {
      break;
    }
  }

  return arr;
}

console.log("Bubble sort", bubbleSort([10, 20, 15, 2, 23, 90, 67]));

// Insertion Sort
function insertionSort(arr: number[]): number[] {
  for (let i = 1; i < arr.length; i++) {
    const temp = arr[i];

    for (var j = i - 1; j >= 0 && temp < arr[j]; j--) {
      arr[j + 1] = arr[j];
    }

    arr[j + 1] = temp;
  }
  return arr;
}

console.log("Insertion sort", insertionSort([10, 20, 15, 2, 23, 90, 67]));

// Merge Sort
function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left: number[], right: number[]): number[] {
  let result: number[] = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}

console.log("Merge sort", mergeSort([10, 20, 15, 2, 23, 90, 67]));

// Quick Sort
function quickSort(arr: number[]): number[] {
  return arr;
}

console.log("Quick sort", quickSort([10, 20, 15, 2, 23, 90, 67]));

// Heap Sort
function heapSort(arr: number[]): number[] {
  return arr;
}

console.log("Heap sort", heapSort([10, 20, 15, 2, 23, 90, 67]));

// Radix Sort
function radixSort(arr: number[]): number[] {
  return arr;
}

console.log("Radix sort", radixSort([10, 20, 15, 2, 23, 90, 67]));
