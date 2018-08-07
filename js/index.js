window.onload = function(){
	let header = document.querySelector(".header");
	let a = header.querySelectorAll(".right a");
	let pinpai = header.querySelector(".right a .pinpai");
	let chanpin = header.querySelector(".right a .chanpin");
	let em = header.querySelector(".right a em");
	let span = document.querySelectorAll("#span");
	a[1].onmouseenter = function(){
		pinpai.style.display = "block";
	}
	a[1].onmouseleave = function(){
		pinpai.style.display = "none";
	}
	a[2].onmouseenter = function(){
		chanpin.style.display = "block";
	}
	a[2].onmouseleave = function(){
		chanpin.style.display = "none";
	}
	// a[3].onmouseenter = function(){
	// 	span.style.top = 0;
	// 	span.style.display = "none";
	// 	em.style.top = "44px"
	// 	em.style.display = "block";
	// }
	// a[3].onmouseleave = function(){
	// 	span.style.display = "none";
	// 	span.style.top = "-44px";
	// 	em.style.top = 0;
	// 	em.style.display = "none";
	// }
	window.onscroll = function(){
		let he = document.body.scrollTop || document.documentElement.scrollTop;
		console.log(he)
		if(he >= 24){
			header.style.background = "#fff";
		}
		else{
			header.style.background = "rgba(255, 255, 255,0)";
		}
	}	
	
}