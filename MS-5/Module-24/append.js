// APPEND CHILD

// 1. where to add
const placesList = document.getElementById("places-list");
// 2. what to be added
const li = document.createElement("li");
li.innerText = "Pahartoli";
// 3. add the child
placesList.appendChild(li);



// Append a Section in Main container

// 1. where to add
const mainContainer = document.getElementById("main-container");
// 2. what to be added
const addSection = document.createElement("section");
const h1 = document.createElement("h2");
h1.innerText = "My Food List";
addSection.appendChild(h1)



const ul = document.createElement('ul')
const li1 =  document.createElement('li')
li1.innerText = 'biryani'
ul.appendChild(li1)

const li2 =  document.createElement('li')
li2.innerText = 'borhani'
ul.appendChild(li2)

addSection.appendChild(ul)

mainContainer.appendChild(addSection)
console.log(mainContainer);

// set InnerHTML Directly
const sectionDress = document.createElement('section')
sectionDress.innerHTML = `
  <h1>My Dress Section</h1>
  <ul>
    <li>T-shirt</li>
    <li>Lehenga</li>
    <li>Tops</li>
  </ul>
`
mainContainer.appendChild(sectionDress)