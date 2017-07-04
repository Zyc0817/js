$(function(){
	var $navAlla = $(".head_right_ul li a");
	$navAlla.mouseover(function(){
		$(this).css({
			border: "1px solid gray",
			borderRadius: 10,
			color: "white"
		})
	});
	$navAlla.mouseout(function(){
		$(this).css({
			border: "",
			color: ""
		});
	});
	
	var $bottomTopImg = $(".bottom_top img");
	$bottomTopImg.mouseover(function(){
		$bottomTopImg.attr("src","img/Z-1.jpg")
	});
	$bottomTopImg.mouseout(function(){
		$bottomTopImg.attr("src","img/2Q==-3.jpg")
	});
	
	var bottomImg = document.getElementsByClassName("bottom_bottom_img");
	var bottomUl = document.getElementsByClassName("bottom_bottom")[0];
	var bottomLi = bottomUl.getElementsByTagName("li");
	for(var i = 0;i < bottomImg.length;i++){
		bottomImg[i].index = i + 1;
		bottomImg[i].onmouseover = function(){
			var page = this.index;
			this.src = "img/h" + page + ".jpg";
			this.onmouseout = function(){
				var page1 = this.index;
				this.src = "img/" + page1 + ".jpg"; 
			}
		}	
	}
	
	var oImg1 = document.getElementsByClassName("thisimg");
	var oDiv = document.getElementsByClassName("thisDiv");
	var oImg2 = document.getElementsByClassName("center_body_div1_img");
	for(var i = 0;i < oImg1.length;i++){
		oDiv[i].onmouseover = function(){
			this.lastElementChild.src = "img/3D/green.png";
			this.onmouseout = function(){
				this.lastElementChild.src = "img/3D/white.png";
			}
		}
	}
});
