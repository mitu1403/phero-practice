function sortMaker(arr) {
  if(arr.length === 2){
    if(arr[0] === arr[1]){
      return "equal"      
    }
    else if(arr[0] >= 0 && arr[1] >= 0 ){
      return arr.sort(function(a, b){return b-a})
    }
    else{
      return "Invalid Input"
    }
  }
}

const myArr = [0,1]
const result = sortMaker(myArr)
console.log(result)