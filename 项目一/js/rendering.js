$(function() {
	var mySwiper = new Swiper('.swiper-container', {
		autoplay: 3000, //可选选项，自动滑动
		speed: 1000,
		direction: 'horizontal',
		autoplayDisableOnInteraction: false,
		pagination: '.swiper-pagination',
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

	var hs = [];
	var lis = [];
	for(var i = 2; i < 41; i++) {
		var li = $("<li></li>");
		li.append("<img src = 'img/rendering/" + i + ".jpg'/>");
		lis.push(li);
		li.append("<div class='thisDiv'><img src='img/rendering/view.png' id='thisDiv_img'/></div>");
	}
	var $fallsUl = $("#fallsWrapUl");

	function reHeight(bol) {
		var a1 = 0;
		if(window.innerWidth <= 469) {
			a1 = 2;
		} else {
			a1 = 4
		}

		var cols = a1;
		var arrH = [];
		for(var i = 0; i < cols; i++) {
			arrH[i] = 0;
		}
		for(var i = 0; i < lis.length; i++) {
			var minH = arrH[0];
			var minl = 0;
			for(var k = 0; k < arrH.length; k++) {
				if(minH > arrH[k]) {
					minH = arrH[k];
					minl = k;
				}
			}
			if(bol) {
				$fallsUl.append(lis[i]);

			}

			lis[i].css({
				"left": minl * (lis[i].width() + 10),
				"top": arrH[minl]
			});
			arrH[minl] = arrH[minl] + lis[i].height() + 10;
			var fallsUl = document.getElementById("fallsWrapUl");
			fallsUl.style.height = minH + 200 + "px";

			function createImg() {
				var oDiv = document.getElementsByClassName("thisDiv");
				for(var j = 0; j < oDiv.length; j++) {
					oDiv[j].onmouseover = function() {
						this.style.opacity = 0.6;
						this.onmouseleave = function() {
							this.style.opacity = "";
						}
					}
					var fdwrap = document.getElementById("fdwrap");
					oDiv[j].index = j + 2;
					oDiv[j].onclick = function() {
						fdwrap.style.display = "block";
						var pagege = this.index;
						fdwrap.lastElementChild.src = "img/rendering/" + pagege + ".jpg"
					}
					fdwrap.onclick = function() {
						fdwrap.style.display = "";
					}
				}
			}
			createImg();
		}
	}
	window.onload = function() {
		reHeight(true);
		window.onresize = function() {
			reHeight(false)
			var $thisUl = $(".thisul");
			if(window.innerWidth >= 836) {
				$thisUl.css({
					display: "none"
				});
			} else {
				$thisUl.css({
					display: "block"
				});
			}
		}
	}
});