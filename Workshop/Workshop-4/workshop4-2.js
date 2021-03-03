function toggler(e) 
{
    if( e.innerHTML == 'Show' ) 
    {
        e.innerHTML = 'Hide'
        document.getElementById('password').type="text";
    } 
    else 
    {
        e.innerHTML = 'Show'
        document.getElementById('password').type="password";
    }
}