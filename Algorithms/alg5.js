/**Divide and conquer -> Time complexity = log(N) */
function binarySearch (arr, val) {
  let min = 0;
  let max = arr.length - 1

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);

    if (arr[middle] > val) {
      max = middle - 1
    }
    else if (arr[middle] < val) {
      min = middle + 1
    }
    else {
      return middle
    }
  }

  return -1;
}

binarySearch([1, 3, 5, 6, 9, 12, 13, 14, 16, 19], 3)