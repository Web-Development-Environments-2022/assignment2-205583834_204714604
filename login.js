function login(){
    let username=$("#loginusername").val();
    let pass=$("#loginpsw").val();
    if(map.get(username)==pass){
        replace("settings");
        actual_user_name=username;
        //updateUserName();
        
    }
    else{
        alert("Please Try Again")
    }
    loginform.reset();
}

// function login_reset(){
//     $("#loginusername").val("");
//     $("#loginpsw").val("");
// }