function findAddress(obj) {
  const threeKeys = ["street", "house", "society"]
  const values = [];
  for(let i=0; i<threeKeys.length; i++){
    if(obj.hasOwnProperty(threeKeys[i])){
      values.push(obj[threeKeys[i]])
    }
    else{
      values.push("__")
    }
  }
  return values.join(",")
}

const myObj = {
  street: 10,
  house: "15A",
  society: "Earth Perfect"
}
const result = findAddress(myObj)
console.log(result)