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
    find_position=true
}