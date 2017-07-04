var oLi1 = document.getElementById("li1");
var oLi2 = document.getElementById("li2");
var oUl1 = document.getElementById("ul1");
var oUl2 = document.getElementById("ul2");
oLi1.onmouseover = function() {
	oUl1.style.display = "block";
}
oLi1.onmouseout = function() {
	oUl1.style.display = "none";
}
oLi2.onmouseover = function() {
	oUl2.style.display = "block";
}
oLi2.onmouseout = function() {
	oUl2.style.display = "none";
}