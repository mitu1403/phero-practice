function matchFinder(string1, string2) {
  if(typeof string1 === "string" && typeof string2 === "string"){
    return string1.includes(string2)
  }
  else{
    return "Please Enter two String"
  }
}

let string1 = 2
let string2 = 1
let result = matchFinder(string1, string2)
console.log(result)