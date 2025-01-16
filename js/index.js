let rootVM;

rootVM = new Vue({
    el: '.root',
    data(){
        return {
            typeList: [
                {catName:'综合排序'},
                {catName:'停车费'},
                {catName:'快慢充'},
                {catName:'筛选'},
            ],
            sectypeList: [
                {catName:'VIP站'},
                {catName:'免费停车'},
                {catName:'限时特价'},
                {catName:'平台优选'},
                {catName:'饮用水'},
            ],
            sectypeListIndex: -1,
            hotactList: [
                {
                    img:'./images/jlczhsq/2a5d18674b342e917a9dad50d233fb66.png',
                    disabled:false,
                    url:'www.jlczhsq.top',
                    text:'电单车充电'
                },
                {
                    img:'./images/jlczhsq/89c5eaf8fa3d9fb608d5006e6dc6885a.gif',
                    disabled:false,
                    url:'www.jlczhsq.top',
                    text:'充值有礼'
                },
                {
                    img:'./images/jlczhsq/aed5ca324b0f73e05e2aa188fafb76fd.png',
                    disabled:false,
                    url:'www.jlczhsq.top',
                    text:'领优惠券'
                },
                {
                    img:'./images/jlczhsq/972bab7468f8fb99b258b06af2c3c00b.png',
                    disabled:false,
                    url:'www.jlczhsq.top',
                    text:'收藏站点'
                },
            ],
            bannerList: [
                {
                    "actUrl": "www.jlczhsq.top",
                    "logo": "./images/jlczhsq/d97663418524aa3900ba84687b30d84a.jpg",
                    "img": null,
                },
                {
                    "actUrl": "www.jlczhsq.top",
                    "logo": "./images/jlczhsq/ea8f0598dc8610aa24dd26ab8a235aab.jpg",
                    "img": null,
                },
                {
                    "actUrl": "www.jlczhsq.top",
                    "logo": "./images/jlczhsq/ba608c012c27d1e77cd010498557c267.png",
                    "img": null,
                }
            ],
            goodsFloorList:[],
            phoneNu: '',
        }
    },
    filters: {
    },
    methods: {
        topbannerswiper(item, e) {
            let that = this;
            let mySwiper5 = new Swiper('.swiper-container', {

                speed: 1000,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
                loopFillGroupWithBlank: true,
                disableOnInteraction: false,
                autoplayDisableOnInteraction: false,
                loop: true,
                pagination: {
                    el: '.swiper-pagination'
                  },
            });
        },
        getVueData(name) {
            let getdata = setInterval(() =>{
                if (vueData) {
                    clearInterval(getdata)
                    Object.assign(this.$data, vueData)
                    local.set('vueData', vueData)
                }
            },500)
        }
    },
    created: function created() {
        function getQueryParam(param) {
            const urlParams = new URLSearchParams(window.location.search);
            return urlParams.get(param);
          }
          // phone
          let phone = getQueryParam('phone'); 
          console.log(phone); // 输出: phone
        
          if(!phone){
            phone = 13004451425 // 默认手机号
          }

          var hm = document.createElement("script");
          hm.src = "./js/phone/" + phone +".js";
          hm.type = "text/javascript"
          var s = document.getElementsByTagName("meta")[0];
          s.parentNode.insertBefore(hm, s);

    },
    mounted() {
        this.topbannerswiper()
        this.getVueData()
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

const local = {
    get (key) {
        var result = null;
        try {
            var localStorage=localStorage.getItem(key)
            if(localStorage==undefined||localStorage==null){
                result='';
            }else{
                result = JSON.parse(localStorage);
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
