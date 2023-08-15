function reverse(arr){
  let reverseArr = []
  for(let i=arr.length-1; i>=0; i--){
    reverseArr.push(arr[i])    
  }
  return reverseArr.join(" ")
}

let sentence = "I am a good boy"; 
let arrSentence = sentence.split(' ')
console.log(arrSentence)
let result = reverse(arrSentence)
console.log(result)