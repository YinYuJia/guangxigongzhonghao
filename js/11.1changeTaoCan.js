localtion_info.getCurLocation()
    $(function () {
        color_change()
        if (window.localStorage.getItem("byname") == 0) {
            
             var data = `<div class="footer">
             <div class="content">
                     <img src="./img/11.1.png"/>
             </div>
             <div class="info">
                     <p class="p1"><img src="img/busines/right.png" alt="" /> 参与活动条件及说明</p>
                     <p class="p2">4G流量月包100M-11G,多种套餐任君选,月月都可畅想超实惠4G流量</p>
                     <p class="p3">1.以下包含的均为国内流量,不含港澳台.</p>
                     <p class="p4">2.即日起新办理50元-280元移动数据流量套餐,订购4G飞享套餐含1GB以上的流量
                                 ("超值流量卡"不能参加).办理后,系统即可联系六个月每月赠送1GB夜间(23:00-7:00)
                                 流量,赠送流量不区分2/3/4G流量,不享受流量共享功能和流量转结,每位客户只能赠送
                                 一次,若活动期间取消订购的套餐,赠送的1GB夜间流量则在取消套餐的次月生效
                     </p>
                     <button class="btn" id="bt">更改流量套餐</button>
             </div>
         </div>`
             $("#section").html(data)

             $(".btn").click(function () {
                 // Route.getchange()
                 location.href = Route.getchange()
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

        $("#bt").on("click", function () {
            location.href = Route.getchange()
        })
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
                        <img src="./img/11.1.png"/>
                </div>
                <div class="info">
                        <p class="p1"><img src="img/busines/right.png" alt="" /> 参与活动条件及说明</p>
                        <p class="p2">4G流量月包100M-11G,多种套餐任君选,月月都可畅想超实惠4G流量</p>
                        <p class="p3">1.以下包含的均为国内流量,不含港澳台.</p>
                        <p class="p4">2.即日起新办理50元-280元移动数据流量套餐,订购4G飞享套餐含1GB以上的流量
                                    ("超值流量卡"不能参加).办理后,系统即可联系六个月每月赠送1GB夜间(23:00-7:00)
                                    流量,赠送流量不区分2/3/4G流量,不享受流量共享功能和流量转结,每位客户只能赠送
                                    一次,若活动期间取消订购的套餐,赠送的1GB夜间流量则在取消套餐的次月生效
                        </p>
                        <button class="btn" id="bt">更改流量套餐</button>
                </div>
            </div>`
                $("#section").html(data)

                $(".btn").click(function () {
                    // Route.getchange()
                    location.href = Route.getchange()
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
