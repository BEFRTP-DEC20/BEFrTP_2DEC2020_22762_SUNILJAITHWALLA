$(document).ready(()=>
{

    var allDivs=$('div');
    allDivs.css({'background-color':'red','width':'20px'})//style.
   var getColor= allDivs.css('background-color');
   console.log(getColor)
    var divWithId=$('#id1')
    divWithId.html("Cybage!!!")///innerHTML
    console.log(divWithId)
    var sectionWithId=$('section#myarticle')
    console.log(sectionWithId)
    var divWithClass=$('.myStyle')
    console.log(divWithClass)
    var divWithTwoClass=$('.myStyle.myStyleNew')
    console.log(divWithTwoClass)
    var firstDiv=$('div:first')
    console.log(firstDiv)
    firstDiv.addClass('myStyleDiv');
    
    var withHref=$('[href]');
    console.log(withHref)
    var withHrefEqual=$('[href!="www.cybage.com"]');
    console.log(withHrefEqual)
    var everySecondDiv=$('div:nth-child(2n)')
    console.log(everySecondDiv)
//TRee traversal
    var findAncestors=$('section').find('span');
    console.log(findAncestors)
    var childrenAncestors=$('section').children();
    console.log(childrenAncestors)

//get call
var getDiv=$('div').get(1)

console.log(getDiv);

//eq call
var eqDiv=$('div').eq(1)

console.log(eqDiv);

var myVal=$('input').val();//value
//alert(myVal)


});