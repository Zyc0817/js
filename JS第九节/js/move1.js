function getStyle(obj, attr) {
	if (obj.currentStyle) {
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, false)[attr];
	}
}
function startMove(obj, aim, attr) {
	clearInterval(obj.time);
	obj.time = setInterval(function() {
		//取到起始点
		var curr = 0;
		var speed = 0;
		if (attr == "opacity") {
			curr = parseFloat(getStyle(obj, attr));
			speed = (aim - curr) * 100 / 8;	
		} else {
			curr = parseInt(getStyle(obj, attr));
			speed = (aim - curr) / 8;
		}
		//设置速度
		speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
		//判断什么时候停止
		if (curr == aim) {
			clearInterval(obj.time);
		} else {
			if (attr == "opacity") {
				obj.style[attr] = parseFloat((curr + speed / 100).toFixed(2));
			} else {
				obj.style[attr] = curr + speed + "px";
			}
		}
	}, 30);
}