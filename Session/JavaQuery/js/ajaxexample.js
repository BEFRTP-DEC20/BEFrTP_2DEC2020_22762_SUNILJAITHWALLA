$.ajax({
   url:"https://reqres.in/api/users/",
      method:"GET",
    success:(x)=>
    {
        for(var i=0;i<=6;i++)
        {
        console.log("Data[i]=>"+x);
        $("span#id1").append(x.data[i].first_name+" " +x.data[i].last_name);
       
        
        $("span#id2").append(x.data[i].email);
        var img=x.data[i].avatar;
        var drawing="<img src='"+img+"'/>";
        $("div#img").append(drawing)

    }},
    error:(e)=>
    {alert("error"+e)},
    complete:()=>{alert("call is completed")}
    
});