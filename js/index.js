import Swiper from "../js/swiper.min";
let rootVM;

rootVM = new Vue({
    el: '#root',
    data: {
        btnText: '',
        popText: '',
        baseline: false,
        pricesort: -1,//1倒序，2正序
        ifshowsortbox: false,
        showPop: false,
        ifsureloginout: false,
        dimmerShowMsg: '',
        dimmerShowFlag: false,
        shenhestatus: 4,
        bannerIndex: 0,
        actId: '',
        agreerule: false,
        stime: 5,
        agreementShow: false,
        showNavMask: false,
        tapList: [],
        advisterlist: [],
        goodsList: [
        ],
        typeListindex: 0,
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
        middleactList: [
        ],
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
        happyList: [],
        tencentList: [],
        happyImgUrl: '',
        happyToUrl: '',
        tencentImgUrl: '',
        tencentToUrl: '',
        isflushbox:false,
        goodsFloorList:[{
            "source": "kd",
            "station_id": "GCXNY10063-YG115283",
            "station_name": "阳光城自由区快速充电站",
            "distance": 0.19,
            "station_address": "浦东新区德爱路与张杨北路交叉路口往西南约100米",
            "price": "1.25",
            "has_lc": 0,
            "has_qc": 1,
            "terminals": [{
                "name": "快",
                "all_loop_num": 10,
                "can_loop_num": 6
            }],
            "all_device_num": 6,
            "can_loop_num": 6,
            "park_fee_type": 2
        }, {
            "source": "kd",
            "station_id": "GQNY921-HB76180",
            "station_name": "昊铂上海仁恒森兰超充站",
            "distance": 0.47,
            "station_address": "高行镇东煦路仁恒·森兰雅苑二期",
            "price": "1.25",
            "has_lc": 0,
            "has_qc": 1,
            "terminals": [{
                "name": "快",
                "all_loop_num": 6,
                "can_loop_num": 2
            }],
            "all_device_num": 2,
            "can_loop_num": 2,
            "park_fee_type": 2
        }, {
            "source": "kd",
            "station_id": "GQNY921-HB97948",
            "station_name": "昊铂上海仁恒森兰目的地站",
            "distance": 0.47,
            "station_address": "高行镇东煦路仁恒·森兰雅苑二期",
            "price": "1.55",
            "has_lc": 1,
            "has_qc": 0,
            "terminals": [{
                "name": "慢",
                "all_loop_num": 9,
                "can_loop_num": 7
            }],
            "all_device_num": 7,
            "can_loop_num": 7,
            "park_fee_type": 0
        }, {
            "source": "kd",
            "station_id": "IJ929-iJ65080",
            "station_name": "【i玖充电】浦东金高路站",
            "distance": 1.62,
            "station_address": "上海市浦东新区高行镇龙居公寓高行社区卫生服务中心",
            "price": "1.25",
            "has_lc": 0,
            "has_qc": 1,
            "terminals": [{
                "name": "快",
                "all_loop_num": 90,
                "can_loop_num": 61
            }],
            "all_device_num": 61,
            "can_loop_num": 61,
            "park_fee_type": 2
        }, {
            "source": "kd",
            "station_id": "JSJC329-JC48765",
            "station_name": "【鲸充】浦东新区森兰花园城一期站",
            "distance": 1.64,
            "station_address": "上海市浦东新区启帆路517号森兰花园城负一层停车场B区",
            "price": "1.26",
            "has_lc": 0,
            "has_qc": 1,
            "terminals": [{
                "name": "快",
                "all_loop_num": 22,
                "can_loop_num": 15
            }],
            "all_device_num": 15,
            "can_loop_num": 15,
            "park_fee_type": 2
        }, {
            "source": "kd",
            "station_id": "JSJC329-JC48766",
            "station_name": "【鲸充】浦东新区森兰花园城二期站",
            "distance": 1.64,
            "station_address": "上海市浦东新区启帆路517号森兰花园城负一层A区",
            "price": "1.26",
            "has_lc": 0,
            "has_qc": 1,
            "terminals": [{
                "name": "快",
                "all_loop_num": 22,
                "can_loop_num": 18
            }],
            "all_device_num": 18,
            "can_loop_num": 18,
            "park_fee_type": 2
        }, {
            "source": "kd",
            "station_id": "GZWX559-KB116126",
            "station_name": "国赢（融创精彩天地）充电站",
            "distance": 2.73,
            "station_address": "上海市浦东新区浦兴路街道融创精彩天地",
            "price": "1.35",
            "has_lc": 1,
            "has_qc": 0,
            "terminals": [{
                "name": "慢",
                "all_loop_num": 15,
                "can_loop_num": 14
            }],
            "all_device_num": 14,
            "can_loop_num": 14,
            "park_fee_type": 0
        }, {
            "source": "kd",
            "station_id": "HYC1073-HY88817",
            "station_name": "和云充浦三小区慢充站",
            "distance": 3.86,
            "station_address": "上海市浦东新区博兴路799弄",
            "price": "1.2",
            "has_lc": 1,
            "has_qc": 0,
            "terminals": [{
                "name": "慢",
                "all_loop_num": 20,
                "can_loop_num": 18
            }],
            "all_device_num": 18,
            "can_loop_num": 18,
            "park_fee_type": 0
        }, {
            "source": "kd",
            "station_id": "GQNY921-HB83009",
            "station_name": "昊铂上海金桥佳邻坊超充站",
            "distance": 3.98,
            "station_address": "金桥佳邻坊地下停车场B1层",
            "price": "1.25",
            "has_lc": 0,
            "has_qc": 1,
            "terminals": [{
                "name": "快",
                "all_loop_num": 4,
                "can_loop_num": 1
            }],
            "all_device_num": 1,
            "can_loop_num": 1,
            "park_fee_type": 2
        }, {
            "source": "kd",
            "station_id": "JYC1168-SH85590",
            "station_name": "上海丽客公寓充电站",
            "distance": 4.05,
            "station_address": "金高路2216弄35号",
            "price": "1.7",
            "has_lc": 1,
            "has_qc": 0,
            "terminals": [{
                "name": "慢",
                "all_loop_num": 6,
                "can_loop_num": 6
            }],
            "all_device_num": 6,
            "can_loop_num": 6,
            "park_fee_type": 0
        }],
        goodsFloorListTmp:[],
        floorData: {},
        phoneNu: '',
        catId: '',
        kapchaSms: '',
        smsCode: '',
        isuse: false,
        iflogin: false,
        countPage: 1,
        percentShow: false,
        imgselect: './images/younger/btns1.png',
        phoneError: '',
        imgCodeError: '',
        smsCodeError: '',
        advisteraddress: 4,
        ifshowsecboxres: false,
        ifshownewstubox: false,
        istccshowsev: false,

        pageGuidePop: false,
        pageGuidePopOne: false,
        pageGuidePopTwo: false,
        pageGuidePopThree: false,
        pageGuidePopFour: false,
    },
    filters: {
    },
    methods: {
        topbannerswiper(item, e) {
            let that = this;
            let mySwiper5 = new Swiper('.swiper-container', {

                speed: 1000,
                autoplay: 3200,
                loopFillGroupWithBlank: true,
                disableOnInteraction: false,
                autoplayDisableOnInteraction: false,
                loop: true,
                pagination: '.swiper-pagination',
                onSlideChangeStart: function (e) {
                    that.bannerIndex = e.realIndex
                },
                onSlideChangeEnd: function (e) {
                    that.bannerIndex = e.realIndex
                },
            });
        },
        goodsadswiper(item, e) {
            let that = this;
            let mySwiper5 = new Swiper('.swiper-containerad', {

                speed: 1000,
                autoplay: 3200,
                loopFillGroupWithBlank: true,
                disableOnInteraction: false,
                autoplayDisableOnInteraction: false,
                loop: true,
                onSlideChangeStart: function (e) {
                    that.bannerIndex = e.realIndex
                },
                onSlideChangeEnd: function (e) {
                    that.bannerIndex = e.realIndex
                },
            });
        },
    },
    created: function created() {

    },
    ready: function ready() {
        this.topbannerswiper()
        this.goodsadswiper();
    }
});


// 是否登录

function adapter(){
    let w = document.documentElement.clientWidth;
    if (w > 640) {
        w = 640;
    }
    document.documentElement.style.fontSize = w/750*32+"px";
  }
  adapter();
  window.onresize = adapter;
