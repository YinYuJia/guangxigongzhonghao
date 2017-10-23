/* 
 * 
 * 公共导航栏
 * 
 * 依赖JQuery库 
 * 
 * 
 * */
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
        $('.line').stop().animate({'left':_this.index()*li_width+li_width/2},300)
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
var data = '<div id="alt">'+
'<h1>对不起,暂无业务</h1>'+
 '</div>';
 return data;
}

