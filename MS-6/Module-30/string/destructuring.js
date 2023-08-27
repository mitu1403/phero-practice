// obj destructuring
const actor = {
  name: "ananta",
  age: 30,
  phone: "018282828",
  money: 20000
}

// If right side is an object left side of destructuring will be object as well
const {phone, name, age, money: salary} = actor
console.log(phone)
console.log(name)
console.log(age)
console.log(salary)

// array destructuring

// If right side is an array left side of destructuring will be array as well
const numbers = [45, 99]
const [first, second] = numbers
const [x, y] = [12, 69]

// advance
function doubleThem (a,b) {
  return [a*2, b*2]
}

const [prothom, ditiyo] = doubleThem(2, 3)
console.log(prothom, ditiyo)
