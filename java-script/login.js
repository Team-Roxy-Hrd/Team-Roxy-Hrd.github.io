document.getElementById("loginForm").addEventListener("submit", function(event) {
    var name = document.getElementById("loginUsername").value;
    var password = document.getElementById("loginPassword").value;
    var nameError = document.querySelector(".name_error");
    var passError = document.querySelector(".pass_error");
    var passLengthError = document.querySelector(".pass_length_error");
    var successMessage = document.querySelector(".success_message"); 
    var valid = true;

    if (name === "") {
        nameError.style.display = "block";
        valid = false;
    } else {
        nameError.style.display = "none";
    }

    if (password === "") {
        passError.style.display = "block";
        passLengthError.style.display = "none";
        valid = false;
    } else if (password.length < 3) {
        passError.style.display = "none";
        passLengthError.style.display = "block";
        valid = false;
    } else {
        passError.style.display = "none";
        passLengthError.style.display = "none";
    }

    if (valid) {
        event.preventDefault(); 
        var savedUsername = localStorage.getItem('username');
        var savedPassword = localStorage.getItem('password');

        if (name === savedUsername && password === savedPassword) {
            successMessage.style.display = "block"; 
            setTimeout(function() {
                window.location.href = "index.html";       
            }, 2000);
        }
    } else {
        event.preventDefault(); 
    }
});

var savedUsername = localStorage.getItem('username');
var savedPassword = localStorage.getItem('password');

if (savedUsername && savedPassword) {
    document.getElementById('loginUsername').value = savedUsername;
    document.getElementById('loginPassword').value = savedPassword;
}
