
	
localtion_info.getCurLocation();//定位调用
$(function() {
	
	$(".select_business").on('touchend', 'li', function(event) {
		event.preventDefault();
		event.stopPropagation();
		var _this = $(this);
		select_fn(_this); //选择颜色改变

		//参数  0:中国移动  1:中国联通  2:电信
		window.localStorage.setItem("byname", $(this).index());

		color_change(); //刷新颜色不变化
		//console.log()
		search_city($('.select_city').val());
	})

	color_change();//刷新颜色不变化

	
	var isClick = true; //阻止滑动触发点击事件
	$('.li_a').on('touchstart', function(e){  
      	isClick = true;  
	});  
	$('.li_a').on('touchmove', function(e){  
	    isClick = false;  
	}); 
    var  wrap = $('#overlay')[0];
    $(".li_a").on('touchend',function(e) {
    	e.preventDefault();
    	if (isClick == true) {
    		wrap.className = wrap.className + ' in';
    		// 延迟初始化插件是为了让CSS动画走完
    		setTimeout(function() {
    		    MPreview({
    		        data: ['img/busines/@1(2).jpg'],//maxImg
    		        title: '预览',//标题
    		        wrap: '#overlay',//指定容器显示
    		        init: function() {
    		            window.console && console.log('MPreview.mobile init');
    		        },
    		        close: function() {
    		            wrap.className = wrap.className.replace(' in', '');
    		        }
    		    });
    		}, 400);
    	}
    });



	window.onload = function(){
		//获取定位的城市操作Dom
		 search_city($('.select_city').val());
		
	}
	$(".select_city").on('change',function(){ 
      	search_city(this.options[this.options.selectedIndex].value);
	})
	 //选择套餐
	$("#btn").on('touchend',function(e) {
		e.preventDefault();
		//传值城市
		window.localStorage.setItem('city',$('.select_city').val());

		window.location.href = "packageList.html"
		window.localStorage.getItem('byname')
		
	})
	
	function  search_city(city) {
		$("._alt").remove();//清除暂无数据
		var _city = '南宁市';
		if (_city.indexOf(city)!= -1) {//支持活动的城市
			if (window.localStorage.getItem('byname') == 0 && (city.indexOf('南宁市')!= -1)) {//支持移动的城市
				$("#wrap").show();
			}	
			else if(window.localStorage.getItem('byname') == 1){//支持联通的
//				$("#wrap").show();
				$("#wrap").hide();
				$("body").append(alt())
	
			}
			else if(window.localStorage.getItem('byname') == 2){//支持电信
//				$("#wrap").show();
				$("#wrap").hide();
				$("body").append(alt())
				console.log('xxx')
	
			}else {
				$("#wrap").hide();
				$("body").append(alt())
			}
		}else {//不支持活动的城市
			$("#wrap").hide();
			$("body").append(alt())
		}
		
	}
	
	
	
	
	
	
})