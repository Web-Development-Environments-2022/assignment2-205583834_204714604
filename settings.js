var actual_user_name;

var upButtonName;
var downButtonName;
var leftButtonName;
var rightButtonName;

var isSettingsSaved = false;
var color5choice = false;
var color15choice = false;
var color25choice = false;



function setSettings() {

    ballNumber = Number($("#ballnuminput").val());
    monsterNumber = Number($("#monsternuminput").val());
    time = Number($("#gametimeinput").val());
    isSettingsSaved = true;
    if (!color5choice || !color15choice || !color25choice || ballNumber == 0 || monsterNumber == 0 || time == undefined) {
        alert("please fill all the details");
        return;
        // resetSettings()
    }
    else if (ballNumber > 90 || ballNumber < 50) {
        alert("please enter valid balls number")
        return;
        // resetSettings()
    }
    else if (monsterNumber > 4 || monsterNumber < 1) {
        alert("please enter valid monsters number")
        return;
        // resetSettings()
    }
    else {
        replace("game");
        // setupGame();
        Start();
        update_game_username();
        updateGameTime();
        updateNumberofGhosts();
        updategame_flags();
        // resetSettings()

    }

}

function resetSettings() {
    document.getElementById('settingsform').reset();
    // settingsform.reset();
    ballNumber = Number($("#ballnuminput").val("50"));
    monsterNumber = Number($("#monsternuminput").val("1"));
    time = Number($("#gametimeinput").val("60"));
    document.getElementById("france_flag_5").style.border = "none";
    document.getElementById("brazil_flag_5").style.border = "none";
    document.getElementById("india_flag_5").style.border = "none";
    document.getElementById("italy_flag_5").style.border = "none";
    document.getElementById("usa_flag_5").style.border = "none";

    document.getElementById("france_flag_15").style.border = "none";
    document.getElementById("brazil_flag_15").style.border = "none";
    document.getElementById("india_flag_15").style.border = "none";
    document.getElementById("italy_flag_15").style.border = "none";
    document.getElementById("usa_flag_15").style.border = "none";

    document.getElementById("france_flag_25").style.border = "none";
    document.getElementById("brazil_flag_25").style.border = "none";
    document.getElementById("india_flag_25").style.border = "none";
    document.getElementById("italy_flag_25").style.border = "none";
    document.getElementById("usa_flag_25").style.border = "none";


}

