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

window.addEventListener("load", setupGame, false);


function setupGame() {
    board = new Array();
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    foodImage = new Image();
    foodImage.src = "Images/flags/flag1.gif";
    pacmanImage = new Image();
    pacmanImage.src = "Images/pacman/pacman2.png";
    // ctx.drawImage(foodImage,0,0,30,30);
    // ctx.drawImage(foodImage,60,0,30,30);
    // ctx.drawImage(foodImage,120,0,30,30);
    // ctx.drawImage(foodImage,160,0,30,30);
    // ctx.drawImage(foodImage,200,0,30,30);
    // ctx.drawImage(foodImage,0,0,30,30);
    // ctx.drawImage(foodImage,0,0,30,30);
    interval = setInterval(changePosition, 250);
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

function setKeys(upKeyCode, downKeyCode, leftKeyCode, rightKeyCode) {
    upArrow = upKeyCode;
    downArrow = downKeyCode;
    leftArrow = leftKeyCode;
    rightArrow = rightKeyCode;
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
    lblScore.value = score;
    lblTime.value = time_elapsed;
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            if (board[i][j] == 2) { // Pacman
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

                ctx.drawImage(foodImage, 20, 20, 20, 20)

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