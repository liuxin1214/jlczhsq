let rootVM = new Vue({
    el: '#root',
    data: {
        Newdata: {
            today:[
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
            yesterday:[
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
        }
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