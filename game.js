var canvas;
var ctx;
var foodImage;
var pacmanImage;
var upArrow;
var downArrow;
var leftArrow;
var rightArrow;
var wallImage;
var board;
var shape = new Object();
keysDown = {};

addEventListener("keydown", function (e) { keysDown[e.keyCode] = true; }, false);
addEventListener("keyup", function (e) { delete keysDown[e.keyCode]; }, false);

//window.addEventListener("load", setupGame, false);


function setupGame() {
    board=initboard();
    canvas = document.getElementById("canvas");
    canvas.width=canvas.width;
    ctx = canvas.getContext("2d");
    pacmanImage = new Image();
    pacmanImage.src = "Images/pacman/pacman2.png";
    draw_balls();
    
    draw_pacman();
    // ctx.drawImage(foodImage,200,0,30,30);
    // ctx.drawImage(foodImage,0,0,30,30);
    // ctx.drawImage(foodImage,0,0,30,30);
    //interval = setInterval(changePosition, 250);
}

function initboard(){
    board=new Array(20);
    for (let i=0;i<20;i++){
        let inner_array=new Array();
        for (let j=0;j<20;j++){
            inner_array[j]=0;
        }
        board[i]=inner_array;
    }
    return board;

}

function draw_balls(){
    //clearRect();
    var ball5num=Math.floor(0.6*ballNumber);
    var ball15num=Math.floor(0.3*ballNumber);
    var ball25num=Math.floor(0.1*ballNumber);
    let counter5=0;
    let counter15=0;
    let counter25=0;

    while (counter5<ball5num){
        rand_x=Math.floor(Math.random()*20);
        rand_y=Math.floor(Math.random()*20);
        if (board[rand_x][rand_y]==0){
            board[rand_x][rand_y]=1;
            ctx.drawImage(color5,rand_x*30,rand_y*30,25,25);
            counter5++;
        }
    }

    while (counter15<ball15num){
        rand_x=Math.floor(Math.random()*20);
        rand_y=Math.floor(Math.random()*20);
        if (board[rand_x][rand_y]==0){
            board[rand_x][rand_y]=1;
            ctx.drawImage(color15,rand_x*30,rand_y*30,25,25);
            counter15++;
        }
    }

    while (counter25<ball25num){
        rand_x=Math.floor(Math.random()*20);
        rand_y=Math.floor(Math.random()*20);
        if (board[rand_x][rand_y]==0){
            board[rand_x][rand_y]=1;
            ctx.drawImage(color25,rand_x*30,rand_y*30,25,25);
            counter25++;
        }
    }
}

function draw_pacman(){
    let find_position=false;
    let rand_x=Math.floor(Math.random()*20);
    let rand_y=Math.floor(Math.random()*20);
    while (!find_position){
        if(board[rand_x][rand_y]==0){
            board[rand_x][rand_y]=2;
            ctx.drawImage(pacmanImage,rand_x*30,rand_y*30,30,30);
            find_position=true;
        }
    }
}