function setBorder(points, country) {
    //flags5
    let id = country + "_flag_" + points;
    if (id == "france_flag_5") {
        document.getElementById("france_flag_5").style.border = "1px solid";
        document.getElementById('brazil_flag_5').style.border = "none";
        document.getElementById('india_flag_5').style.border = "none";
        document.getElementById('italy_flag_5').style.border = "none";
        document.getElementById('usa_flag_5').style.border = "none";
    }

    if (id == "brazil_flag_5") {
        document.getElementById("brazil_flag_5").style.border = "1px solid";
        document.getElementById('france_flag_5').style.border = "none";
        document.getElementById('india_flag_5').style.border = "none";
        document.getElementById('italy_flag_5').style.border = "none";
        document.getElementById('usa_flag_5').style.border = "none";
    }

    if (id == "india_flag_5") {
        document.getElementById("india_flag_5").style.border = "1px solid";
        document.getElementById('france_flag_5').style.border = "none";
        document.getElementById('brazil_flag_5').style.border = "none";
        document.getElementById('italy_flag_5').style.border = "none";
        document.getElementById('usa_flag_5').style.border = "none";
    }

    if (id == "italy_flag_5") {
        document.getElementById("italy_flag_5").style.border = "1px solid";
        document.getElementById('france_flag_5').style.border = "none";
        document.getElementById('brazil_flag_5').style.border = "none";
        document.getElementById('india_flag_5').style.border = "none";
        document.getElementById('usa_flag_5').style.border = "none";
    }

    if (id == "usa_flag_5") {
        document.getElementById("usa_flag_5").style.border = "1px solid";
        document.getElementById('france_flag_5').style.border = "none";
        document.getElementById('brazil_flag_5').style.border = "none";
        document.getElementById('india_flag_5').style.border = "none";
        document.getElementById('italy_flag_5').style.border = "none";
    }


    //flags15
    if (id == "france_flag_15") {
        document.getElementById("france_flag_15").style.border = "1px solid";
        document.getElementById('brazil_flag_15').style.border = "none";
        document.getElementById('india_flag_15').style.border = "none";
        document.getElementById('italy_flag_15').style.border = "none";
        document.getElementById('usa_flag_15').style.border = "none";
    }

    if (id == "brazil_flag_15") {
        document.getElementById("brazil_flag_15").style.border = "1px solid";
        document.getElementById('france_flag_15').style.border = "none";
        document.getElementById('india_flag_15').style.border = "none";
        document.getElementById('italy_flag_15').style.border = "none";
        document.getElementById('usa_flag_15').style.border = "none";
    }

    if (id == "india_flag_15") {
        document.getElementById("india_flag_15").style.border = "1px solid";
        document.getElementById('france_flag_15').style.border = "none";
        document.getElementById('brazil_flag_15').style.border = "none";
        document.getElementById('italy_flag_15').style.border = "none";
        document.getElementById('usa_flag_15').style.border = "none";
    }

    if (id == "italy_flag_15") {
        document.getElementById("italy_flag_15").style.border = "1px solid";
        document.getElementById('france_flag_15').style.border = "none";
        document.getElementById('brazil_flag_15').style.border = "none";
        document.getElementById('india_flag_15').style.border = "none";
        document.getElementById('usa_flag_15').style.border = "none";
    }

    if (id == "usa_flag_15") {
        document.getElementById("usa_flag_15").style.border = "1px solid";
        document.getElementById('france_flag_15').style.border = "none";
        document.getElementById('brazil_flag_15').style.border = "none";
        document.getElementById('india_flag_15').style.border = "none";
        document.getElementById('italy_flag_15').style.border = "none";
    }


    //flags25
    if (id == "france_flag_25") {
        document.getElementById("france_flag_25").style.border = "1px solid";
        document.getElementById('brazil_flag_25').style.border = "none";
        document.getElementById('india_flag_25').style.border = "none";
        document.getElementById('italy_flag_25').style.border = "none";
        document.getElementById('usa_flag_25').style.border = "none";
    }

    if (id == "brazil_flag_25") {
        document.getElementById("brazil_flag_25").style.border = "1px solid";
        document.getElementById('france_flag_25').style.border = "none";
        document.getElementById('india_flag_25').style.border = "none";
        document.getElementById('italy_flag_25').style.border = "none";
        document.getElementById('usa_flag_25').style.border = "none";
    }

    if (id == "india_flag_25") {
        document.getElementById("india_flag_25").style.border = "1px solid";
        document.getElementById('france_flag_25').style.border = "none";
        document.getElementById('brazil_flag_25').style.border = "none";
        document.getElementById('italy_flag_25').style.border = "none";
        document.getElementById('usa_flag_25').style.border = "none";
    }

    if (id == "italy_flag_25") {
        document.getElementById("italy_flag_25").style.border = "1px solid";
        document.getElementById('france_flag_25').style.border = "none";
        document.getElementById('brazil_flag_25').style.border = "none";
        document.getElementById('india_flag_25').style.border = "none";
        document.getElementById('usa_flag_25').style.border = "none";
    }

    if (id == "usa_flag_25") {
        document.getElementById("usa_flag_25").style.border = "1px solid";
        document.getElementById('france_flag_25').style.border = "none";
        document.getElementById('brazil_flag_25').style.border = "none";
        document.getElementById('india_flag_25').style.border = "none";
        document.getElementById('italy_flag_25').style.border = "none";
    }







}

