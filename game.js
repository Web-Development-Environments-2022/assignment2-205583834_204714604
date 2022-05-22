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
var pacman_x;
var pacman_y;
var temp;
var ghost1_x;
var ghost2_x;
// boardCellRadius = boardSize / 2;
// boardWidth = canvas.width;
// boardCell = boardWidth / boardSize;



keysDown = {};
addEventListener("keydown", function (e) { keysDown[e.keyCode] = true; }, false);
addEventListener("keyup", function (e) { keysDown[e.keyCode] = false; }, false);

function setupGame() {
    board = initboard();
    canvas = document.getElementById("canvas");
    canvas.width = canvas.width;
    ctx = canvas.getContext("2d");
    pacmanImage = new Image();
    pacmanImage.src = "Images/pacman/pacman2.png";
    draw_walls();
    draw_balls();
    draw_pacman();
    temp = ballNumber;



    // ctx.drawImage(foodImage,200,0,30,30);
    // ctx.drawImage(foodImage,0,0,30,30);
    // ctx.drawImage(foodImage,0,0,30,30);
    //interval = setInterval(changePosition, 250);
    //setInterval(changePosition2(),250)
    setInterval(changePosition, 250);
}

function initboard() {
    board = new Array(20);
    for (let i = 0; i < 20; i++) {
        let inner_array = new Array();
        for (let j = 0; j < 20; j++) {
            inner_array[j] = 0;
        }
        board[i] = inner_array;
    }
    return board;

}

function draw_balls() {
    //clearRect();
    var ball5num = Math.floor(0.6 * ballNumber);
    var ball15num = Math.floor(0.3 * ballNumber);
    var ball25num = Math.floor(0.1 * ballNumber);
    ball5num = ball5num + (ballNumber - ball15num - ball25num - ball5num);
    let counter5 = 0;
    let counter15 = 0;
    let counter25 = 0;

    while (counter5 < ball5num) {
        rand_x = Math.floor(Math.random() * 20);
        rand_y = Math.floor(Math.random() * 20);
        if (board[rand_x][rand_y] == 0) {
            board[rand_x][rand_y] = 1;
            ctx.drawImage(color5, rand_x * 30, rand_y * 30, 25, 25);
            counter5++;
        }
    }

    while (counter15 < ball15num) {
        rand_x = Math.floor(Math.random() * 20);
        rand_y = Math.floor(Math.random() * 20);
        if (board[rand_x][rand_y] == 0) {
            board[rand_x][rand_y] = 1;
            ctx.drawImage(color15, rand_x * 30, rand_y * 30, 25, 25);
            counter15++;
        }
    }

    while (counter25 < ball25num) {
        rand_x = Math.floor(Math.random() * 20);
        rand_y = Math.floor(Math.random() * 20);
        if (board[rand_x][rand_y] == 0) {
            board[rand_x][rand_y] = 1;
            ctx.drawImage(color25, rand_x * 30, rand_y * 30, 25, 25);
            counter25++;
        }
    }
}

function draw_pacman() {
    let find_position = false;
    let rand_x = Math.floor(Math.random() * 20);
    let rand_y = Math.floor(Math.random() * 20);
    pacman_x = rand_x;
    pacman_y = rand_y
    while (!find_position) {
        if (board[rand_x][rand_y] == 0) {
            board[rand_x][rand_y] = 2;
            ctx.drawImage(pacmanImage, rand_x * 30, rand_y * 30, 30, 30);
            find_position = true;
        }
    }
    find_position = true
}


