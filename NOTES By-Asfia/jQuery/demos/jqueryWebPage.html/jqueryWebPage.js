$(document).ready(function(){

    $('div').hide();
   // $('div#myid').addClass('mybutton')
   // $('div#myid').appendTo('<p>appened Welcome</p>');
    //$('div#myid').click(()=>{console.log('Clicked');
   // $('div#myid').css('font-size','20px')})
    // var divWithId=$('div#myid')
    // console.log(divWithId);
    // var twoClasses=$('.even.odd');
    // console.log(twoClasses);
    $('button').click(()=>  $('div').toggle());
    $('div').click(()=>$('div').css('color','purple')) 

    
})