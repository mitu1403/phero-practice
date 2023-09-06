document.getElementById('btn-withdraw').addEventListener("click", function(){
  const withdrawAmountFeild = document.getElementById('withdraw-amount');
  const newWithdrawAmount = withdrawAmountFeild.value

  const withdrawText = document.getElementById('withdraw-text')
  const prevWithdrawText = withdrawText.innerText
  
  const totalAmount = document.getElementById("total-amount")
  const prevTotalAmount = Number(totalAmount.innerText)

  if(parseFloat(newWithdrawAmount) > prevTotalAmount){
    alert("you don't have this much money to withdraw")
    withdrawAmountFeild.value = ''
    return
  }
  withdrawText.innerText = (parseFloat(newWithdrawAmount) + parseFloat(prevWithdrawText) ).toFixed(2)
  totalAmount.innerText = (prevTotalAmount - Number(newWithdrawAmount)).toFixed(2)

  withdrawAmountFeild.value = ''
 
})