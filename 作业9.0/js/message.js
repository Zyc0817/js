var oA1 = document.getElementById("a1");
var text1 = document.getElementById("text1");
var oBtn1 = document.getElementById("btn1");
var oP2 = document.getElementById("p2");
var oUl = document.getElementById("ul1");
var body = document.getElementById("isBody");
var time = null;
var num1 = null;
text1.onclick = function() {
	oA1.style.display = "none";
	oP2.style.display = "block";
	time = setInterval(function() {
		var num = text1.value.length;
		oP2.innerHTML = "また" + (150 - num) + "の文字を入ってる";
		num1 = num;
		if (num > 150) {
//			alert("最多输入150个字");
//			clearInterval(time);
			oP2.innerHTML = "またゼーロの文字を入ってる";
		}
	}, 30);	
}
oBtn1.onclick = function() {
	if (text1.value.length == 0) {
		alert("書くを何もねえ，アホじゃねえか");
	} else if(num1 <= 150 && num1 > 0){
		alert("発表する");
		oA1.style.display = "inline";
		oP2.style.display = "none";
		var liNew = document.createElement("li");
		var pNew1 = document.createElement("p");
		var pNew3 = document.createElement("p");
		var pNew4 = document.createElement("p");
		var aNew = document.createElement("a");
		var date1 = new Date();
		pNew1.innerHTML = "ドフラミンゴ";
		pNew3.innerHTML = text1.value;
		pNew4.innerHTML = date1.getMonth() + 1 + "月" + date1.getDate() + "日" + date1.getHours() + "点" + date1.getMinutes() + "分" + "を発表する";
		aNew.innerHTML = "×";
		liNew.style.listStyle = "none";
		liNew.appendChild(pNew1);
		liNew.appendChild(pNew3);
		liNew.appendChild(pNew4);
		liNew.appendChild(aNew);
		text1.value = null;
		liNew.setAttribute("class", "li1");
		liNew.setAttribute("id", "li1");
		var oLi1 = document.getElementById("li1");
		oUl.insertBefore(liNew, oLi1);
		pNew1.setAttribute("class", "p1");
		pNew3.setAttribute("class", "p3");
		pNew4.setAttribute("class", "p4");
		aNew.setAttribute("class", "a2");
		aNew.setAttribute("href", "###");
		aNew.setAttribute("id", "a2");
		aNew.onclick = function() {
			oUl.removeChild(this.parentNode);
		}		
	}else if(num1 >= 150){
		alert("内容な物を超える、また一度を入れください");
	}
}