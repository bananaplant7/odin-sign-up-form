let pass = document.getElementById('pass');
let confirmPass = document.getElementById('confirmPass');
let passMsg = document.getElementById('passMsg');


// if passwords match & not empty, change bckgrnd & msg color to green & change
// msg to 'matching'. else, keep same
function check() { 
    if (pass.value == confirmPass.value && pass.value != '') {
        passMsg.style.color = 'green';
        passMsg.textContent = 'matching';
        pass.style.border = '1px solid green';
        confirmPass.style.border = '1px solid green';
    }  else {
        passMsg.style.color = 'red';
        passMsg.textContent = '*Passwords do not match';
        pass.style.border = '1px solid red';
        confirmPass.style.border = '1px solid red';
    }
}

pass.addEventListener('keyup', function() {
    check();
})

confirmPass.addEventListener('keyup', function() {
    check();
})

