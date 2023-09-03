function loadPosts(){
  fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => displayPosts(json))
}
function displayPosts(posts){
  const postsContainer = document.getElementById("posts-container")
  for(const post of posts){
    const div = document.createElement("div")
    div.innerHTML = `
      <h4>User - ${post.userId}</h4>
      <h5>Post: ${post.title}</h5>
      <h5>Post Description: ${post.body}</h5>
    `
    div.classList.add("post")
    postsContainer.appendChild(div)
  }
}
loadPosts()