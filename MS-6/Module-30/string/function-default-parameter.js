function fullName (firstName="", lastName=""){
  return firstName + ' ' + lastName
}

let result = fullName("lala", "lou")
let result1 = fullName("lala")
console.log(result)
console.log(result1)

// Its good to use default parameter in a function
// otherwise the result printed undefined/NaN
// default parameter for number = 0
// default parameter for string = ''
// default parameter for array = []
// default parameter for obj   = {}