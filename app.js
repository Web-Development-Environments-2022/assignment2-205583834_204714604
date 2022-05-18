var context;
var shape = new Object();
var board;
var score;
var pac_color;
var start_time;
var time_elapsed;
var interval;
var actor=new Image()
var food;
var foodImage;
var wallImage;
foodImage=new Image();


// $(document).ready(function() {
// 	context = canvas.getContext("2d");
// 	Start();
// });

function Start() {
	context = canvas.getContext("2d");
// 	canvas.width=canvas.width;
// 	console.log("start");
// 	board = new Array();
// 	food=new Image();
// 	food.src='Images/medcine.png';
// 	context.drawImage(food,20,20,20,20)
	

// 	//food=document.getElementById("food")
// 	score = 0;
// 	pac_color = "yellow";
// 	var cnt = 100;
// 	var food_remain = 50;
// 	var pacman_remain = 1;
// 	start_time = new Date();
// 	for (var i = 0; i < 10; i++) {
// 		board[i] = new Array();
// 		//put obstacles in (i=3,j=3) and (i=3,j=4) and (i=3,j=5), (i=6,j=1) and (i=6,j=2)
// 		for (var j = 0; j < 10; j++) {
// 			if (
// 				(i == 3 && j == 3) ||
// 				(i == 3 && j == 4) ||
// 				(i == 3 && j == 5) ||
// 				(i == 6 && j == 1) ||
// 				(i == 6 && j == 2)
// 			) {
// 				board[i][j] = 4;
// 			} else {
// 				var randomNum = Math.random();
// 				if (randomNum <= (1.0 * food_remain) / cnt) {
// 					food_remain--;
// 					board[i][j] = 1;
// 				} else if (randomNum < (1.0 * (pacman_remain + food_remain)) / cnt) {
// 					shape.i = i;
// 					shape.j = j;
// 					pacman_remain--;
// 					board[i][j] = 2;
// 				} else {
// 					board[i][j] = 0;
// 				}
// 				cnt--;
// 			}
// 		}
// 	}
// 	while (food_remain > 0) {
// 		var emptyCell = findRandomEmptyCell(board);
// 		board[emptyCell[0]][emptyCell[1]] = 1;
// 		food_remain--;
// 	}
// 	keysDown = {};
// 	addEventListener(
// 		"keydown",
// 		function(e) {
// 			keysDown[e.keyCode] = true;
// 		},
// 		false
// 	);
// 	addEventListener(
// 		"keyup",
// 		function(e) {
// 			keysDown[e.keyCode] = false;
// 		},
// 		false
// 	);
// 	interval = setInterval(UpdatePosition, 250);
// }

// function findRandomEmptyCell(board) {
// 	var i = Math.floor(Math.random() * 9 + 1);
// 	var j = Math.floor(Math.random() * 9 + 1);
// 	while (board[i][j] != 0) {
// 		i = Math.floor(Math.random() * 9 + 1);
// 		j = Math.floor(Math.random() * 9 + 1);
// 	}
// 	return [i, j];
// }

// function GetKeyPressed() {
// 	if (keysDown[38]) {//up
// 		return 1;
// 	}
// 	if (keysDown[40]) {//down
// 		return 2;
// 	}
// 	if (keysDown[37]) {//left
// 		return 3;
// 	}
// 	if (keysDown[39]) {//right
// 		return 4;
// 	}
}


function Draw() {
	canvas.width = canvas.width; //clean board

	lblScore.value = score;
	lblTime.value = time_elapsed;
	for (var i = 0; i < 10; i++) {
		for (var j = 0; j < 10; j++) {
			var center = new Object();
			center.x = i * 60 + 30;
			center.y = j * 60 + 30;
			if (board[i][j] == 2) {
				context.beginPath();
				context.arc(center.x, center.y, 30, 0.15 * Math.PI, 1.85 * Math.PI); // half circle
				context.lineTo(center.x, center.y);
				context.fillStyle = pac_color; //color
				context.fill();
				context.beginPath();
				context.arc(center.x + 5, center.y - 15, 5, 0, 2 * Math.PI); // circle
				context.fillStyle = "black"; //color
				context.fill();
			} else if (board[i][j] == 1) {
				rand=Math.floor(Math.random()*10)
                if ((rand)%10==0){
                    foodImage.src="Images/flags/flag1.gif";
                }
                if (rand%10==1){
                    foodImage.src="Images/flags/flag2.gif";

                }

                if (rand%10==2){
                    foodImage.src="Images/flags/flag3.gif";

                }

                if (rand%10==3){
                    foodImage.src="Images/flags/flag4.gif";

                }

                if (rand%10==4){
                    foodImage.src="Images/flags/flag5.gif";

                }

                if (rand%10==5){
                    foodImage.src="Images/flags/flag6.gif";

                }

                if (rand%10==6){
                    foodImage.src="Images/flags/flag7.gif";
                }

                if (rand%10==7){
                    foodImage.src="Images/flags/flag8.gif";
                }

                if (rand%10==8){foodImage.src="Images/flags/flag9.gif";}
                if (rand%10==9){foodImage.src="Images/flags/flag10.gif";}
				context.drawImage(foodImage,20,20,20,20)
			} else if (board[i][j] == 4) {
				wallImage=new Image();
                wallImage.src="Images/wall.webp"
				context.drawImage(wallImage,20,20,20,20)
			}
		}
	}
}

