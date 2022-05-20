
var upButtonName;
var downButtonName;
var leftButtonName;
var rightButtonName;
var upButtonNumber;
var downButtonNumber;
var leftButtonNumber;
var rightButtonNumber;
var time;
var color5;
var color15;
var color25;
var ballNumber;
var monsterNumber;
var isSettingsSaved=false;

var color5choice=false;
var color15choice=false;
var color25choice=false;



function setSettings(){

    ballNumber=Number($("#ballnuminput").val());
    monsterNumber=Number($("#monsternuminput").val());
    time=Number($("#gametimeinput").val());
    isSettingsSaved=true;
    if (!color5choice || !color15choice ||!color25choice ||ballNumber==0 || monsterNumber==0 || time==undefined){
        alert("please fill all the details");
        resetSettings()
    }
    else if (ballNumber>90 || ballNumber<50){
        alert("please enter valid balls number")
        resetSettings()
    }
    else if (monsterNumber>4 || monsterNumber<1){
        alert("please enter valid monsters number")
        resetSettings()
    }
    else{
        replace("game");
        setupGame();
        resetSettings()

    }

}

function resetSettings(){
    ballNumber=Number($("#ballnuminput").val(""));
    monsterNumber=Number($("#monsternuminput").val(""));
    time=Number($("#gametimeinput").val(""));
    document.getElementById("france_flag_5").style.border="";
    document.getElementById("brazil_flag_5").style.border="";
    document.getElementById("india_flag_5").style.border="";
    document.getElementById("italy_flag_5").style.border="";
    document.getElementById("usa_flag_5").style.border="";
    
    document.getElementById("france_flag_15").style.border="";
    document.getElementById("brazil_flag_15").style.border="";
    document.getElementById("india_flag_15").style.border="";
    document.getElementById("italy_flag_15").style.border="";
    document.getElementById("usa_flag_15").style.border="";
    
    document.getElementById("france_flag_25").style.border="";
    document.getElementById("brazil_flag_25").style.border="";
    document.getElementById("india_flag_25").style.border="";
    document.getElementById("italy_flag_25").style.border="";
    document.getElementById("usa_flag_25").style.border="";


}

function setcolorchoice(points,country){
    id=country+"_flag_"+points;
    if( document.getElementById(id).style.border==""){
        document.getElementById(id).style.border = "1px solid";
    }
    else{
        document.getElementById(id).style.border = "";
    }
    if (points=='5'){
        color5=new Image();
        color5choice=true;
        if(country=='france'){
            color5.src="Images/flags/france_flag.png";
        }
        if(country=='india'){
            color5.src="Images/flags/india_flag.png";
        }
        if(country=='italy'){
            color5.src="Images/flags/italy_flag.png";
        }
        if(country=='usa'){
            color5.src="Images/flags/usa_flag.png";
        }
        if(country=='brazil'){
            color5.src="Images/flags/brazil_flag.png";
        }
    }

    if (points=='15'){
        color15=new Image();
        color15choice=true;
        if(country=='france'){
            color15.src="Images/flags/france_flag.png";
        }
        if(country=='india'){
            color15.src="Images/flags/india_flag.png";
        }
        if(country=='italy'){
            color15.src="Images/flags/italy_flag.png";
        }
        if(country=='usa'){
            color15.src="Images/flags/usa_flag.png";
        }
        if(country=='brazil'){
            color15.src="Images/flags/brazil_flag.png";
        }
    }

    if (points=='25'){
        color25=new Image();
        color25choice=true;
        if(country=='france'){
            color25.src="Images/flags/france_flag.png";
        }
        if(country=='india'){
            color25.src="Images/flags/india_flag.png";
        }
        if(country=='italy'){
            color25.src="Images/flags/italy_flag.png";
        }
        if(country=='usa'){
            color25.src="Images/flags/usa_flag.png";
        }
        if(country=='brazil'){
            color25.src="Images/flags/brazil_flag.png";
        }
    }

}

function setUpBtn(key, event){
    console.log(key);
    console.log(event.code);
    $(key).val(event.code);
    upButtonNumber = event.which;
    upButtonName = event.code;
}

function setDownBtn(key,event){
    $(key).val(event.code);
    downButtonNumber = event.which;
    downButtonCode = event.code;
}

function setLeftBtn(key,event){
    $(key).val(event.code);
    leftButtonNumber = event.which;
    leftButtonCode = event.code;
}


function setRightBtn(key,event){
    $(key).val(event.code);
    rightButtonNumber = event.which;
    rightButtonCode = event.code;
}
