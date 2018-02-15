"use strict";
$(document).ready(function() {
	$(".perfil").hide();
	$(".fa").hide();

	$(".exp").mousemove(function(){
		$(".exp")
			.css("background-color","#af2424")
			.css("color","white");
		$(this)
			.css("background-color","#d3d3d1")
			.css("color","black");

	});

	console.log($("#skills").position().top);
	$(window).scroll(function(){
		console.log($(this).scrollTop());
		if($(this).scrollTop()>185)
		{
			$(".perfil").fadeIn();
		}
		else{
			$(".perfil").fadeOut();
		}

		if($(this).scrollTop()>650	){
			$(".fa").fadeIn();
		}
		else{
			$(".fa").fadeOut();

		}
	});
});
