function maxInArray(arr){
  let largestNumber = arr[0]
  for(let i=0; i<arr.length; i++){
    if(largestNumber < arr[i]){
      largestNumber = arr[i]
    }
  }
  return largestNumber
}

const heights = [167, 190, 120, 165, 137, 265]
const result = maxInArray(heights)
console.log(result)