function draw_walls() {
    //----------Corners-----------
    //chunk1
    board[1][1] = 4;
    ctx.fillRect(1 * 30, 1 * 30, 30, 30);
    board[1][2] = 4;
    ctx.fillRect(1 * 30, 2 * 30, 30, 30);
    board[1][3] = 4;
    ctx.fillRect(1 * 30, 3 * 30, 30, 30);
    board[1][4] = 4;
    ctx.fillRect(1 * 30, 4 * 30, 30, 30);
    board[1][5] = 4;
    ctx.fillRect(1 * 30, 5 * 30, 30, 30);
    board[2][1] = 4;
    ctx.fillRect(2 * 30, 1 * 30, 30, 30);
    board[3][1] = 4;
    ctx.fillRect(3 * 30, 1 * 30, 30, 30);
    board[4][1] = 4;
    ctx.fillRect(4 * 30, 1 * 30, 30, 30);
    board[5][1] = 4;
    ctx.fillRect(5 * 30, 1 * 30, 30, 30);

    //chunk2
    board[18][18] = 4;
    ctx.fillRect(18 * 30, 18 * 30, 30, 30);
    board[18][17] = 4;
    ctx.fillRect(18 * 30, 17 * 30, 30, 30);
    board[18][16] = 4;
    ctx.fillRect(18 * 30, 16 * 30, 30, 30);
    board[18][15] = 4;
    ctx.fillRect(18 * 30, 15 * 30, 30, 30);
    board[18][14] = 4;
    ctx.fillRect(18 * 30, 14 * 30, 30, 30);
    board[17][18] = 4;
    ctx.fillRect(17 * 30, 18 * 30, 30, 30);
    board[16][18] = 4;
    ctx.fillRect(16 * 30, 18 * 30, 30, 30);
    board[15][18] = 4;
    ctx.fillRect(15 * 30, 18 * 30, 30, 30);
    board[14][18] = 4;
    ctx.fillRect(14 * 30, 18 * 30, 30, 30);

    //chunk3
    board[1][18] = 4;
    ctx.fillRect(1 * 30, 18 * 30, 30, 30);
    board[1][17] = 4;
    ctx.fillRect(1 * 30, 17 * 30, 30, 30);
    board[1][16] = 4;
    ctx.fillRect(1 * 30, 16 * 30, 30, 30);
    board[1][15] = 4;
    ctx.fillRect(1 * 30, 15 * 30, 30, 30);
    board[1][14] = 4;
    ctx.fillRect(1 * 30, 14 * 30, 30, 30);
    board[2][18] = 4;
    ctx.fillRect(2 * 30, 18 * 30, 30, 30);
    board[3][18] = 4;
    ctx.fillRect(3 * 30, 18 * 30, 30, 30);
    board[4][18] = 4;
    ctx.fillRect(4 * 30, 18 * 30, 30, 30);
    board[5][18] = 4;
    ctx.fillRect(5 * 30, 18 * 30, 30, 30);

    //chunk4
    board[18][1] = 4;
    ctx.fillRect(18 * 30, 1 * 30, 30, 30);
    board[18][2] = 4;
    ctx.fillRect(18 * 30, 2 * 30, 30, 30);
    board[18][3] = 4;
    ctx.fillRect(18 * 30, 3 * 30, 30, 30);
    board[18][4] = 4;
    ctx.fillRect(18 * 30, 4 * 30, 30, 30);
    board[18][5] = 4;
    ctx.fillRect(18 * 30, 5 * 30, 30, 30);
    board[17][1] = 4;
    ctx.fillRect(17 * 30, 1 * 30, 30, 30);
    board[16][1] = 4;
    ctx.fillRect(16 * 30, 1 * 30, 30, 30);
    board[15][1] = 4;
    ctx.fillRect(15 * 30, 1 * 30, 30, 30);
    board[14][1] = 4;
    ctx.fillRect(14 * 30, 1 * 30, 30, 30);


    //--------Center-------------
    //chunk5



    board[0][7] = 4;
    ctx.fillRect(0 * 30, 7 * 30, 30, 30);
    board[1][7] = 4;
    ctx.fillRect(1 * 30, 7 * 30, 30, 30);
    board[2][7] = 4;
    ctx.fillRect(2 * 30, 7 * 30, 30, 30);
    board[3][7] = 4;
    ctx.fillRect(3 * 30, 7 * 30, 30, 30);
    board[4][7] = 4;
    ctx.fillRect(4 * 30, 7 * 30, 30, 30);
    board[5][7] = 4;
    ctx.fillRect(5 * 30, 7 * 30, 30, 30);

    board[0][12] = 4;
    ctx.fillRect(0 * 30, 12 * 30, 30, 30);
    board[1][12] = 4;
    ctx.fillRect(1 * 30, 12 * 30, 30, 30);
    board[2][12] = 4;
    ctx.fillRect(2 * 30, 12 * 30, 30, 30);
    board[3][12] = 4;
    ctx.fillRect(3 * 30, 12 * 30, 30, 30);
    board[14][12] = 4;
    ctx.fillRect(4 * 30, 12 * 30, 30, 30);
    board[5][12] = 4;
    ctx.fillRect(5 * 30, 12 * 30, 30, 30);

    //chunk6
    board[7][7] = 4;
    ctx.fillRect(7 * 30, 0 * 30, 30, 30);
    board[7][1] = 4;
    ctx.fillRect(7 * 30, 1 * 30, 30, 30);
    board[7][2] = 4;
    ctx.fillRect(7 * 30, 2 * 30, 30, 30);
    board[7][3] = 4;
    ctx.fillRect(7 * 30, 3 * 30, 30, 30);
    board[7][4] = 4;
    ctx.fillRect(7 * 30, 4 * 30, 30, 30);
    board[7][5] = 4;
    ctx.fillRect(7 * 30, 5 * 30, 30, 30);
    board[7][7] = 4;
    ctx.fillRect(7 * 30, 7 * 30, 30, 30);
    board[7][8] = 4;
    ctx.fillRect(7 * 30, 8 * 30, 30, 30);

    board[12][0] = 4;
    ctx.fillRect(12 * 30, 0 * 30, 30, 30);
    board[12][1] = 4;
    ctx.fillRect(12 * 30, 1 * 30, 30, 30);
    board[12][2] = 4;
    ctx.fillRect(12 * 30, 2 * 30, 30, 30);
    board[12][3] = 4;
    ctx.fillRect(12 * 30, 3 * 30, 30, 30);
    board[12][4] = 4;
    ctx.fillRect(12 * 30, 4 * 30, 30, 30);
    board[12][5] = 4;
    ctx.fillRect(12 * 30, 5 * 30, 30, 30);
    board[12][7] = 4;
    ctx.fillRect(12 * 30, 7 * 30, 30, 30);
    board[12][8] = 4;
    ctx.fillRect(12 * 30, 8 * 30, 30, 30);

    //chunk7
    board[7][12] = 4;
    ctx.fillRect(7 * 30, 12 * 30, 30, 30);
    board[7][14] = 4;
    ctx.fillRect(7 * 30, 14 * 30, 30, 30);
    board[7][15] = 4;
    ctx.fillRect(7 * 30, 15 * 30, 30, 30);
    board[7][16] = 4;
    ctx.fillRect(7 * 30, 16 * 30, 30, 30);
    board[7][17] = 4;
    ctx.fillRect(7 * 30, 17 * 30, 30, 30);
    board[7][18] = 4;
    ctx.fillRect(7 * 30, 18 * 30, 30, 30);
    board[7][19] = 4;
    ctx.fillRect(7 * 30, 19 * 30, 30, 30);

    board[12][12] = 4;
    ctx.fillRect(12 * 30, 12 * 30, 30, 30);
    board[12][14] = 4;
    ctx.fillRect(12 * 30, 14 * 30, 30, 30);
    board[12][15] = 4;
    ctx.fillRect(12 * 30, 15 * 30, 30, 30);
    board[12][16] = 4;
    ctx.fillRect(12 * 30, 16 * 30, 30, 30);
    board[12][17] = 4;
    ctx.fillRect(12 * 30, 17 * 30, 30, 30);
    board[12][18] = 4;
    ctx.fillRect(12 * 30, 18 * 30, 30, 30);
    board[12][19] = 4;
    ctx.fillRect(12 * 30, 19 * 30, 30, 30);

    //chunk8
    board[14][7] = 4;
    ctx.fillRect(14 * 30, 7 * 30, 30, 30);
    board[15][7] = 4;
    ctx.fillRect(15 * 30, 7 * 30, 30, 30);
    board[16][7] = 4;
    ctx.fillRect(16 * 30, 7 * 30, 30, 30);
    board[17][7] = 4;
    ctx.fillRect(17 * 30, 7 * 30, 30, 30);
    board[18][7] = 4;
    ctx.fillRect(18 * 30, 7 * 30, 30, 30);
    board[19][7] = 4;
    ctx.fillRect(19 * 30, 7 * 30, 30, 30);

    board[14][12] = 4;
    ctx.fillRect(14 * 30, 12 * 30, 30, 30);
    board[15][12] = 4;
    ctx.fillRect(15 * 30, 12 * 30, 30, 30);
    board[16][12] = 4;
    ctx.fillRect(16 * 30, 12 * 30, 30, 30);
    board[17][12] = 4;
    ctx.fillRect(17 * 30, 12 * 30, 30, 30);
    board[18][12] = 4;
    ctx.fillRect(18 * 30, 12 * 30, 30, 30);
    board[19][12] = 4;
    ctx.fillRect(19 * 30, 12 * 30, 30, 30);

    // ---------------------------------------------------

    //chunk9
    board[1][9] = 4;
    ctx.fillRect(1 * 30, 9 * 30, 30, 30);
    board[2][9] = 4;
    ctx.fillRect(2 * 30, 9 * 30, 30, 30);
    board[3][9] = 4;
    ctx.fillRect(3 * 30, 9 * 30, 30, 30);
    board[4][9] = 4;
    ctx.fillRect(4 * 30, 9 * 30, 30, 30);
    board[15][9] = 4;
    ctx.fillRect(15 * 30, 9 * 30, 30, 30);
    board[16][9] = 4;
    ctx.fillRect(16 * 30, 9 * 30, 30, 30);
    board[17][9] = 4;
    ctx.fillRect(17 * 30, 9 * 30, 30, 30);
    board[18][9] = 4;
    ctx.fillRect(18 * 30, 9 * 30, 30, 30);

    board[1][10] = 4;
    ctx.fillRect(1 * 30, 10 * 30, 30, 30);
    board[2][10] = 4;
    ctx.fillRect(2 * 30, 10 * 30, 30, 30);
    board[3][10] = 4;
    ctx.fillRect(3 * 30, 10 * 30, 30, 30);
    board[4][10] = 4;
    ctx.fillRect(4 * 30, 10 * 30, 30, 30);
    board[15][10] = 4;
    ctx.fillRect(15 * 30, 10 * 30, 30, 30);
    board[16][10] = 4;
    ctx.fillRect(16 * 30, 10 * 30, 30, 30);
    board[17][10] = 4;
    ctx.fillRect(17 * 30, 10 * 30, 30, 30);
    board[18][10] = 4;
    ctx.fillRect(18 * 30, 10 * 30, 30, 30);

    board[6][10] = 4;
    ctx.fillRect(6 * 30, 10 * 30, 30, 30);
    board[7][10] = 4;
    ctx.fillRect(7 * 30, 10 * 30, 30, 30);
    board[8][10] = 4;
    ctx.fillRect(8 * 30, 10 * 30, 30, 30);
    board[9][10] = 4;
    ctx.fillRect(9 * 30, 10 * 30, 30, 30);
    board[10][10] = 4;
    ctx.fillRect(10 * 30, 10 * 30, 30, 30);
    board[11][10] = 4;
    ctx.fillRect(11 * 30, 10 * 30, 30, 30);
    board[12][10] = 4;
    ctx.fillRect(12 * 30, 10 * 30, 30, 30);
    board[13][10] = 4;
    ctx.fillRect(13 * 30, 10 * 30, 30, 30);

    //chunk10
    board[9][12] = 4;
    ctx.fillRect(9 * 30, 12 * 30, 30, 30);
    board[9][13] = 4;
    ctx.fillRect(9 * 30, 13 * 30, 30, 30);
    board[9][14] = 4;
    ctx.fillRect(9 * 30, 14 * 30, 30, 30);
    board[9][15] = 4;
    ctx.fillRect(9 * 30, 15 * 30, 30, 30);
    board[9][16] = 4;
    ctx.fillRect(9 * 30, 16 * 30, 30, 30);
    board[9][17] = 4;
    ctx.fillRect(9 * 30, 17 * 30, 30, 30);
    board[9][18] = 4;
    ctx.fillRect(9 * 30, 18 * 30, 30, 30);

    board[10][12] = 4;
    ctx.fillRect(10 * 30, 12 * 30, 30, 30);
    board[10][13] = 4;
    ctx.fillRect(10 * 30, 13 * 30, 30, 30);
    board[10][14] = 4;
    ctx.fillRect(10 * 30, 14 * 30, 30, 30);
    board[10][15] = 4;
    ctx.fillRect(10 * 30, 15 * 30, 30, 30);
    board[10][16] = 4;
    ctx.fillRect(10 * 30, 16 * 30, 30, 30);
    board[10][17] = 4;
    ctx.fillRect(10 * 30, 17 * 30, 30, 30);
    board[10][18] = 4;
    ctx.fillRect(10 * 30, 18 * 30, 30, 30);

    board[9][1] = 4;
    ctx.fillRect(9 * 30, 1 * 30, 30, 30);
    board[9][2] = 4;
    ctx.fillRect(9 * 30, 2 * 30, 30, 30);
    board[9][3] = 4;
    ctx.fillRect(9 * 30, 3 * 30, 30, 30);
    board[9][4] = 4;
    ctx.fillRect(9 * 30, 4 * 30, 30, 30);
    board[9][5] = 4;
    ctx.fillRect(9 * 30, 5 * 30, 30, 30);
    board[9][6] = 4;
    ctx.fillRect(9 * 30, 6 * 30, 30, 30);
    board[9][7] = 4;
    ctx.fillRect(9 * 30, 7 * 30, 30, 30);
    board[9][8] = 4;
    ctx.fillRect(9 * 30, 8 * 30, 30, 30);

    board[10][1] = 4;
    ctx.fillRect(10 * 30, 1 * 30, 30, 30);
    board[10][2] = 4;
    ctx.fillRect(10 * 30, 2 * 30, 30, 30);
    board[10][3] = 4;
    ctx.fillRect(10 * 30, 3 * 30, 30, 30);
    board[10][4] = 4;
    ctx.fillRect(10 * 30, 4 * 30, 30, 30);
    board[10][5] = 4;
    ctx.fillRect(10 * 30, 5 * 30, 30, 30);
    board[10][6] = 4;
    ctx.fillRect(10 * 30, 6 * 30, 30, 30);
    board[10][7] = 4;
    ctx.fillRect(10 * 30, 7 * 30, 30, 30);
    board[10][8] = 4;
    ctx.fillRect(10 * 30, 8 * 30, 30, 30);

    // ---------------------------------------------------

    //chunk11
    board[3][3] = 4;
    ctx.fillRect(3 * 30, 3 * 30, 30, 30);
    board[3][4] = 4;
    ctx.fillRect(3 * 30, 4 * 30, 30, 30);
    board[3][5] = 4;
    ctx.fillRect(3 * 30, 5 * 30, 30, 30);
    board[5][3] = 4;
    ctx.fillRect(5 * 30, 3 * 30, 30, 30);
    board[4][3] = 4;
    ctx.fillRect(4 * 30, 3 * 30, 30, 30);
    board[4][4] = 4;
    ctx.fillRect(4 * 30, 4 * 30, 30, 30);
    board[4][5] = 4;
    ctx.fillRect(4 * 30, 5 * 30, 30, 30);
    board[5][4] = 4;
    ctx.fillRect(5 * 30, 4 * 30, 30, 30);
    board[5][5] = 4;
    ctx.fillRect(5 * 30, 5 * 30, 30, 30);


    //chunk12
    board[16][16] = 4;
    ctx.fillRect(16 * 30, 16 * 30, 30, 30);
    board[16][15] = 4;
    ctx.fillRect(16 * 30, 15 * 30, 30, 30);
    board[16][14] = 4;
    ctx.fillRect(16 * 30, 14 * 30, 30, 30);
    board[14][16] = 4;
    ctx.fillRect(14 * 30, 16 * 30, 30, 30);
    board[15][16] = 4;
    ctx.fillRect(15 * 30, 16 * 30, 30, 30);
    board[15][15] = 4;
    ctx.fillRect(15 * 30, 15 * 30, 30, 30);
    board[15][14] = 4;
    ctx.fillRect(15 * 30, 14 * 30, 30, 30);
    board[14][15] = 4;
    ctx.fillRect(14 * 30, 15 * 30, 30, 30);
    board[14][14] = 4;
    ctx.fillRect(14 * 30, 14 * 30, 30, 30);

    //chunk13
    board[3][16] = 4;
    ctx.fillRect(3 * 30, 16 * 30, 30, 30);
    board[3][15] = 4;
    ctx.fillRect(3 * 30, 15 * 30, 30, 30);
    board[3][14] = 4;
    ctx.fillRect(3 * 30, 14 * 30, 30, 30);
    board[5][16] = 4;
    ctx.fillRect(5 * 30, 16 * 30, 30, 30);
    board[4][16] = 4;
    ctx.fillRect(4 * 30, 16 * 30, 30, 30);
    board[4][15] = 4;
    ctx.fillRect(4 * 30, 15 * 30, 30, 30);
    board[4][14] = 4;
    ctx.fillRect(4 * 30, 14 * 30, 30, 30);
    board[5][15] = 4;
    ctx.fillRect(5 * 30, 15 * 30, 30, 30);
    board[5][14] = 4;
    ctx.fillRect(5 * 30, 14 * 30, 30, 30);

    //chunk14
    board[16][3] = 4;
    ctx.fillRect(16 * 30, 3 * 30, 30, 30);
    board[16][4] = 4;
    ctx.fillRect(16 * 30, 4 * 30, 30, 30);
    board[16][5] = 4;
    ctx.fillRect(16 * 30, 5 * 30, 30, 30);
    board[14][3] = 4;
    ctx.fillRect(14 * 30, 3 * 30, 30, 30);
    board[15][3] = 4;
    ctx.fillRect(15 * 30, 3 * 30, 30, 30);
    board[15][4] = 4;
    ctx.fillRect(15 * 30, 4 * 30, 30, 30);
    board[15][5] = 4;
    ctx.fillRect(15 * 30, 5 * 30, 30, 30);
    board[14][4] = 4;
    ctx.fillRect(14 * 30, 4 * 30, 30, 30);
    board[14][5] = 4;
    ctx.fillRect(14 * 30, 5 * 30, 30, 30);
}

