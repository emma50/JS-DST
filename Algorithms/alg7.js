// power
// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(a, b){
  let result = 0
  if (b === 0) return 1

  result = a * power(a, b - 1)
  
  return result
}

// factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040

function factorial(num){
  if (num === 0) return 1;
 
  return num * factorial(num - 1)
}


function productOfArray (arr) {
  if (arr.length === 1) return arr[0]
  
  return arr[0] * productOfArray(arr.slice(1))
}

productOfArray([1, 2, 3])


// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55 

function recursiveRange(num){
  if (num === 1) return 1
  
  return num + recursiveRange(num - 1)
}


// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

function fib(num){
  // add whatever parameters you deem necessary - good luck!  
  // let result = [1, 1]
  let n1 = 1
  let n2 = 1
  let nextTerm;
  
  for (let i = 2; i < num; i++) {
      nextTerm = n1 + n2;
      // result.push(nextTerm)
      n1 = n2;
      n2 = nextTerm
  }
  
  // return result;
  return nextTerm;
}

function fib(num){
  // add whatever parameters you deem necessary - good luck!  
  if (num <= 2) return 1
  
  return fib(num - 1) + fib(num - 2)
}
