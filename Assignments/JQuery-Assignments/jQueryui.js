$(document).ready(function () {
    $( function() {
        var availableSkills = [
            "Laravel",
            "NSIS",
            "PyQt5",
            "Vue js",
            "Flask-Restful",
            "C",
            "C++",
            "Java",
            "JavaScript",
            "Perl",
            "PHP",
            "Python",
            "Ruby",
            "Scala", 
        ];
        $( "#skillSet" ).autocomplete({
          source: availableSkills
        });
      });

    // searchable dropdown
    var city = ["Ahmedabad", "Surat", "Hyderabad", "Pune", "Anand", "Vadodara", "Junaghad", "Kurnool"];
        $("#city").select2({
            data: city
    });
    
    jQuery.validator.setDefaults({
        highlight: function (element, errorClass, validClass) {
            {
                $(element).closest('.form-group').removeClass('has-success has-feedback').addClass('has-error has-feedback');
                $(element).closest('.form-group').find('i.fa').remove();
                $(element).closest('.form-group').append('<i class="fa fa-exclamation fa-lg form-control-feedback"></i>');
            }
        },
        unhighlight: function (element, errorClass, validClass) {
           {
                $(element).closest('.form-group').removeClass('has-error has-feedback').addClass('has-success has-feedback');
                $(element).closest('.form-group').find('i.fa').remove();
                $(element).closest('.form-group').append('<i class="fa fa-check fa-lg form-control-feedback"></i>');
            }
        }
    });

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
    
});

// Show Password in confirm password
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

