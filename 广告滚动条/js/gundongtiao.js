(function ($){
//  广告滚动条
    $.fn.myWindow=function (position,moveFunc){ 
			var $winWidth;
			var $winHeight;
			var $scrollTop;
			var $scrollLeft;
			var self=this;//缓存自己；
			//获取窗口宽高；
			var $windowObj=$(window);
			//从新计算滚动条和窗口信息
		    function getBrowser(){
			    $winWidth=$windowObj.width();
			    $winHeight=$windowObj.height();
			//获取滚动条
			    $scrollTop=$windowObj.scrollTop();
			    $scrollLeft=$windowObj.scrollLeft();
			}
			getBrowser();
			//获取自己的宽高
			var $boxWidth=this.width();
			var $boxHeight=this.height();
			//获取传递的position 信息
			var  positionLeft=position.left;
			var  positionTop=position.top;
			//屏幕中间位置计算
			var left;
			var top;
			//处理positionLife
		    function callLeft(){
			if(positionLeft=="center"){
				left=$scrollLeft+($winWidth-$boxWidth)/2;
			}else if(positionLeft=="left"){
				left=$scrollLeft;
			}else if(positionLeft=="right"){
			    left= $scrollLeft + $winWidth - $boxWidth;	
			}
			}
			callLeft();  //初始化；
			
            //处理positionTop
			function callTop(){
			if(positionTop=="center"){
				top=$scrollTop+($winHeight-$boxHeight)/2;
			}else if(positionTop=="top"){
				top=$scrollTop;
			}else if(positionTop=="buttom"){
			    top= $scrollTop + $winHeight - $boxHeight;	
			}
			}
			callTop();  //初始化；
			
			this.css({"left":left,"top":top})
			//滚动条移动
			$windowObj.scroll(function (){
				
				change();
			});
			//窗口大小改变的时候
			$windowObj.resize(function (){
				
				change();
			});
			var timer;//延时处理；
			
			function change(){
				clearTimeout(timer);//避免生成多个定时器
				timer=setTimeout(function (){
				getBrowser();
				callLeft();
				callTop();
				self.animate({"left":left,"top":top});		
			},300);
				
			};
			
			//点击图片消失
			var $div=this;
			this.children(".title").children("img").click(function (){
				if(null !=moveFunc){
					moveFunc();
				}else{
					$div.hide(500);
				}
				});
				return this;//返回当前对象方便调用；
		}
})(jQuery);