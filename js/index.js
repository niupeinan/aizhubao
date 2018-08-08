window.onload = function(){
	let header = document.querySelector(".header");
	let a = header.querySelectorAll(".right a");
	let pinpai = header.querySelector(".right a .pinpai");
	let chanpin = header.querySelector(".right a .chanpin");
	let em = header.querySelector(".right a em");
	let span = document.querySelectorAll("#span");
	a[1].onmouseenter = function(){
		pinpai.style.height = "144px";
		pinpai.style.background = "#fff";
	}
	a[1].onmouseleave = function(){
		pinpai.style.height = 0;
		pinpai.style.background = "";
	}
	a[2].onmouseenter = function(){
		chanpin.style.height = "252px";
		pinpai.style.background = "#fff";
	}
	a[2].onmouseleave = function(){
		chanpin.style.height = "0px";
		pinpai.style.background = "";
	}
	window.onscroll = function(){
		let he = document.body.scrollTop || document.documentElement.scrollTop;
		if(he >= 24){
			header.style.background = "#fff";
		}
		else{
			header.style.background = "rgba(255, 255, 255,0)";
		}
	}	
	
}