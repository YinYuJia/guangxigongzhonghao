/* 接口地址管理 Route，ajax请求封装，请求基于 jquery */
(function (window) {

    var Route = {
        /* 提出 URL 以备 提取接口 可以集中管理 */
        // baseUrl: 'http://220.173.55.3:8086',
        // baseUrl: 'http://www.xiaohualishu.com',
        // baseUrl2:"http://www.xiaohualishu.com",

        baseUrl: "http://220.173.55.3:8086",
        baseUrl2: "http://220.173.55.3:8086",

        // 获取入网数据
        getRuWangShuJu:RuWangShuJu,
        //1.1 获取移动套餐
        
        getMallGetMobilePackageProduct: MallGetMobilePackageProduct,

        //1.2 获取移动手机号码
        getMallQueryMobileReservation: MallQueryMobileReservation,

        //1.3 预定移动手机号码
        getMallMobileReservation: MallMobileReservation,



        //2.1获取电信套餐
        getMallGetTelecomProduct: MallGetTelecomProduct,

        //2.2 获取电信手机号码
        getMallQueryTelecomReservation: MallQueryTelecomReservation,

        //2.3 预定电信手机号码
        getMallTelecomReservation: MallTelecomReservation,



        //3.1 获取移动存送套餐
        getMallGetProduct: MallGetProduct,

        //3.2 办理移动存送
        getMallRecommendFXOrder: MallRecommendFXOrder,




        //4.1 获取移动宽带安装地址
        getMallQueryADSLAddr: MallQueryADSLAddr,

        //4.2 预约移动宽带
        getMallRecommendDoSubmitSMSADSLPublicRonghe: MallRecommendDoSubmitSMSADSLPublicRonghe,


        // 5.1 下发移动短信验证码
        //      办理移动购机默认”
        getMallUploadPurchaseTextOrderInfo : MallUploadPurchaseTextOrderInfo,

       //6.1 移动号码缴费
         getWechatMobileDoPay : WechatMobileDoPay,

    //   6.2 移动号码缴费调用微信接口
         getMobileZhiFu : mobileZhiFu,

        // 7.1 办理移动飞享套餐业务
        getMallGetFlyProduct: MallGetFlyProduct,

        //  7.2  办理移动存送
        getMallRecommendFXOrder:MallRecommendFXOrder,


        //8.1 更换套餐
        getchange:change,

        getzhifu:zhifu

    }

     // 获取入网数据
     function RuWangShuJu(json , callback) {
        var url =  "000000000000000000000000"
        $.ajax({
            url:url,
            dataType:'jsonp',
            data:{
                // 预选电话号码
                phoneNum : json.phoneNum,
                // 运营商类型
                simOperator : json.simOperator ,
                // 姓名
                fullName : json.fullName ,
                // 身份证号码
                citizenID : json.citizenID ,
                // 收件人姓名
                recipientName: json.recipientName,
                // 收件人电话号码
                recipientPhoneNum: json.recipientPhoneNum,
                // 城市
                city : json.city ,
                //   地区
                district: json.district,
                // 街道
                street: json.street,
                // 套餐
                orderInfo: json.orderInfo,
                // 预存金额
                orderPrice: json.orderPrice,
                // 用户信息
                wechatUserInfo: json.wechatUserInfo,
            },
            // jsonp: 'callback',//回调函数名字
            jsonpCallback: 'callback',
            type:'post',
            success:function(res){
                var res = res || null;
                callback && callback(res);
            }
        })
    }

 
    //1.1 获取移动套餐
    function MallGetMobilePackageProduct(callback) {
        var url = Route.baseUrl + '/WebApi/MallGetMobilePackageProduct';
        $.ajax({
            url:url,
            dataType:'jsonp',
            // jsonp: 'callback',//回调函数名字
            jsonpCallback: 'callback',
            type:'post',
            success:function(res){
                var res = res || null;
                callback && callback(res);
            }
        })
    }


    //1.2 获取移动手机号码
    function MallQueryMobileReservation(Type, City, Identification, PageSize, callback) {
        var url = Route.baseUrl + '/WebApi/MallQueryMobileReservation';
        // 需要传入的参数
        // 字段名	描述
        // Type	套餐id
        // City	城市
        // Identification	标识
        // PageSize	当前返回数
        $.ajax({
            url:url,
            dataType:'jsonp',
            data:{
                Type:Type,
                City:City,
                Identification:Identification||'',
                PageSize:PageSize
            },
            // jsonp: 'callback',//回调函数名字
            jsonpCallback: 'callback',
            type:'post',
            success:function(res){
                var res = res || null;
                callback && callback(res);
            }
        })
    }


    //1.3预定移动手机号码
    function MallMobileReservation(type, amount, cardnumber, name, carded, consigneename, phone, address, identification,callback) {
        var url = Route.baseUrl + '/WebApi/MallMobileReservation';
            // 字段名	描述
            // type	套餐id
            // amount	预存金额
            // cardnumber	预订号码
            // name	预约人姓名
            // carded	身份证号
            // consigneename	收件人姓名
            // phone	收件人电话
            // address	收货地址
            // identification	标识
        $.ajax({
            url:url,
            dataType:'jsonp',
            data:{
                type: type,
                amount: amount,
                cardnumber: cardnumber,
                name: name,
                carded: carded,
                consigneename: consigneename,
                phone: phone,
                address: address,
                identification: identification||null,
            },
            // jsonp: 'callback',//回调函数名字
            jsonpCallback: 'callback',
            type:'post',
            success:function(res){
                var res = res || null;
                callback && callback(res);
            }
        })
    }




    //2.1 获取电信套餐
    function MallGetTelecomProduct(callback) {
        var url = Route.baseUrl + '/WebApi/MallGetTelecomProduct';
        $.ajax({
            url:url,
            dataType:'jsonp',
            // jsonp: 'callback',//回调函数名字
            jsonpCallback: 'callback',
            type:'post',
            success:function(res){
                var res = res || null;
                callback && callback(res);
            }
        })
    }


    //2.2 获取电信手机号码
    function MallQueryTelecomReservation(json, callback) {
        var url = Route.baseUrl + '/WebApi/MallQueryTelecomReservation';
        // 需要传入的参数
        // 字段名	描述
        // Type	套餐id
        // City	城市
        // Identification	标识
        // PageSize	当前返回数
        $.ajax({
            url:url,
            dataType:'jsonp',
            data:{
                Type:json.Type,
                City:json.City,
                PageSize:json.PageSize
            },
            // jsonp: 'callback',//回调函数名字
            jsonpCallback: 'callback',
            type:'post',
            success:function(res){
                var res = res || null;
                callback && callback(res);
            }
        })

    }



    //2.3 预定电信手机号码
    function MallTelecomReservation(json,callback) {
        var url = Route.baseUrl + '/WebApi/MallTelecomReservation';
            // 字段名	描述
            // type	套餐id
            // amount	预存金额
            // cardnumber	预订号码
            // name	预约人姓名
            // carded	身份证号
            // consigneename	收件人姓名
            // phone	收件人电话
            // address	收货地址
        $.ajax({
            url:url,
            dataType:'jsonp',
            data:{
                type: json.type,
                amount: json.amount,
                cardnumber: json.cardnumber,
                name: json.name,
                carded: json.carded,
                consigneename: json.consigneename,
                phone: json.phone,
                address: json.address,
            },
            // jsonp: 'callback',//回调函数名字
            jsonpCallback: 'callback',
            type:'post',
            success:function(res){
                var res = res || null;
                callback && callback(res);
            }
        })
    }


    //   预定成功后 调用以下方法支付

       function zhifu( id ) {
           return "http://www.xiaohualishu.com/WebApi/WeChatPay?id="+id
       }







    //3.1 获取移动存送套餐
    function MallGetProduct(callback) {
        var url = Route.baseUrl + '/WebApi/MallGetProduct';
        $.ajax({
            url:url,
            dataType:'jsonp',
            // jsonp: 'callback',//回调函数名字
            jsonpCallback: 'callback',
            type:'post',
            success:function(res){
                var res = res || null;
                callback && callback(res);
            }
        })
    }


    // 3.2 办理移动存送
    function MallRecommendFXOrder(phoneNumber, planId, main_business_type, id, phoneAction,callback) {
        var url = Route.baseUrl + '/WebApi/MallRecommendFXOrder';
        // 字段名	描述	备注
        // phoneNumber	手机号码	用户填写手机号码
        // planId	套餐ID	传入对应套餐的planId
        // main_business_type	套餐主活动名称	传入对应套餐的main_business_type
        // phoneAction	请求方式	办理需要先发送验证码才能有效办理
        //                         分两步：先发送验证码传入“sendRandomSMS”
        //                         待发送验证码成功后，客户回复验证码
        //     再进行办理传入“doBiz”
        
        console.log( {
                phoneNumber: phoneNumber,
                planId: planId,
                main_business_type: main_business_type,
                id,id,
                phoneAction: phoneAction,
            })

        $.ajax({
            url:url,
            dataType:'jsonp',
            data:{
                phoneNumber: phoneNumber,
                planId: planId,
                main_business_type: main_business_type,
                phoneAction: phoneAction,
                id,id
            },
            // jsonp: 'callback',//回调函数名字
            jsonpCallback: 'callback',
            type:'post',
            success:function(res){
                var res = res || null;
                callback && callback(res);
            }
        })
    }



    // 4.1 获取移动宽带安装地址
    function MallQueryADSLAddr(keywords, callback) {
        var url = Route.baseUrl + '/WebApi/MallQueryADSLAddr';
        // 需要传入的参数
        // keywords	关键字  输入街道或小区如:南国花园

        $.ajax({
            url:url,
            dataType:'jsonp',
            data:{
                keywords:keywords
            },
            // jsonp: 'callback',//回调函数名字
            jsonpCallback: 'callback',
            type:'post',
            success:function(res){
                var res = res || null;
                callback && callback(res);
            }
        })
        
    }


    //4.2 预约移动宽带
    function MallRecommendDoSubmitSMSADSLPublicRonghe(json , callback) {
        var url = Route.baseUrl + '/WebApi/MallRecommendDoSubmitSMSADSLPublicRonghe';
            // 字段名	描述
            // adslStandAddr	设备地址
            // adslRealAddr	安装地址
            // phoneNumber	手机号码
            // adslConsumptionType	宽带类型
            // adslBroadWidth	宽带速兆
            // adslMinConsumption	月最低消费
            // sharePhones	共享号码
            // adslMonths	合约时长（月）
            // adslIsSendFee	是否参加宽带送话费活动
            // adslIsTV	是否办理高清电视[魔百和]（送电视—机顶盒
            // adslIsBuyCat	是否购买光猫（若已有，可不选；两年送光猫）
            // phoneLoginType	办理方式
            // bookDate	预约安装日期
            // bookTime	预约安装时间
            // linkMan_Name	联系人姓名
            // linkMan_Phone	联系人电话
            // phoneAction	办理请求方式
        $.ajax({
            url:url,
            dataType:'jsonp',
            data:{
                adslStandAddr: json.adslStandAddr,
                adslRealAddr: json.adslRealAddr,
                cardnumber: json.cardnumber,
                phoneNumber: json.phoneNumber,
                adslConsumptionType: json.adslConsumptionType,
                adslBroadWidth: json.adslBroadWidth,
                adslMinConsumption: json.adslMinConsumption,
                sharePhones: json.sharePhones,
                adslMonths: json.adslMonths,
                adslIsSendFee: json.adslIsSendFee,
                adslIsTV: json.adslIsTV,
                adslIsBuyCat: json.adslIsBuyCat,
                phoneLoginType: json.phoneLoginType,
                bookDate: json.bookDate,
                bookTime: json.bookTime,
                linkMan_Name: json.linkMan_Name,
                linkMan_Phone: json.linkMan_Phone,
                phoneAction: json.phoneAction
            },
            // jsonp: 'callback',//回调函数名字
            jsonpCallback: 'callback',
            type:'post',
            success:function(res){
                var res = res || null;
                callback && callback(res);
            }
        })
    }



    // 5.1 下发移动验证码和办理移动购机业务
    function MallUploadPurchaseTextOrderInfo(phoneNumber, phoneAction, callback) {
        var url = Route.baseUrl2 + "/WebApi/MallUploadPurchaseTextOrderInfo";
        // 字段名	描述
        // phoneNumber	手机号	输入移动手机号码
        // phoneAction	请求方式	下发验证码默认” sendRandomSMS”
        // phoneAction	请求方式	办理移动购机默认” doBiz”
        
        
        $.ajax({
            url:url,
            dataType:'jsonp',
            data:{
                phoneNumber:phoneNumber,
                phoneAction:phoneAction,
            },
            // jsonp: 'callback',//回调函数名字
            jsonpCallback: 'callback',
            type:'post',
            success:function(res){
                var res = res || null;
                callback && callback(res);
            }
        })
    }





    // 6.1  移动号码缴费
    function WechatMobileDoPay(phonenumber, amount, callback) {
        var url = Route.baseUrl2 + "/WebApi/WechatMobileDoPay";
        // 字段名	描述
        // phoneNumber	手机号	输入移动手机号码
        // phoneAction	请求方式	下发验证码默认” sendRandomSMS”
        // phoneAction	请求方式	办理移动购机默认” doBiz”
        
        $.ajax({
            url:url,
            dataType:'jsonp',
            data:{
                phonenumber:phonenumber,
                amount:amount,
            },
            // jsonp: 'callback',//回调函数名字
            jsonpCallback: 'callback',
            type:'post',
            success:function(res){
                var res = res || null;
                callback && callback(res);
            }
        })
    }

    // 缴费成功调用微信支付接口
       function mobileZhiFu(phonenumber,number) {
           return "http://www.xiaohualishu.com/WebApi/WechatMobileDoPay?phonenumber="+phonenumber+"&amount="+number
       }


    

    //   7.1  办理移动飞享套餐业务
    
    function MallGetFlyProduct(callback) {
        var url = Route.baseUrl2 + "/WebApi/MallGetFlyProduct";
        // 字段名	描述	备注
        // phonenumber	手机号	输入移动手机号码
        // amount	缴费金额	选择缴费金额
        
        $.ajax({
            url:url,
            dataType:'jsonp',
            // jsonp: 'callback',//回调函数名字
            jsonpCallback: 'callback',
            type:'post',
            success:function(res){
                var res = res || null;
                callback && callback(res);
            }
        })
    }




    function  change () {
       return "http://gx.10086.cn/zt-portal/wap/netservice/lltc/?menuId=000700010001&menuName=%E6%B5%81%E9%87%8F%E6%9C%88%E5%A5%97%E9%A4%90&menuChannel=null&mobile=DEB790C12BD286A22B5EF7DD437F360A&devid=DC35E0806F3DD0A953FD69DB10DF485D&c=771&cc=null&login_name=C6784A3B0FB68FC1F5C88850434F62EE&sharetime=9F7F7B1D49DC82CC175CC9D7CD39EA9E823EBF2B4C612A28&o_r=null"
    }









    window.Route = Route; /* 向外暴露 Route */

})(window);