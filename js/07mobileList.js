(function () {
    $(function () {
        var ID;
        // $(".select_city")  = yyj.getUrlParams("city")

        // 电信数据
        function dianxin() {
            Route.getMallGetTelecomProduct(function (data) {
                console.log(data)
                ID = data.content.电信[0].id
                //   console.log(data.content)
                var fatherData = data
                // 传入CITY后面不要加市
                var CITY = $(".select_city").val().substring(0, 2)
                //   console.log(CITY)
                
                Route.getMallQueryTelecomReservation({ Type: ID, City: CITY, PageSize: 1000,}, function (data) {
                        console.log(data)
                    // getMallQueryTelecomReservation
                    // --------------------返回0条数据处理------------------
                    if (data.content.length == 0) {

                        $("#alt").css({
                            "display": "block"
                        })
                        $(".lll").on("click", function () {
                            $("#alt").css({
                                "display": "none"
                            })
                        })
                        // alert("对不起，暂时没有号码");
                        $(".select_city").val("南宁市")
                        return;
                    }
                    for (var i = 0; i < data.content.length; i++) {
                        data.content[i].kkk = fatherData.content.电信[0].offerSpecName.substring(13, 18),
                            data.content[i].id = fatherData.content.电信[0].id
                    }
                    //    ----------------------渲染-------------------------
                    var tem = template("tpl", data)
                    $("#LIST").html(tem);
                    //    ----------------------渲染-------------------------
                    var pp = template("TPL", fatherData);
                    $(".u2").append(pp)
                    var ID = data.content[0].id;
                    var nowCity = $(".select_city").val();
                  
                    //   console.log(nowCity)
                    $(".yuyue").on("click", function () {
                        var _that = $(".li").parent().children()[0].innerHTML;
                        var that2 = $(".li").parent().children()[1].innerHTML;
                        var yen = $(".li").parent().children()[3].innerHTML.substring(0,2)
                        console.log(yen)
                       location.href = '08whritInfo.html?phone=' + _that + '&&taocan=' + that2 + '&&ID=' + ID + '&&nowCity=' + nowCity + '&&yen=' + yen;
                    })
                    //    ----------------------------弹出提示-------------------------
                    $(".info").on('click', function () {
                        $("#mask").css({
                            "display": "block"
                        })
                    })
                    // ------------------------------点击确定消失--------------------------
                    $("#rightGo").on("click", function () {
                        $("#mask").css({
                            "display": "none"
                        })
                    })
                })
            })
        }

        // console.log(yyj.getUrlParams("city"))
        // 2  电信
        if (yyj.getUrlParams("d") == 2) {
            //   console.log(yyj.getUrlParams("d"))
            dianxin()
            $(".select_city").on("change", function () {
               var CITY =  $(this).val().substring(0, 2)
                Route.getMallGetTelecomProduct(function (data) {
                    console.log(data)
                    ID = data.content.电信[0].id
                    //   console.log(data.content)
                    var fatherData = data
                    // 传入CITY后面不要加市
                  //  var CITY = $(".select_city").val().substring(0, 2)
                    //   console.log(CITY)

                    // 20元套餐
                    Route.getMallQueryTelecomReservation({ Type: ID, City: CITY, PageSize: 1000,}, function (data) {
                            console.log(data)
                        // getMallQueryTelecomReservation
                        // --------------------返回0条数据处理------------------
                        if (data.content.length == 0) {
    
                            $("#alt").css({
                                "display": "block"
                            })
                            $(".lll").on("click", function () {
                                $("#alt").css({
                                    "display": "none"
                                })
                            })
                            // alert("对不起，暂时没有号码");
                            $(".select_city").val("南宁市")
                            return;
                        }
                        for (var i = 0; i < data.content.length; i++) {
                            data.content[i].kkk = fatherData.content.电信[0].offerSpecName.substring(13, 18),
                                data.content[i].id = fatherData.content.电信[0].id
                        }
                        //    ----------------------渲染-------------------------
                        var tem = template("tpl", data)
                        $("#LIST").html(tem);

                        var id = data.content[0].id;
                        var nowCity = $(".select_city").val()
                        //   console.log(nowCity)
                        $(".yuyue").on("click", function () {
                            var _that = $(".li").parent().children()[0].innerHTML;
                            var that2 = $(".li").parent().children()[1].innerHTML;
                            location.href = '08whritInfo.html?phone=' + _that + '&&taocan=' + that2 + '&&ID=' + id + '&&nowCity=' + nowCity;
                        })
                        //    ----------------------------弹出提示-------------------------
                        $(".info").on('click', function () {
                            $("#mask").css({
                                "display": "block"
                            })
                        })
                        // ------------------------------点击确定消失--------------------------
                        $("#rightGo").on("click", function () {
                            $("#mask").css({
                                "display": "none"
                            })
                        })
                    })
                    
                })
            })
        }
        //  0  移动
        else if (yyj.getUrlParams("d") == 0) {

            $(".select_city").on("change", function () {

            })
        }
        //  1  联通
        else if (yyj.getUrlParams("d") == 1) {

            $(".select_city").on("change", function () {

            })
        }


    })
})()