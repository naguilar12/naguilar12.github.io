"use strict";

//Se espera a que se cargue el documento
$(document).ready(function() {
	//Se esconden elementos que se animan despues
	$(".perfil").hide();
	$(".fa").hide();
	$(".sticky-top").hide();
	$("#header-pic").hide();
	$(".sticky-top").hide();
	$("#header-pic").fadeIn(1000);

	//Se anima .exp si el mouse se para encima de el
	$(".exp").mousemove(function(){
		$(".exp")
		.css("background-color","#af2424")
		.css("color","white");
		$(this)
		.css("background-color","#d3d3d1")
		.css("color","black");
	});

	//Se anima .exp si el mouse se mueve afuera de el
	$(".exp").mouseout(function(){
		$(this)
		.css("background-color","#af2424")
		.css("color","white");
	});

	//Animaciones que varian dependiendo de la posicion del scroll
	$(window).scroll(function(){
		if($(this).scrollTop()>185)
		{
			$(".perfil").fadeIn();
		}
		else{
			$(".perfil").fadeOut();
		}

		if($(this).scrollTop()>700){
			$(".sticky-top").fadeIn();
		}

		if($(this).scrollTop()<400){
			$(".sticky-top").fadeOut();
		}


		if($(this).scrollTop()>650	){
			$(".fa").fadeIn();
		}
		else{
			$(".fa").fadeOut();

		}
	});
});
