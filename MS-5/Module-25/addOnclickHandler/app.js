// Option 2
// need to use frequently
function makeYellow(){
  document.body.style.backgroundColor = "yellow"
}

// Option 3
const makeRed = document.getElementById("make-red")
makeRed.onclick = makeRedFunc;

function makeRedFunc(){
  document.body.style.backgroundColor = "red"
  document.body.style.color = "white"
}

// Option 3.5
const makePurpleButton = document.getElementById("make-purple")
makePurpleButton.onclick= function (){
  document.body.style.backgroundColor = "purple"
  document.body.style.color = "white"
}

// Option 4
const pinkButton = document.getElementById("make-pink")
pinkButton.addEventListener("click", makePink)

function makePink(){
  document.body.style.backgroundColor = "pink"
}

// Option 4.1
const grayButton = document.getElementById("make-gray")
grayButton.addEventListener("click", function (){
  document.body.style.backgroundColor = "gray"
})

// Option 4.2
// Most Important one
document.getElementById("make-aqua").addEventListener("click", function(){
  document.body.style.backgroundColor = "aqua"
})