function changePosition() {
    var direction = getKeyPressed();

    if (pacmanImage.src = "Images/pacman/pacman.png") {
        if (direction == "right" && shape.i < 9 && board[shape.i + 1][shape.j] != 4) {
            shape.i++;
            pacmanImage.src = "Images/pacman/pacman.png";
        }
        else if (direction == "left" && shape.i > 0 && board[shape.i - 1][shape.j] != 4) {
            shape.i--;
            pacmanImage.src = "Images/pacman/pacman2.png";
        }
        else if (direction == "up" && shape.j > 0 && board[shape.i][shape.j - 1] != 4) {
            shape.j--;
            pacmanImage.src = "Images/pacman/pacman6.png";
        }

        else if (direction == "down" && shape.j < 9 && board[shape.i][shape.j + 1] != 4) {
            shape.j++;
            pacmanImage.src = "Images/pacman/pacman3.png";
        }
    }

    if (pacmanImage.src = "Images/pacman/pacman2.png") {
        if (direction == "right" && shape.i < 9 && board[shape.i + 1][shape.j] != 4) {
            shape.i++;
            pacmanImage.src = "Images/pacman/pacman.png";
        }
        else if (direction == "left" && shape.i > 0 && board[shape.i - 1][shape.j] != 4) {
            shape.i--;
            pacmanImage.src = "Images/pacman/pacman2.png";
        }
        else if (direction == "up" && shape.j > 0 && board[shape.i][shape.j - 1] != 4) {
            shape.j--;
            pacmanImage.src = "Images/pacman/pacman4.png";
        }
        else if (direction == "down" && shape.j < 9 && board[shape.i][shape.j + 1] != 4) {
            shape.j++;
            pacmanImage.src = "Images/pacman/pacman5.png";
        }
    }

    if (pacmanImage.src = "Images/pacman/pacman3.png") {
        if (direction == "right" && shape.i < 9 && board[shape.i + 1][shape.j] != 4) {
            shape.i++;
            pacmanImage.src = "Images/pacman/pacman.png";
        }
        else if (direction == "left" && shape.i > 0 && board[shape.i - 1][shape.j] != 4) {
            shape.i--;
            pacmanImage.src = "Images/pacman/pacman2.png";
        }
        else if (direction == "up" && shape.j > 0 && board[shape.i][shape.j - 1] != 4) {
            shape.j--;
            pacmanImage.src = "Images/pacman/pacman6.png";
        }
        else if (direction == "down" && shape.j < 9 && board[shape.i][shape.j + 1] != 4) {
            shape.j++;
            pacmanImage.src = "Images/pacman/pacman3.png";
        }
    }

    if (pacmanImage.src = "Images/pacman/pacman4.png") {
        if (direction == "right" && shape.i < 9 && board[shape.i + 1][shape.j] != 4) {
            shape.i++;
            pacmanImage.src = "Images/pacman/pacman.png";
        }
        else if (direction == "left" && shape.i > 0 && board[shape.i - 1][shape.j] != 4) {
            shape.i--;
            pacmanImage.src = "Images/pacman/pacman2.png";
        }
        else if (direction == "up" && shape.j > 0 && board[shape.i][shape.j - 1] != 4) {
            shape.j--;
            pacmanImage.src = "Images/pacman/pacman4.png";
        }
        else if (direction == "down" && shape.j < 9 && board[shape.i][shape.j + 1] != 4) {
            shape.j++;
            pacmanImage.src = "Images/pacman/pacman3.png";
        }
    }


    if (pacmanImage.src = "Images/pacman/pacman5.png") {
        if (direction == "right" && shape.i < 9 && board[shape.i + 1][shape.j] != 4) {
            shape.i++;
            pacmanImage.src = "Images/pacman/pacman.png";
        }
        else if (direction == "left" && shape.i > 0 && board[shape.i - 1][shape.j] != 4) {
            shape.i--;
            pacmanImage.src = "Images/pacman/pacman2.png";
        }
        else if (direction == "up" && shape.j > 0 && board[shape.i][shape.j - 1] != 4) {
            shape.j--;
            pacmanImage.src = "Images/pacman/pacman6.png";
        }
        else if (direction == "down" && shape.j < 9 && board[shape.i][shape.j + 1] != 4) {
            shape.j++;
            pacmanImage.src = "Images/pacman/pacman5.png";
        }
    }


    if (pacmanImage.src = "Images/pacman/pacman6.png") {
        if (direction == "right" && shape.i < 9 && board[shape.i + 1][shape.j] != 4) {
            shape.i++;
            pacmanImage.src = "Images/pacman/pacman.png";
        }
        else if (direction == "left" && shape.i > 0 && board[shape.i - 1][shape.j] != 4) {
            shape.i--;
            pacmanImage.src = "Images/pacman/pacman2.png";
        }
        else if (direction == "up" && shape.j > 0 && board[shape.i][shape.j - 1] != 4) {
            shape.j--;
            pacmanImage.src = "Images/pacman/pacman6.png";
        }
        else if (direction == "down" && shape.j < 9 && board[shape.i][shape.j + 1] != 4) {
            shape.j++;
            pacmanImage.src = "Images/pacman/pacman5.png";
        }
    }
    Draw();
}

function getDirection(e) {
    e = e || window.Event;
    if (e.keyCode == '38') { return up; }
    if (e.keyCode == '37') { return left; }
    if (e.keyCode == '39') { return right; }
    if (e.keyCode == '40') { return down; }
}

function getKeyPressed() {
    var up = sessionStorage.getItem("up");
    var down = sessionStorage.getItem("down");
    var right = sessionStorage.getItem("right");
    var left = sessionStorage.getItem("left");
    if (keysDown[up]) { return "up"; }
    if (keysDown[down]) { return "down"; }
    if (keysDown[left]) { return "left"; }
    if (keysDown[right]) { return "right"; }
}

function Draw() {
    canvas.width = canvas.width; //clean board
    // ctx.rect(0, 0, canvasWidth, canvasHeight);
    ctx.fillStyle = "#b3e0ff";
    ctx.fill();
    lblScore.value = score;
    lblTime.value = time_elapsed;
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            if (board[i][j] == 2) { // Pacman
                x_rand = Math.floor(Math.random() * 10) * 60;
                y_rand = Math.floor(Math.random() * 10) * 40;
                ctx.clearRect(x_rand, y_rand, 50, 40);
                ctx.drawImage(pacmanImage, x_rand, y_rand, 50, 40);

            } else if (board[i][j] == 1) { // Food
                rand = Math.floor(Math.random() * 10)
                if ((rand) % 10 == 0) { foodImage.src = "Images/flags/flag1.gif"; }
                if (rand % 10 == 1) { foodImage.src = "Images/flags/flag2.gif"; }
                if (rand % 10 == 2) { foodImage.src = "Images/flags/flag3.gif"; }
                if (rand % 10 == 3) { foodImage.src = "Images/flags/flag4.gif"; }
                if (rand % 10 == 4) { foodImage.src = "Images/flags/flag5.gif"; }
                if (rand % 10 == 5) { foodImage.src = "Images/flags/flag6.gif"; }
                if (rand % 10 == 6) { foodImage.src = "Images/flags/flag7.gif"; }
                if (rand % 10 == 7) { foodImage.src = "Images/flags/flag8.gif"; }
                if (rand % 10 == 8) { foodImage.src = "Images/flags/flag9.gif"; }
                if (rand % 10 == 9) { foodImage.src = "Images/flags/flag10.gif"; }

                ctx.drawImage(foodImage, 20, 20, 20, 20);

            } else if (board[i][j] == 4) { // Wall
                ctx.beginPath();
                ctx.rect(center.x - canvasCellRadius, center.y - canvasCellRadius, canvasCell, canvasCell);
                ctx.fillStyle = "grey"; //color
                ctx.fill();
                // wallImage = new Image();
                // wallImage.src = "Images/wall.webp"
                // ctx.drawImage(wallImage, 20, 20, 20, 20)
            }
        }
    }
}