(function(window) {
        var yyj = {
            // 获取url中参数
            getUrlParams:getUrlParams,
            // 获取广西市区列表
            getguangxi:guangxi,
            // 判断是不是手机号
            isPhone:isPhone,
            // 模态框 
            prompt:prompt,
            // 判断是不是身份证号  配合模态框使用
            checkCardId:checkCardId,
            //  三级联动
            threeLinkage:threeLinkage,

        }




        
        // -------------------01获取url地址的参数--------------------
        function getUrlParams(params){
            var str=location.search.substring(1);//截取？后面的内容
            str=decodeURI(str);//解码，将字符串中的汉字编码转换过来
            var arr=str.split("&");//将字符串转换成数组
            var obj={};
            for(var i=0;i<arr.length;i++){
              //字符串中“=”左边为键名，右边为键值，存入对象中
              obj[arr[i].split("=")[0]]=arr[i].split("=")[1]//向空对象中添加属性
            }
        //    console.log(obj);
            //遍历对象，将属性值为数字的字符串转换成数字
            for (var key in obj){
              if(!isNaN(Number(obj[key]))){
                obj[key]=Number(obj[key]);
              }
            }
            return obj[params]
          }



        //   -------------------------广西省市区列表------------------------

        function guangxi(){
            var data =
            [
                {
                    "name": "广西",
                    "city": [
                        {
                            "name": "南宁",
                            "area": ["青秀区", "兴宁区", "西乡塘区", "良庆区", "江南区", "邕宁区", "武鸣县", "隆安县", "马山县", "上林县", "宾阳县", "横县", "其他"]
                        },

                        {
                            "name": "柳州",
                            "area": ["城中区", "鱼峰区", "柳北区", "柳南区", "柳江县", "柳城县", "鹿寨县", "融安县", "融水苗族自治县", "三江侗族自治县", "其他"]
                        },

                        {
                            "name": "桂林",
                            "area": ["象山区", "秀峰区", "叠彩区", "七星区", "雁山区", "阳朔县", "临桂县", "灵川县", "全州县", "平乐县", "兴安县", "灌阳县", "荔浦县", "资源县", "永福县", "龙胜各族自治县", "恭城瑶族自治县", "其他"]
                        },

                        {
                            "name": "梧州",
                            "area": ["万秀区", "蝶山区", "长洲区", "岑溪市", "苍梧县", "藤县", "蒙山县", "其他"]
                        },

                        {
                            "name": "北海",
                            "area": ["海城区", "银海区", "铁山港区", "合浦县", "其他"]
                        },

                        {
                            "name": "防城港",
                            "area": ["港口区", "防城区", "东兴市", "上思县", "其他"]
                        },

                        {
                            "name": "钦州",
                            "area": ["钦南区", "钦北区", "灵山县", "浦北县", "其他"]
                        },

                        {
                            "name": "贵港",
                            "area": ["港北区", "港南区", "覃塘区", "桂平市", "平南县", "其他"]
                        },

                        {
                            "name": "玉林",
                            "area": ["玉州区", "北流市", "容县", "陆川县", "博白县", "兴业县", "其他"]
                        },

                        {
                            "name": "百色",
                            "area": ["右江区", "凌云县", "平果县", "西林县", "乐业县", "德保县", "田林县", "田阳县", "靖西县", "田东县", "那坡县", "隆林各族自治县", "其他"]
                        },

                        {
                            "name": "贺州",
                            "area": ["八步区", "钟山县", "昭平县", "富川瑶族自治县", "其他"]
                        },

                        {
                            "name": "河池",
                            "area": ["金城江区", "宜州市", "天峨县", "凤山县", "南丹县", "东兰县", "都安瑶族自治县", "罗城仫佬族自治县", "巴马瑶族自治县", "环江毛南族自治县", "大化瑶族自治县", "其他"]
                        },

                        {
                            "name": "来宾",
                            "area": ["兴宾区", "合山市", "象州县", "武宣县", "忻城县", "金秀瑶族自治县", "其他"]
                        },

                        {
                            "name": "崇左",
                            "area": ["江州区", "凭祥市", "宁明县", "扶绥县", "龙州县", "大新县", "天等县", "其他"]
                        },

                        {
                            "name": "其他",
                            "area": ["其他"]
                        }

                    ]
                },
            ]
            return data
        }

            // ----------------------判断是不是手机号----------------------------
    function isPhone( phone ){
        return (/^1[34578]\d{9}$/.test(phone))
    }


            // 模态框
            function prompt(d) {
                var l = d;
                $(".mask").css({
                    "display": "block",
                })
                $("#btn").click(function () {
                	$('.mask').hide()
                })
                $(".prompt").html(l)
            }
            //   模态框html部分
        //     <div class="mask">
        //     <div class="box">
        //         提示！
        //         <h1 class="prompt">请输入正确的用户名</h1>
        //         <span></span>
        //         <input type="button" value="确定" id="btn">
        //     </div>
        // </div>


        // 模态框css部分
        // .mask {
        //     position: fixed;
        //     top: 0%;
        //     left: 0%;
        //     /* transform: translate(-50%); */
        //     height:100%;
        //     width: 100%;
        //     background-color: rgba(0, 0,0,.3);
        //     display: none;
        // }
        // .mask .box {
        //     height: 7.6875rem;
        //     width: 13.125rem;
        //     background-color: white;
        //     text-align: center;
        //     position: absolute;
        //     top: 35%;
        //     left: 50%;
        //     transform: translate(-50%,-50%);
        //     border-radius: .625rem;
        //     overflow: hidden;
        // }
        // .mask .box h1 {
        //     color: black;
        //     line-height: 5.68rem;
        // }
        // .mask .box input {
        //     border-top: .0625rem solid #ccc;
        //     height: 1.875rem;
        //     width: 100%;
        //     position: absolute;
        //     bottom: 0;
        //     left: 50%;
        //     transform: translate(-50%);
        //     background-color: white;
        // }

            // ------------------------判断身份证号-------------------------------

            function checkCardId(socialNo) {
                
                            if (socialNo == "") {
                                yyj.prompt("输入身份证号码不能为空!");
                                return (false);
                            }
                            if (socialNo.length != 15 && socialNo.length != 18) {
                                yyj.prompt("输入身份证号码格式不正确!");
                                return (false);
                            }
                            var area = {
                                11: "北京",
                                12: "天津",
                                13: "河北",
                                14: "山西",
                                15: "内蒙古",
                                21: "辽宁",
                                22: "吉林",
                                23: "黑龙江",
                                31: "上海",
                                32: "江苏",
                                33: "浙江",
                                34: "安徽",
                                35: "福建",
                                36: "江西",
                                37: "山东",
                                41: "河南",
                                42: "湖北",
                                43: "湖南",
                                44: "广东",
                                45: "广西",
                                46: "海南",
                                50: "重庆",
                                51: "四川",
                                52: "贵州",
                                53: "云南",
                                54: "西藏",
                                61: "陕西",
                                62: "甘肃",
                                63: "青海",
                                64: "宁夏",
                                65: "新疆",
                                71: "台湾",
                                81: "香港",
                                82: "澳门",
                                91: "国外"
                            };
                            if (area[parseInt(socialNo.substr(0, 2))] == null) {
                                yyj.prompt("身份证号码不正确(地区非法)!");
                                return (false);
                            }
                
                            if (socialNo.length == 15) {
                                pattern = /^\d{15}$/;
                                if (pattern.exec(socialNo) == null) {
                                    yyj.prompt("15位身份证号码必须为数字！");
                                    return (false);
                                }
                                var birth = parseInt("19" + socialNo.substr(6, 2));
                                var month = socialNo.substr(8, 2);
                                var day = parseInt(socialNo.substr(10, 2));
                                switch (month) {
                                    case '01':
                                    case '03':
                                    case '05':
                                    case '07':
                                    case '08':
                                    case '10':
                                    case '12':
                                        if (day > 31) {
                                            yyj.prompt('输入身份证号码不格式正确!');
                                            return false;
                                        }
                                        break;
                                    case '04':
                                    case '06':
                                    case '09':
                                    case '11':
                                        if (day > 30) {
                                            yyj.prompt('输入身份证号码不格式正确!');
                                            return false;
                                        }
                                        break;
                                    case '02':
                                        if ((birth % 4 == 0 && birth % 100 != 0) || birth % 400 == 0) {
                                            if (day > 29) {
                                                yyj.prompt('输入身份证号码不格式正确!');
                                                return false;
                                            }
                                        } else {
                                            if (day > 28) {
                                                yyj.prompt('输入身份证号码不格式正确!');
                                                return false;
                                            }
                                        }
                                        break;
                                    default:
                                        yyj.prompt('输入身份证号码不格式正确!');
                                        return false;
                                }
                                var nowYear = new Date().getYear();
                                if (nowYear - parseInt(birth) < 15 || nowYear - parseInt(birth) > 100) {
                                    yyj.prompt('输入身份证号码不格式正确!');
                                    return false;
                                }
                                return (true);
                            }
                            var Wi = new Array(
                                7, 9, 10, 5, 8, 4, 2, 1, 6,
                                3, 7, 9, 10, 5, 8, 4, 2, 1
                            );
                            var lSum = 0;
                            var nNum = 0;
                            var nCheckSum = 0;
                            for (i = 0; i < 17; ++i) {
                                if (socialNo.charAt(i) < '0' || socialNo.charAt(i) > '9') {
                                    yyj.prompt("输入身份证号码格式不正确!");
                                    return (false);
                                } else {
                                    nNum = socialNo.charAt(i) - '0';
                                }
                                lSum += nNum * Wi[i];
                            }
                            if (socialNo.charAt(17) == 'X' || socialNo.charAt(17) == 'x') {
                                lSum += 10 * Wi[17];
                            } else if (socialNo.charAt(17) < '0' || socialNo.charAt(17) > '9') {
                                yyj.prompt("输入身份证号码格式不正确!");
                                return (false);
                            } else {
                                lSum += (socialNo.charAt(17) - '0') * Wi[17];
                            }
                            if ((lSum % 11) == 1) {
                                return true;
                            } else {
                                yyj.prompt("输入身份证号码格式不正确!");
                                return (false);
                            }
                        }


    // --------------------------三级联动-----传json结构数据-----------------------------、


    function threeLinkage(a) {
        var select = document.querySelectorAll('select');
        var cityData = a ;
        var shiData;
        for (var i = 0; i < cityData.length; i++) {

            var shengfen = cityData[i].name;

            var option = document.createElement('option');

            option.innerHTML = shengfen;

            select[0].appendChild(option);

        }
        select[0].onchange = function () {

            // 重置掉 市区 和区域
            select[1].innerHTML = '<option value="">请选择市区</option>';
            select[2].innerHTML = '<option value="">请选择区域</option>';

            // 得到选择的城市
            var shengfen = this.value;

            // 根据选择的省份找这个省份对应的市区

            for (var i = 0; i < cityData.length; i++) {
                if (shengfen == cityData[i].name) {

                    shiData = cityData[i].city;
                    for (var j = 0; j < shiData.length; j++) {
                        var option = document.createElement('option');
                        option.innerHTML = shiData[j].name;

                        select[1].appendChild(option);
                    }
                }
            }
        }
        // 第三步 ：当你选择一个新的市区的时候 重置掉区域
        // 根据新的市区选择对应的区域
        select[1].onchange = function () {
            // 重置区域
            select[2].innerHTML = '<option value="">请选择区域</option>';

            var nowShiqu = this.value;

            // 根据对应的市区找到对应的区域
            for (var i = 0; i < shiData.length; i++) {
                if (nowShiqu == shiData[i].name) {
                    var quyu = shiData[i].area;
                    for (var j = 0; j < quyu.length; j++) {

                        var option = document.createElement('option');

                        option.innerHTML = quyu[j];

                        select[2].appendChild(option);
                    }
                }
            }
        }
    }



        window.yyj = yyj
})(window)