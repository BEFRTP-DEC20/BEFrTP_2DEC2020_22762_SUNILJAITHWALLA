

$('document').ready(()=>{
    var x=document.getElementById('id1');
    if(!window.jQuery){
console.log("jQuery undefined");

    }
    else
    $('button').click(()=>{
        var divs=$('div');
        if(divs){
     divs.animate({
           fontSize:'30px'
       }).animate({borderWidth:"4"})
    }
    })
    // $('div').append("<span>Deleivering value scientifically</span>");
    // $('div').prepend("<span>Logo</span>");
    // $('div').after("<span>Deleivering value scientifically</span>");
    // $('div').before("<span>Deleivering value scientifically</span>");
}); 