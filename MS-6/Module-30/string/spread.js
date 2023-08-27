const max = Math.max(6, 23, 50, 60, 45)
console.log(max)

const numbers = [10, 30, 45, 70, 453]
const arrayMax = Math.max(numbers)
// This is wrong bechause this takes a bunch of numbers
// but here it is an array
// need to convert it into numbers with spread operator
console.log(arrayMax)


// use spread operator convert an array into a bunch of numbers
console.log(numbers)
console.log(...numbers) 

// use spread operator to copy
const nums = [4,5,7,2]
const nums2 = [...nums]
nums2.push(12)
console.log(nums)

// use spread operator to concat
const sonkha = [...nums, 45]
console.log(sonkha)

// delete items of an object with spread operator
const obj = {
  name: "lala",
  age: 29,
  designation: "bekar"
}
const {designation,...rest} = obj
console.log(obj)
console.log(rest)

// instead of rest any name can be used