$(function() {
	
	var isChinaMobile = /^134[0-8]\d{7}$|^(?:13[5-9]|147|15[0-27-9]|178|18[2-478])\d{8}$/; 
	var isChinaUnion  = /^(?:13[0-2]|145|15[56]|176|18[56])\d{8}$/; 
	var isChinaTelcom = /^(?:133|153|177|18[019])\d{8}$/; //1349号段 
	var isOtherTelphone   = /^170([059])\d{7}$/;//其他运营商
	
	var utils = {
		checkMobile: function(telphone){
		    if(telphone.length !== 11){
		        return this.setReturnJson(false, '未检测到正确的手机号码');
		    }
		    else{
		        if(isChinaMobile.test(telphone)){
		            return this.setReturnJson(true, '移动', {name: 'ChinaMobile'},0);
		        }
		        else if(isChinaUnion.test(telphone)){
		            return this.setReturnJson(true, '联通', {name: 'ChinaUnion'},1);
		        }
		        else if(isChinaTelcom.test(telphone)){
		            return this.setReturnJson(true, '电信', {name: 'ChinaTelcom'},2);
		        }
		        else if(isOtherTelphone.test(telphone)){
		            var num = isOtherTelphone.exec(telphone);
		            return this.setReturnJson(true, '', {name: ''});
		        }
		        else{
		            return this.setReturnJson(false, '未检测到正确的手机号码');
		        }
		    }
		},
		setReturnJson: function(status, msg, data,index){
		    if(typeof status !== 'boolean' && typeof status !== 'number'){
		        status = false;
		    }
		    if(typeof msg !== 'string'){
		        msg = '';
		    }
		    return {
		        'status': status,
		        'msg': msg,
		        'data': data,
		        'index':index
		        };
		    }
		}
	
	
	
	function select_tongxun(el,_this,_Anistyle,style_a,style_b) {//选择运营商
		if (el != null) {
			$(el).animate(_Anistyle,300)
		}
		$(_this).css(style_a).siblings().css(style_b);
	}
	
	//手机验证提示弹框
	function popup(str){
	 	var info = $("<div class='signPop'>"+str+"</div>");
	 	info.prependTo($("body"));
    	info.animate({"opacity":0},2000,function(){
			info.remove();
	    });	
	}

	
	$(".select_li").on('click','li',function(e) {//选择运营商
		
		var li_width = $(this).width();
		var _this = $(this);
		var clik_bol = true;
		if (clik_bol) {
			if (_this.index()== 0) {
				clik_bol = true;
				select_tongxun('.line',_this,{left:$(this).index()*li_width+li_width/2},{'color':'#008DAF'},{'color':'#eee'})
				window.localStorage.setItem('operator',_this.index());//选择的运营商
			} else{
				clik_bol = false;
				popup('暂不支持此运行商');
			}
		}
		
		e.stopPropagation();
	})
	window.localStorage.setItem('operator',0);
		
	$(".select_sum").on('click','li',function (e) {//选择充值金额
		
		var _this = $(this);
		select_tongxun(null,_this,null,{'background-color':'#008DAF','color':'#fff'},{'background-color':'#fff','color':'#333'})
		//$(this).css({'background-color':'#008DAF','color':'#fff'}).siblings().css({'background-color':'#fff','color':'#333'});
		$(".price_Actual,.sj_money").text($(this).find('.span_price').text());//实际金额
		$(".cz_money").text($(this).find('.biao_price').text());//弹框充值金额
		$(".custom_money input").val('');
		e.stopPropagation();
		e.preventDefault();
	})
	
	$("#cencel_btn").click(function () {
		$(".mask,.modal_box").hide()
	})
	$(".custom_money input").focus(function () {
		$(".select_sum > li").css({'background-color':'#fff','color':'#333'})
	})
	
	$(".custom_money input").blur(function () {
		if ($(".custom_money input").val()=='') {
			$(".price_Actual,.sj_money,.cz_money").text('00.0元')
		} else{
			
			$(".price_Actual,.sj_money,.cz_money").text($(".custom_money input").val()+'.0元')
		}
	})
	
	$(".recharge_btn").click(function (e) {
		if (utils.checkMobile($(".mobile").val()).status) {
			if (window.localStorage.getItem('operator')== utils.checkMobile($(".mobile").val()).index) {
				console.log($(".sj_money").text().split('元')[0]);
				if ($(".sj_money").text().split('元')[0]>=10) {
					$(".cz_mobile").html($(".mobile").val());
					$(".mask,.modal_box").show()
					$("#sure_btn").click(function() {
						$(".mask,.modal_box").hide()
						window.location.href = Route.getMobileZhiFu($(".cz_mobile").text(),$(".sj_money").text().split('元')[0]);
					})
					
				} else{
					popup('充值金额必须大于10元');
				}
				
			}else {
				popup('手机号和运营商不匹配');
			}
		}else{
			
			popup('请输入正确手机号');
		}
		e.preventDefault();
	})
	
	
	
	
	
})

