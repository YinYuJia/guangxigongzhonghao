(function () {
    $(function () {
        // 获取url参数
        var name = yyj.getUrlParams("name");
        $(".item_one .p2").html(name);
        var info = yyj.getUrlParams("info");
        $(".item_second .p2").html(info);

        //   点击获取验证码
        $(".btn_wrap").on("click", function () {
            var pho = $("#phone_num").val()
            console.log(pho)
            if ( !yyj.isPhone($("#phone_num").val()) || '') {
                var data = "请输入正确的手机号码";
                $(".i").html(data);
                $(".mask").css({
                    "display": "block"
                })
                return;
            }else{
                //   把手机号码中间四位数用*代替
                var val = $("#phone_num").val().split("");
                console.log(val);

                for (var i = 3; i < 7; i++) {
                    val[i] = "*";
                }
                var newVal = val.join("");
                var data = "验证码已发送到手机号码" + newVal + ",请您注意查看";
            }
           
            $(".i").html(data);
            $(".mask").css({
                "display": "block"
            })

           var phoneNumber = $("#phone_num").val();
           var planId = yyj.getUrlParams("planid")
           var main_business_type = yyj.getUrlParams("main")
           var id = yyj.getUrlParams("id")
           console.log(phoneNumber)
           console.log(planId)
           console.log(main_business_type)
           
           
           Route.getMallRecommendFXOrder(phoneNumber,planId,main_business_type,id,"doBiz",function(data) {
               console.log(data)
           })
          
        // 字段名	描述	备注
        // phoneNumber	手机号码	用户填写手机号码
        // planId	套餐ID	传入对应套餐的planId
        
        // main_business_type	套餐主活动名称	传入对应套餐的main_business_type
        // phoneAction	请求方式	办理需要先发送验证码才能有效办理
        //                         分两步：先发送验证码传入“sendRandomSMS”
        //                         待发送验证码成功后，客户回复验证码
        //     再进行办理传入“doBiz”

        })
            //   点击确定弹出框消失
        $(".rig").on("click", function () {
            $(".mask").css({
                "display": "none",
            })
        })
    })
})()