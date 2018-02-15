"use strict";
$(document).ready(function() {
	$(".perfil").hide();
	$(".fa").hide();


/*	$("h1").mousemove(function(){
		$("#about-div").fadeIn();
	});*/


	$(".exp").mousemove(function(){
		$(".exp")
			.css("background-color","#af2424")
			.css("color","white");
		$(this)
			.css("background-color","#d3d3d1")
			.css("color","black");

	})

	console.log($("#skills").position().top);
	$(window).scroll(function(){
		console.log($(this).scrollTop());
		if($(this).scrollTop()>185)
		{
			$(".perfil").fadeIn();
			// console.log($(this).scrollTop()+"SCROLL");
			// console.log($("#skills").position().top - $("#skills").height());
			// console.log($("#skills").offset().top - $("#skills").height());	
			// $("#skills").fadeIn();
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


	})
});
