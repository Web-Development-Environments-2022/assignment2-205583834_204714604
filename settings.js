
var upButtonName;
var downButtonName;
var leftButtonName;
var rightButtonName;

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
        return;
        // resetSettings()
    }
    else if (ballNumber>90 || ballNumber<50){
        alert("please enter valid balls number")
        return;
        // resetSettings()
    }
    else if (monsterNumber>4 || monsterNumber<1){
        alert("please enter valid monsters number")
        return;
        // resetSettings()
    }
    else{
        replace("game");
        // setupGame();
        Start();
        // resetSettings()

    }

}

function resetSettings(){
    document.getElementById('settingsform').reset();
    // settingsform.reset();
    ballNumber=Number($("#ballnuminput").val("50"));
    monsterNumber=Number($("#monsternuminput").val("1"));
    time=Number($("#gametimeinput").val("60"));
    document.getElementById("france_flag_5").style.border="none";
    document.getElementById("brazil_flag_5").style.border="none";
    document.getElementById("india_flag_5").style.border="none";
    document.getElementById("italy_flag_5").style.border="none";
    document.getElementById("usa_flag_5").style.border="none";
    
    document.getElementById("france_flag_15").style.border="none";
    document.getElementById("brazil_flag_15").style.border="none";
    document.getElementById("india_flag_15").style.border="none";
    document.getElementById("italy_flag_15").style.border="none";
    document.getElementById("usa_flag_15").style.border="none";
    
    document.getElementById("france_flag_25").style.border="none";
    document.getElementById("brazil_flag_25").style.border="none";
    document.getElementById("india_flag_25").style.border="none";
    document.getElementById("italy_flag_25").style.border="none";
    document.getElementById("usa_flag_25").style.border="none";


}

