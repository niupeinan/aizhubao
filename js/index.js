window.onload=function(){
	let header=document.querySelector(".header");
	let a=header.querySelectorAll(".right a")
	console.log(a)
	let pinpai=header.querySelector(".right a .pinpai");
	let chanpin=header.querySelector(".right a .chanpin");
	a[1].onmouseenter=function(){
		pinpai.style.display="block";
	}
	a[1].onmouseleave=function(){
		pinpai.style.display="none";
	}
	a[2].onmouseenter=function(){
		chanpin.style.display="block";
	}
	a[2].onmouseleave=function(){
		chanpin.style.display="none";
	}
	window.onscroll=function(){
		let he=document.body.scrollTop || document.documentElement.scrollTop;
		console.log(he)
		if(he>=24){
			header.style.background="#fff";
		}
		else{
			header.style.background="rgba(255, 255, 255,0)";
		}
	}	
	
}