var context;
var shape = new Object();
var board;
var score;
var pac_color;
var start_time;
var time_elapsed;
var interval;
var actor = new Image();
var food;
var foodImage;
var wallImage;
foodImage = new Image();
//canvas:
var boardHeight;
var boardWidth;
// var canvasCellCenterOffset;
var boardCellRadius;
var boardCell;
var boardSize
var gameCompleted;
var lostLife = false;
var firstTime;

//settings :
var boardSize;
var upButtonNumber;
var downButtonNumber;
var leftButtonNumber;
var rightButtonNumber;
var time; // the total time fot the game choosen by the user
var maxScore;
//balls:
var color5;
var color15;
var color25;
var ballNumber;
var ballsRemain;
var ball5Remain;
var ball15Remain;
var ball25Remain;
//monster:
var monsterNumber;
var monstersRemain;
var monsterscenter;
var monsterMoves;
//pacmen:
var pacmenRemain;
//moving Bonus:
var movingBonusRemain; // TODO: add movment elment , add +50
var movingBonuEaten;
var movingBonusRemainI;
var movingBonusRemainJ;
//blackHole:
var blackHoleRemain;
var blackHoleI;
var blackHoleJ;
//bonus life:
var lifeBonusRemain;
var lifeBonusEaten;
var lifeBonusI;
var lifeBonusJ;

var ghost1_x;
var ghost1_y;
var ghost2_x;
var ghost2_y;
var ghost3_x;
var ghost3_y;
var ghost4_x;
var ghost4_y;
var ghost1Img;
var ghost2Img;
var ghost3Img;
var ghost4Img;

var emptyCells=new Array();

function updateEmptyCells() {
	for (let i=0;i<boardSize;i++){
		for (let j=0;j<boardSize;j++){
			if (board[i][j]==0 && (i!=0 && j!=0) && (i!=19 && j!=0)&& (i!=0 && j!=19) && (i!=19 && j!=19)){
				emptyCells.push([i,j])
			}
		}
	}
}

function getRandomEmptyCell(){
	let rand=Math.floor(Math.random()*emptyCells.length);
	let ret= emptyCells[rand];
	emptyCells.splice(rand,1);
	return ret;
}



// $(document).ready(function() {
// 	context = canvas.getContext("2d");
// 	Start();
// });

