//获取cookie
function getCookie(con){
	var strings = document.cookie.split("; ");
	for(var i = 0;i < strings.length;i++){
		var a = strings[i].split("=");
		if(a[0] == con){
			return a[1];
		}
	}
	return false;
}
//存储cookie
function saveCookie(name,value,day){
	var oDate = new Date();
	oDate.setDate(oDate.getDate() + day);
	document.cookie = name + "=" + value + ";expires = " + oDate.toGMTString();
}
//删除cookie
function removeCookie(con){
	saveCookie(con,"",-1);
}
