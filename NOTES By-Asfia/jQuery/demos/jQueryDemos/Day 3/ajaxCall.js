$('document').ready(()=>{
    $.ajax({
        url:'https://jsonplaceholder.typicode.com/users',
        method:'GET',
        success: (data)=>{
            console.log(data);

            $.each(data,(x,v)=>{
                $('div').append("<br>").append(v.name);
            })
            
        },
        error:()=>{alert("Some netwrok issue")},
    });

    // var newUser={username:'John'}

    // $.ajax({
    //     url:'https://jsonplaceholder.typicode.com/users',
    //     method:'POST',
    //     data:newUser,
    //     success: (data)=>{
    //         console.log(data);
    //         alert("User: "+data.username+" added!!!")
    //     },
    //     error:()=>{alert("Some netwrok issue")},
    // });

       
    })