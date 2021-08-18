
function getInputValu(inputId) {
    const Input = document.getElementById(inputId);
    const Amount = Input.value;
    //clear
    Input.value = '';
    return Amount;
}

function updateTotalField(totalFieldId, Amount) {
    const Current = document.getElementById(totalFieldId);
    const Total = Current.innerText;
    const newTotal = parseFloat(Total) + parseFloat(Amount);

    Current.innerText = newTotal;
}

function updateBlance(Amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    const balanceCurrent = balanceTotal.innerText;
    if (isAdd == true) {
        balanceTotal.innerText = parseFloat(balanceCurrent) + parseFloat(Amount);

    }
    else {
        balanceTotal.innerText = parseFloat(balanceCurrent) - parseFloat(Amount);

    }

}







//handel deposite button
document.getElementById('deposite-button').addEventListener('click', function () {
    //get amount deposite
    /*     const depositeInput = document.getElementById('deposite-input');
        const depositeAmount = depositeInput.value; */

    const depositeAmount = getInputValu('deposite-input');

    /* const depositeCurrent = document.getElementById('deposite-total');
    const depositeTotal = depositeCurrent.innerText;
    const newDepositeTotal = parseFloat(depositeTotal) + parseFloat(depositeAmount);

    depositeCurrent.innerText = newDepositeTotal; */
    const depositeTotal = updateTotalField('deposite-total', depositeAmount);


    /// update account balance
    /*   const balanceTotal = document.getElementById('balance-total');
      const balanceCurrent = balanceTotal.innerText;
      const newbalanceTotal = parseFloat(balanceCurrent) + parseFloat(depositeAmount);
  
      balanceTotal.innerText = newbalanceTotal; */
    updateBlance(depositeAmount, true);

    // depositeInput.value = '';

});

//withdraw
document.getElementById('withdraw-button').addEventListener('click', function () {
    //get amount withdraw
    /*  const withdrawInput = document.getElementById('withdraw-input');
     const withdrawAmount = withdrawInput.value; */
    const withdrawAmount = getInputValu('withdraw-input');

    /*  const withdrawCurrent = document.getElementById('Withdraw-total');
 
     const withdrawTotal = withdrawCurrent.innerText;
     const newwithdrawTotal = parseFloat(withdrawTotal) + parseFloat(withdrawAmount);
     console.log(newwithdrawTotal);
     withdrawCurrent.innerText = newwithdrawTotal; */

    const withdrawTotal = updateTotalField('Withdraw-total', withdrawAmount);

    /// update account balance
    /*  const balanceTotal = document.getElementById('balance-total');
     const balanceCurrent = balanceTotal.innerText;
     const newbalanceTotal = parseFloat(balanceCurrent) - parseFloat(withdrawAmount);
     balanceTotal.innerText = newbalanceTotal; */
    updateBlance(withdrawAmount, false);

    //clear
    // withdrawInput.value = '';

})
