$(document).ready(function () {

    var lastnameError = true,
        firstnameError = true,
        /* birthdateError = true,*/
        emailError = true;

    // Email Regex Pattern: Checks if mail could be possible
    const regex = new RegExp('.+@.+\..+');

    $('input').blur(function () {
        if ($(this).hasClass('firstname')) {
            if ($(this).val().length === 0) {
                setErrorClass($(this), "Name is needed");
                firstnameError = true;
            } else if ($(this).val().length > 0 && $(this).val().length < 6) {
                setErrorClass($(this), "At least 6 characters");
                firstnameError = true;
            } else {
                setSuccessClass($(this));
                console.log($(this).val())
                console.log(Number.isInteger($(this).val()))
                firstnameError = false;
            }
        }
        if ($(this).hasClass('lastname')) {
            if ($(this).val().length === 0) {
                setErrorClass($(this), "Name is needed");
                lastnameError = true;
            } else if ($(this).val().length > 0 && $(this).val().length < 6) {
                setErrorClass($(this), "At least 6 characters");
                lastnameError = true;
            } else {
                setSuccessClass($(this));
                console.log($(this).val())
                console.log(Number.isInteger($(this).val()))
                lastnameError = false;
            }
        }
        if ($(this).hasClass('email')) {
            if ($(this).val().length === 0) {
                setErrorClass($(this), "E-Mail is needed");
                emailError = true;
            }  else if (!regex.test($(this).val())) {
                setErrorClass($(this), "E-Mail is invalid");
                emailError = true;
            }  else {
                setSuccessClass($(this));
                console.log($(this).val())
                console.log(Number.isInteger($(this).val()))
                emailError = false;
            }
        }
    });



// Form submit
    $('form.membership-form').submit(function (event) {


        if (firstnameError == true || emailError == true || lastnameError == true) {
            $('.firstname, .email, .lastname').blur();
            /* !!!!! Entfernt, da sonst javascript notwendig!!!! schade...
            event.preventDefault();
             */
        }
    });


    function setSuccessClass(e) {
        e.siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
        e.parent('.form-group').addClass('hasSuccess');
    }

// Set Error Class
    function setErrorClass(e, f) {
        e.siblings('p.error').text(f).fadeIn().parent('.form-group').addClass('hasError');
        e.parent('.form-group').removeClass('hasSuccess');
    }

});