function validateForm()
{
    var fn = document.getElementById("first-name");
    var ln = document.getElementById("last-name");
    var email = document.getElementById("email");
    var email2 = document.getElementById("email2");
    var phone = document.getElementById("phone");
    var fnError = document.getElementById("fn-error");
    var lnError = document.getElementById("ln-error");
    var emailError = document.getElementById("email-error");
    var email2Error = document.getElementById("email2-error");
    var phoneError = document.getElementById("phone-error");

    var nameReg  = /^[A-Za-z-]+$/;
    var emailReg = /\S+@\S+\.\S+/;
    var phoneReg = /^\d{10}$/; 

    var fnVal = fn.value.trim();
    var lnVal = ln.value.trim();
    var emailVal = email.value.trim();
    var email2Val = email2.value.trim();
    var phoneVal = phone.value.trim();
    var hasError = false;

    if(fnVal === "")
    {
        fnError.innerHTML = "Please enter your first name";
        hasError = true;
    }
    else if(!nameReg.test(fnVal))
    {
        fnError.innerHTML = "Invalid characters in first name";
        hasError = true;
    }
    else
    {
        fnError.innerHTML = "";
    }

    if(lnVal === "")
    {
        lnError.innerHTML = "Please enter your last name";
        hasError = true;
    }
    else if(!nameReg.test(lnVal))
    {
        lnError.innerHTML = "Invalid characters in last name";
        hasError = true;
    }
    else
    {
        lnError.innerHTML = "";
    }

    if(emailVal === "")
    {
        emailError.innerHTML = "Please enter your email";
        hasError = true;
    }
    else if(!emailReg.test(emailVal))
    {
        emailError.innerHTML = "Invalid email format";
        hasError = true;
    }
    else
    {
        emailError.innerHTML = "";
    }

    if(email2Val === "")
    {
        email2Error.innerHTML = "* Please confirm your email";
        hasError = true;
    }
    else if(emailVal !== email2Val)
    {
        email2Error.innerHTML = "Emails do not match";
        hasError = true;
    }
    else
    {
        email2Error.innerHTML = "";
    }

    if(phoneVal === "")
    {
        phoneError.innerHTML = "Please enter your phone number";
        hasError = true;
    }
    else if(!phoneReg.test(phoneVal))
    {
        phoneError.innerHTML = "Phone number must be 10 digits";
        hasError = true;
    }
    else
    {
        phoneError.innerHTML = "";
    }

    if(hasError)
    {
        return;
    }

    var dashPhone = phoneVal.substring(0,3) + "-" +
                    phoneVal.substring(3,6) + "-" +
                    phoneVal.substring(6);

    var person = {
        fname: fnVal,
        lname: lnVal,
        email: emailVal,
        phone: dashPhone
    };

    document.getElementById("info").innerHTML =
        "Name: " + person.fname + " " + person.lname + "<br>" +
        "Email: " + person.email + "<br>" +
        "Phone: " + person.phone;

    document.getElementById("form").style.display = "none";
    document.getElementById("confirmation").style.display = "block";
}