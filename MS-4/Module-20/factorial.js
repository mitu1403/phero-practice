// function factorial(number){
//   let result = 1
//   for(let i=number; i>=1; i--){
//     result *= i
//   }
//   return result
// }

function factorial(number){
  let result = 1
  while(number >= 1){
    result *= number
    number--
  }
  return result
}

const fact = factorial(4)
console.log(fact)