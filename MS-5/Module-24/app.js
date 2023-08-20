// console.log(document)

const liCollection = document.getElementsByTagName("li");
// console.log(liCollection)

for (list of liCollection) {
  // console.log(list.innerText)
}

const sections = document.querySelectorAll("section");
// console.log(sections);

for (const section of sections) {
  console.log(section);
  section.style.border = "1px solid steelblue";
  section.style.margin = "10px";
  section.style.borderRadius = "15px";
  section.style.paddingLeft = "17px";
  section.style.backgroundColor = "lightgray";
}

const placesContainer = document.getElementById("places-container");
placesContainer.style.backgroundColor = "yellow";

const fruitsContainer = document.getElementById("fruits-container");
fruitsContainer.classList.add("rosy-bg");

