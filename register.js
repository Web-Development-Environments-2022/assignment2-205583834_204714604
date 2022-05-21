var map=new Map();
map.set('k','k');


function checkfields(){
    let username=$("#username").val();
    let password=$("#psw").val();
    let fullname=$('#fullname').val();
    let email=$('#email').val();
    let date=$('#date').val();

    if (username==""){
        alert("User Name is a required field");
        return false;
    }

    else if (password==""){
        alert("Password is a required field");
        return false;
    }

    else if (fullname==""){
        alert("Full Name is a required field");
        return false;
    }
    else if (email==""){
        alert("Email is a required field");
        return false;
    }
    else if (date==""){
        alert("Date is a required field");
        return false;

    }
    else if(password.search(/\d/) == -1 ||  password.search(/[a-zA-Z]/) == -1){
        alert("Password must contains both letters and digits");
        return false;
    }

    //continue
    else if(password.length<6){
        alert("Minimum password length should be at least 6 chacters");
        return false;
    }     

    else if(!EmailValidation(email)){
        alert("Email not valid");
        return false;
    }
    else if (fullname.search(/\d/) != -1){
        alert("Full Name must contains only letters.");
        return false;
        }
    

        // check userName and emails
    else if(map.has(username)){
        alert("User Name already exists");
        return false;
    }

    else{
        return true;
    }
}   




function signup(){
    var username=$("#username").val();
    var password=$("#psw").val();
    is_valid=checkfields();
    if(is_valid){
        map.set(username,password);
        alert("User Created");
        registerform.reset();
        replace("login");
    }

    else{
        registerform.reset();
    }


}

// function reset(){
//     $("#username").val("");
//     $("#psw").val("");
//     $("#fullName").val("");
//     $('#email').val("");
//     $('#date').val("");
// }

function EmailValidation(){
    let email=$('#email').val();
    let emailStruct = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    let bool=emailStruct.test(email);
    return bool;
}