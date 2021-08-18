
function getInputValu(inputId) {
    const Input = document.getElementById(inputId);
    const Amount = Input.value;
    //clear
    Input.value = '';
    return Amount;
}








//handel deposite button
document.getElementById('deposite-button').addEventListener('click', function () {
    //get amount deposite
    // const depositeInput = document.getElementById('deposite-input');
    // const depositeAmount = depositeInput.value;

    const depositeAmount = getInputValu('deposite-input');

    const depositeCurrent = document.getElementById('deposite-total');
    const depositeTotal = depositeCurrent.innerText;
    const newDepositeTotal = parseFloat(depositeTotal) + parseFloat(depositeAmount);

    depositeCurrent.innerText = newDepositeTotal;
    /// update account balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceCurrent = balanceTotal.innerText;
    const newbalanceTotal = parseFloat(balanceCurrent) + parseFloat(depositeAmount);

    balanceTotal.innerText = newbalanceTotal;


    // depositeInput.value = '';

});

//withdraw
document.getElementById('withdraw-button').addEventListener('click', function () {
    //get amount withdraw
    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawAmount = withdrawInput.value;
    const withdrawAmount = getInputValu('withdraw-input');

    const withdrawCurrent = document.getElementById('Withdraw-total');

    const withdrawTotal = withdrawCurrent.innerText;
    const newwithdrawTotal = parseFloat(withdrawTotal) + parseFloat(withdrawAmount);
    console.log(newwithdrawTotal);
    withdrawCurrent.innerText = newwithdrawTotal;

    /// update account balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceCurrent = balanceTotal.innerText;
    const newbalanceTotal = parseFloat(balanceCurrent) - parseFloat(withdrawAmount);
    balanceTotal.innerText = newbalanceTotal;

    //clear
    // withdrawInput.value = '';

})
