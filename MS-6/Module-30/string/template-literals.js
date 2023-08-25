// template literals make string concatination and other works much easier

const firstName = "john"
const lastName = "timotht"

const result = `The full name has ${firstName} and ${lastName} in the birth certificate` 
console.log(result)
const result1 = `
The name is 
John Cena \n lo`
console.log(result1)

const obj = {
  student: "John",
  age: 34
}
const obj2 = {
  student: "timothy",
  age: 44
}
const result3 =  `The sum of ${obj.student} and ${obj2.student}'s age is ${obj.age + obj2.age}`
console.log(result3)