const numbers = [4,5,6,7,8]

// const doubled = []
// for(const num of numbers){
//   const double = num * 2
//   doubled.push(double)
// }
// console.log(doubled)

function doubleIt(num){
  console.log('num now', num)
  return num * 2
}
const doubleIt2 = num => num*2

// map => loops through each element of the array and do the operation that you passed in the call back function and hold the result from each operation in an array and finally returns you the ARRAY.
const result = numbers.map(doubleIt)
console.log(result)

const result2 = numbers.map(doubleIt2)
console.log(result2)

const result3 = numbers.map(num => num * 2)
console.log(result3)

const friends = ["tom", "john", "micheal", "oliver"]

const length = friends.map(f => f.length)
console.log(length)

const firstLetter = friends.map(f => f[0])
console.log(firstLetter)
