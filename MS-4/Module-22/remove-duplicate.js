function removeDuplicate(name){
  const unique = []
  for(let i=0; i<name.length; i++){
    if(!unique.includes(name[i])){
      unique.push(name[i])
    }
  }
  return unique
}
const names = ["john", "doe", "princess", "doe","charlotte","amanda","prince"]
const uniqueNames = removeDuplicate(names)
console.log(uniqueNames)