$(document).ready(function () {
 
 $('#retrieve-resources').click(function () {
 var displayResources = $('#display-resources');
 
 displayResources.text('Loading data from JSON source...');
 
 $.ajax({
 type: "GET",
 url: "resources.json",
 success: function(result)
 {
 console.log(result);
 var output="<table><thead><tr><th>Name</th><th>Provider</th><th>URL</th></thead><tbody>";
 for (var i in result)
 {
 output+="<tr><td>" + result[i].name + "</td><td>" + result[i].provider + "</td><td>" + result[i].url + "</td></tr>";
 }
 output+="</tbody></table>";
 
 displayResources.html(output);
 $("table").addClass("table");
 }
 });

 $.ajax({
     method:'POST',
     url: "resources.json",
     data:{
        "name": "You Don't know JS - Book Series",
        "provider": "Kyle Simpson",
        "url": "https://github.com/getify/You-Dont-Know-JS"
       },
 success: function(result){
     console.log(result);
     
 }}
 );
 
 });
});