function update_game_username(){
    document.getElementById("gameusernamevalue").innerHTML=actual_user_name;
}

function updateGameTime(){
    document.getElementById("game_game_time").innerHTML=time;

}

function updateNumberofGhosts(){
    document.getElementById("game_ghosts_number").innerHTML=monsterNumber;

}

function updategame_flags(){
    document.getElementById("game5points").innerHTML="<img src="+color5.src+" style='height:30px;'>";
    document.getElementById("game15points").innerHTML="<img src="+color15.src+" style='height:30px;'>";
    document.getElementById("game25points").innerHTML="<img src="+color25.src+" style='height:30px;'>";
}