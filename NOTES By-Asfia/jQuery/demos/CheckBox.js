$(document).ready(function(){
   $("input[type='button']").click(
       $('p'). append( $(':checked').map(function(){
        return $(this).val();
    }).get().join(','))
)
});