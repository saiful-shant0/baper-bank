
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
    /*  const balanceCurrent = balanceTotal.innerText; */
    const balanceCurrent = getCurrentBlance();
    if (isAdd == true) {
        balanceTotal.innerText = parseFloat(balanceCurrent) + parseFloat(Amount);

    }
    else {
        balanceTotal.innerText = parseFloat(balanceCurrent) - parseFloat(Amount);

    }

}
function getCurrentBlance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceCurrent = balanceTotal.innerText;
    return parseFloat(balanceCurrent);
}
document.getElementById('deposite-button').addEventListener('click', function () {

    const depositeAmount = getInputValu('deposite-input');
    if (depositeAmount > 0) {
        updateTotalField('deposite-total', depositeAmount);
        updateBlance(depositeAmount, true);
    }
});

document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawAmount = getInputValu('withdraw-input');
    const balanceCurrent = getCurrentBlance();
    if (withdrawAmount > 0 && withdrawAmount <= balanceCurrent) {
        updateTotalField('Withdraw-total', withdrawAmount);
        updateBlance(withdrawAmount, false);
    }
});

//handel deposite button
// document.getElementById('deposite-button').addEventListener('click', function () {
//get amount deposite
/*     const depositeInput = document.getElementById('deposite-input');
    const depositeAmount = depositeInput.value; */

// const depositeAmount = getInputValu('deposite-input');

/* const depositeCurrent = document.getElementById('deposite-total');
const depositeTotal = depositeCurrent.innerText;
const newDepositeTotal = parseFloat(depositeTotal) + parseFloat(depositeAmount);

depositeCurrent.innerText = newDepositeTotal; */
// const depositeTotal = updateTotalField('deposite-total', depositeAmount);


/// update account balance
/*   const balanceTotal = document.getElementById('balance-total');
  const balanceCurrent = balanceTotal.innerText;
  const newbalanceTotal = parseFloat(balanceCurrent) + parseFloat(depositeAmount);

  balanceTotal.innerText = newbalanceTotal; */
// updateBlance(depositeAmount, true);

// depositeInput.value = '';

// });

//withdraw
// document.getElementById('withdraw-button').addEventListener('click', function () {
    //get amount withdraw
/*  const withdrawInput = document.getElementById('withdraw-input');
 const withdrawAmount = withdrawInput.value; */
    // const withdrawAmount = getInputValu('withdraw-input');

/*  const withdrawCurrent = document.getElementById('Withdraw-total');

 const withdrawTotal = withdrawCurrent.innerText;
 const newwithdrawTotal = parseFloat(withdrawTotal) + parseFloat(withdrawAmount);
 console.log(newwithdrawTotal);
 withdrawCurrent.innerText = newwithdrawTotal; */

    // const withdrawTotal = updateTotalField('Withdraw-total', withdrawAmount);

    /// update account balance
/*  const balanceTotal = document.getElementById('balance-total');
 const balanceCurrent = balanceTotal.innerText;
 const newbalanceTotal = parseFloat(balanceCurrent) - parseFloat(withdrawAmount);
 balanceTotal.innerText = newbalanceTotal; */
    // updateBlance(withdrawAmount, false);

    //clear
    // withdrawInput.value = '';

// });
