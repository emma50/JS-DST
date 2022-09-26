/**Sorting algorithm */
// Quick Sort

// function pivot (arr) {
//   let start = 0;
//   // let end = arr.length - 1
//   let currentPivot = 0

//   for (let i = 1; i < arr.length; i++) {
//     console.log(currentPivot, 'OUTER')
//     if (arr[start] > arr[i]) {
//       currentPivot++
//       console.log(currentPivot, 'INNER')
//     }
//   }
//   swap(arr, start, currentPivot)

//   return currentPivot;
// }

// pivot([10, 2, 5, 11, 22])

function swap (arr, idx1, idx2) {
  return [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}

function pivot (arr, start = 0, end = arr.length - 1) {
  let pivot = arr[start];
  let swapIdx = start

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++
      swap(arr, swapIdx, i)
    }
  }
  swap(arr, start, swapIdx)
  console.log(arr, 'OUTER')

  return swapIdx;
}

function quickSort (arr, left = 0, right = arr.length - 1) {
  console.log('LEFT: ' + left + ' RIGHT: ' + right)
  if (left < right) {
    let pivotIdx = pivot(arr, left, right)
    console.log(pivotIdx, 'PIVOTINDEX')
    // LEFT
    quickSort(arr, left, pivotIdx - 1)
    console.log(arr, 'ARRAY')
    // RIGHT
    quickSort(arr, pivotIdx + 1, right)
    console.log(arr, 'ARRAYYYYYYYYYYYYYYY')
  }

  return arr;
}

quickSort([10, 2, 5, 11, 22])
