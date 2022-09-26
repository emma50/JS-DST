/**Sorting algorithm */
// Merge Sort
// arr1 & arr2 must be first of all sorted arguments
// function merge (arr1, arr2) {
//   let result = []

//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       console.log(j, 'OUTER')
//       if (arr2[j] > arr1[i]) {
//         result.push(arr1[i])
//         i++
//       }
//       result.push(arr2[j])
//     }
//   }

//   return result
// }

// merge([1, 10, 50], [2, 14, 99])

// merge is a helper function
function merge (arr1, arr2) {
  let result = []
  let i = 0;
  let j = 0

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] >= arr1[i]) {
      result.push(arr1[i])
      i++
    }
    else {
      result.push(arr2[j])
      j++
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i])
    i++
  }

  while (j < arr2.length) {
    result.push(arr2[j])
    j++
  }

  return result
}

merge([1, 10, 50], [2, 14, 99])


function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2)
  let left = mergeSort(arr.slice(0, mid))
  let right = mergeSort(arr.slice(mid))
  console.log(left, right, '*******')

  return merge(left, right)
}

mergeSort([2, 14, 99, 1])



