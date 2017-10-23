localtion_info.getCurLocation();//定位调用

$(function () {
 

    if (window.localStorage.getItem("byname") == 0) {
        var data = `<div class="footer">
            <div class="content">
                    <img src="img/5556.png"/>
            </div>
        <p class="p1"><img src="img/busines/right.png" alt="" /> 参与活动条件及说明</p>
         <p class="p2">没有办理相关业限定修改资费的业务均可办理。</p>
        <p class="p3">1.输入号码;2.回复验证码;3.提交办理。即可享受新资费(资费更改，次月生效)</p>
        <button class="btn">点击选择套餐</button>
    </div>`
        $("#section").html(data)

        $(".btn").click(function () {
            window.location.href = "10.2goodSetMeal.html?d=" + 0
            window.localStorage.getItem('byname')
        })
    } else {
        var data = alt()
        $("#section").html(data)
    }






    color_change()
    $(".select_business").on('click', 'li', function () {
        color_change()
        var _this = $(this);
        select_fn(_this);//


        //参数  0:中国移动  1:中国联通  2:电信
        window.localStorage.setItem("byname", $(this).index())


        // -------------------移动业务----------------------
        if (window.localStorage.getItem("byname") == 0) {
            var data = `<div class="footer">
                                    <div class="content">
                                            <img src="img/5556.png"/>
                                    </div>
                                <p class="p1"><img src="img/busines/right.png" alt="" /> 参与活动条件及说明</p>
                                 <p class="p2">没有办理相关业限定修改资费的业务均可办理。</p>
                                <p class="p3">1.输入号码;2.回复验证码;3.提交办理。即可享受新资费(资费更改，次月生效)</p>
                                <button class="btn">点击选择套餐</button>
                            </div>`
            $("#section").html(data)

            $(".btn").click(function () {
                window.location.href = "10.2goodSetMeal.html?d=" + _this.index()
                window.localStorage.getItem('byname')
            })
        }
        // 点击进入选择套餐
        //  --------------------联通业务--------------------
        if (window.localStorage.getItem("byname") == 1) {
            var data = alt()
            $("#section").html(data)
        }
        //  --------------------电信业务-----------------------
        if (window.localStorage.getItem("byname") == 2) {
            var data = alt()
            $("#section").html(data)
        }
    })
})
