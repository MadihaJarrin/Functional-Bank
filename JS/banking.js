// console.log('banking js added');
document.getElementById('deposit-button').addEventListener('click', function () {
    // console.log(' deposit button clicked');
    const depositeInput = document.getElementById('deposit-input');

    const depositAmountText = depositeInput.value;
    const depoAmount = parseFloat(depositAmountText);
    // console.log(depositAmount);

    // get current depo 
    const depositTotal = document.getElementById('deposit-total');

    const depositText = depositTotal.innerText;
    const previousDepoTotal = parseFloat(depositText);

    depositTotal.innerText = depoAmount + previousDepoTotal;
    // console.log(depositText);

    // Update  balance 
    const balanceTotal = document.getElementById('balance-total');
    const balanceText = balanceTotal.innerText;
    const previousBalance = parseFloat(balanceText);
    balanceTotal.innerText = previousBalance + depoAmount;

    //reset or clear input field
    depositeInput.value = '';
});

//handle withdraw 
document.getElementById('withdraw-button').addEventListener('click', function () {
    // console.log('clicked withdraw');
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    // console.log(withdrawText);
    const withDrawAmount = parseFloat(withdrawAmountText);

    //update Withdraw Total
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(withdrawTotalText);

    withdrawTotal.innerText = withDrawAmount + previousWithdrawTotal;

    //update balance after withdraw 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalance = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalance - withDrawAmount;

    //reset or clear input field                            
    withdrawInput.value = '';
});