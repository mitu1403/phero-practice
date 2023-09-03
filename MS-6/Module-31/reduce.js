const numbers = [4, 5, 6, 34, 66, 23]

const total = numbers.reduce((previous, current) => 
  previous + current, 0)

console.log(total)