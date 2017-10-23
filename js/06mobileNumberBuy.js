localtion_info.getCurLocation()

    $(function () {
        window.onload = function() {
            var city = $(".select_city").val();
            $(".btn2").on("click", function () {
                location.href = "07mobileList.html?d=" + 2 + "&&city=" + city
            })
        }

        color_change()
        console.log(window.localStorage.getItem("byname"))
       if (window.localStorage.getItem("byname") != 2) {
        color_change()
        var data = alt()
        $("#section").html(data)
       }else{
        color_change()
        var data = `<div class="div">
        <img src="./img/2.jpg" alt="" class="Img" id="IMG"> 
    </div>
    <div>
         <input type="button" value="我要抢号" id="btn"  class="btn2">
    </div>`
$("#section").html(data)
       }
        //参数2：移动地址   参数3：联通地址  参数4：电信地址
        $(".select_business").on('click', 'li', function () {
            color_change()
            var _this = $(this);
            select_fn(_this);//
            var city = $(".select_city").val()
            // console.log(city)

            //参数  0:中国移动  1:中国联通  2:电信
            window.localStorage.setItem("byname", $(this).index())
            var _thisIndex = $(this).index();
            //  console.log(_thisIndex);
            // -------------------移动业务----------------------
            if (window.localStorage.getItem("byname") == 0) {
                Route.getMallGetMobilePackageProduct(function (data) {
                    console.log(data)
                })
                var data = alt()
                $("#section").html(data)
            }
            //  --------------------联通业务--------------------
            if (window.localStorage.getItem("byname") == 1) {
                var data = alt()
                $("#section").html(data)
            }

            //  --------------------电信业务-----------------------
            if (window.localStorage.getItem("byname") == 2) {
                var data = `<div class="div">
                                <img src="./img/2.jpg" alt="" class="Img" id="IMG"> 
                            </div>
                            <div>
                                 <input type="button" value="我要抢号" id="btn"  class="btn2">
                            </div>`
                $("#section").html(data)
            }
            //  点击跳转
            $("#btn").on("click", function () {
                location.href = "07mobileList.html?d=" + _thisIndex + "&&city=" + city
            })
        })
    })
