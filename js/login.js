// step-1 : add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    
    // step-2 : get the email address inside the email input field
    // always remember to use .value to get text form an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // console.log(email);

    // step-3 : Get Password
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    // console.log(email,password);

    // DANGER : DO NOT VERIFY EMAIL PASSWORD ON THE CLIENT SIDE

    // step-4 : verify email and password
    if(email === 'sontan@baap.com' && password === 'secret'){
        
        window.location.href = 'bank.html'
    }else{
        // console.log('invalid');
        alert('toke ami teijjo sontan gonona korlam , tui password vole gasis');
    }
})