function cubeNumber(number) {
  if(typeof number === "number"){
    return number*number*number
  }
  else {
    return "Please Enter a number"    
  }
}

let result = cubeNumber("s")
console.log(result)