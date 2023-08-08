function getAllOddNumbers(numbers){
  let oddNumbers = [];
  for(let i=0; i<numbers.length; i++){
    if(numbers[i]%2 !== 0){
      oddNumbers.push(numbers[i])
    }
  }
  console.log('new array:', oddNumbers)
  return oddNumbers
}

function add(numbers){
  let sum=0;
  for(let i=0; i<numbers.length; i++){
    if(numbers[i] % 2 !== 0){
      sum += numbers[i]
    }    
  }
  return sum
}

const myArr = [65, 45, 45, 91, 6]
const oddNumbersArray = getAllOddNumbers(myArr)
const result = add(oddNumbersArray);
console.log("Sum of the array:",result)