function changePosition() {
    ballNumber = temp;
    let direction = GetKeyPressed();

    if (pacmanImage.src = "Images/pacman/pacman.png") {
        if ((direction === "right") && (pacman_x < 19) && (board[pacman_x + 1][pacman_y] != 4)) {
            pacmanImage.src = "Images/pacman/pacman.png";
            ctx.drawImage(pacmanImage, (pacman_x + 1) * 30, pacman_y * 30, 30, 30);
            update_pacman_pos(pacman_x + 1, pacman_y);
        }
        else if ((direction === "left") && (pacman_x > 0) && (board[pacman_x - 1][pacman_y] != 4)) {
            pacmanImage.src = "Images/pacman/pacman2.png";
            ctx.drawImage(pacmanImage, (pacman_x - 1) * 30, pacman_y * 30, 30, 30);
            update_pacman_pos(pacman_x - 1, pacman_y);
        }
        else if ((direction === "up") && (pacman_y > 0) && (board[pacman_x][pacman_y - 1] != 4)) {
            pacmanImage.src = "Images/pacman/pacman6.png";
            ctx.drawImage(pacmanImage, pacman_x * 30, (pacman_y - 1) * 30, 30, 30);
            update_pacman_pos(pacman_x, pacman_y - 1);
        }

        else if ((direction === "down") && (pacman_y < 19) && (board[pacman_x][pacman_y + 1] != 4)) {
            pacmanImage.src = "Images/pacman/pacman3.png";
            ctx.drawImage(pacmanImage, pacman_x * 30, (pacman_y + 1) * 30, 30, 30);
            update_pacman_pos(pacman_x, pacman_y + 1);
        }
    }

    else if (pacmanImage.src = "Images/pacman/pacman2.png") {
        if ((direction === "right") && (pacman_x < 19) && (board[pacman_x + 1][pacman_y] != 4)) {
            pacmanImage.src = "Images/pacman/pacman.png";
            ctx.drawImage(pacmanImage, (pacman_x + 1) * 30, pacman_y * 30, 30, 30);
            update_pacman_pos(pacman_x + 1, pacman_y);
        }
        else if ((direction === "left") && (pacman_x > 0) && (board[pacman_x - 1][pacman_y] != 4)) {
            pacmanImage.src = "Images/pacman/pacman2.png";
            ctx.drawImage(pacmanImage, (pacman_x - 1) * 30, pacman_y * 30, 30, 30);
            update_pacman_pos(pacman_x - 1, pacman_y);
        }
        else if ((direction === "up") && (pacman_y > 0) && (board[pacman_x][pacman_y - 1] != 4)) {
            pacmanImage.src = "Images/pacman/pacman4.png";
            ctx.drawImage(pacmanImage, pacman_x * 30, (pacman_y - 1) * 30, 30, 30);
            update_pacman_pos(pacman_x, pacman_y - 1);
        }
        else if ((direction === "down") && (pacman_y < 19) && (board[pacman_x][pacman_y + 1] != 4)) {
            pacmanImage.src = "Images/pacman/pacman5.png";
            ctx.drawImage(pacmanImage, pacman_x * 30, (pacman_y + 1) * 30, 30, 30);
            update_pacman_pos(pacman_x, pacman_y + 1);
        }
    }

    else if (pacmanImage.src = "Images/pacman/pacman3.png") {
        if ((direction === "right") && (pacman_x < 19) && (board[pacman_x + 1][pacman_y] != 4)) {
            pacmanImage.src = "Images/pacman/pacman.png";
            ctx.drawImage(pacmanImage, (pacman_x + 1) * 30, pacman_y * 30, 30, 30);
            update_pacman_pos(pacman_x + 1, pacman_y);
        }
        else if ((direction === "left") && (pacman_x > 0) && (board[pacman_x - 1][pacman_y] != 4)) {
            pacmanImage.src = "Images/pacman/pacman2.png";
            ctx.drawImage(pacmanImage, (pacman_x - 1) * 30, pacman_y * 30, 30, 30);
            update_pacman_pos(pacman_x - 1, pacman_y);
        }
        else if ((direction === "up") && (pacman_y > 0) && (board[pacman_x][pacman_y - 1] != 4)) {
            pacmanImage.src = "Images/pacman/pacman6.png";
            ctx.drawImage(pacmanImage, pacman_x * 30, (pacman_y - 1) * 30, 30, 30);
            update_pacman_pos(pacman_x, pacman_y - 1);
        }
        else if ((direction === "down") && (pacman_y < 19) && (board[pacman_x][pacman_y + 1] != 4)) {
            pacmanImage.src = "Images/pacman/pacman3.png";
            ctx.drawImage(pacmanImage, pacman_x * 30, (pacman_y + 1) * 30, 30, 30);
            update_pacman_pos(pacman_x, pacman_y + 1);
        }
    }

    else if (pacmanImage.src = "Images/pacman/pacman4.png") {
        if ((direction === "right") && (pacman_x < 19) && (board[pacman_x + 1][pacman_y] != 4)) {
            pacmanImage.src = "Images/pacman/pacman.png";
            ctx.drawImage(pacmanImage, (pacman_x + 1) * 30, pacman_y * 30, 30, 30);
            update_pacman_pos(pacman_x + 1, pacman_y);
        }
        else if ((direction === "left") && (pacman_x > 0) && (board[pacman_x - 1][pacman_y] != 4)) {
            pacmanImage.src = "Images/pacman/pacman2.png";
            ctx.drawImage(pacmanImage, (pacman_x - 1) * 30, pacman_y * 30, 30, 30);
            update_pacman_pos(pacman_x - 1, pacman_y);
        }
        else if ((direction === "up") && (pacman_y > 0) && (board[pacman_x][pacman_y - 1] != 4)) {
            pacmanImage.src = "Images/pacman/pacman4.png";
            ctx.drawImage(pacmanImage, pacman_x * 30, (pacman_y - 1) * 30, 30, 30);
            update_pacman_pos(pacman_x, pacman_y - 1);
        }
        else if ((direction === "down") && (pacman_y < 19) && (board[pacman_x][pacman_y + 1] != 4)) {
            pacmanImage.src = "Images/pacman/pacman3.png";
            ctx.drawImage(pacmanImage, pacman_x * 30, (pacman_y + 1) * 30, 30, 30);
            update_pacman_pos(pacman_x, pacman_y + 1);
        }
    }


    else if (pacmanImage.src = "Images/pacman/pacman5.png") {
        if ((direction === "right") && (pacman_x < 19) && (board[pacman_x + 1][pacman_y] != 4)) {
            pacmanImage.src = "Images/pacman/pacman.png";
            ctx.drawImage(pacmanImage, (pacman_x + 1) * 30, pacman_y * 30, 30, 30);
            update_pacman_pos(pacman_x + 1, pacman_y);
        }
        else if ((direction === "left") && (pacman_x > 0) && (board[pacman_x - 1][pacman_y] != 4)) {
            pacmanImage.src = "Images/pacman/pacman2.png";
            ctx.drawImage(pacmanImage, (pacman_x - 1) * 30, pacman_y * 30, 30, 30);
            update_pacman_pos(pacman_x - 1, pacman_y);
        }
        else if ((direction === "up") && (pacman_y > 0) && (board[pacman_x][pacman_y - 1] != 4)) {
            pacmanImage.src = "Images/pacman/pacman6.png";
            ctx.drawImage(pacmanImage, pacman_x * 30, (pacman_y - 1) * 30, 30, 30);
            update_pacman_pos(pacman_x, pacman_y - 1);
        }
        else if ((direction === "down") && (pacman_y < 19) && (board[pacman_x][pacman_y + 1] != 4)) {
            pacmanImage.src = "Images/pacman/pacman5.png";
            ctx.drawImage(pacmanImage, pacman_x * 30, (pacman_y + 1) * 30, 30, 30);
            update_pacman_pos(pacman_x, pacman_y + 1);
        }
    }


    else if (pacmanImage.src = "Images/pacman/pacman6.png") {
        if ((direction === "right") && (pacman_x < 19) && (board[pacman_x + 1][pacman_y] != 4)) {
            pacmanImage.src = "Images/pacman/pacman.png";
            ctx.drawImage(pacmanImage, (pacman_x + 1) * 30, pacman_y * 30, 30, 30);
            update_pacman_pos(pacman_x + 1, pacman_y);
        }
        else if ((direction === "left") && (pacman_x > 0) && (board[pacman_x - 1][pacman_y] != 4)) {
            pacmanImage.src = "Images/pacman/pacman2.png";
            ctx.drawImage(pacmanImage, (pacman_x - 1) * 30, pacman_y * 30, 30, 30);
            update_pacman_pos(pacman_x - 1, pacman_y);
        }
        else if ((direction === "up") && (pacman_y > 0) && (board[pacman_x][pacman_y - 1] != 4)) {
            pacmanImage.src = "Images/pacman/pacman6.png";
            ctx.drawImage(pacmanImage, pacman_x * 30, (pacman_y - 1) * 30, 30, 30);
            update_pacman_pos(pacman_x, pacman_y - 1);
        }
        else if ((direction === "down") && (pacman_y < 19) && (board[pacman_x][pacman_y + 1] != 4)) {
            pacmanImage.src = "Images/pacman/pacman5.png";
            ctx.drawImage(pacmanImage, pacman_x * 30, (pacman_y + 1) * 30, 30, 30);
            update_pacman_pos(pacman_x, pacman_y + 1);
        }
    }
    Draw();
}

