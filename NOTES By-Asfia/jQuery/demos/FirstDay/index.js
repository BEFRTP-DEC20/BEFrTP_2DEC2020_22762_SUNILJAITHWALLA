if(window.jQuery){
  $("document").ready(
()=>{
  var getallDivs=$('div');
  var getallDivsjQuery=$('getallDivs');

    // var getallDivs=document.getEle;
    // console.log(getallDivs);

    var getallDivswithid=$('#divid');
    console.log(getallDivswithid);
    

    // var getallDivswithClass=$('.myStyle');
    // console.log(getallDivswithClass);
    

    // var getallDivsAndClass=$('.myStyle.myHeader');
    // console.log(getallDivsAndClass);
    
    // var firstDiv=$('div:first');
    // console.log(firstDiv);

    // var lastDiv=$('div:last');
    // console.log(lastDiv);
    
    // var evenDiv=$('div:even');
    // console.log(evenDiv);

    // var withHref=$('[href]');
    // console.log(withHref);

    
    // var withHrefEqual=$('[href*="cybage"]');//contains
    // console.log(withHrefEqual);

    // var withHrefNotEqual=$('a[href!="cybage"]');//not equal to
    // console.log(withHrefNotEqual);

    // var find=$('div').find('p');//contains
    // console.log(find);

    // var children=$('div').children('p');//contains
    // console.log(children);


    
    // var li3rd=$('li').eq(2);
    // console.log(li3rd);

    // var li3rdget=$('li').get(2);
    // console.log(li3rdget);

    // var li3rdd=$('li:nth-child(3)');
    // console.log(li3rdd);

    var getHtml=$('#divid').html(); //get
    console.log(getHtml);
  //  $('div').html("<span>From jQuery-- </span>"); //set

  $('div').css({
    "background-color": "yellow",
    "font-weight": "bolder"
  }); //set
  var getColor=$('div').css('color'); //get
     console.log(getColor);

$('ul').addClass('myStyle').after("<li>New Item</li>");

    $('input').val("John"); //set
    var getVal=$('input').val(); //get
    console.log("Welocme "+getVal)

$('#divid').after("<span>Appended!!</span>")

}
);
}
else
  alert('Jquery unavaibale!!!')