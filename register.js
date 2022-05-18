var map=new Map();
map.set('k','k');


function checkfields(){
    let username=$("username").val();
    let password=$("psw").val();
    let fullname=$('fullname').val();
    let email=$('email').val("");
    let date=$('date').val("");

    if (username==undefined){
        alert("User Name is a required field");
    }

    else if (password==undefined){
        alert("Password is a required field");
    }

    else if (fullname==undefined){
        alert("Full Name is a required field");
    }
    else if (email==undefined){
        alert("Email is a required field");
    }
    else if (date==undefined){
        alert("Date is a required field");
    }

    else if(pass.search(/\d/) == -1 ||  pass.search(/[a-zA-Z]/) == -1){
        alert("Password must contains both letters and digits");
    }

    //continue
}   




function signup(){
    var username=$("#username").val();
    var password=$("#psw").val();
    map.set(username,password);

}

function reset(){
    $("#username").val("");
    $("#psw").val("");
    $('email').val("");
    $('date').val("");
}