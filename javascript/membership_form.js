$(document).ready(function () {

    var lastnameError = true,
        firstnameError = true,
        birthdateError = true,
        emailError = true;

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
                lastnameError = true;
            } else {
                setSuccessClass($(this));
                console.log($(this).val())
                console.log(Number.isInteger($(this).val()))
                emailError = false;
            }
        }
    });



// Form submit
    $('form.signup-form').submit(function (event) {
        event.preventDefault();

        if (firstnameError == true || emailError == true || lastnameError == true) {
            $('.firstname, .email, .lastname').blur();
        } else {
            $('.signup, .login').addClass('switched');

            setTimeout(function () { $('.signup, .login').hide(); }, 700);
            setTimeout(function () { $('.brand').addClass('active'); }, 300);
            setTimeout(function () { $('.heading').addClass('active'); }, 600);
            setTimeout(function () { $('.form').hide(); }, 700);
        }
    });


    function setSuccessClass(e) {
        e.siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
        e.parent('.form-group').addClass('hasSuccess');
    }

// Set Error Class
    function setErrorClass(e, f) {
        e.siblings('span.error').text(f).fadeIn().parent('.form-group').addClass('hasError');
        e.parent('.form-group').removeClass('hasSuccess');
    }

});