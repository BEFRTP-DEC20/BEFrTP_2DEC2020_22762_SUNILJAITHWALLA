$(document).ready(() => {
    $('button').click( ()=> {
        $.getJSON('https://jsonplaceholder.typicode.com/photos',(data) => {

            var htmlText = data.map(function(o){
                return `
                        <div class="div-conatiner">
                            <img src="${o.thumbnailUrl}"></img><br> 
                            ${o.title}<br>
                            Price:${o.id}<br>
                            <button>Add to cart</button>
                        </div>
                    `;
            });
            $('body').append(htmlText);
        });
    });
});

 