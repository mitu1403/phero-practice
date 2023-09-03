const products = [
  {id: 1, name: 'lenovo', price: 65000},
  {id: 2, name: 'dell', price: 45000},
  {id: 3, name: 'hp', price: 55000},
  {id: 4, name: 'mac', price: 165000}
]

const names = products.map(product => product.name)
console.log(names)

products.forEach(product => console.log(product.price))

const expensive = products.filter( p => p.price > 50000)
console.log(expensive)

const affordable = products.find( p => p.price<50000)
console.log(affordable)