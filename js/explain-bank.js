   
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
 
    // update balance 
    function updateBalance(AmountTotal, isAdd){
     const balanceTotal = document.getElementById('balance-total');
     const balanceTotalText = balanceTotal.innerText;
     const previousBalanceTotal = parseFloat(balanceTotalText);
     if (isAdd == true){
       balanceTotal.innerText = previousBalanceTotal + AmountTotal;
     }else{
       balanceTotal.innerText = previousBalanceTotal - AmountTotal;
     }
     
    }
    
    document.getElementById('deposit-button').addEventListener('click', function(){
    /* const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmountTotal = parseFloat(depositAmountText); */
    const depositAmountTotal = getInputValue('deposit-input')
 
    // get current deposit
    /* const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(depositTotalText)
    depositTotal.innerText = previousDepositAmount + depositAmountTotal; */
    updateTotalField('deposit-total', depositAmountTotal);
    // update total amount   
    /* const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal + depositAmountTotal; */
    updateBalance(depositAmountTotal, true);
    })
 
    // handle withdraw button 
     document.getElementById('withdraw-button').addEventListener('click', function(){
     // const withdrawInput = document.getElementById('withdraw-input');
     // const withdrawAmountText = withdrawInput.value;
     // const withdrawTotalAmount = parseFloat(withdrawAmountText);
     const withdrawTotalAmount = getInputValue('withdraw-input');
 
     // update current withdraw 
     /* const totalWithDraw = document.getElementById('withdraw-total');
     const totalWithDrawText = totalWithDraw.innerText;
     const withDrawTotal = parseFloat(totalWithDrawText)
     totalWithDraw.innerText =withDrawTotal + withdrawTotalAmount; */
     updateTotalField('withdraw-total', withdrawTotalAmount);
 
     // update balance after withdraw 
     /* const balanceTotal = document.getElementById('balance-total');
     const balanceTotalText = balanceTotal.innerText;
     const previousBalanceTotal = parseFloat(balanceTotalText);
     balanceTotal.innerText = previousBalanceTotal - withdrawTotalAmount; */
     updateBalance(withdrawTotalAmount, false);
     // clear input field
     // withdrawInput.value= '';
    })
 
 