function setBorder(points,country){   
    //flags5
    let id=country+"_flag_"+points;
    if (id=="france_flag_5"){
        document.getElementById("france_flag_5").style.border = "1px solid";
        document.getElementById('brazil_flag_5').style.border = "none";
        document.getElementById('india_flag_5').style.border = "none";
        document.getElementById('italy_flag_5').style.border = "none";
        document.getElementById('usa_flag_5').style.border = "none";
    }

    if (id=="brazil_flag_5"){
        document.getElementById("brazil_flag_5").style.border = "1px solid";
        document.getElementById('france_flag_5').style.border = "none";
        document.getElementById('india_flag_5').style.border = "none";
        document.getElementById('italy_flag_5').style.border = "none";
        document.getElementById('usa_flag_5').style.border = "none";
    }

    if (id=="india_flag_5"){
        document.getElementById("india_flag_5").style.border = "1px solid";
        document.getElementById('france_flag_5').style.border = "none";
        document.getElementById('brazil_flag_5').style.border = "none";
        document.getElementById('italy_flag_5').style.border = "none";
        document.getElementById('usa_flag_5').style.border = "none";
    }

    if (id=="italy_flag_5"){
        document.getElementById("italy_flag_5").style.border = "1px solid";
        document.getElementById('france_flag_5').style.border = "none";
        document.getElementById('brazil_flag_5').style.border = "none";
        document.getElementById('india_flag_5').style.border = "none";
        document.getElementById('usa_flag_5').style.border = "none";
    }

    if (id=="usa_flag_5"){
        document.getElementById("usa_flag_5").style.border = "1px solid";
        document.getElementById('france_flag_5').style.border = "none";
        document.getElementById('brazil_flag_5').style.border = "none";
        document.getElementById('india_flag_5').style.border = "none";
        document.getElementById('italy_flag_5').style.border = "none";
    }


    //flags15
    if (id=="france_flag_15"){
        document.getElementById("france_flag_15").style.border = "1px solid";
        document.getElementById('brazil_flag_15').style.border = "none";
        document.getElementById('india_flag_15').style.border = "none";
        document.getElementById('italy_flag_15').style.border = "none";
        document.getElementById('usa_flag_15').style.border = "none";
    }

    if (id=="brazil_flag_15"){
        document.getElementById("brazil_flag_15").style.border = "1px solid";
        document.getElementById('france_flag_15').style.border = "none";
        document.getElementById('india_flag_15').style.border = "none";
        document.getElementById('italy_flag_15').style.border = "none";
        document.getElementById('usa_flag_15').style.border = "none";
    }

    if (id=="india_flag_15"){
        document.getElementById("india_flag_15").style.border = "1px solid";
        document.getElementById('france_flag_15').style.border = "none";
        document.getElementById('brazil_flag_15').style.border = "none";
        document.getElementById('italy_flag_15').style.border = "none";
        document.getElementById('usa_flag_15').style.border = "none";
    }

    if (id=="italy_flag_15"){
        document.getElementById("italy_flag_15").style.border = "1px solid";
        document.getElementById('france_flag_15').style.border = "none";
        document.getElementById('brazil_flag_15').style.border = "none";
        document.getElementById('india_flag_15').style.border = "none";
        document.getElementById('usa_flag_15').style.border = "none";
    }

    if (id=="usa_flag_15"){
        document.getElementById("usa_flag_15").style.border = "1px solid";
        document.getElementById('france_flag_15').style.border = "none";
        document.getElementById('brazil_flag_15').style.border = "none";
        document.getElementById('india_flag_15').style.border = "none";
        document.getElementById('italy_flag_15').style.border = "none";
    }


    //flags25
    if (id=="france_flag_25"){
        document.getElementById("france_flag_25").style.border = "1px solid";
        document.getElementById('brazil_flag_25').style.border = "none";
        document.getElementById('india_flag_25').style.border = "none";
        document.getElementById('italy_flag_25').style.border = "none";
        document.getElementById('usa_flag_25').style.border = "none";
    }

    if (id=="brazil_flag_25"){
        document.getElementById("brazil_flag_25").style.border = "1px solid";
        document.getElementById('france_flag_25').style.border = "none";
        document.getElementById('india_flag_25').style.border = "none";
        document.getElementById('italy_flag_25').style.border = "none";
        document.getElementById('usa_flag_25').style.border = "none";
    }

    if (id=="india_flag_25"){
        document.getElementById("india_flag_25").style.border = "1px solid";
        document.getElementById('france_flag_25').style.border = "none";
        document.getElementById('brazil_flag_25').style.border = "none";
        document.getElementById('italy_flag_25').style.border = "none";
        document.getElementById('usa_flag_25').style.border = "none";
    }

    if (id=="italy_flag_25"){
        document.getElementById("italy_flag_25").style.border = "1px solid";
        document.getElementById('france_flag_25').style.border = "none";
        document.getElementById('brazil_flag_25').style.border = "none";
        document.getElementById('india_flag_25').style.border = "none";
        document.getElementById('usa_flag_25').style.border = "none";
    }

    if (id=="usa_flag_25"){
        document.getElementById("usa_flag_25").style.border = "1px solid";
        document.getElementById('france_flag_25').style.border = "none";
        document.getElementById('brazil_flag_25').style.border = "none";
        document.getElementById('india_flag_25').style.border = "none";
        document.getElementById('italy_flag_25').style.border = "none";
    }







}

function setcolorchoice(points,country){
    setBorder(points,country);
    // id=country+"_flag_"+points;
    // if( document.getElementById(id).style.border==""){
    //     document.getElementById(id).style.border = "1px solid";
    // }
    // else{
    //     document.getElementById(id).style.border = "";
    // }
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


function setRandomSettings(){
    random_balls_number=getRandomInt(50,90);
    random_time=getRandomInt(60,600000);
    random_monsters =getRandomInt(1,4);
    $("#ballnuminput").val('random_balls_number');
    $("#monstersnum").val('random_monsters');


}


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}