

$(document).ready(function () {
	upButtonNumber = 38;
	downButtonNumber = 40;
	leftButtonNumber = 37;
	rightButtonNumber = 39;
	$("#setSettingsToGame").click(setSettings);
	$("#upbtninput").keydown(function (event) { setUpBtn(this, event); });
	$("#downbtninput").keydown(function (event) { setDownBtn(this, event); });
	$("#leftbtninput").keydown(function (event) { setLeftBtn(this, event); });
	$("#rightbtninput").keydown(function (event) { setRightBtn(this, event); });
});

function replace(show) {
	if (show == "welcome") {
		$("#welcome").show();
		$("#register").hide();
		$("#login").hide();
		$("#about").hide();
		$("#game").hide();
		$("#settings").hide();

	}

	if (show == "register") {
		$("#welcome").hide();
		$("#register").show();
		$("#login").hide();
		$("#about").hide();
		$("#game").hide();
		$("#settings").hide();

	}

	if (show == "login") {
		$("#welcome").hide();
		$("#register").hide();
		$("#login").show();
		$("#about").hide();
		$("#game").hide();
		$("#settings").hide();

	}

	if (show == "about") {
		$("#welcome").hide();
		$("#register").hide();
		$("#login").hide();
		$("#about").show();
		$("#game").hide();
		$("#settings").hide();

	}

	if (show == "game") {
		$("#welcome").hide();
		$("#register").hide();
		$("#login").hide();
		$("#about").hide();
		$("#game").show();
		$("#settings").hide();

	}
	if (show == "settings") {
		$("#welcome").hide();
		$("#register").hide();
		$("#login").hide();
		$("#about").hide();
		$("#game").hide();
		$("#settings").show();

	}
}
