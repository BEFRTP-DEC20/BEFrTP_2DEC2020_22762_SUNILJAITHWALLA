$("form[name='infoForm']").validate({
    rules:{
        username: "required",

        password: {
          required:true,
          minlength:8  
        },
        confirmPassword: {
            equalTo: "#pass_log_id"
        },
        email: {
            required: true,
            email: true
        },
        phoneNumber:{
            required: true,
            number: true,
            minlength: 10
        }
    },

    // Specify validation error messages
        messages: {

            firstname: "Please enter your firstname",
            lastname: "Please enter your lastname",

            password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 8 characters long"
            },
            confirmPassword: "Password doesn't Match",

            email: "Please enter a valid email address",

            phoneNumber :{
                minlength : "Please enter valid number"
            }
        },
});


$(document).on('click', '.toggle-password', function() {
    var input = $("#cnfPwd");
    
    // Native JS code for eve visibility
    let getData = document.getElementById("cnfPwd").value;
    if(getData == ""){
        $(this).toggleClass("fa-eye fa-eye-slash");
    }
    else{
        $(this).toggleClass("fa-eye fa-eye-slash");
    }
    
    input.attr('type') === 'password' ? input.attr('type','text') : input.attr('type','password')
});
