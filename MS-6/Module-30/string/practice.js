const newArray = (arr) =>{
  let resutl = []
  for(const item of arr){
    if(item.length % 2 === 0){
      resutl.push(item)
    }
  }  
  return resutl
}
const friendsArr = ["lolita", "biplob", "sunny deol", "percy"]
const result = newArray(friendsArr)
console.log(result)


const avg = (num) =>{
  let sum = 0
  for(const item of num){
    sum += item*item
  }
  return sum / num.length
}
const numbers = [2, 6, 3, 1, 4]
const result2 = avg(numbers)
console.log(result2)


const max = (num1, num2) =>{
  const newArr = [...num1, ...num2]
  const max = Math.max(...newArr)
  return max
}
const num1 = [7,34,456,234,35,56]
const num2 = [234,4,2,6,2,45,4,34]
const result3 = max(num1, num2)
console.log(result3)

const obj = { foo: 1 };
obj.bar = 2;
console.log(obj)