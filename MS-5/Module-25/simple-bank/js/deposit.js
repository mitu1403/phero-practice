document.getElementById('btn-deposit').addEventListener("click", function(){
  const depositField = document.getElementById("deposit-amount")
  const newdepositAmount = depositField.value
  
  const totalDepositElement = document.getElementById("deposit-total")
  const prevtotalDeposit = totalDepositElement.innerText
  totalDepositElement.innerText = (Number(prevtotalDeposit) + Number(newdepositAmount)).toFixed(2)

  const totalAmount = document.getElementById("total-amount")
  const prevTotalAmount = Number(totalAmount.innerText)
  totalAmount.innerText = (prevTotalAmount + Number(newdepositAmount)).toFixed(2)

  depositField.value = ''

})