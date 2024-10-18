// exercise 1

var form = document.forms["commentForm"]

let errorField = document.createElement("p")

form.appendChild(errorField)

function formValidator() {
    var email = document.forms["commentForm"]["email"];
    var comment = document.forms["commentForm"]["comment"];

    if (email.value.length < 6) {
        email.style.boxShadow = "0px 0px 5px red";
        errorField.innerHTML = "Email must be at least 6 characters long";
        return false;
    } else if (email.value.length > 16 ) {
        email.style.boxShadow = "0px 0px 5px red";
        errorField.innerHTML = "Email must not exceed 15 characters";
        return false;
    } else if (!email.value.includes("@")) {
        email.style.boxShadow = "0px 0px 5px red";
        errorField.innerHTML = "Email must include @";
        return false;
    }

    if (comment.value == "") {
        comment.style.boxShadow = "0px 0px 5px red";
        errorField.innerHTML = "Please provide a comment";
        return false;
    } else if (comment.value.length > 49) {
        comment.value = comment.value.slice(0, 50);
    }
}

// exercise 2

let theForm = document.querySelector('#theForm');
let costField = document.querySelector('#cost')
let submitButton = document.querySelector('#submit');

let discountMessage = document.createElement("p")

theForm.appendChild(discountMessage)

theForm.addEventListener("submit", subCostCalculator, false)

function subCostCalculator(event) {
    event.preventDefault();

    var subType = document.querySelector('#type').value;
    var years = document.querySelector('#years').value;

    let monthlyCost
    let totalCost

    if (subType == "basic") {
        monthlyCost = 10
    } else if (subType == "premium") {
        monthlyCost = 15
    } else if (subType == "gold") {
        monthlyCost = 20
    } else if (subType == "platinum") {
        monthlyCost = 25
    }

    totalCost = monthlyCost * years * 12

    if (years > 1) {
        discountMessage.innerHTML = "20% Discount!";
        totalCost = totalCost * 0.8
    }   else {
        discountMessage.innerHTML = "";
    }

    if (years > 4) {
        totalCost = totalCost - 5
        discountMessage.innerHTML = "20% Discount and 5€ discount for 5 years of service!";
    }

    costField.value = totalCost
}

// exercise 4

// copied from exersice 1 ---------
var form2 = document.forms["commentForm2"]
let errorField2 = document.createElement("p")
form2.appendChild(errorField2)

function formValidator2() { 
    var email = document.forms["commentForm2"]["email2"];
    var comment = document.forms["commentForm2"]["comment2"];

    if (email.value.length < 6) {
        email.style.boxShadow = "0px 0px 5px red";
        errorField.innerHTML = "Email must be at least 6 characters long";
        return false;
    } else if (email.value.length > 16 ) {
        email.style.boxShadow = "0px 0px 5px red";
        errorField.innerHTML = "Email must not exceed 15 characters";
        return false;
    } else if (!email.value.includes("@")) {
        email.style.boxShadow = "0px 0px 5px red";
        errorField.innerHTML = "Email must include @";
        return false;
    }

    if (comment.value == "") {
        comment.style.boxShadow = "0px 0px 5px red";
        errorField.innerHTML = "Please provide a comment";
        return false;
    } else if (comment.value.length > 49) {
        comment.value = comment.value.slice(0, 50);
    }
}
// ---------------------------------------

const contactVia = document.querySelector('#contactVia');
const phonenumberField = document.querySelector('#phonenumber')

phonenumberField.style.display = "none";

contactVia.addEventListener('change', generateForm)

function generateForm() {
    let contactPref = document.querySelector('#contactVia').value;
    
    if (contactPref == "phone" || contactPref == "sms") {
        phonenumberField.style.display = "";
    } else {
        phonenumberField.style.display = "none";
    }
}