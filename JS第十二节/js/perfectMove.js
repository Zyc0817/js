//获取样式区域某div的当前宽高
function getStyle(obj, attr) {
	if (obj.currentStyle) {
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, false)[attr];
	}
}
//fn 闭包
function startMove(obj,json,fn) {
	clearInterval(obj.time);
	obj.time = setInterval(function() {
		//用来判断我们是否所有运动都结束
		var isStop = true;
		//for in用来遍历json数据
		for (var attr in json) {
			//取到起始点
			var curr = 0;
			var speed = 0;
			//判断json里的数据是否是不透明度，不透明度的计算方法和宽高什么的不一样
			if (attr == "opacity") {
				//转换成浮点数
				curr = parseFloat(getStyle(obj, attr));
				speed = (json[attr] - curr) * 100 / 8;
			} else {
				
				curr = parseInt(getStyle(obj, attr));
				speed = (json[attr] - curr) / 8;
			}
			//设置速度
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
			//判断当前位置与目标位置是否全部都相同了，如果是则清除计时器被执行
			if (curr != json[attr]) {
				isStop = false;
			}
			//判断：透明度直接加，宽高什么的要加px
			if (attr == "opacity") {
				obj.style[attr] = parseFloat((curr + speed / 100).toFixed(2));
			} else {
				obj.style[attr] = curr + speed + "px";
			}
			
		}
		if (isStop == true) {
			clearInterval(obj.time);
			//闭包
			if (fn) {

				fn();

			}
		}
	}, 30);
}