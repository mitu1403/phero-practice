function add(numbers){
  let sum=0;
  for(let i=0; i<numbers.length; i++){
    sum += numbers[i]
  }
  return sum
}

const myArr = [10, 20, 45, 30, 89, 4]
const result = add(myArr)
console.log("Sum of the array:",result)