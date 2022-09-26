// Multiple pointers
function countUniqueValues (arr) {
  let uniqueValues = {}

  for (let key of arr) {
    uniqueValues[key] = ++uniqueValues[key] || 1
  }

  return Object.keys(uniqueValues).length;
}

countUniqueValues([1, 1, 1, 1, 2])


function countUniqueValues (arr) {
  let i = 0;
  let j = 1;

  if (arr.length === 0) return 0;

  while (i < j && j < arr.length) {
    if (arr[i] === arr[j]) {
      j++
    }
    else {
      arr[i + 1] = arr[j]
      i++
      j++
    }
  }

  return i + 1;
}

countUniqueValues([1, 1, 1, 1, 2, 3, 4])