function setcolorchoice(points, country) {
    setBorder(points, country);
    // id=country+"_flag_"+points;
    // if( document.getElementById(id).style.border==""){
    //     document.getElementById(id).style.border = "1px solid";
    // }
    // else{
    //     document.getElementById(id).style.border = "";
    // }
    if (points == '5') {
        color5 = new Image();
        color5choice = true;
        if (country == 'france') {
            color5.src = "Images/flags/france_flag.png";
        }
        if (country == 'india') {
            color5.src = "Images/flags/india_flag.png";
        }
        if (country == 'italy') {
            color5.src = "Images/flags/italy_flag.png";
        }
        if (country == 'usa') {
            color5.src = "Images/flags/usa_flag.png";
        }
        if (country == 'brazil') {
            color5.src = "Images/flags/brazil_flag.png";
        }
    }

    if (points == '15') {
        color15 = new Image();
        color15choice = true;
        if (country == 'france') {
            color15.src = "Images/flags/france_flag.png";
        }
        if (country == 'india') {
            color15.src = "Images/flags/india_flag.png";
        }
        if (country == 'italy') {
            color15.src = "Images/flags/italy_flag.png";
        }
        if (country == 'usa') {
            color15.src = "Images/flags/usa_flag.png";
        }
        if (country == 'brazil') {
            color15.src = "Images/flags/brazil_flag.png";
        }
    }

    if (points == '25') {
        color25 = new Image();
        color25choice = true;
        if (country == 'france') {
            color25.src = "Images/flags/france_flag.png";
        }
        if (country == 'india') {
            color25.src = "Images/flags/india_flag.png";
        }
        if (country == 'italy') {
            color25.src = "Images/flags/italy_flag.png";
        }
        if (country == 'usa') {
            color25.src = "Images/flags/usa_flag.png";
        }
        if (country == 'brazil') {
            color25.src = "Images/flags/brazil_flag.png";
        }
    }

}

function setUpBtn(key, event) {
    $(key).val(event.code);
    upButtonNumber = event.which;
    upButtonName = event.code;
}

function setDownBtn(key, event) {
    $(key).val(event.code);
    downButtonNumber = event.which;
    downButtonName = event.code;
}

function setLeftBtn(key, event) {
    $(key).val(event.code);
    leftButtonNumber = event.which;
    leftButtonName = event.code;
}


function setRightBtn(key, event) {
    $(key).val(event.code);
    rightButtonNumber = event.which;
    rightButtonName = event.code;
}


function setRandomSettings() {
    random_balls_number = getRandomInt(50, 90);
    random_time = getRandomInt(60, 600000);
    random_monsters = getRandomInt(1, 4);
    $("#ballnuminput").val(random_balls_number);
    $("#monsternuminput").val(random_monsters);
    $("#gametimeinput").val(random_time);


    rand_number_5 = Math.floor(Math.random() * 5);
    rand_number_15 = Math.floor(Math.random() * 5);
    rand_number_25 = Math.floor(Math.random() * 5);

    if (rand_number_5 == 0) {
        setBorder(5, "france");
        setcolorchoice(5, "france");
    }
    if (rand_number_5 == 1) {
        setBorder(5, "brazil");
        setcolorchoice(5, "brazil");
    }
    if (rand_number_5 == 2) {
        setBorder(5, "india");
        setcolorchoice(5, "india");

    }
    if (rand_number_5 == 3) {
        setBorder(5, "italy");
        setcolorchoice(5, "italy");

    }
    if (rand_number_5 == 4) {
        setBorder(5, "usa");
        setcolorchoice(5, "usa");

    }

    if (rand_number_15 == 0) {
        setBorder(15, "france");
        setcolorchoice(15, "france");

    }
    if (rand_number_15 == 1) {
        setBorder(15, "brazil");
        setcolorchoice(15, "brazil");

    }
    if (rand_number_15 == 2) {
        setBorder(15, "india");
        setcolorchoice(15, "india");

    }
    if (rand_number_15 == 3) {
        setBorder(15, "italy");
        setcolorchoice(15, "italy");

    }
    if (rand_number_15 == 4) {
        setBorder(15, "usa");
        setcolorchoice(15, "usa");

    }

    if (rand_number_25 == 0) {
        setBorder(25, "france");
        setcolorchoice(25, "france");

    }
    if (rand_number_25 == 1) {
        setBorder(25, "brazil");
        setcolorchoice(25, "brazil");

    }
    if (rand_number_25 == 2) {
        setBorder(25, "india");
        setcolorchoice(25, "india");

    }
    if (rand_number_25 == 3) {
        setBorder(25, "italy");
        setcolorchoice(25, "italy");

    }
    if (rand_number_25 == 4) {
        setBorder(25, "usa");
        setcolorchoice(25, "usa");

    }


}


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}