$('document').ready(function(){
    function f(){
        var data=$('form').serializeArray();
        console.log(data[0].value)
        $('p').append('<h1>----Personal Data--- <br></h1>');
       $.each(data,function(k,v){
           $('p').append(" "+v.value+"<br>");
        })
       $('p').addClass('para');
     }
    $('button').click(f);
   
});
