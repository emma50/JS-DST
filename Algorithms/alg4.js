/**Sliding window technique*/
function maxSubArray (arr, num) {
  let maxSum = 0;
  let tempSum = 0

  if (arr.length < num) return null;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    if (maxSum < tempSum) {
      maxSum = tempSum
    }
  }

  return maxSum;
}

maxSubArray([2, 6, 9, 2, 1], 3)