function UpdatePosition() {
	board[shape.i][shape.j] = 0;
	var x = GetKeyPressed();
	if (x == 1) {
		if (shape.j > 0 && board[shape.i][shape.j - 1] != 4) {
			shape.j--;
		}
	}
	if (x == 2) {
		if (shape.j < 9 && board[shape.i][shape.j + 1] != 4) {
			shape.j++;
		}
	}
	if (x == 3) {
		if (shape.i > 0 && board[shape.i - 1][shape.j] != 4) {
			shape.i--;
		}
	}
	if (x == 4) {
		if (shape.i < 9 && board[shape.i + 1][shape.j] != 4) {
			shape.i++;
		}
	}
	if (board[shape.i][shape.j] == 1) {
		score++;
	}
	board[shape.i][shape.j] = 2;
	var currentTime = new Date();
	time_elapsed = (currentTime - start_time) / 1000;
	if (score >= 20 && time_elapsed <= 10) {
		pac_color = "green";
	}
	if (score == 50) {
		window.clearInterval(interval);
		window.alert("Game completed");
	} else {
		Draw();
	}
}

// ======================================================================================================================================================


function replace(show) {
	if (show =="welcome")
	{
		$("#welcome").show();
		$("#register").hide();
		$("#login").hide();
		$("#about").hide();
		$("#game").hide();
		$("#settings").hide();

	}

	if (show =="register")
	{
		$("#welcome").hide();
		$("#register").show();
		$("#login").hide();
		$("#about").hide();
		$("#game").hide();
		$("#settings").hide();

	}

	if (show =="login")
	{
		$("#welcome").hide();
		$("#register").hide();
		$("#login").show();
		$("#about").hide();
		$("#game").hide();
		$("#settings").hide();

	} 

	if (show =="about")
	{
		$("#welcome").hide();
		$("#register").hide();
		$("#login").hide();
		$("#about").show();
		$("#game").hide();
		$("#settings").hide();

	} 

	if (show =="game")
	{
		$("#welcome").hide();
		$("#register").hide();
		$("#login").hide();
		$("#about").hide();
		$("#game").show();
		$("#settings").hide();

	} 
	if (show =="settings")
	{
		$("#welcome").hide();
		$("#register").hide();
		$("#login").hide();
		$("#about").hide();
		$("#game").hide();
		$("#settings").show();

	} 
}

// function checkFields(){
//   // YOUR JQUERY
//   var usernameValue=$("username").val()
//   var passwordValue=$("#password").val();
//   var fullnameValue=$("#fullname").val();
//   var emailValue=$("#email").val();
//   var dateValue=$("date").val();

//   $("#myform").validate({
// 	  rules:{
// 		usernameValue:{
// 			  required:true
// 		  },
// 		  passwordValue:{
// 			  required:true,
// 			  minlength:6,
// 		  }
// 	  }
//   });
// };

// function registerUser(){
// 	let usernameValue=$("#username").val()
// 	let passwordValue=$("#psw").val();
// 	let fullnameValue=$("#fullname").val();
// 	let emailValue=$("#email").val();
// 	let dateValue=$("#date").val();
// 	let user={username:usernameValue,password:passwordValue,fullname:fullnameValue, email:emailValue,date:dateValue};
// 	users.push(user)
// }

function draw_pacman(ctx){
	pac_radius=20;
	pac_x=20;
	pac_y=20;
	ctx.beginPath();
	ctx.arc(pac_x,pac_y,pac_radius,Math.PI*2,Math.PI*1.5);
	ctx.fillStyle='yellow';
	ctx.fill();
	ctx.beginPath();
	ctx.fill();
	ctx.arc(pac_x+pac_radius*Math.sin(45)/2,pac_y-pac_radius*Math.sin(45)/2,3,0,Math.PI*2)
	ctx.fillStyle='black'
	ctx.fill();	
}