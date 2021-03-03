$(document).ready(()=>{
$("button").click(()=>{
    $.ajax({
        url:"https://reqres.in/api/users",
        method:"POST",
        data: {
            "name": "morpheus",
            "job": "leader",
            },
        success:(x)=>{
            alert(x.name+" posted!!!!");
            console.log(x);
            
        },
        error: (x)=>{
            alert("Error!! "+ x)
        }
    });
});
});

// var button=$('button');
// console.log(button);

// button.click(()=>{
    ///console.log("Clicked...");
    $.ajax({
    url:"https://reqres.in/api/users/2",
    method:"GET",
    success:(x)=>{
        console.log("Data=>"+x);
        
        $("span#id1").append(x.data.first_name+ " "
        +x.data.last_name);
        $("span#id2").append(x.data.email);
        var img=x.data.avatar;
        var drawimg="<img src='"+img+ "'/>";
        $("div#img").append(drawimg)
    },
    error:(e)=>{
        alert("Error: "+e)
    },
    complete:()=>{
        alert("Call is completed");
    }


});