function GetScore(team) {
    $.ajax({
        method: 'GET',
        url: 'team-scores.json',
        success: function(data){
            var jqScore = $('#score')
                .removeClass('error');

            if (data[team]) {
                jqScore
                    .html('Score of ' + team + ' is ' + data[team] + '.');
            } else {
                jqScore
                    .html('Data is not available.')
                    .addClass('error');
            }
        },
        // This is useful in capturing HTTP errors. For example, change the
        // URL to a file that does not exist (team-scores.json). The server
        // will error out with a 404 code and trigger this handler.
        error: function() {
            $('#score')
                .html('Unexpected error. Please try again later.')
                .addClass('error');
        },
    });
}

$(document).ready(function() {
    $('#refresh-india').on('click', function () {
        GetScore('India');
    });
    $('#refresh-south-africa').on('click', function () {
        GetScore('South Africa');
    });
})
