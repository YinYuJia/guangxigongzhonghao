/* 
 * 
 * 公共导航栏
 * 
 * 依赖JQuery库 
 * 
 * 
 * */
	
	//引入腾讯地图js库  https://apis.map.qq.com/tools/geolocation/min?key=OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77&referer=myapp
		
		
		
	var localtion_info = (function () {
		var geolocation = new qq.maps.Geolocation();
		function getCurLocation(){
			$(".selectStyle").append($("<span>定位中...</span>"))
			geolocation.getIpLocation(showPosition, showErr)
		}
		
		
		//成功回调
	 	var showPosition = function (position) {
	 		var obj = JSON.parse( JSON.stringify(position, null, 4) );
	 		$(".selectStyle>span").remove();
			$(".select_city").show();
	 		select_value(obj.city);
	 		
//	   		var count=$(".select_city option").length;
//			for(var i=0;i<count;i++){ 
//		  		if( $(".select_city ").get(0).options[i].text == obj.city ){			  		
//	  				$(".select_city").get(0).options[i].selected = true;			  				
//	  				//console.log($(".select_city").val())
//		      	} 
//		  	}
	 	}
		
		//失败回调
	    var  showErr = function () {
	    	$(".selectStyle>span").remove();
			$(".select_city").show();
	      
	    };		
	    
	    return{
	    	getCurLocation:getCurLocation
	    }
		
	})();
	
	//localtion_info.getCurLocation();//定位调用
	
	//为select赋值
	function  select_value(city) {
		var count=$(".select_city option").length;
		for(var i=0;i<count;i++){ 
	  		if( $(".select_city ").get(0).options[i].text == city ){			  		
  				$(".select_city").get(0).options[i].selected = true;			  				
  				//console.log($(".select_city").val())
	      	} 
	  	}
	}
	//导航栏颜色改变
	function color_change() {
		var li_width = $(".ChinaMobile").width();
		$(".select_business>li").css('color','#666')
		$(".select_business>li").eq(window.localStorage.getItem('byname')).css('color','#008daf');
		$('.line').css({'left':window.localStorage.getItem('byname')*li_width+li_width/2})
	}	
	
	
	//参数2：移动地址   参数3：联通地址  参数4：电信地址
	function  select_fn(_this,url_yidong,url_liantong,url_dianxin) {
			var li_width = _this.width();
			_this.css('color','#008daf');
			_this.siblings().css('color','#666')
			$('.line').css({'left':_this.index()*li_width+li_width/2})
			_this.attr({'href':url_fn(_this,url_yidong,url_liantong,url_dianxin),'id':_this.index()});
	}
	
	function  url_fn(_this,url_yidong,url_liantong,url_dianxin) {
		var index = _this.index();
		if (index == 0) {
			return url_yidong;
		}else if (index == 1) {
			return url_liantong;
		}else if (index == 2) {
			return url_liantong;
		}else {
			return false;
		}
	}


// 无业务处理

    // 返回html结构 
  function alt() {
    var data = '<div class="_alt" id="alt">'+
	'<h1>对不起,暂无业务</h1>'+
	 '</div>';
	 return data;
  }

alt()