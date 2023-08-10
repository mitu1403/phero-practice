function canPay(changeArray, totalDue) {
  if(changeArray.length > 0){
    let totalTaka = 0
    for(let i=0 ; i<changeArray.length; i++){
      totalTaka += changeArray[i]
    }
    if(totalTaka >= totalDue){
      return true
    }
    else{
      return false
    }
  }
  else{
    return "Please, Bring Some Money First!"
  }
}

const taka = []
const price = 10
const result = canPay(taka, price)
console.log(result)