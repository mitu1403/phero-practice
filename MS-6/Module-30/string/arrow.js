//function declaration

function add (a, b){
  return a+b
}
const result = add(5,9)
console.log(result)

// function expression

const add2 = function(a, b){ //this function is called an anonymous function
  return a+b
}
const result2 = add2(5,9)
console.log(result2)

//arrow function

const add3 = (a, b) => a+b

const result3 = add3(5,8)
console.log(result3)