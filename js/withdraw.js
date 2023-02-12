document.getElementById('btn-withdraw').addEventListener('click', function(){
    // console.log("withdraw amount");

//   step-2 : get input tag
    const withdrawField = document.getElementById('withdraw-amount')
    const withdrawAmountString = withdrawField.value;
    const previousWithdrawAmount = parseFloat(withdrawAmountString);
    // console.log(typeof(previousWithdrawAmount));
    // console.log(withdrawAmount);

    // step-3 : get Withdraw Amount Box
    const withdrawBox = document.getElementById('withdraw-total');
    const withdrawTotalString = withdrawBox.innerText;
    const newWithdrawTotal = parseFloat(withdrawTotalString);

    //    step-4 : calculation 
      const withdrawTotal = previousWithdrawAmount + newWithdrawTotal;

    withdrawBox.innerText = withdrawTotal;

    

    // step-4  : clear input field
        withdrawField.value = '';



})