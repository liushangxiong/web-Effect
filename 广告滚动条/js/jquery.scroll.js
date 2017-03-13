(function($){
		/***
		* position json (left,top)
		left: left center right
		top: top center bottom
		**/
		$.fn.myWindow = function(position,moveFunc){
			//alert("hello plugin");
			var $winWidth;
			var $winHeight;
			var $scrollTop;
			var $scrollLeft;
			var self = this; //将自己缓存

			//获取窗口的宽和高
			var $windowObj = $(window);
			//重新计算滚动条和窗口信息
			function getBrowser(){
				$winWidth = $windowObj.width();
				$winHeight = $windowObj.height();
				//获取滚动条的数据
				$scrollTop = $windowObj.scrollTop();
				$scrollLeft = $windowObj.scrollLeft();
			}
			getBrowser(); //初始化调用

			//获取自己的宽和高
			var $boxWidth = this.width();
			var $boxHeight = this.height();
			//获取传递的position信息
			var positionLeft = position.left;
			var positionTop = position.top;
			//屏幕中间的位置计算
			var left;
			var top;

			function calLeft(){
				//处理positionLeft
				if(positionLeft == "left"){
					left = $scrollLeft;
				}else if(positionLeft == "center"){
					left = $scrollLeft + ($winWidth - $boxWidth) /2;
				}else if(positionLeft == "right"){
					left = $scrollLeft + $winWidth - $boxWidth;
				}
			}
			calLeft(); //初始化

			function calTop(){
				//处理positionTop
				if(positionTop == "top"){
					top = $scrollTop;
				}else if(positionTop == "center"){
					top = $scrollTop + ($winHeight - $boxHeight)/2;
				}else if(positionTop == "bottom"){
					top = $scrollTop + $winHeight - $boxHeight;
				}
			}
			calTop();//初始化
			
			 
			this.css({"left":left,"top":top});
			
			//滚动条移动
			$windowObj.scroll(function(){
				change();
			});

			//窗口大小改变
			$windowObj.resize(function(){
				change();
			});

			var timer; //延时处理
			function change(){
				clearTimeout(timer); //避免生成多个定时器
				timer = setTimeout(function(){
					//重新计算滚动条和窗口信息
					getBrowser();
					calLeft();
					calTop();
					//self.css({"left":left,"top":top});
					self.animate({"left":left,"top":top},200);
				},200);
			}

			//点击X图片，div消失
			var $div = this;
			this.children(".title").children("img").click(function(){
				if(null != moveFunc){
					moveFunc();//按想要的方式消失
				}else{
					$div.hide(500);
				}
			});
			return this; //返回当前对象，方便链式调用
		}
})(jQuery);