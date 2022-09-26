/**Sorting Algorithms */
// RADIX SORT
// function getDigit (num, i) {
//   let numToStr = Math.abs(num).toString()
//   let length = numToStr.length
//   let result = Number(numToStr[(length - 1) - i])

//   if (i === length) return 0;
  
//   return result;
  
// }

// getDigit(12345, 0)

// Get the index of each digit beginning from the right end
function getDigit (num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10
}

getDigit(123456789, 0)

// Count the length of numbers
// function digitCount (num) {
//   return Number(Math.abs(num).toString().length)
// }

// digitCount(123456789)

function digitCount (num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1
}

// digitCount(123456789)

// Get the length of the most digit in the array
function mostDigits (num) {
  let maxDigits = 0;

  for (let i = 0; i < num.length; i++) {
    if (digitCount(num[i] > maxDigits)) {
      maxDigits = digitCount(num[i])
    }
  }
  return maxDigits;
}

mostDigits([1234, 567, 89, 1, 123456])

function radixSort (arr) {
  let maxDigitsCount = maxDigits(arr)

  for (let i = 0; i < maxDigitsCount; i++) {
    // Create a bucket of 10 sub-arrays
    let bucket = Array.from({length: 10}, () => [])
    for (let j = 0; j < arr.length; j++) {
      // get the digit of each array sub values
      let digit = getDigit(arr[j], i)
      // push to the bucket index each arr digit sub values
      bucket[digit].push(arr[j])
    }
    arr = [].concat(...bucket)
  }

  return arr;
}

radixSort([1234, 567, 89, 1, 123456])



console.log(Array.of(7))        // [7]
console.log(Array.from(7))      // []
console.log(Array(7))           // [empty × 7]
console.log(new Array(7))       // [empty × 7]
console.log(Array.of('foo'))    // ['foo]
console.log(Array.from('foo'))  // ['f', 'o', 'o']
console.log(Array('foo'))       // ['foo']
console.log(new Array('foo'))   // ['foo]
console.log([].concat([]))      // []
console.log([1, 2].concat([]))  // [1, 2]