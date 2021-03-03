document.getElementById('browser').innerHTML = navigator.appName;



    count();



    var i = 0;

    var min = 0;

    function count() {



        i += 1;

        if (i % 60 == 0) {

            min++;

            document.getElementById('min').innerHTML = '0' + min;

            i = 0;

        }

        if (i < 10)

            document.getElementById('sec').innerHTML = '0' + i;

        else

            document.getElementById('sec').innerHTML = i;



        setTimeout(

            "count()", 1000

        );

    }







    function validateInputs(id) {

        

        var val = document.getElementById(id).value;



        if(val == '') {

            document.getElementById(id).style.borderColor = 'red';

            console.log('val'+ val);

        }

        else {

            document.getElementById(id).style.borderColor = '';

        }

    }

    function validate(e) {

        e.preventDefault();

        var flag=0;

        var msg = 'Please enter: \n';

        var ins = document.querySelectorAll('.in');

        for( var i = 0; i < ins.length; i++) {

            if(ins[i].value == '') {

                ins[i].style.borderColor = 'red';

                flag++;

                msg += ins[i].getAttribute('name') + '\n';

                console.log(msg);

            }

        }

        var checkboxes = document.querySelectorAll('input:checked');

        if (checkboxes.length === 0) {

            alert('Please select at least one Hobbie.')

        }

        else {

            if(flag == 0) {

                console.log(ins.length+' '+flag);

                location.replace("success.html");

            }

            else {

                alert(msg);

            }

        }

        

    }





    function enableWriter(chkPassport) {

        var dvPassport = document.getElementById("write");

        dvPassport.style.display = chkPassport.checked ? "block" : "none";



    }
