document.getElementById("submit").addEventListener("click", function(){
  const inputField = document.getElementById("input-field")
  const inputText = inputField.value

  const displayField = document.getElementById("input-text-display")
  displayField.innerText = inputText
  inputField.value = " "
})