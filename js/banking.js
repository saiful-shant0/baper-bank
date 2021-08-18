
function getInputValu() {
    const depositeInput = document.getElementById('deposite-input');
    const depositeAmount = depositeInput.value;
    //clear
    depositeInput.value = '';
    return depositeAmount;
}








//handel deposite button
document.getElementById('deposite-button').addEventListener('click', function () {
    //get amount deposite
    const depositeAmount = getInputValu();

    const depositeCurrent = document.getElementById('deposite-total');
    const depositeTotal = depositeCurrent.innerText;
    const newDepositeTotal = parseFloat(depositeTotal) + parseFloat(depositeAmount);

    depositeCurrent.innerText = newDepositeTotal;
    /// update account balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceCurrent = balanceTotal.innerText;
    const newbalanceTotal = parseFloat(balanceCurrent) + parseFloat(depositeAmount);

    balanceTotal.innerText = newbalanceTotal;




});

//withdraw
document.getElementById('withdraw-button').addEventListener('click', function () {
    //get amount withdraw
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmount = withdrawInput.value;

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
    withdrawInput.value = '';

})
