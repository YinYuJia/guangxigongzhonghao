(function () {
    $(function () {
        var phone = yyj.getUrlParams("phone")
        var taocan = yyj.getUrlParams("taocan")
        var nowCity = yyj.getUrlParams("nowCity")
        var yen = yyj.getUrlParams("yen");
        console.log(yen)
        $("#money").val(yen+"元")
        $(".c").html(nowCity)
        $("#phone").val(phone)
        $("#taocan").val(taocan)

        //01 判断用户名
        $("#Name").on('blur', function () {
            if ($(this).val() == '') {
                yyj.prompt('请输入正确的用户名')
                return false;
            }
        })
        // 02判断手机号码
        $("#iphone").on('blur', function () {
            var phone = $("#phone").val();
            if (!yyj.isPhone(phone)) {
                yyj.prompt('请输入正确的手机号码');
                return false;
            }
        })

        // 03判断预存手机号码
        $("#prePhone").on("blur", function () {
            var phone = $("#prePhone").val();
            if (!yyj.isPhone(phone)) {
                yyj.prompt('请输入正确的手机号码');
                return false;
            }
        })
        // 05判断身份证号
        $("#CardId").on("blur", function () {
            yyj.checkCardId($(this).val())
        })

        // 06判断收件人姓名
        $("#consigneename").on("blur",function() {
            if ($(this).val() == '') {
                yyj.prompt('请输入正确的用户名')
                return false;
            }
        })

        //点击隐藏模态框
        $("#btn").on("click", function () {
            $(".mask").css({
                "display": "none"
            })
        })


        //   ------------------广西省三级联动      函数由tools提供-----  传json结构数据----------------

               
               yyj.threeLinkage(yyj.getguangxi() )

               console.log(yyj.getguangxi())

        // ----------------------点击预约套餐--------------------------
        $("#set").on("touchstart", function () {
          
            
            var ID = yyj.getUrlParams("ID")
            var amount = parseInt($("#money").val());
            var cardnumber = $("#phone").val();
            var name = $("#Name").val()
            var carded = $("#CardId").val()
            var consigneename = $("#consigneename").val();
            var iphone = $("#iphone").val();
            var address = $("#select1").val() + "省" + $("#select2").val() + "市" + $("#select3").val() + $("#address1").val()
            console.log(address)
          

            

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
                            return this.setReturnJson(true, '联通', {name: 'ChinaUnion'},2);
                        }
                        else if(isChinaTelcom.test(telphone)){
                            return this.setReturnJson(true, '电信', {name: 'ChinaTelcom'},1);
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

                var SimOperator = utils.checkMobile(cardnumber).index
                console.log(utils.checkMobile(cardnumber))
    // 收集用户信息  函数由Route提供 暂时没有URL地址  如果有了下面可以去掉注释
        //     Route.getRuWangShuJu({
        //         phoneNum:cardnumber,
        //         simOperator:SimOperator,
        //         fullName:name,
        //         citizenID:carded,
        //         recipientName:consigneename,
        //         recipientPhoneNum:iphone,
        //         city:$("#select2").val(),
        //         district:$("#select3").val(),
        //         street:$("#address1").val(),
        //         orderInfo:ID,
        //         orderPrice:amount,
        //         wechatUserInfo:''
        //     },function(data) {
        //         console.log(data)
        //   })


            // 字段名	描述
            // type	套餐id
            // amount	预存金额
            // cardnumber	预订号码
            // name	预约人姓名
            // carded	身份证号
            // consigneename	收件人姓名
            // phone	收件人电话
            // address	收货地址

            // 发送请求
            Route.getMallTelecomReservation({
                type:ID,
                amount:amount,
                cardnumber:cardnumber,
                name:name,
                carded:carded,
                consigneename:consigneename,
                phone:iphone,
                address:address
            }, function (data) {
                console.log(data)
                if (data.msg == "电信手机卡号码预订成功") {
                    location.href = Route.getzhifu(data.orderinfo.id)                  //   location.href = "http://www.xiaohualishu.com/WebApi/WeChatPay?id=" + data.orderinfo.id
                } else {
                    yyj.prompt(data.msg)
                }
            })
        })
    })
})()