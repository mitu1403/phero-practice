function loadUsers2() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => displayUsers2(data));
}

function displayUsers2(data){
  const ul = document.getElementById("user-list")
  const table = document.getElementById("users-info")
  for(const user of data){
    const li = document.createElement("li")
    li.innerText =  user.name
    ul.appendChild(li)
    
    const tr = document.createElement("tr")
    tr.innerHTML = `
      <td style="padding-bottom: 5px">${user.name}</td>
      <td style="padding-bottom: 5px">${user.email}</td>
      <td style="padding-bottom: 5px">${user.address.street}</td>
      <td style="padding-bottom: 5px">${user.phone}</td>
      <td style="padding-bottom: 5px">${user.website}</td>
    `
    tr.style.textAlign = "center"
    table.appendChild(tr)
  }
}