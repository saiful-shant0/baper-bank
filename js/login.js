document.getElementById('login-submit').addEventListener('click', function () {

    //get user email
    const emailfield = document.getElementById('user-email');
    const userEmail = emailfield.value;
    //get user pass

    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;


    if (userEmail == 'shanto@gmail.com' && userPassword == 'secret') {
        window.location.href = 'banking.html'
    }
})