function login(){
    let username=$("#loginusername").val();
    let pass=$("#loginpsw").val();
    if(map.get(username)==pass){
        alert("Succcesful Login");
        replace("settings");
        login_reset();
        
    }
    else{
        alert("Please Try Again")
    }


}

function login_reset(){
    $("#loginusername").val("");
    $("#loginpsw").val("");



}