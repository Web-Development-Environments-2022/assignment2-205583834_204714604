function login(){
    let username=$("#loginusername").val();
    let pass=$("#loginpsw").val();
    if(map.get(username)==pass){
        replace("settings");
        
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