function Start() {
		canvas = document.getElementById("canvas");
		context = canvas.getContext("2d");
		boardWidth = canvas.width;
		boardHeight = canvas.height;
	// 	console.log("start");
		board = new Array();
		boardSize = 20;
		//pac_color = "yellow";
		ballsRemain = 50;
		// ballsRemain = ballNumber;
		ball25Remain = Math.floor(ballsRemain * 0.1);
		ball15Remain = Math.floor(ballsRemain * 0.3);
		ball5Remain  = Math.floor(ballsRemain * 0.6);
		monstersRemain = monsterNumber;
		lifeBonusEaten = false;
		pacmenRemain=1;	
		movingBonuEaten = false;
		movingBonusRemain=1; // TODO: add movment elment
		blackHoleRemain=2;
		lifeBonusRemain=5;
		//monsters:
		monsterscenter = [[0, 0], [0, (boardSize - 1)], [(boardSize - 1), 0], [(boardSize - 1), (boardSize - 1)]];
		monsterMoves = [0,0,0,0];
		//center for drawing:
		boardCellRadius = boardSize/2;
		boardWidth = canvas.width;
		boardCell = boardWidth/boardSize;
		score = 0;
		maxScore = ball25Remain * 25 + ball15Remain * 15 + ball5Remain * 5 + movingBonusRemain * 50;
		var cnt = 100;
		start_time = new Date();
		var randomNum = Math.random();
		var randomNum2 = Math.random();
		board=initboard();
		draw_walls();
		draw_ghosts();
		updateEmptyCells();
		draw_balls();
		draw_pacman();
		// let randomMovingBonusJ = Math.floor(Math.random()*5)+5;//random 5-19
		// for (var i = 0; i < 20; i++) {
		// 	board[i] = new Array();
		// 	//put obstacles in (i=3,j=3) and (i=3,j=4) and (i=3,j=5), (i=6,j=1) and (i=6,j=2)
		// 	for (var j = 0; j < 20; j++) {
		// 		if (
		// 			(i == 3 && j == 3) ||
		// 			(i == 3 && j == 4) ||
		// 			(i == 3 && j == 5) ||
		// 			(i == 6 && j == 1) ||
		// 			(i == 6 && j == 2)
		// 		) {
		// 			board[i][j] = "wall";//4
		// 		} 
		// 		// else if (i==9 && j==randomMovingBonusJ){
		// 		// 	movingBonusRemain--;
		// 		// 	movingBonusRemainI = 9;
		// 		// 	movingBonusRemainJ = randomMovingBonusJ;
		// 		//	board[i][j] = "movingBonus";
		// 		// }

		// 		else if (randomNum < (1.0 * (pacmenRemain + ballsRemain)) / cnt) {
		// 			var randomNum0to15 = Math.floor(Math.random() * 15);
		// 			//ball5
		// 			if (randomNum0to15 >= 2 && ball5Remain >0 ){
		// 				ballsRemain--;
		// 				ball5Remain--;
		// 				board[i][j] = "ball5";//1
		// 			}
		// 			else {
		// 				board[i][j] = "empty";//0
		// 			}
		// 			//ball15
		// 			//ball25
					
		// 		}
		// 		else {
		// 			//pacman:
		// 			if (randomNum <= (1.0 * ballsRemain) / cnt) {
		// 				shape.i = i;
		// 				shape.j = j;
		// 				pacmenRemain--;
		// 				board[i][j] = "pacmen";//2
		// 			}
		// 			//monster:
		// 			// else if(randomNum2 < (1.0 * (pacmenRemain + ballsRemain + monstersRemain)) / cnt){
		// 			// 	board[i][j] = "monster";
		// 			// }
		// 			 else {
		// 				board[i][j] = "empty";//0
		// 			}
		// 			cnt--;
		// 		}
		// 	}
		// }
		// while (ballsRemain > 0) {
		// 	var emptyCell = findRandomEmptyCell(board);
		// 	board[emptyCell[0]][emptyCell[1]] = "ball5";//1
		// 	ballsRemain--;
		// }
		// while (pacmenRemain > 0) {
		// 	let emptyCellPamen = findRandomEmptyCell(board);
		// 	shape.i = emptyCellPamen[0];
		// 	shape.j = emptyCellPamen[1];
		// 	board[emptyCellPamen[0]][emptyCellPamen[1]] = "pacmen";
		// 	pacmenRemain--;
		// }
		keysDown = {};
		addEventListener(
			"keydown",
			function (e) {
				keysDown[e.keyCode] = true;
			},
			false
		);
		addEventListener(
			"keyup",
			function (e) {
				keysDown[e.keyCode] = false;
			},
			false
		);
		interval = setInterval(UpdatePosition, 250);
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
        //rand_x = Math.floor(Math.random() * 20);
        //rand_y = Math.floor(Math.random() * 20);
		let tup=getRandomEmptyCell();
		let rand_x=tup[0];
		let rand_y=tup[1];
        if (board[rand_x][rand_y] == 0) {
            board[rand_x][rand_y] = 5;
            context.drawImage(color5, rand_x * 30, rand_y * 30, 25, 25);
            counter5++;
        }
    }

    while (counter15 < ball15num) {
        // rand_x = Math.floor(Math.random() * 20);
        // rand_y = Math.floor(Math.random() * 20);
		let tup=getRandomEmptyCell();
		let rand_x=tup[0];
		let rand_y=tup[1];
        if (board[rand_x][rand_y] == 0) {
            board[rand_x][rand_y] = 15;
            context.drawImage(color15, rand_x * 30, rand_y * 30, 25, 25);
            counter15++;
        }
    }

    while (counter25 < ball25num) {
        // rand_x = Math.floor(Math.random() * 20);
        // rand_y = Math.floor(Math.random() * 20);
		let tup=getRandomEmptyCell();
		let rand_x=tup[0];
		let rand_y=tup[1];
        if (board[rand_x][rand_y] == 0) {
            board[rand_x][rand_y] = 25;
            context.drawImage(color25, rand_x * 30, rand_y * 30, 25, 25);
            counter25++;
        }
    }
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