function changePosition2() {
    ballNumber = temp;
    let x = GetKeyPressed();
    update_pacman_pos(pacman_x + 1, pacman_y);
    if (x == "up") {
        if (pacman_x + 1 == 20) {
            if (board[pacman_x][pacman_y] == 1) {
                ctx.drawImage(pacmanImage, (pacman_x + 1) * 30, pacman_y * 30, 30, 30);
            }
        }

    }
    else { ctx.drawImage(pacmanImage, (pacman_x) * 30, pacman_y * 30, 30, 30); }
}

function update_pacman_pos(new_x, new_y) {
    ctx.clearRect(pacman_x * 30, pacman_y * 30, 30, 30);
    ctx.drawImage(pacmanImage, new_x * 30, new_y * 30, 30, 30);
    pacman_x = new_x;
    pacman_y = new_y;
}

// function getDirection(e) {
//     e = e || window.Event;
//     if (e.keyCode == '38') { return up; }
//     if (e.keyCode == '37') { return left; }
//     if (e.keyCode == '39') { return right; }
//     if (e.keyCode == '40') { return down; }
// }

// // function getDirection(e) {
// //     e = e || window.Event;
// //     if (e.keyCode == '38') { return up; }
// //     if (e.keyCode == '37') { return left; }
// //     if (e.keyCode == '39') { return right; }
// //     if (e.keyCode == '40') { return down; }
// // }

