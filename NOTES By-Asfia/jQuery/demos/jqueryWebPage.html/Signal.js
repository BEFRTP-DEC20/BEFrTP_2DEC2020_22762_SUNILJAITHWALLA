$('document').ready(() => {
    var count = 0;
    $('button').click(() => {
        if (count == 0) {
            $('#red').css("background-color", "red");
            $('#green').css("background-color", "black");
            $('#orange').css("background-color", "black");
            $('button').text('Green');
            count++;
        }
        else if (count == 1) {
            $('#green').css("background-color", "green");
            $('button').text('Orange');
            count++;
        }
        else { $('#orange').css("background-color", "orange");
        $('button').text('Red'); count = 0; }
    });
});