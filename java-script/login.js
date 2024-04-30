document.getElementById("registrationForm").addEventListener("submit", function(event) {
    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;
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
    } else if (password.length < 8) {
        passError.style.display = "none";
        passLengthError.style.display = "block";
        valid = false;
    } else {
        passError.style.display = "none";
        passLengthError.style.display = "none";
    }

    if (valid) {
        successMessage.style.display = "block"; 
        event.preventDefault(); 
    } else {
        event.preventDefault(); 
    }
});