// // function getKeyPressed() {
// //     var up = sessionStorage.getItem("up");
// //     var down = sessionStorage.getItem("down");
// //     var right = sessionStorage.getItem("right");
// //     var left = sessionStorage.getItem("left");
// //     if (keysDown[up]) { return "up"; }
// //     if (keysDown[down]) { return "down"; }
// //     if (keysDown[left]) { return "left"; }
// //     if (keysDown[right]) { return "right"; }
// // }


// function GetKeyPressed() {
//     if (keysDown[38]) {//up
//         return "up";
//     }
//     if (keysDown[40]) {//down
//         return "down";
//     }
//     if (keysDown[37]) {//left
//         return "left";
//     }
//     if (keysDown[39]) {//right
//         return "right";
//     }
// }

// function changePosition2(){
//     ballNumber=temp;
//     let x=GetKeyPressed();
//     if (x=="up"){
//         if(pacman_x+1==20){
//             if(board[pacman_x][pacman_y]==1){
//                 ctx.drawImage(pacmanImage,(pacman_x+1)*30,pacman_y*30, 30, 30);
//             }
//         }
//     }

//     else if (x=="down"){

//     }
//     else{
//         ctx.drawImage(pacmanImage,(pacman_x)*30,pacman_y*30, 30, 30);

