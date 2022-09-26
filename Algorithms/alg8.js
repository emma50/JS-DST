// binary search
function binarySearch (arr, val) {
  let leftPointer = 0;
  let righPointer = arr.length - 1;
  let middle = Math.floor((leftPointer + righPointer) / 2)

  while (leftPointer <= righPointer && arr[middle] !== val) {
    if (arr[middle] < val) leftPointer = middle + 1
    else righPointer = middle - 1
    middle = Math.floor((leftPointer + righPointer) / 2)
  }
  
  return arr[middle] === val ? middle : -1
}

binarySearch([2, 3, 5, 8, 11, 13], 5)


// string search
function stringSearch (long, short) {
  let count = 0
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) break;
      if (j === short.length - 1) count++
    }
  }
  return count;
}

stringSearch('wowomgwodomg', 'omg')