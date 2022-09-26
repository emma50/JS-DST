/**Multiple pointer technique */
function sumZero (arr) {
  let leftPointer = 0;
  let rightPointer = arr.length - 1

  while (leftPointer < rightPointer) {
    let sum = arr[leftPointer] + arr[rightPointer]
    if (sum === 0) {
      return [arr[leftPointer], arr[rightPointer]]
    }
    else if (sum > 0) {
      rightPointer--
    }
    else {
      leftPointer++
    }
  }
}

sumZero([-4, -3, -2, -1, 5, 10])
sumZero([-4, -3, -2, -1, 2, 3, 4, 5])