function GetKeyPressed() {
    if (keysDown[38]) {//up
        alert("hi1");
        return "up";
        alert("hi11");
    }
    if (keysDown[40]) {//down
        return "down";
        alert("hi22");
    }
    if (keysDown[37]) {//left
        alert("hi3");
        return "left";
        alert("hi33");
    }
    if (keysDown[39]) {//right
        return "right";
        alert("hi44");
    }
}

function draw_ghost1() {


}


function Draw() {
    canvas.width = canvas.width; //clean board
    context.rect(0, 0, boardWidth, boardHeight);
    context.fillStyle = "blue";
    context.fill();
    lblScore.value = score;
    lblTime.value = time_elapsed;
    for (var i = 0; i < 20; i++) {
        for (var j = 0; j < 20; j++) {
            var center = new Object();
            center.x = i * boardCell + boardCellRadius;
            center.y = j * boardCell + boardCellRadius;
            if (board[i][j] === "pacmen") {
                drawPacmenImg(center.x, center.y);
            } else if (board[i][j] === "ball5") {
                context.beginPath();
                context.arc(center.x, center.y, boardCell / 3, 0, 2 * Math.PI); // circle
                context.fillStyle = "black"; //color
                context.fill();
            } else if (board[i][j] === "wall") {
                context.beginPath();
                context.rect(center.x - boardCellRadius, center.y - boardCellRadius, boardCell, boardCell);
                context.fillStyle = "grey"; //color
                context.fill();
            }
        }
    }
}