function draw_walls() {
    //----------Corners-----------
    //chunk1
	
    board[1][1] = 4;
    context.fillRect(1 * 30, 1 * 30, 30, 30);
    board[1][2] = 4;
    context.fillRect(1 * 30, 2 * 30, 30, 30);
    board[1][3] = 4;
    context.fillRect(1 * 30, 3 * 30, 30, 30);
    board[1][4] = 4;
    context.fillRect(1 * 30, 4 * 30, 30, 30);
    board[1][5] = 4;
    context.fillRect(1 * 30, 5 * 30, 30, 30);
    board[2][1] = 4;
    context.fillRect(2 * 30, 1 * 30, 30, 30);
    board[3][1] = 4;
    context.fillRect(3 * 30, 1 * 30, 30, 30);
    board[4][1] = 4;
    context.fillRect(4 * 30, 1 * 30, 30, 30);
    board[5][1] = 4;
    context.fillRect(5 * 30, 1 * 30, 30, 30);

    //chunk2
    board[18][18] = 4;
    context.fillRect(18 * 30, 18 * 30, 30, 30);
    board[18][17] = 4;
    context.fillRect(18 * 30, 17 * 30, 30, 30);
    board[18][16] = 4;
    context.fillRect(18 * 30, 16 * 30, 30, 30);
    board[18][15] = 4;
    context.fillRect(18 * 30, 15 * 30, 30, 30);
    board[18][14] = 4;
    context.fillRect(18 * 30, 14 * 30, 30, 30);
    board[17][18] = 4;
    context.fillRect(17 * 30, 18 * 30, 30, 30);
    board[16][18] = 4;
    context.fillRect(16 * 30, 18 * 30, 30, 30);
    board[15][18] = 4;
    context.fillRect(15 * 30, 18 * 30, 30, 30);
    board[14][18] = 4;
    context.fillRect(14 * 30, 18 * 30, 30, 30);

    //chunk3
    board[1][18] = 4;
    context.fillRect(1 * 30, 18 * 30, 30, 30);
    board[1][17] = 4;
    context.fillRect(1 * 30, 17 * 30, 30, 30);
    board[1][16] = 4;
    context.fillRect(1 * 30, 16 * 30, 30, 30);
    board[1][15] = 4;
    context.fillRect(1 * 30, 15 * 30, 30, 30);
    board[1][14] = 4;
    context.fillRect(1 * 30, 14 * 30, 30, 30);
    board[2][18] = 4;
    context.fillRect(2 * 30, 18 * 30, 30, 30);
    board[3][18] = 4;
    context.fillRect(3 * 30, 18 * 30, 30, 30);
    board[4][18] = 4;
    context.fillRect(4 * 30, 18 * 30, 30, 30);
    board[5][18] = 4;
    context.fillRect(5 * 30, 18 * 30, 30, 30);

    //chunk4
    board[18][1] = 4;
    context.fillRect(18 * 30, 1 * 30, 30, 30);
    board[18][2] = 4;
    context.fillRect(18 * 30, 2 * 30, 30, 30);
    board[18][3] = 4;
    context.fillRect(18 * 30, 3 * 30, 30, 30);
    board[18][4] = 4;
    context.fillRect(18 * 30, 4 * 30, 30, 30);
    board[18][5] = 4;
    context.fillRect(18 * 30, 5 * 30, 30, 30);
    board[17][1] = 4;
    context.fillRect(17 * 30, 1 * 30, 30, 30);
    board[16][1] = 4;
    context.fillRect(16 * 30, 1 * 30, 30, 30);
    board[15][1] = 4;
    context.fillRect(15 * 30, 1 * 30, 30, 30);
    board[14][1] = 4;
    context.fillRect(14 * 30, 1 * 30, 30, 30);


    //--------Center-------------
    //chunk5



    board[0][7] = 4;
    context.fillRect(0 * 30, 7 * 30, 30, 30);
    board[1][7] = 4;
    context.fillRect(1 * 30, 7 * 30, 30, 30);
    board[2][7] = 4;
    context.fillRect(2 * 30, 7 * 30, 30, 30);
    board[3][7] = 4;
    context.fillRect(3 * 30, 7 * 30, 30, 30);
    board[4][7] = 4;
    context.fillRect(4 * 30, 7 * 30, 30, 30);
    board[5][7] = 4;
    context.fillRect(5 * 30, 7 * 30, 30, 30);

board[1][12] = 4;
context.fillRect(1 * 30, 12 * 30, 30, 30);
board[2][12] = 4;
context.fillRect(2 * 30, 12 * 30, 30, 30);
board[3][12] = 4;
context.fillRect(3 * 30, 12 * 30, 30, 30);
board[14][12] = 4;
context.fillRect(4 * 30, 12 * 30, 30, 30);
board[5][12] = 4;
context.fillRect(5 * 30, 12 * 30, 30, 30);

//chunk6
board[7][7] = 4;
context.fillRect(7 * 30, 0 * 30, 30, 30);
board[7][1] = 4;
context.fillRect(7 * 30, 1 * 30, 30, 30);
board[7][2] = 4;
context.fillRect(7 * 30, 2 * 30, 30, 30);
board[7][3] = 4;
context.fillRect(7 * 30, 3 * 30, 30, 30);
board[7][4] = 4;
context.fillRect(7 * 30, 4 * 30, 30, 30);
board[7][5] = 4;
context.fillRect(7 * 30, 5 * 30, 30, 30);
board[7][7] = 4;
context.fillRect(7 * 30, 7 * 30, 30, 30);
board[7][8] = 4;
context.fillRect(7 * 30, 8 * 30, 30, 30);

board[12][0] = 4;
context.fillRect(12 * 30, 0 * 30, 30, 30);
board[12][1] = 4;
context.fillRect(12 * 30, 1 * 30, 30, 30);
board[12][2] = 4;
context.fillRect(12 * 30, 2 * 30, 30, 30);
board[12][3] = 4;
context.fillRect(12 * 30, 3 * 30, 30, 30);
board[12][4] = 4;
context.fillRect(12 * 30, 4 * 30, 30, 30);
board[12][5] = 4;
context.fillRect(12 * 30, 5 * 30, 30, 30);
board[12][7] = 4;
context.fillRect(12 * 30, 7 * 30, 30, 30);
board[12][8] = 4;
context.fillRect(12 * 30, 8 * 30, 30, 30);

//chunk7
board[7][12] = 4;
context.fillRect(7 * 30, 12 * 30, 30, 30);
board[7][14] = 4;
context.fillRect(7 * 30, 14 * 30, 30, 30);
board[7][15] = 4;
context.fillRect(7 * 30, 15 * 30, 30, 30);
board[7][16] = 4;
context.fillRect(7 * 30, 16 * 30, 30, 30);
board[7][17] = 4;
context.fillRect(7 * 30, 17 * 30, 30, 30);
board[7][18] = 4;
context.fillRect(7 * 30, 18 * 30, 30, 30);
board[7][19] = 4;
context.fillRect(7 * 30, 19 * 30, 30, 30);

board[12][12] = 4;
context.fillRect(12 * 30, 12 * 30, 30, 30);
board[12][14] = 4;
context.fillRect(12 * 30, 14 * 30, 30, 30);
board[12][15] = 4;
context.fillRect(12 * 30, 15 * 30, 30, 30);
board[12][16] = 4;
context.fillRect(12 * 30, 16 * 30, 30, 30);
board[12][17] = 4;
context.fillRect(12 * 30, 17 * 30, 30, 30);
board[12][18] = 4;
context.fillRect(12 * 30, 18 * 30, 30, 30);
board[12][19] = 4;
context.fillRect(12 * 30, 19 * 30, 30, 30);

//chunk8
board[14][7] = 4;
context.fillRect(14 * 30, 7 * 30, 30, 30);
board[15][7] = 4;
context.fillRect(15 * 30, 7 * 30, 30, 30);
board[16][7] = 4;
context.fillRect(16 * 30, 7 * 30, 30, 30);
board[17][7] = 4;
context.fillRect(17 * 30, 7 * 30, 30, 30);
board[18][7] = 4;
context.fillRect(18 * 30, 7 * 30, 30, 30);
board[19][7] = 4;
context.fillRect(19 * 30, 7 * 30, 30, 30);

board[14][12] = 4;
context.fillRect(14 * 30, 12 * 30, 30, 30);
board[15][12] = 4;
context.fillRect(15 * 30, 12 * 30, 30, 30);
board[16][12] = 4;
context.fillRect(16 * 30, 12 * 30, 30, 30);
board[17][12] = 4;
context.fillRect(17 * 30, 12 * 30, 30, 30);
board[18][12] = 4;
context.fillRect(18 * 30, 12 * 30, 30, 30);
board[19][12] = 4;
context.fillRect(19 * 30, 12 * 30, 30, 30);

// ---------------------------------------------------

//chunk9
board[1][9] = 4;
context.fillRect(1 * 30, 9 * 30, 30, 30);
board[2][9] = 4;
context.fillRect(2 * 30, 9 * 30, 30, 30);
board[3][9] = 4;
context.fillRect(3 * 30, 9 * 30, 30, 30);
board[4][9] = 4;
context.fillRect(4 * 30, 9 * 30, 30, 30);
board[15][9] = 4;
context.fillRect(15 * 30, 9 * 30, 30, 30);
board[16][9] = 4;
context.fillRect(16 * 30, 9 * 30, 30, 30);
board[17][9] = 4;
context.fillRect(17 * 30, 9 * 30, 30, 30);
board[18][9] = 4;
context.fillRect(18 * 30, 9 * 30, 30, 30);

board[1][10] = 4;
context.fillRect(1 * 30, 10 * 30, 30, 30);
board[2][10] = 4;
context.fillRect(2 * 30, 10 * 30, 30, 30);
board[3][10] = 4;
context.fillRect(3 * 30, 10 * 30, 30, 30);
board[4][10] = 4;
context.fillRect(4 * 30, 10 * 30, 30, 30);
board[15][10] = 4;
context.fillRect(15 * 30, 10 * 30, 30, 30);
board[16][10] = 4;
context.fillRect(16 * 30, 10 * 30, 30, 30);
board[17][10] = 4;
context.fillRect(17 * 30, 10 * 30, 30, 30);
board[18][10] = 4;
context.fillRect(18 * 30, 10 * 30, 30, 30);

board[6][10] = 4;
context.fillRect(6 * 30, 10 * 30, 30, 30);
board[7][10] = 4;
context.fillRect(7 * 30, 10 * 30, 30, 30);
board[8][10] = 4;
context.fillRect(8 * 30, 10 * 30, 30, 30);
board[9][10] = 4;
context.fillRect(9 * 30, 10 * 30, 30, 30);
board[10][10] = 4;
context.fillRect(10 * 30, 10 * 30, 30, 30);
board[11][10] = 4;
context.fillRect(11 * 30, 10 * 30, 30, 30);
board[12][10] = 4;
context.fillRect(12 * 30, 10 * 30, 30, 30);
board[13][10] = 4;
context.fillRect(13 * 30, 10 * 30, 30, 30);

//chunk10
board[9][12] = 4;
context.fillRect(9 * 30, 12 * 30, 30, 30);
board[9][13] = 4;
context.fillRect(9 * 30, 13 * 30, 30, 30);
board[9][14] = 4;
context.fillRect(9 * 30, 14 * 30, 30, 30);
board[9][15] = 4;
context.fillRect(9 * 30, 15 * 30, 30, 30);
board[9][16] = 4;
context.fillRect(9 * 30, 16 * 30, 30, 30);
board[9][17] = 4;
context.fillRect(9 * 30, 17 * 30, 30, 30);
board[9][18] = 4;
context.fillRect(9 * 30, 18 * 30, 30, 30);

board[10][12] = 4;
context.fillRect(10 * 30, 12 * 30, 30, 30);
board[10][13] = 4;
context.fillRect(10 * 30, 13 * 30, 30, 30);
board[10][14] = 4;
context.fillRect(10 * 30, 14 * 30, 30, 30);
board[10][15] = 4;
context.fillRect(10 * 30, 15 * 30, 30, 30);
board[10][16] = 4;
context.fillRect(10 * 30, 16 * 30, 30, 30);
board[10][17] = 4;
context.fillRect(10 * 30, 17 * 30, 30, 30);
board[10][18] = 4;
context.fillRect(10 * 30, 18 * 30, 30, 30);

board[9][1] = 4;
context.fillRect(9 * 30, 1 * 30, 30, 30);
board[9][2] = 4;
context.fillRect(9 * 30, 2 * 30, 30, 30);
board[9][3] = 4;
context.fillRect(9 * 30, 3 * 30, 30, 30);
board[9][4] = 4;
context.fillRect(9 * 30, 4 * 30, 30, 30);
board[9][5] = 4;
context.fillRect(9 * 30, 5 * 30, 30, 30);
board[9][6] = 4;
context.fillRect(9 * 30, 6 * 30, 30, 30);
board[9][7] = 4;
context.fillRect(9 * 30, 7 * 30, 30, 30);
board[9][8] = 4;
context.fillRect(9 * 30, 8 * 30, 30, 30);

board[10][1] = 4;
context.fillRect(10 * 30, 1 * 30, 30, 30);
board[10][2] = 4;
context.fillRect(10 * 30, 2 * 30, 30, 30);
board[10][3] = 4;
context.fillRect(10 * 30, 3 * 30, 30, 30);
board[10][4] = 4;
context.fillRect(10 * 30, 4 * 30, 30, 30);
board[10][5] = 4;
context.fillRect(10 * 30, 5 * 30, 30, 30);
board[10][6] = 4;
context.fillRect(10 * 30, 6 * 30, 30, 30);
board[10][7] = 4;
context.fillRect(10 * 30, 7 * 30, 30, 30);
board[10][8] = 4;
context.fillRect(10 * 30, 8 * 30, 30, 30);

// ---------------------------------------------------

//chunk11
board[3][3] = 4;
context.fillRect(3 * 30, 3 * 30, 30, 30);
board[3][4] = 4;
context.fillRect(3 * 30, 4 * 30, 30, 30);
board[3][5] = 4;
context.fillRect(3 * 30, 5 * 30, 30, 30);
board[5][3] = 4;
context.fillRect(5 * 30, 3 * 30, 30, 30);
board[4][3] = 4;
context.fillRect(4 * 30, 3 * 30, 30, 30);
board[4][4] = 4;
context.fillRect(4 * 30, 4 * 30, 30, 30);
board[4][5] = 4;
context.fillRect(4 * 30, 5 * 30, 30, 30);
board[5][4] = 4;
context.fillRect(5 * 30, 4 * 30, 30, 30);
board[5][5] = 4;
context.fillRect(5 * 30, 5 * 30, 30, 30);


//chunk12
board[16][16] = 4;
context.fillRect(16 * 30, 16 * 30, 30, 30);
board[16][15] = 4;
context.fillRect(16 * 30, 15 * 30, 30, 30);
board[16][14] = 4;
context.fillRect(16 * 30, 14 * 30, 30, 30);
board[14][16] = 4;
context.fillRect(14 * 30, 16 * 30, 30, 30);
board[15][16] = 4;
context.fillRect(15 * 30, 16 * 30, 30, 30);
board[15][15] = 4;
context.fillRect(15 * 30, 15 * 30, 30, 30);
board[15][14] = 4;
context.fillRect(15 * 30, 14 * 30, 30, 30);
board[14][15] = 4;
context.fillRect(14 * 30, 15 * 30, 30, 30);
board[14][14] = 4;
context.fillRect(14 * 30, 14 * 30, 30, 30);

//chunk13
board[3][16] = 4;
context.fillRect(3 * 30, 16 * 30, 30, 30);
board[3][15] = 4;
context.fillRect(3 * 30, 15 * 30, 30, 30);
board[3][14] = 4;
context.fillRect(3 * 30, 14 * 30, 30, 30);
board[5][16] = 4;
context.fillRect(5 * 30, 16 * 30, 30, 30);
board[4][16] = 4;
context.fillRect(4 * 30, 16 * 30, 30, 30);
board[4][15] = 4;
context.fillRect(4 * 30, 15 * 30, 30, 30);
board[4][14] = 4;
context.fillRect(4 * 30, 14 * 30, 30, 30);
board[5][15] = 4;
context.fillRect(5 * 30, 15 * 30, 30, 30);
board[5][14] = 4;
context.fillRect(5 * 30, 14 * 30, 30, 30);

    //chunk14
    board[16][3] = 4;
    context.fillRect(16 * 30, 3 * 30, 30, 30);
    board[16][4] = 4;
    context.fillRect(16 * 30, 4 * 30, 30, 30);
    board[16][5] = 4;
    context.fillRect(16 * 30, 5 * 30, 30, 30);
    board[14][3] = 4;
    context.fillRect(14 * 30, 3 * 30, 30, 30);
    board[15][3] = 4;
    context.fillRect(15 * 30, 3 * 30, 30, 30);
    board[15][4] = 4;
    context.fillRect(15 * 30, 4 * 30, 30, 30);
    board[15][5] = 4;
    context.fillRect(15 * 30, 5 * 30, 30, 30);
    board[14][4] = 4;
    context.fillRect(14 * 30, 4 * 30, 30, 30);
    board[14][5] = 4;
    context.fillRect(14 * 30, 5 * 30, 30, 30);
	
	board[0][7] = 4;
	context.fillRect(0 * 30, 7 * 30, 30, 30);
}
function draw_pacman() {
    let find_position = false;
    // let rand_x = Math.floor(Math.random() * 20);
    // let rand_y = Math.floor(Math.random() * 20);
	let tup=getRandomEmptyCell();
	let rand_x=tup[0];
	let rand_y=tup[1];
    shape.i = rand_x;
    shape.j = rand_y;
    while (!find_position) {
        if (board[rand_x][rand_y] == 0) {
            board[rand_x][rand_y] = 2;//pacman
			actor.src="Images/pacman/pacman2.png";
            context.drawImage(actor, shape.i * 30,  shape.j * 30, 33,33);
            find_position = true;
        }
    }
    find_position=true
}

	
	function findRandomEmptyCell(board) {
		var i = Math.floor(Math.random() * (boardSize-1) + 1);
		var j = Math.floor(Math.random() * (boardSize-1) + 1);
		while (board[i][j] != "empty") {
			i = Math.floor(Math.random() * (boardSize-1) + 1);
			j = Math.floor(Math.random() * (boardSize-1) + 1);
		}
		return [i, j];
	}

	
	
	function GetKeyPressed() {
		if (keysDown[38]) {
			return 1;
		}
		if (keysDown[40]) {
			return 2;
		}
		if (keysDown[37]) {
			return 3;
		}
		if (keysDown[39]) {
			return 4;
		}
	}
	
	function Draw() {
		canvas.width = canvas.width; //clean board
		context.rect(0, 0, boardWidth, boardHeight);
		context.fillStyle = "blue";
		context.fill();
		lblScore.value = score;
		lblTime.value = time_elapsed;
		//draw_walls();
		for (var i = 0; i < boardSize; i++) {
			for (var j = 0; j < boardSize; j++) {
				var center = new Object();
				center.x = i * boardCell + boardCellRadius;
				center.y = j * boardCell + boardCellRadius;
				if (board[i][j] === "pacmen") {
					context.drawImage(actor,i*30,j*30,33,33);
					//drawPacmenImg(center.x,center.y);
				}
				 else if (board[i][j] ===5) {
					context.drawImage(color5,i*30,j*30,25,25);
				} 
				else if (board[i][j] ===15) {
					context.drawImage(color15,i*30,j*30,25,25);

				} 
				
				else if (board[i][j] ===25) {
					context.drawImage(color25,i*30,j*30,25,25);

				} 
				
				
				
				else if (board[i][j] ===4) {
					context.beginPath();
					context.rect(30*i,30*j,30,30)
					//context.rect(center.x - boardCellRadius, center.y - boardCellRadius, boardCell, boardCell);
					context.fillStyle = "black"; //color
					context.fill();
				}
			}
		}
		if(monsterNumber==1){
		context.drawImage(ghost1Img,ghost1_x*30,ghost1_y*30,35,35);
		}
		if(monsterNumber==2){
			context.drawImage(ghost1Img,ghost1_x*30,ghost1_y*30,35,35);
			context.drawImage(ghost2Img,ghost2_x*30,ghost2_y*30,35,35);
		}
		if(monsterNumber==3){
			context.drawImage(ghost1Img,ghost1_x*30,ghost1_y*30,35,35);
			context.drawImage(ghost2Img,ghost2_x*30,ghost2_y*30,35,35);
			context.drawImage(ghost3Img,ghost3_x*30,ghost3_y*30,35,35);
		}
		if(monsterNumber==4){
			context.drawImage(ghost1Img,ghost1_x*30,ghost1_y*30,35,35);
			context.drawImage(ghost2Img,ghost2_x*30,ghost2_y*30,35,35);
			context.drawImage(ghost3Img,ghost3_x*30,ghost3_y*30,35,35);
			context.drawImage(ghost4Img,ghost4_x*30,ghost4_y*30,35,35);
		}
	}
	
	function draw_ghosts(){
		ghost1Img=new Image();
		ghost1Img.src="Images/ghosts/ghost1.png";
		ghost2Img=new Image();
		ghost2Img.src="Images/ghosts/ghost2.png";
		ghost3Img=new Image();
		ghost3Img.src="Images/ghosts/ghost3.png";
		ghost4Img=new Image();
		ghost4Img.src="Images/ghosts/ghost4.png";
		if (monsterNumber==1){
			ghost1_x=0;
			ghost1_y=0;
			context.drawImage(ghost1Img,ghost1_x*10,ghost1_y*10,35,35);
		}

		if (monsterNumber==2){
			ghost1_x=0;
			ghost1_y=0;
			context.drawImage(ghost1Img,ghost1_x*10,ghost1_y*10,35,35);
			ghost2_x=0;
			ghost2_y=19;
			context.drawImage(ghost2Img,ghost2_x*10,ghost2_y*10,35,35);
		}
		if (monsterNumber==3){
			ghost1_x=0;
			ghost1_y=0;
			context.drawImage(ghost1Img,ghost1_x*10,ghost1_y*10,35,35);
			ghost2_x=0;
			ghost2_y=19;
			context.drawImage(ghost2Img,ghost2_x*10,ghost2_y*10,35,35);
			ghost3_x=19;
			ghost3_y=0;
			context.drawImage(ghost3Img,ghost3_x*10,ghost3_y*10,35,35);
		}

		if (monsterNumber==4){
			ghost1_x=0;
			ghost1_y=0;
			context.drawImage(ghost1Img,ghost1_x*10,ghost1_y*10,35,35);
			ghost2_x=0;
			ghost2_y=19;
			context.drawImage(ghost2Img,ghost2_x*10,ghost2_y*10,35,35);
			ghost3_x=19;
			ghost3_y=0;
			context.drawImage(ghost3Img,ghost3_x*10,ghost3_y*10,35,35);
			ghost4_x=19;
			ghost4_y=19;
			context.drawImage(ghost4Img,ghost4_x*10,ghost4_y*10,35,35);
		}

	}

	function move_monsters(){
		var lst=[-1,0,1];
		let rand_x=Math.floor(Math.random()*3);
		let rand_y=Math.floor(Math.random()*3);
		while (board[ghost1_x+lst[rand_x]][ghost1_y+lst[rand_y]]==4){
			rand_x=Math.floor(Math.random()*3);
			rand_y=Math.floor(Math.random()*3);
		}
		ghost1_x=ghost1_x+lst[rand_x];
		ghost1_y=ghost1_y+lst[rand_y];

		while (board[ghost2_x+lst[rand_x]][ghost2_y+lst[rand_y]]==4){
			rand_x=Math.floor(Math.random()*3);
			rand_y=Math.floor(Math.random()*3);
		}
		ghost2_x=ghost2_x+lst[rand_x];
		ghost2_y=ghost2_y+lst[rand_y];

		while (board[ghost3_x+lst[rand_x]][ghost3_y+lst[rand_y]]==4){
			rand_x=Math.floor(Math.random()*3);
			rand_y=Math.floor(Math.random()*3);
		}
		ghost3_x=ghost3_x+lst[rand_x];
		ghost3_y=ghost3_y+lst[rand_y];

		while (board[ghost4_x+lst[rand_x]][ghost4_y+rlst[and_y]]==4){
			rand_x=Math.floor(Math.random()*3);
			rand_y=Math.floor(Math.random()*3);
		}
		ghost4_x=ghost4_x+lst[rand_x];
		ghost4_y=ghost4_y+lst[rand_y];

	}
	function drawPacmenImg(x,y){
		actor.src="Images/pacman/pacman2.png";
		context.drawImage(actor,x-boardCellRadius/1.5, y-boardCellRadius/1.5, boardCellRadius*1.5, boardCellRadius*1.5);

	}
	function UpdatePosition() {

		board[shape.i][shape.j] = "empty";
		var x = GetKeyPressed();
		if (x == 1) {
			if (shape.j > 0 && board[shape.i][shape.j - 1] != 4) {
				shape.j--;
			}
		}
		if (x == 2) {
			if (shape.j < (boardSize-1) && board[shape.i][shape.j + 1] != 4) {
				shape.j++;
			}
		}
		if (x == 3) {
			if (shape.i > 0 && board[shape.i - 1][shape.j] != 4) {
				shape.i--;
			}
		}
		if (x == 4) {
			if (shape.i < (boardSize-1) && board[shape.i + 1][shape.j] != 4) {
				shape.i++;
			}
		}

		if (board[shape.i][shape.j] == 5) {
			score += 5;
		}
		else if (board[shape.i][shape.j] == 15) {
			score += 15;
		}
		else if (board[shape.i][shape.j] ==25) {
			score += 25;
		}
		board[shape.i][shape.j] = "pacmen";
		var currentTime = new Date();
		time_elapsed = (currentTime - start_time) / 1000;
		// if (score >= 20 && time_elapsed <= 10) {
		// 	pac_color = "green";
		// }
		if (score == 100) {
			window.clearInterval(interval);
			window.alert("Game completed");
		} else {
			Draw();
		}
	}