var x = 2; 
function loginUser(){
    let usernameValue=$("#usernameLogin").val();
	let passwordValue=$("#pswLogin").val();
    let loginSection=document.getElementById("login");
    let firstTime=true;
    var beforeWrongDetsHtml;
    var afterWrongDetsHtml;
    if (firstTime){
        beforeWrongDetsHtml=document.getElementById("login").innerHTML;
        afterWrongDetsHtml=beforeWrongDetsHtml+'<br><h1 style="color:red";>wrong details</h1>';
        firstTime=false
    }
    for (let i = 0; i < users.length; i++) {
        let currUser=users[i];
        if (currUser.username==usernameValue){
            if(currUser.password==passwordValue){
                alert("moving to game")
                return //make replace to the game itself


            }
            else{
                loginSection.innerHTML+='<br><p style="color:red";>wrong details</p>';
                document.getElementById("usernameLogin").style.backgroundColor="red";
                document.getElementById("pswLogin").style.backgroundColor="red";                
            }
        }

      }
      loginSection.innerHTML=afterWrongDetsHtml
      document.getElementById("usernameLogin").style.backgroundColor="rgb(197, 76, 76)";
      document.getElementById("pswLogin").style.backgroundColor="rgb(197, 76, 76)";
      firstTime=false;
    }
