/**Sorting algorithms */
// BUBBLE SORT
function bubbleSort (arr) {
  function swap (arr, idx1, idx2) {
    return [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
  }

  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1], arr[i])
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
      }
    }
    console.log('ONE PASS COMPLETE')
  }

  return arr;
}

bubbleSort([2, 5, 1, 3, 9, 3, 15, 12])

function bubbleSortOptimized (arr) {
  function swap (arr, idx1, idx2) {
    return [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
  }

  let noSwaps;

  for (let i = arr.length; i > 0; i--) {
    noSwaps = true
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1], arr[i])
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
        noSwaps = false;
      }
    }
    if (noSwaps) break;

    console.log('ONE PASS COMPLETE')
  }

  return arr;
}

bubbleSortOptimized([19, 3, 9, 15, 17])


// SELECTION SORT
function selectionSort (arr) {
  function swap (arr, idx1, idx2) {
    return [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(arr, arr[j], arr[i])
      if (arr[i] > arr[j]) {
        swap(arr, i, j)
      }
    }
    console.log('ONE PASS COMPLETE')
  }

  return arr;
}

selectionSort([19, 3, 9, 15, 17])


function selectionSort (arr) {
  function swap (arr, idx1, idx2) {
    return [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
  }

  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        lowest = j
      }
    }
    console.log(i, lowest)
    swap(arr, i, lowest)
    console.log('ONE PASS COMPLETE')
  }
  return arr;
}

selectionSort([19, 3, 9, 15, 17])


// INSERTION SORT
function insertionSort (arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      console.log(arr, i, j, 'TOP LOOP')
      arr[j + 1] = arr[j]
      console.log(arr, i, j, 'INNER LOOP')
    }
  }
  return arr
}

insertionSort([19, 3, 21, 9, 15, 17])

