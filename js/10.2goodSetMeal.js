(function() {
    $(function() {

        // 参数为0的时候展示移动数据
        if(yyj.getUrlParams("d") == 0) {
            Route.getMallGetFlyProduct(function( data ) {
                console.log(data);
                //data.content["套餐合约"][0].contractname.split("-")[0]
                var tem = template("tpl",data)
                $(".list_wrap").html(tem)
    
           })
        }

        // 参数为1的时候展示联通数据
        else if(yyj.getUrlParams("d") == 1) {

        }

        // 参数为2的时候展示电信数据

        else if (yyj.getUrlParams("d") == 2) {

        }

        // $(".select_business").on('click','li',function(){
        //     var _this = $(this);
        //     select_fn(_this);//
            
        //     //参数  0:中国移动  1:中国联通  2:电信
        //     window.localStorage.setItem("byname",$(this).index())


        //     // -------------------移动业务----------------------
        //     if (window.localStorage.getItem("byname") == 0) {
        //         // $("#section").html('')
        //         Route.getMallGetFlyProduct(function( data ) {
        //             console.log(data);
        //             var tem = template("tpl",data)
        //             $(".list_wrap").html(tem)
       
        //        })
        //      }

        //     //  --------------------联通业务--------------------
        //      if (window.localStorage.getItem("byname") == 1) {
        //         // $(".banner").remove()
        //         var data = alt()
        //         $(".list_wrap").html(data)
        //      }

        //     //  --------------------电信业务-----------------------
        //      if (window.localStorage.getItem("byname") == 2) {
        //         $(".banner").html('')
        //         var data = alt()
        //         $(".list_wrap").html(data)
        //      }
        // })
    })
})();