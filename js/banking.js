   
   function getInputValue(){
   const depositInput = document.getElementById('deposit-input');
   const depositAmountText = depositInput.value;
   const depositAmountTotal = parseFloat(depositAmountText);
   // clear input field
   depositInput.value = '';
   return depositAmountTotal;
   }
   
   
   
   
   document.getElementById('deposit-button').addEventListener('click', function(){
   /* const depositInput = document.getElementById('deposit-input');
   const depositAmountText = depositInput.value;
   const depositAmountTotal = parseFloat(depositAmountText); */
   const depositAmountTotal = getInputValue()
   // get current deposit
   const depositTotal = document.getElementById('deposit-total');
   const depositTotalText = depositTotal.innerText;
   const previousDepositAmount = parseFloat(depositTotalText)
   depositTotal.innerText = previousDepositAmount + depositAmountTotal;
   // update total amount   
   const balanceTotal = document.getElementById('balance-total');
   const balanceTotalText = balanceTotal.innerText;
   const previousBalanceTotal = parseFloat(balanceTotalText);
   balanceTotal.innerText = previousBalanceTotal + depositAmountTotal;
   })
   // handle withdraw button 
    document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawTotalAmount = parseFloat(withdrawAmountText);
    // update current withdraw 
    const totalWithDraw = document.getElementById('withdraw-total');
    const totalWithDrawText = totalWithDraw.innerText;
    const withDrawTotal = parseFloat(totalWithDrawText)
    totalWithDraw.innerText =withDrawTotal + withdrawTotalAmount;
    // update balance after withdraw 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal - withdrawTotalAmount;
    // clear input field
    withdrawInput.value= '';
   })

