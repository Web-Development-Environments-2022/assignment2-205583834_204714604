function login(){
    let username=$("#loginusername").val();
    let pass=$("#loginpsw").val();
    if(map.get(username)==pass){
        replace("settings")
    }
    else{
        alert("Please Try Again")
    }
}