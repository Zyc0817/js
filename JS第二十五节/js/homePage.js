var mySwiper = new Swiper('.swiper1-container', {
	autoplay: 1000, //可选选项，自动滑动
	speed: 1000,
	direction: 'horizontal',
	autoplayDisableOnInteraction: false,
//	pagination: '.swiper-pagination',
	//				paginationType : 'fraction',
	paginationClickable: true,
	prevButton: '.swiper-button-prev',
	nextButton: '.swiper-button-next',
	loop: true,
	effect: 'fade',
	fade: {
		crossFade: false,
	}
});
var mySwiper = new Swiper('.swiper2-container', {
	autoplay: 1000, //可选选项，自动滑动
	speed: 1000,
	direction: 'horizontal',
	autoplayDisableOnInteraction: false,
//	pagination: '.swiper-pagination',
	//				paginationType : 'fraction',
	paginationClickable: true,
	prevButton: '.swiper-button-prev',
	nextButton: '.swiper-button-next',
	loop: true,
	effect: 'fade',
	fade: {
		crossFade: false,
	}
});

var mySwiper = new Swiper('.swiper3-container', {
	autoplay: 3000, //可选选项，自动滑动
	speed: 1000,
	direction: 'horizontal',
	autoplayDisableOnInteraction: false,
	pagination: '.swiper-pagination',
	paginationType : 'fraction',
	paginationClickable: true,
	prevButton: '.swiper-button-prev',
	nextButton: '.swiper-button-next',
	loop: true,
//	effect: 'fade',
	fade: {
		crossFade: false,
	}
});

var wrap_div = document.getElementById("wrap_div");
var divs = wrap_div.getElementsByTagName("div");
var imgs = wrap_div.getElementsByTagName("img");
var spans = wrap_div.getElementsByTagName("span");
var arrJson = [{left: 0,zIndex: 0,scale: 0.8,opacity: 0.6,index:0}, 
			   {left: 120,zIndex: 1,scale: 0.9,opacity: 0.6,index:1}, 
			   {left: 240,zIndex: 2,scale: 1,opacity: 0,index:2}, 
			   {left: 360,zIndex: 1,scale: 0.9,opacity: 0.6,index:3}, 
			   {left: 480,zIndex: 0,scale: 0.8,opacity: 0.6,index:4}, 
			   {left: 240,zIndex: -1,scale: 0.8,opacity: 0,index:5}];
for(var i = 0; i < divs.length; i++) {
	divs[i].style.left = arrJson[i].left + "px";
	divs[i].style.zIndex = arrJson[i].zIndex;
	divs[i].style.transform = "scale(" + arrJson[i].scale + ")";
	divs[i].index = arrJson[i].index;
}
var timer = null;
var arrA = [1, 2, 3, 4, -1, 0];

function roll() {
	for(var i = 0; i < arrA.length; i++) {
		arrA[i]++;
		if(arrA[i] >= 6) {
			arrA[i] = 0;
		}
		divs[i].style.left = arrJson[arrA[i]].left + "px";
		divs[i].style.zIndex = arrJson[arrA[i]].zIndex;
		divs[i].style.transform = "scale(" + arrJson[arrA[i]].scale + ")";
		spans[i].style.opacity = arrJson[arrA[i]].opacity;
		divs[i].index = arrJson[arrA[i]].index;
	}
}
roll()
timer = setInterval(function() {
	roll();
}, 1000);
for(var i = 0; i < divs.length; i++) {
	divs[i].addEventListener("mouseover", function() {
		clearInterval(timer);
		this.lastElementChild.style.opacity = 0;
	}, false);
	divs[i].addEventListener("mouseout", function() {
		timer = setInterval(function() {
			roll()
		}, 1000);
		if(this.offsetLeft != 240) {
			this.lastElementChild.style.opacity = 0.6;
		}
	}, false);
	divs[i].addEventListener("click", function() {
		console.log(this.index)
		for(var i = 0; i < arrA.length; i++) {
			if(this.offsetLeft == 0) {
				arrA[i] += 2;
				if(arrA[i] >= 6) {
					arrA[i] += -6;
				}
			} else if(this.offsetLeft == 120) {
				arrA[i]++;
				if(arrA[i] >= 6) {
					arrA[i] = 0;
				}
			} else if(this.offsetLeft == 360) {
				arrA[i]--;
				if(arrA[i] <= -1) {
					arrA[i] = 5;
				}
			} else if(this.offsetLeft == 480) {
				arrA[i] -= 2;
				if(arrA[i] <= -1) {
					arrA[i] += 6;
				}
			}
			divs[i].style.left = arrJson[arrA[i]].left + "px";
			divs[i].style.zIndex = arrJson[arrA[i]].zIndex;
			divs[i].style.transform = "scale(" + arrJson[arrA[i]].scale + ")";
			spans[i].style.opacity = 0.6;
			this.lastElementChild.style.opacity = 0;
		}
	}, false);
}


var centerCenter1Img = document.getElementsByClassName("center_center1_img");
var centerCenter1 = document.getElementsByClassName("center_center1");
var centerCenterBottom1 = document.getElementsByClassName("center_center_bottom1")[0];
var allsImg = document.getElementsByClassName("thisimgg");
for(var i = 0;i < centerCenter1.length;i++){
	centerCenter1Img[i].onmouseover = function(){
		this.nextElementSibling.style.opacity = 1;
	}
	centerCenter1[i].onmouseleave = function(){
		this.lastElementChild.style.opacity = 0;
	}
}

for(var i = 0;i < allsImg.length;i++){
	allsImg[i].a = 0;
	allsImg[i].onmouseover = function(){	
		this.a += 360;
		this.style.transform = "rotate(" + this.a + "deg)";
	}
}
