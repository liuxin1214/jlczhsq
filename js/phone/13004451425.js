let vueData = {
        phoneNu: '13004451425', //手机号
        cellDetails:{ // 余额提现
            mobile:"13004451425",//手机号
            name:"徐凤鸣",//持卡人姓名
            cardNo:"6213360449904232879",//银行卡号
            bankName:"农业银行",//开户银行
            balance:"20579.27",//可提现金额
            cash:"",//提现金额
            fee:"1.00",//提现手续费
            monthlyPass:"45",//流量月卡费
        },
        divideMoneyList: [ //分账记录
            {
              target: "2430.38",//参与分账金额
              percent: "65.00",//分账百分比
              receive: "1579.75",//获得分账
              time: "2025-01-12 00:51:33",//时间
            },
            {
              target: "2380.71",//参与分账金额
              percent: "65.00",//分账百分比
              receive: "1547.46",//获得分账
              time: "2025-01-11 00:17:41",//时间
            },
            {
              target: "2401.49",//参与分账金额
              percent: "65.00",//分账百分比
              receive: "1560.97",//获得分账
              time: "2025-01-10 00:09:37",//时间
            },
            {
              target: "2411.39",//参与分账金额
              percent: "65.00",//分账百分比
              receive: "1567.40",//获得分账
              time: "2025-01-09 00:36:27",//时间
            },
            {
              target: "2402.46",//参与分账金额
              percent: "65.00",//分账百分比
              receive: "1561.60",//获得分账
              time: "2025-01-08 00:16:51",//时间
            },
            {
              target: "2397.37",//参与分账金额
              percent: "65.00",//分账百分比
              receive: "1558.29",//获得分账
              time: "2025-01-07 00:47:03",//时间
            },
            {
              target: "2467.09",//参与分账金额
              percent: "65.00",//分账百分比
              receive: "1603.61",//获得分账
              time: "2025-01-06 00:41:09",//时间
            },
    
        ],
        historyList:[  //提现记录
            {
                status:"1",
                orderNo:"TX2024121148971025",//提现单号
                money:"45193.55",///提现金额
                fee:"451.93",//    手续费
                name:"徐凤鸣",//   开户人
                cardNo:"6213360449904232879",//银行卡号
                bankName:"农业银行",//银行名称
                phone:"13004451425",//联系电话
                time:"2024-12-11 20:45:36"//提现时间
            },
            { 
                status:"1",
                orderNo:"TX2024111099100100",//提现单号
                money:"51095.82",///提现金额
                fee:"510.96",//    手续费
                name:"徐凤鸣",//   开户人
                cardNo:"6213360449904232879",//银行卡号
                bankName:"农业银行",//银行名称
                phone:"13004451425",//联系电话
                time:"2024-11-10 19:41:11"//提现时间
            },
            { 
                status:"1",
                orderNo:"TX2024101091207110",//提现单号
                money:"49872.36",///提现金额
                fee:"498.72",//    手续费
                name:"徐凤鸣",//   开户人
                cardNo:"6213360449904232879",//银行卡号
                bankName:"农业银行",//银行名称
                phone:"13004451425",//联系电话
                time:"2024-10-10 14:23:26"//提现时间
            },
            { 
                status:"1",
                orderNo:"TX202491011247711",//提现单号
                money:"43771.34",///提现金额
                fee:"437.71",//    手续费
                name:"徐凤鸣",//   开户人
                cardNo:"6213360449904232879",//银行卡号
                bankName:"农业银行",//银行名称
                phone:"13004451425",//联系电话
                time:"2024-9-10 16:51:43"//提现时间
            },
            { 
                status:"1",
                orderNo:"TX202481041464329",//提现单号
                money:"47513.49",///提现金额
                fee:"475.13",//    手续费
                name:"徐凤鸣",//   开户人
                cardNo:"6213360449904232879",//银行卡号
                bankName:"农业银行",//银行名称
                phone:"13004451425",//联系电话
                time:"2024-8-10 13:07:59"//提现时间
            },
            { 
                status:"1",
                orderNo:"TX202471071124421",//提现单号
                money:"45570.56",///提现金额
                fee:"455.71",//    手续费
                name:"徐凤鸣",//   开户人
                cardNo:"6213360449904232879",//银行卡号
                bankName:"农业银行",//银行名称
                phone:"13004451425",//联系电话
                time:"2024-7-10 13:47:26"//提现时间
            },
            { 
                status:"1",
                orderNo:"TX202461093418490",//提现单号
                money:"19179.63",///提现金额
                fee:"191.80",//    手续费
                name:"徐凤鸣",//   开户人
                cardNo:"6213360449904232879",//银行卡号
                bankName:"农业银行",//银行名称
                phone:"13004451425",//联系电话
                time:"2024-6-10 15:53:06"//提现时间
            },

        ],
        goodsFloorList:[{  //首页充电站列表
            "station_name": "阳光城自由区快速充电站", //充电站名称
            "distance": 0.19,  //距离km
            "station_address": "浦东新区德爱路与张杨北路交叉路口往西南约100米", //充电站地址
            "price": "1.25", // 价格
            "terminals": [{
                "name": "快",  //快慢充
                "all_loop_num": 10, //总枪数
                "can_loop_num": 6   //可充电枪数
            }],
            "park_fee_type": 2 //停车费类型 2限时免费 0收费
        }, {
            "station_name": "昊铂上海仁恒森兰超充站",
            "distance": 0.47,
            "station_address": "高行镇东煦路仁恒·森兰雅苑二期",
            "price": "1.25",
            "terminals": [{
                "name": "快",
                "all_loop_num": 6,
                "can_loop_num": 2
            }],
            "park_fee_type": 2
        }, {
            "station_name": "昊铂上海仁恒森兰目的地站",
            "distance": 0.47,
            "station_address": "高行镇东煦路仁恒·森兰雅苑二期",
            "price": "1.55",
            "terminals": [{
                "name": "慢",
                "all_loop_num": 9,
                "can_loop_num": 7
            }],
            "park_fee_type": 0
        }, {
            "station_name": "【i玖充电】浦东金高路站",
            "distance": 1.62,
            "station_address": "上海市浦东新区高行镇龙居公寓高行社区卫生服务中心",
            "price": "1.25",
            "terminals": [{
                "name": "快",
                "all_loop_num": 90,
                "can_loop_num": 61
            }],
            "park_fee_type": 2
        }, {
            "station_name": "【鲸充】浦东新区森兰花园城一期站",
            "distance": 1.64,
            "station_address": "上海市浦东新区启帆路517号森兰花园城负一层停车场B区",
            "price": "1.26",
            "terminals": [{
                "name": "快",
                "all_loop_num": 22,
                "can_loop_num": 15
            }],
            "park_fee_type": 2
        }, {
            "station_name": "【鲸充】浦东新区森兰花园城二期站",
            "distance": 1.64,
            "station_address": "上海市浦东新区启帆路517号森兰花园城负一层A区",
            "price": "1.26",
            "terminals": [{
                "name": "快",
                "all_loop_num": 22,
                "can_loop_num": 18
            }],
            "park_fee_type": 2
        }, {
            "station_name": "国赢（融创精彩天地）充电站",
            "distance": 2.73,
            "station_address": "上海市浦东新区浦兴路街道融创精彩天地",
            "price": "1.35",
            "terminals": [{
                "name": "慢",
                "all_loop_num": 15,
                "can_loop_num": 14
            }],
            "park_fee_type": 0
        }, {
            "station_name": "和云充浦三小区慢充站",
            "distance": 3.86,
            "station_address": "上海市浦东新区博兴路799弄",
            "price": "1.2",
            "terminals": [{
                "name": "慢",
                "all_loop_num": 20,
                "can_loop_num": 18
            }],
            "park_fee_type": 0
        }, {
            "station_name": "昊铂上海金桥佳邻坊超充站",
            "distance": 3.98,
            "station_address": "金桥佳邻坊地下停车场B1层",
            "price": "1.25",
            "terminals": [{
                "name": "快",
                "all_loop_num": 4,
                "can_loop_num": 1
            }],
            "park_fee_type": 2
        }, {
            "station_name": "上海丽客公寓充电站",
            "distance": 4.05,
            "station_address": "金高路2216弄35号",
            "price": "1.7",
            "terminals": [{
                "name": "慢",
                "all_loop_num": 6,
                "can_loop_num": 6
            }],
            "park_fee_type": 0
        }],
        today:[ //今日收益
            {
                "today_division": "today_division",
                text:"结算收益",
                Number:'1579.75'
            },
            {
                "today_user": "today_user",
                text:"充电用户",
                Number:'56'
            },
            {
                "today_order": "today_order",
                text:"订单",
                Number:'56'
            },
            {
               "today_degree": "today_degree",
                text:"耗电量",
                Number:'3471.97'
            },
        ],
        yesterday:[ //昨日收益
            {
                "yesterday_division": "yesterday_division",
                text:"结算收益",
                Number:"1601.41"
            },
            {
                "yesterday_user": "yesterday_user",
                text:"充电用户",
                Number:"54"
            },
            {
                "yesterday_order": "yesterday_order",
                text:"订单",
                Number:"54"
            },
            {
               "yesterday_degree": "yesterday_degree",
                text:"耗电量",
                Number:"3519.58"
            },
        ],
        car:[   //车辆
            {'Number':302196.75,'text':'总收益(元)'},
            {'Number':1579.75,'text':'今日充电(元)'},
            {'Number':3471.97,'text':'今日用电(度)'},
            {'Number':1076.31,'text':'今日电费'},
            {'Number':2430.38,'text':'今日服务费'},
            {'Number':56,'text':'今日充电人数'},
            {'Number':15,'text':'设备数量'},
            {'Number':15,'text':'在线数量'},
            {'Number':0,'text':'离线数量'}
        ],
}