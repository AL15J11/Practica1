// JavaScript Document
$(document).ready(function(e) {
    alert ("listo !!!")
	document.addEventListener("deviceready",function() {
		$('.btn').tap(function (){
			var boton=(($(this).attc('class')).split(' '))[1];
			
			switch(boton)
			{
				case 'b1':
				navigator.notification.bee(1);
				break;
				case 'b2':
				navigator.notification.bee(2);
				break;
				case 'b3':
				navigator.notification.bee(3);
				break;
				case 'v1':
				navigator.notification.vibrate(500);
				break;
				case 'v2':
				navigator.notification.vibrate(500);
				navigator.notification.vibrate(1000);
				break;
				
				$('#derecha'),swiperight(function(){
					navigator.notification.alert("deslizo a la derecha",function(){}."practica 1",
					"aceptar");
				});
				
			}
		});
	},false);
});