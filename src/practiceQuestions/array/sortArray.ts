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
  return arr;
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
