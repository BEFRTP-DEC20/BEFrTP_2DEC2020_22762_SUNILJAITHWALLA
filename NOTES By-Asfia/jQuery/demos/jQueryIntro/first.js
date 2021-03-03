 $(document).ready(function(){
              
                $('div#mydiv').addClass('mystyle');
                $('div#mydiv').click(myFunc)
                $('button').click(animation);
              $('div.myclass').prepend('<span>Welcome to append</span>') ;
              $('div.myclass').after('<span>Welcome to after</span>') ;
                var allevenDivs=$('div:even');
                var ahref=$('a[href^="https"]')
                var ahrefends=$('a[href$=".com"]')
                console.log(ahrefends);

                
            });

function myFunc(){
    $('div.myclass').toggle();
}

function animation(){
     $('p').animate({width: "100%"})
    .animate({fontSize: "40px"})
    .animate({borderWidth: 3});
}
