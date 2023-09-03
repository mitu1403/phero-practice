// 1.
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json));

// 2.
const url = "https://jsonplaceholder.typicode.com/todos/1";
fetch(url)
  .then((response) => response.json())
  .then((json) => console.log(json));

function loadData(url) {
  fetch(url)
    .then((response) => response.json())
    .then((json) => console.log(json));
}
// 3.
loadData(url)

// 4.
function loadData2() {
  fetch(url)
    .then((response) => response.json())
    .then((json) => console.log(json));
}

