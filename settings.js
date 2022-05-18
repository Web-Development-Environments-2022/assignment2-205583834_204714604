var upButtonName;
var downButtonName;
var leftButtonName;
var rightButtonName;
var upButtonNumber;
var downButtonNumber;
var leftButtonNumber;
var rightButtonNumber;
var time;
var color5;
var color15;
var color25;
var ballNumber;


function setSettings(){
    upButton=$("#upbtninput").val() 
    downButton=$("#downbtninput").val()
    upButton=$("#leftbtninput").val()
    upButton=$("#rightbtninput").val()

}

function setUpBtn(key, event){
    console.log(key)
    console.log(event.code)
    $(key).val(event.code);
    upButton = event.which;
    upButtonName = event.code;
}

function setDownBtn(key,event){
    $(key).val(event.code);
    downButton = event.which;
    downButtonCode = event.code;
}

function setLeftBtn(key,event){
    $(key).val(event.code);
    leftButton = event.which;
    leftButtonCode = event.code;
}


function setRightBtn(key,event){
    $(key).val(event.code);
    rightButton = event.which;
    rightButtonCode = event.code;
}

