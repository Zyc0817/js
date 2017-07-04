var tl = document.getElementById("top_left");
var tlb = document.getElementById("top_left_bottom");
var tlr = document.getElementById("top_left_right")
var nav1 = document.getElementById("nav1");
var ul1 = document.getElementById("ul1");
var li1 = document.getElementById("li1");
var oDiv1 = document.getElementById("div1");
tl.onmouseover = function() {
	tlb.style.display = "block";
	tlr.style.transform = "rotateZ(-180deg)";
}
tl.onmouseout = function() {
	tlb.style.display = "none";
	tlr.style.transform = "rotateZ(0deg)";
}
nav1.onmouseover = function(ev) {
	var evObj = ev || event;
	var target = evObj.target || evObj.srcElement;
	if(target.tagName == "LI") {
		target.style.color = "darkred";
		target.style.backgroundColor = "rgb(249,249,249)";
	}

}
nav1.onmouseout = function(ev) {
	var evObj = ev || event;
	var target = evObj.target || evObj.srcElement;
	if(target.tagName == "LI") {
		target.style.color = "";
		target.style.backgroundColor = "";
	}
}
var wrap = document.getElementById("wrap");
var fd = document.getElementById("fd");
var max = document.getElementById("max");
var maxImg = document.getElementById("maximg");
wrap.onmouseover = function() {
	fd.style.display = "block";
	max.style.display = "block";
	wrap.onmousemove = function(ev) {
		var maxX = wrap.offsetWidth - fd.offsetWidth;
		var maxY = wrap.offsetHeight - fd.offsetHeight;
		var evObj = ev || event;
		var x = evObj.clientX - wrap.offsetLeft - fd.offsetWidth / 2;
		var y = evObj.clientY - fd.offsetHeight / 2 - wrap.offsetTop;
		if(x <= 0) {
			x = 0;
		} else if(x >= maxX) {
			x = maxX;
		}
		if(y <= 0) {
			y = 0;
		} else if(y >= maxY) {
			y = maxY;
		}
		fd.style.left = x + "px";
		fd.style.top = y + "px";
		var a = x / maxX;
		var b = y / maxY;
		maxImg.style.left = a * (max.offsetWidth - maxImg.offsetWidth) + "px";
		maxImg.style.top = b * (max.offsetHeight - maxImg.offsetHeight) + "px";
		wrap.onmouseout = function() {
			fd.style.display = "none";
			max.style.display = "none";
		}
	}
}


var divs = document.getElementsByClassName("cbl");

for(var i = 0;i < divs.length;i++){
	divs[i].style.top = i * 38 + "px";
	divs[i].onmouseover = function(){		
//		this.style.width = 150 + "px";
//		this.style.left = -115 + "px";
		startMove(this,{width:150});
	}
	divs[i].onmouseout = function(){
//		this.style.width = 0 + "px";
//		this.style.right = 0 + "px";	
		startMove(this,{width:35});
	}
	
}

var minWrap = document.getElementById("minWrap");
var iImg = minWrap.getElementsByTagName("img");
for(var i = 0;i < iImg.length;i++){
	iImg[i].index = i + 1;
	iImg[i].onmouseover = function(){
		var aaa = this.index;
		wrap.innerHTML = "<img src=img/S-" + aaa + ".jpg />"
	}
}



