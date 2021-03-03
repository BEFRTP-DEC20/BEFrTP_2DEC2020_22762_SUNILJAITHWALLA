$('document').ready(function(){
     $('#b1').click(function(){
           $('div').slideUp(1000);

        });

        $('#b2').click(function(){
            $('div').slideDown(1000);
 
         });

         $('#b3').click(function(){
            $('div').fadeIn(2000,()=>{
               alert("Fade In completed!!!")
            });
 
         });
         
         $('#b4').click(function(){
            $('div').fadeOut(2000);
 
         });
    })
    
;