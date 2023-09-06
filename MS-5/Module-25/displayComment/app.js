document.getElementById("post-button").addEventListener("click", function(){
  const newCommentField = document.getElementById("new-comment")
  const newCommentText = newCommentField.value
  
  const commentSection = document.getElementById("comment-section")
  const p = document.createElement("p")
  p.innerText = newCommentText
  p.classList.add("new-comment")

  commentSection.appendChild(p)
  
  newCommentField.value = ""
})