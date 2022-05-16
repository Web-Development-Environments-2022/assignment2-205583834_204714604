var canvas;
var ctx;
var pacmanImg



window.addEventListener("load",setupgame,false);
function setupgame(){
    canvas=document.getElementById("canvas");
    ctx=canvas.getContext("2d");
    pacmanImg=new Image();
    pacmanImg.src="Images/pacman.JPG";
    ctx.drawImage(pacmanImg,20,20)
}

