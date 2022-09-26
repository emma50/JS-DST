// RECURSION
// Helper method recursion
function countingOdds (arr) {
  let result = []
  console.log(result);

  // helper method
  function helper(arr) {
    if (arr.length === 0) return;

    if (arr[0] % 2 !== 0) {
      result.push(arr[0]);
    }

    helper(arr.slice(1))
  }

  helper(arr)

  return result;
}

countingOdds([1, 2, 3, 6, 5, 11, 22])


// pure recursion (without a helper method)
function countingOdds (arr) {
  let result = []
  console.log(result, 'minimie')

  if (arr.length === 0) return;

  if (arr[0] % 2 !== 0) {
    result.push(arr[0]);
  }

  result = result.concat(countingOdds(arr.slice(1)));

  return result;
}

countingOdds([1, 2, 3, 6, 5, 11, 22])

// U9QagC5b0jzm
// export PATH=$PATH:/home/emma50/bin/dfx