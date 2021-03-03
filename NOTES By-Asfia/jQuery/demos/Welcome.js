if(!window.jQuery){

    console.log("Jquery file is unavailable!!!!");
    
}
else
{
    $('document').ready(()=>{
    var allDivs=$('div');
    var withId=$('div#myid');
    var withMyClass=$('.mystyle');
    var firstDiv=$('div:first');
    var twoClass=$('.mystyle.myfont');
    var evrySecondDiv=$('div:nth-child(2n)');
    var attr=$('a[href~="com"]');
    var divInP=$('div').children('p');
    var thirdLi=$('li').get(2);
    var thirdLieq=$('li').eq(2).addClass();
    var button=$('button');
    if(button.length){
    button.click(()=>{ 
    withId.before("<span>Applying changes via html()....</span>").css({'backgroundColor':"purple",'color':"white"});
    twoClass.addClass("mystyle1");
    $('li').eq(2).animate({fontSize:'20px'}).animate({borderWidth:10})
    });
}else{
    console.log("Button is not visible....");
    
}

   
    // var hobbies=["Swimming","Treking","Cooking"];
    // var each=$.each(hobbies,(x,val)=>{
    //     console.log(x+" => "+val);
    // });
    // console.log(each);
    
    // var map=$.map(hobbies,(x,val)=>{
    //     return val;
    // });
    // console.log(map);   
    



    //console.log(thirdLieq);
});
}