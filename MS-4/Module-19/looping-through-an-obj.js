var mobile= {
  price: 19000,
  ram: "8gb",
  rom: "64gb",
  brand: "samsung"
}
let keys = Object.keys(mobile);
console.log(keys)
let values = Object.values(mobile) 
console.log(values)

for(var i=0; i < keys.length; i++){
  let propertyName = keys[i]
  let value =  mobile[propertyName]
  // console.log(propertyName, value)
}

console.log("\nUsing for in loop")
for( propertyName in mobile ){
  console.log(propertyName, mobile[propertyName])
}