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
	
	var $centerTopLeft = $(".center_top_left");
	var $centerCenterRight = $(".center_center_right")
	var $centerTopLeftDiv = $(".center span");
	var $centerBottomLeft = $(".center_bottom_left");
	$centerTopLeft.mouseover(function(){
		$(this).children("img").attr("src","img/b-1.png").css({
			opacity:0.3
		}).animate({
			opacity:1
		},300);
		$(this).children("span").css({
			backgroundColor:"greenyellow"
		});	
	});
	$centerTopLeft.mouseout(function(){
		$(this).children("img").attr("src","img/a-1.png");
		$centerTopLeftDiv.css({
			backgroundColor:""
		});
	});
	$centerCenterRight.mouseover(function(){
		$(this).children("img").attr("src","img/b-2.png").css({
			opacity:0.3
		}).animate({
			opacity:1
		},300);;
		$(this).children("span").css({
			backgroundColor:"greenyellow"
		});
	});
	$centerCenterRight.mouseout(function(){
		$(this).children("img").attr("src","img/a-2.jpg");
		$centerTopLeftDiv.css({
			backgroundColor:""
		});
	});
	$centerBottomLeft.mouseover(function(){
		$(this).children("img").attr("src","img/b-3.jpg").css({
			opacity:0.3
		}).animate({
			opacity:1
		},300);;
		$(this).children("span").css({
			backgroundColor:"greenyellow"
		});
	});
	$centerBottomLeft.mouseout(function(){
		$(this).children("img").attr("src","img/a-3.jpg");
		$centerTopLeftDiv.css({
			backgroundColor:""
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
	
	
	
	var $img7 = $(".img7");
	var $thisUl = $(".thisul");
	var compare = true;
	var $head = $(".nav");
	$img7.click(function(){
		if(compare){
			$thisUl.animate({
				height:"130px"
			},500,function(){
//				$thisUl.css({
//					display:"block"
//				});
			});
		}else{
			$thisUl.animate({
				height:""
			},500);
		}
		compare =! compare;
		
	});
//	$thisUl.mouseout(function(){
//		$thisUl.animate({
//			height:""
//		},1000);
//	});

	window.onresize = function(){
		if(window.innerWidth >= 836){
			$thisUl.css({
				display:"none"
			})
		}else{
			$thisUl.css({
				display:"block"
			})
		}
	}
});
