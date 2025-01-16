let rootVM = new Vue({
    el: '.root',
    data: {
        phoneNu:'',
        today:[
            {
                "today_division": "today_division",
                text:"结算收益",
                Number:''
            },
            {
                "today_user": "today_user",
                text:"充电用户",
                Number:''
            },
            {
                "today_order": "today_order",
                text:"订单",
                Number:''
            },
            {
               "today_degree": "today_degree",
                text:"耗电量",
                Number:''
            },
        ],
        yesterday:[
            {
                "yesterday_division": "yesterday_division",
                text:"结算收益",
                Number:""
            },
            {
                "yesterday_user": "yesterday_user",
                text:"充电用户",
                Number:""
            },
            {
                "yesterday_order": "yesterday_order",
                text:"订单",
                Number:""
            },
            {
               "yesterday_degree": "yesterday_degree",
                text:"耗电量",
                Number:""
            },
        ],
        car:[
            {'Number':'','text':'总收益(元)'},
            {'Number':'','text':'今日充电(元)'},
            {'Number':'','text':'今日用电(度)'},
            {'Number':'','text':'今日电费'},
            {'Number':'','text':'今日服务费'},
            {'Number':'','text':'今日充电人数'},
            {'Number':'','text':'设备数量'},
            {'Number':'','text':'在线数量'},
            {'Number':'','text':'离线数量'}
        ],
        cellResult:"",//勾选结果
        cellList:[//单元格内信息
            { key:1,title:"提现到银行卡"},
            { key:2,title:"提现到对公账户"},
        ],
        cellDetails:{
            mobile:"",//手机号
            name:"",//持卡人姓名
            cardNo:"",//银行卡号
            bankName:"",//开户银行
            balance:"",//可提现金额
            cash:"",//提现金额
            fee:"",//提现手续费
            monthlyPass:"",//流量月卡费
        },
        divideMoneyList: [
            {
              target: "",//参与分账金额
              percent: "",//分账百分比
              receive: "",//获得分账
              time: "",//时间
            },
            {
              target: "",//参与分账金额
              percent: "",//分账百分比
              receive: "",//获得分账
              time: "",//时间
            },
            {
              target: "",//参与分账金额
              percent: "",//分账百分比
              receive: "",//获得分账
              time: "",//时间
            },
            {
              target: "",//参与分账金额
              percent: "",//分账百分比
              receive: "",//获得分账
              time: "",//时间
            },
            {
              target: "",//参与分账金额
              percent: "",//分账百分比
              receive: "",//获得分账
              time: "",//时间
            },
            {
              target: "",//参与分账金额
              percent: "",//分账百分比
              receive: "",//获得分账
              time: "",//时间
            },
            {
              target: "",//参与分账金额
              percent: "",//分账百分比
              receive: "",//获得分账
              time: "",//时间
            },
    
        ],
        historyList:[
            { 
                status:"",
                orderNo:"",//提现单号
                money:"",///提现金额
                fee:"",//    手续费
                name:"",//   开户人
                cardNo:"",//银行卡号
                bankName:"",//银行名称
                phone:"",//联系电话
                time:""//提现时间
            },
            { 
                status:"",
                orderNo:"",//提现单号
                money:"",///提现金额
                fee:"",//    手续费
                name:"",//   开户人
                cardNo:"",//银行卡号
                bankName:"",//银行名称
                phone:"",//联系电话
                time:""//提现时间
            },
            { 
                status:"",
                orderNo:"",//提现单号
                money:"",///提现金额
                fee:"",//    手续费
                name:"",//   开户人
                cardNo:"",//银行卡号
                bankName:"",//银行名称
                phone:"",//联系电话
                time:""//提现时间
            },
            { 
                status:"",
                orderNo:"",//提现单号
                money:"",///提现金额
                fee:"",//    手续费
                name:"",//   开户人
                cardNo:"",//银行卡号
                bankName:"",//银行名称
                phone:"",//联系电话
                time:""//提现时间
            },
            { 
                status:"",
                orderNo:"",//提现单号
                money:"",///提现金额
                fee:"",//    手续费
                name:"",//   开户人
                cardNo:"",//银行卡号
                bankName:"",//银行名称
                phone:"",//联系电话
                time:""//提现时间
            },
            { 
                status:"",
                orderNo:"",//提现单号
                money:"",///提现金额
                fee:"",//    手续费
                name:"",//   开户人
                cardNo:"",//银行卡号
                bankName:"",//银行名称
                phone:"",//联系电话
                time:""//提现时间
            },
            { 
                status:"",
                orderNo:"",//提现单号
                money:"",///提现金额
                fee:"",//    手续费
                name:"",//   开户人
                cardNo:"",//银行卡号
                bankName:"",//银行名称
                phone:"",//联系电话
                time:""//提现时间
            },

        ],
        statusConfig:{
            "1":"已打款",
            "2":"排队中",
            "3":"已失效",
        },
        imgready:false,
    },
    methods:{
        takeCash(){
            /* 
            * 1判断是否选择了提现方式
            * 2判断是否填写了 合理的 提现金额
            * 3请求接口 提示用户 返回到上一页
            */
            console.log(this.cellResult)
        },
        routerBack() {
            window.history.back();
        },
        setVueData(name) {
            debugger
            let setdata = setInterval(() =>{
                
                if (local.get('vueData')) {
                    clearInterval(setdata)
                    Object.assign(this.$data, local.get('vueData'))
                }
            },500)
        }
    },
    mounted(){
        debugger
        this.setVueData()
    }
});

function adapter(){
    let w = document.documentElement.clientWidth;
    if (w > 640) {
        w = 640;
    }
    document.documentElement.style.fontSize = w/750*32+"px";
  }
  adapter();
  window.onresize = adapter;


window.onresize = adapter;
let img = new Image()
img.src = '../images/jlczhsq/interiorMy.png';
img.onload = function(){
  rootVM.imgready = true;
};

const local = {
    get (key) {
        var result = null;
        try {
            var local=localStorage.getItem(key)
            if(local==undefined||local==null){
                result='';
            }else{
                result = JSON.parse(local);
            }
        }
        catch (e) {
            console.log(e);
        }
    
        return result;
    },
    set (key, value) {
        try {
            localStorage.setItem(key,JSON.stringify(value))
        }
        catch (e) {
            console.log(e);
        }
    }
}