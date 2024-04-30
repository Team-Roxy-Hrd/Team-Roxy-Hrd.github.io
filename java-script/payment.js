function validateForm() {
    var fullName = document.forms["paymentForm"]["full_name"].value;
    var email = document.forms["paymentForm"]["email"].value;
    var address = document.forms["paymentForm"]["address"].value;
    var city = document.forms["paymentForm"]["city"].value;
    var state = document.forms["paymentForm"]["state"].value;
    var zipCode = document.forms["paymentForm"]["zip_code"].value;
    var cardNumber = document.forms["paymentForm"]["card_number"].value;
    var expMonth = document.forms["paymentForm"]["exp_month"].value;
    var expYear = document.forms["paymentForm"]["exp_year"].value;
    var cvv = document.forms["paymentForm"]["cvv"].value;

    if (fullName == "" || email == "" || address == "" || city == "" || state == "Choose State.." || zipCode == "" || cardNumber == "" || expMonth == "" || expYear == "Choose Year.." || cvv == "") {
        alert("Please fill out all fields");
        return false;
    }
    // Additional validation rules can be added here
}