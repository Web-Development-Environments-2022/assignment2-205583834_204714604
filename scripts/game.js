var canvas;
var ctx;
var pacmanImg
// var flag1=new Image();
// flag1.src='Images/flags/flag1.gif'
// var flag2=new Image();
// flag2.src='Images/flags/flag2.gif'
// var flag3=new Image();
// flag3.src='Images/flags/flag3.gif'
// var flag4=new Image();
// flag4.src='Images/flags/flag4.gif'
// var flag5=new Image();
// flag5.src='Images/flags/flag5.gif'
// var flag6=new Image();
// flag6.src='Images/flags/flag6.gif'
// var flag7=new Image();
// flag7.src='Images/flags/flag7.gif'
// var flag8=new Image();
// flag8.src='Images/flags/flag8.gif'
// var flag10=new Image();
// flag10.src='Images/flags/flag10.gif'

// var flags=[flag1,flag2,flag3,flag4,flag5,flag6,flag7,flag8,flag10]



window.addEventListener("load",setupgame,false);
function setupgame(){
    canvas=document.getElementById("canvas");
    ctx=canvas.getContext("2d");
    pacmanImg=new Image();
    pacmanImg.src="Images/pacman.jpg";
    ctx.drawImage(pacmanImg,30,30,10,10)
}

function drawImages(){




}

