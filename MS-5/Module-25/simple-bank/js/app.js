// step-1: add event handler in the submit button
document.getElementById("btn-submit").addEventListener("click", function () {
    // step-2: get the email address
    // always remember to use .value to get text from an input field
    const emailField = document.getElementById("user-email")
    const email = emailField.value
    
    // step-3: get password
    const passField = document.getElementById("user-password")
    const pass = passField.value
    console.log(typeof pass)
    
    // Warning: never verify email and password on the client side
    // step-4: verify email and password
    if(email === 'lala@gmail.com' && pass === "1234"){
      window.location.href = "bank.html"
    }
    else{
      alert("Invalid User")
    }

});
