$('document').ready(()=> {
    var alldivs=$('div');
    console.log(alldivs);
    var divwithId=$('div#id1');
    console.log(divwithId);
    var divwithClass=$('.even.odd');
    console.log(divwithClass);
    var hrefGoogle=$('[href*=google]');
    console.log(hrefGoogle);
    var hrefStartWith=$('a[href^=http]');
    console.log(hrefStartWith);
    var finda=$('#id2').find('a[href]');
    console.log(finda);
    
    var childrena=$('#id2').children('a[href]');
    console.log(childrena);
    var getDiv=$('div').get(2);
    console.log(getDiv);
    $('button').click(()=>{
        $('.even.odd').css('color','purple');
        $('div#id1').toggle();
        $('div#id2').toggleClass('button');
        $('div.even').append("<span>Cybage</span>")
    });

});