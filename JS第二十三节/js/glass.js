(function() {
	//默认参数
	var config = {
		width: 350,
		height: 350,
		borderWidth: 1,
		borderColor: "black"
	};
	$.fn.extend({
		glass: function(gconfig) {
			//取各种东西
			var $glassWrap = $(".glass-wrap");
			var $glassWrapSmall = $(".glass-wrap-small");
			var $glassWrapBig = $(".glass-wrap-big");
			var $glassImgSmall = $(".glass-img-small");
			var $glassImgBig = $(".glass-img-big");
			var $glassBox = $(".glass-box");
			//参数合并 {}:空的json数据，config:给定的json数据，gconfig:参数
			var newConfig = $.extend({}, config, gconfig);
			//放大镜容器的样式
			//					console.log(newConfig);
			$glassWrap.css({
				position: "relative",
			});
			//小图容器
			$glassWrapSmall.css({
				width: newConfig.width + "px",
				height: newConfig.height + "px",
				border: newConfig.borderWidth + "px solid " + newConfig.borderColor,
				position: "absolute",
				left: 0,
				top: 0
			});
			//大图容器
			$glassWrapBig.css({
				width: newConfig.width + "px",
				height: newConfig.height + "px",
				border: newConfig.borderWidth + "px solid " + newConfig.borderColor,
				position: "absolute",
				top: 0,
				left: newConfig.borderWidth * 2 + newConfig.width + "px",
				overflow: "hidden",
				display: "none"
			});
			//小图样式
			$glassImgSmall.css({
				width: "100%",
				height: "100%",
				position: "absolute",
				top: 0,
				left: 0
			});
			//大图样式
			$glassImgBig.css({
				position: "absolute",
				top: 0,
				left: 0
			});
			//挡板样式
			$glassBox.css({
				position: "absolute",
				top: 0,
				left: 0,
				width: "150px",
				height: "150px",
				backgroundColor: "gray",
				opacity: "0.3",
				display: "none"
			});
			$glassWrapSmall.mouseover(function() {
				$glassBox.show();
				$glassWrapBig.show();
				$glassWrapSmall.mouseout(function() {
					$glassWrapBig.hide();
					$glassBox.hide();
				});
				$glassWrapSmall.mousemove(function(ev) {
					var evObj = ev || event;
					var x = evObj.clientX - $glassWrapSmall.offset().left - ($glassBox.width() / 2);
					var y = evObj.clientY - $glassWrapSmall.offset().top - ($glassBox.height() / 2);

					var maxX = $glassWrapSmall.width() - $glassBox.width();
					var maxY = $glassWrapSmall.height() - $glassBox.height();
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
					$glassBox.css({
						left: x,
						top: y
					});
					var xiX = x / maxX;
					var xiY = y / maxY;
					$glassImgBig.css({
						left: ($glassWrapBig.width() - newConfig.borderWidth * 2 - $glassImgBig.width()) * xiX,
						top: ($glassWrapBig.height() - newConfig.borderWidth * 2 - $glassImgBig.height()) * xiY
					});
				});
			});
		}
	})
})()