var app = getApp();
Page({
    data:{
        area_tobuy: "我的求购",
        area_torent: "我的求租",
        goods_img: "/images/bottom2.jpg",
        title: "万科城旁 超笋铺子总价12起带租10栋房子哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦",
        desc: "1室1厅 8平 南 清水",
        price: "18万",
        address: "",
        prop1: "小户型",
        prop2: "低总价",
        prop3: "高性价比",
        choose: true,
        xuqiuroom1:[],
        moneny1: "",
        moneny2: "",
        xuqiuroom2: []

    },
    collect: function () {
        this.setData({
            choose: false
        })
    },
    my_tracks: function () {
        this.setData({
            choose: true
        })
    },
    
    onLoad: function () {
        var that = this;
        wx.request({
            url: "https://www.zushouwuyou.com/zmf/index.php/Home/index/getxuqiu",
            data: {
                openid: app.globalData.openid
            },
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            success: function (res) {
                console.log(res)
                var xuqiuroom = res.data.result;
                var xuqiuroom1 = [];
                var xuqiuroom2 = [];
                for (var i = 0; i < xuqiuroom.length; i++) {
                    if (xuqiuroom[i].type == "求租") {
                        xuqiuroom2.push(xuqiuroom[i]);
                    } else {
                        xuqiuroom1.push(xuqiuroom[i]);
                    }
                }
                var arr = [];
                for (var i = 0; i < xuqiuroom1.length; i++) {
                    var money = xuqiuroom1[i].money;
                    arr[i] = money.split("~");
                }
                console.log(arr)
                for (var i = 0; i < xuqiuroom1.length; i++) {
                    xuqiuroom1[i].arr = arr;
                }
                console.log(xuqiuroom1)
                that.setData({
                    xuqiuroom1: xuqiuroom1,
                    xuqiuroom2: xuqiuroom2
                })
            }
        })
    }
})