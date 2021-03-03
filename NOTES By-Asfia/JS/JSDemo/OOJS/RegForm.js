$('document').ready(()=>{
    var user={
        fname:"",
        lname:"",
        email:"",
        address:"",
        contact:0,
        get fullName() {
            return this.fname + ' ' + this.lname;
        },
};
$('button').click(()=>{
user.fname=$('input').eq(0).val();
user.lname=$('input').eq(1).val();
$('div').append("Name: "+user.fullName)
});
});