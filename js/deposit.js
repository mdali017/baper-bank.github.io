// step-1 : Event handler added
document.getElementById('btn-deposit').addEventListener('click', function(){
    // console.log('deposit button clicked');

    // step-2 : get the deposit amount from the deposit input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    //  console.log(typeof(newDepositAmount));
    // console.log(depositAmount);

    // step-3 : get the current deposit total
            //    for non-input
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    // console.log(typeof(previousDepositTotal))
    const currentDepositTotal =  previousDepositTotal + newDepositAmount ;
    // console.log(depositTotal); 
    depositTotalElement.innerText = currentDepositTotal;

    // step-4 : clear input field
    depositField.value = "";


    // step-5 : Deposit Amount Calculate

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step-6 : calculate main balance
      const currentBalanceTotal = previousBalanceTotal + currentDepositTotal;
    //   set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;
       
    
})