// function Draw() {
//     // ctx.rect(0, 0, canvasWidth, canvasHeight);
//     // ctx.fillStyle = "#b3e0ff";
//     ctx.fill();
//     // lblScore.value = score;
//     // lblTime.value = time_elapsed;
//     for (var i = 0; i < 20; i++) {
//         for (var j = 0; j < 20; j++) {
//             if (board[i][j] == 2) { // Pacman
//                 draw_pacman();
//                 // x_rand = Math.floor(Math.random() * 20) * 60;
//                 // y_rand = Math.floor(Math.random() * 20) * 40;
//                 // ctx.clearRect(x_rand, y_rand, 50, 40);
//                 // ctx.drawImage(pacmanImage, x_rand, y_rand, 50, 40);

//             } else if (board[i][j] == 1) { // Food
//                 rand = Math.floor(Math.random() * 20);
//                 if ((rand) % 20 == 0) { foodImage.src = "Images/flags/flag1.gif"; }
//                 if ((rand) % 20 == 1) { foodImage.src = "Images/flags/flag2.gif"; }
//                 if ((rand) % 20 == 2) { foodImage.src = "Images/flags/flag3.gif"; }
//                 if ((rand) % 20 == 3) { foodImage.src = "Images/flags/flag4.gif"; }
//                 if ((rand) % 20 == 4) { foodImage.src = "Images/flags/flag5.gif"; }
//                 if ((rand) % 20 == 5) { foodImage.src = "Images/flags/flag6.gif"; }
//                 if ((rand) % 20 == 6) { foodImage.src = "Images/flags/flag7.gif"; }
//                 if ((rand) % 20 == 7) { foodImage.src = "Images/flags/flag8.gif"; }
//                 if ((rand) % 20 == 8) { foodImage.src = "Images/flags/flag9.gif"; }
//                 if ((rand) % 20 == 9) { foodImage.src = "Images/flags/flag10.gif"; }

//                 // ctx.drawImage(foodImage, 20, 20, 20, 20);

//             } else if (board[i][j] == 4) { // Wall
//                 draw_walls();
//                 ctx.beginPath();
//                 // ctx.rect(center.x - canvasCellRadius, center.y - canvasCellRadius, canvasCell, canvasCell);
//                 ctx.fill();
//                 // wallImage = new Image();
//                 // wallImage.src = "Images/wall.webp"
//                 // ctx.drawImage(wallImage, 20, 20, 20, 20)
//             }
//         }
//     }
// }