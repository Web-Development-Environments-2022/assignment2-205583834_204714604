

$(document).ready(function () {
    $("#upbtninput").keydown(function (event) { setUpBtn(this, event); });
    $("#downbtninput").keydown(function (event) { setDownBtn(this, event); });
    $("#leftbtninput").keydown(function (event) { setLeftBtn(this, event); });
    $("#rightbtninput").keydown(function (event) { setRightBtn(this, event); });
});