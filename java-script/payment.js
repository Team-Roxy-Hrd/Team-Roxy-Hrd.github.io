function validateBothForms() {
    var isPaymentFormValid = validateForm('paymentForm');
    var isCheckoutFormValid = validateForm('checkoutForm');

    if (isPaymentFormValid && isCheckoutFormValid) {
        alert("All fields are valid. Submitting...");
    } else {
        alert("Please fill out all fields in both forms");
    }
}

function validateForm(formName) {
    var form = document.forms[formName];
    var fullName = form["full_name"].value;
    var email = form["email"].value;
    var address = form["address"].value;
    var city = form["city"].value;
    var state = form["state"].value;
    var zipCode = form["zip_code"].value;

    if (fullName == "" || email == "" || address == "" || city == "" || state == "Choose State.." || zipCode == "") {
        alert("Please fill out all fields in " + formName);
        return false;
    }
    else {
        alert("All fields are valid. Submitting...")
    }

    return true;
} 
