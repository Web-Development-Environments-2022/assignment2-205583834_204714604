var canvas;
var ctx;
var foodImage;



window.addEventListener("load",setupGame,false);
function setupGame(){
    canvas=document.getElementById("canvas");
    ctx=canvas.getContext("2d");
    foodImage=new Image();
    foodImage.src="Images/food.jpg";

    draw3()
}

function draw3(){
    ctx.drawImage(foodImage,10,10);

    
}

