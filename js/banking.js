   
 // handle button with function
  function getInputValue(inputValue){
  const inputField = document.getElementById(inputValue);
  const inputAmountText = inputField.value;
  const amountValue = parseFloat(inputAmountText);
  // clear input field
  inputField.value = '';
  return amountValue;
  }
   
  // update total field using function
  function updateTotalField(totalFieldId,depositAmountTotal){
  const totalEelement = document.getElementById(totalFieldId);
  const elementTotalText = totalEelement.innerText;
  const previousElementTotal = parseFloat(elementTotalText)
  totalEelement.innerText = previousElementTotal + depositAmountTotal;
  }
  //  get current balance 
  function getcurrentBalance(){
  const balanceTotal = document.getElementById('balance-total');
  const balanceTotalText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(balanceTotalText);
  return previousBalanceTotal;
  }

  // update balance 
  function updateBalance(AmountTotal, isAdd){
  const balanceTotal = document.getElementById('balance-total');
  const previousBalanceTotal = getcurrentBalance();
  if (isAdd == true){
  balanceTotal.innerText = previousBalanceTotal + AmountTotal;
  }else{
  balanceTotal.innerText = previousBalanceTotal - AmountTotal;
  }
    
  }
   
  document.getElementById('deposit-button').addEventListener('click', function(){
   
  const depositAmountTotal = getInputValue('deposit-input')

  // get current deposit and error handling
  if(depositAmountTotal > 0){
  updateTotalField('deposit-total', depositAmountTotal); 
  updateBalance(depositAmountTotal, true);
  }  
  
  })

  // handle withdraw button 
  document.getElementById('withdraw-button').addEventListener('click', function(){
  // update current withdraw 
  const withdrawTotalAmount = getInputValue('withdraw-input');
  const currentBalance = getcurrentBalance();
   
    
  if (withdrawTotalAmount > 0 && withdrawTotalAmount < currentBalance){
  updateTotalField('withdraw-total', withdrawTotalAmount);
  updateBalance(withdrawTotalAmount, false);
  }
   
  })

