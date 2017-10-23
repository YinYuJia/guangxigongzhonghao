$(function() {
	$(".select_city").show();
	$(".select_business").on('click','li',function(e){
		var _this = $(this);
		select_fn(_this);//
		
		//参数  0:中国移动  1:中国联通  2:电信
		window.localStorage.setItem("byname",$(this).index());
		////刷新颜色不变化
		color_change();

		//根据城市和所对应通讯方式操作dom
		search_city($('.select_city').val());
	})
	color_change();//刷新颜色不变化
	
	
	
	
	function  creat_html(data,result) {
		$.each(data.content.套餐合约, function(index,value) {
			var planId_arr = value.planId.split('-');//存送
			var cun_rmb = planId_arr[0].split('送')[0].replace(/[^0-9]/ig,"");//存
			var song_rmb = planId_arr[0].split('送')[1].replace(/[^0-9]/ig,"");//送					
			var fan = planId_arr[1]+' ，'+planId_arr[2]+'，'+planId_arr[3];				
			var lei = value.main_business_type;
			
			result	+= "<div class='item'>"
						+"<div class='left_div'>"
							+"<p class='tixing'>送<span>"+song_rmb+"</span>元</p>"
							+"<span class='cun_rmb'>存"+cun_rmb+"元</span>"
						+"</div>"
						+"<div class='right_div'>"
							+"<h1>"+planId_arr[0]+"</h1>"
							+"<p class='p1'>"
								+"<img class='icon_lei' src='img/packageList/lei.png'/>"
								+"<span id=''>"+lei+"</span>"
							+"</p>"
							+"<p class='p2'>"
								+"<img class='icon_fan' src='img/packageList/fan.png'/>"
								+"<span id=''>"+fan+"</span>"
							+"</p>"
						+"</div>"
						+"<div class='clear'>"
						+"</div>"
						
					+"</div>"

		});
		$(".list_wrap").append(result);
		$(".list_wrap").on('click','.item',function() {
			window.location.href = "packageDetail.html";
			window.localStorage.setItem('cunsong_key',$(this).index());
		})
	}
	
	
	function  search_city(city) {
		$("._alt").remove();//清除暂无数据
		$(".list_wrap").empty();
		var _city = '南宁市';
		if (_city.indexOf(city)!= -1) {//支持活动的城市
			if (window.localStorage.getItem('byname') == 0 && city.indexOf('南宁市')!= -1) {//支持移动的城市
				$(".banner,.list_wrap").show();
				Route.getMallGetProduct(function(data) {		
					console.log(data.content.套餐合约[0])
					var result = '';
					creat_html(data,result);
	
				})
				//console.log(city)
			}	
			else if(window.localStorage.getItem('byname') == 1){//支持联通的
				//$("#wrap").show();
				$(".banner,.list_wrap").hide();
				$("body").append(alt())
	
			}
			else if(window.localStorage.getItem('byname') == 2){//支持电信
				//$("#wrap").show();
				$(".banner,.list_wrap").hide();
				$("body").append(alt())
	
			}else {
				$(".banner,.list_wrap").hide();
				$("body").append(alt())
			}
		}else {//不支持活动的城市
			$(".banner,.list_wrap").hide();
			$("body").append(alt())
		}
		
	}
	
	//获取定位的城市操作Dom
	search_city(window.localStorage.getItem('city'));
//	window.onload = function(){
//		search_city(window.localStorage.getItem('city'));
		select_value(window.localStorage.getItem('city'))//为select赋值
		 $(".select_city").on('change',function(){ 
	      	search_city(this.options[this.options.selectedIndex].value);
		})
		
//	}
	
	


	
})