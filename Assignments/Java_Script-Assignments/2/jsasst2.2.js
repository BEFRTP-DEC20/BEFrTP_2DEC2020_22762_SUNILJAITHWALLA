function calculate(principal,rate,year)
{
    var result;
    var principal=document.getElementById("principal").value;
    var rate=document.getElementById("rate").value;
    var year=document.getElementById("year").value;
    result=[principal*Math.pow((1+(rate/100)),year)]-principal;
    document.getElementById("principal").innerHTML =+principal;
    document.getElementById("rate").innerHTML = +rate;
    document.getElementById("year").innerHTML =+year;
    document.write(result);
}
