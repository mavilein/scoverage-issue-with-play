if (window.console) {
  console.log("Welcome to your Play application's JavaScript!");
}

$(document).ready(function(){
	$("#scoverage").click(function(){
		$("<h1>Javascript works, if you see this text!</h1>").appendTo("body");
	});
});
