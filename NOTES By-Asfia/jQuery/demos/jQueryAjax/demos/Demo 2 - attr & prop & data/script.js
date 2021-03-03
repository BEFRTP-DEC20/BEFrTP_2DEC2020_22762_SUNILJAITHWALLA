$(document).ready(function() {
    $('#check-state').on('click', function () {
        var jqCheckbox = $('#checkbox');

        $('#attribute-status')
            .html('Attribute checked is - ' + jqCheckbox.attr('checked'));
        $('#property-status')
            .html('Property checked is - ' + jqCheckbox.prop('checked'));
    });

    $('#save-percentage').on('click', function () {
        var jqScore = $('#score');

        $('#old-percentage')
            .html('Old percentage - ' + jqScore.data('percentage'));
        jqScore.data('percentage', jqScore.val() / 100);
        $('#current-percentage')
            .html('New percentage - ' + jqScore.data('percentage'));
    });
});
