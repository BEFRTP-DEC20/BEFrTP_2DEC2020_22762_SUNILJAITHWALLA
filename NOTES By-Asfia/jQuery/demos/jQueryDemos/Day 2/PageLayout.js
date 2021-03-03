$('document').ready(()=>{

    var header=$('header');
    header.html("Cybage");
    header.css({'width':'100%',
    'height':'10%','border':'2px solid red',
    'text-align':'center'});
    var allSection=$('section');
    allSection.addClass('mySection').html("Section");
    var footer=$('footer');
    $('#main').width('50%').html("Main Section")
    footer.addClass('myFooter');
    footer.html("Legal Copyright @www.cybage.com")

    $('button').click(()=>{
        var header=$('header');
    header.toggle();
    });

    $('header').hover(()=>{
        var header=$('header');
        header.css('backgroundColor','cyan');
    })
})


