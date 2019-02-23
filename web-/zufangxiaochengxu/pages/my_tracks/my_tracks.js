var app = getApp();
Page({
    data:{
        leftlocation: "珠海",
        flag: true,
        choose:true,
        area_tobuy: "我的足迹",
        area_torent: "收藏",
        goods_img: "/images/goods_img.png",
        title: "万科城旁 超笋铺子总价12起带租10栋房子哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦",
        address: "华威路爱喜商务酒店",
        desc: "1室1厅 8平 南 清水",
        price: "18万",
        prop1: "小户型",
        prop2: "低总价",
        prop3: "低总价",
        prop4: "低总价",
        chankaojia: "600",
        forsale :"50",
        forrent :"10", 
        roomjilu:[],
        commjilu:[]
    },
    showdetail: function () {
        wx.switchTab({
            url: "/pages/index/index",
        })
    },
    collect:function(){
        this.setData({
            choose:false
        })
    },
    my_tracks:function(){
        this.setData({
            choose: true
        })
    },
    onLoad:function(){
        
    },
    hiddensearch: function () {
        //隐藏搜索
        this.setData({
            flag: true
        })
    },
    searchblur: function () {
        //失去焦点
        this.setData({
            flag: true
        })
    },
    searchfocus: function () {
        //获得焦点
        this.setData({
            flag: false
        })
    },
    onLoad:function(){
        var that = this;
        wx.request({
            url: "https://www.zushouwuyou.com/zmf/index.php/Home/index/getjilu",
            data: {
                openid: app.globalData.openid,
                name: "xiaoqu"
            },
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            success: function (res) {
                console.log(res)
                var commjilu = res.data.result;
                that.setData({
                    commjilu: commjilu
                })
            }
        })
        wx.request({
            url: "https://www.zushouwuyou.com/zmf/index.php/Home/index/getjilu",
            data: {
                openid: app.globalData.openid,
                name: "fangjian"
            },
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            success: function (res) {
                // console.log(res)
                var roomjilu = res.data.result;
                that.setData({
                    roomjilu: roomjilu
                })
            }
        })
    }
})