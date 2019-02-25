var app = getApp();
Page({
    data:{
        leftlocation: "珠海",
        flag: true,
        choose: true,
        area_tobuy: "我的足迹",
        area_torent: "收藏",
        goods_img: "/images/goods_img.png",
        title: "万科城旁 超笋铺子总价12起带租10栋房子哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦",
        address: "",
        desc: "1室1厅 8平 南 清水",
        price: "18万",
        prop1: "小户型",
        prop2: "低总价",
        prop3: "低总价",
        prop4: "低总价",
        chankaojia: "600",
        forsale: "50",
        forrent: "10", 
        searchareaflag: true,
        datas1: [
            { name: "旭日湾花园1", address: "浩日居34栋1单元20层2001号" },
            { name: "旭日湾花园2", address: "浩日居34栋1单元20层2002号" },
            { name: "旭日湾花园3", address: "浩日居34栋1单元20层2003号" }
        ],
        mypublicroom:[]
    },
    hiddensearch: function () {
        //隐藏搜索
        this.setData({
            searchareaflag: true
        })
    },
    searchblur: function () {
        //失去焦点
        this.setData({
            searchareaflag: true
        })
    },
    searchfocus: function () {
        //获得焦点
        this.setData({
            searchareaflag: false
        })
    },
    searchinput: function (e) {
        //输入的值
        var val = e.detail.value;
        var that = this;
        that.setData({
            val: val
        })
        if (val == "") {
            that.setData({
                datas1: []
            })
        } else {
            wx: wx.request({
                url: "https://www.zushouwuyou.com/zmf/index.php/Home/index/selectcomm",
                data: { content: val },
                header: {
                    "content-type": "application/x-www-form-urlencoded"
                },
                method: "POST",
                success: function (res) {
                    console.log(res)
                    var datas1 = res.data;
                    that.setData({
                        datas1: datas1
                    })
                }
            })
        }
    },
    search: function (e) {
        console.log(e)
        //搜索
        var that = this;
        var val = "";
        if (e.type == "confirm") {//回车直接搜索
            val = e.detail.value;
        } else if (e.type == "tap") {//点击右边按钮搜索
            //输入的值
            val = that.data.val;
        }
        if (val == "") {
            that.setData({
                datas1: []
            })
        } else {
            wx: wx.request({
                url: "https://www.zushouwuyou.com/zmf/index.php/Home/index/selectcomm",
                data: { content: val },
                header: {
                    "content-type": "application/x-www-form-urlencoded"
                },
                method: "POST",
                success: function (res) {
                    console.log(res)
                    var datas1 = res.data;
                    that.setData({
                        datas1: datas1
                    })
                }
            })
        }
    },
    onLoad:function(){
        var that = this;
        wx.request({
            url: "https://www.zushouwuyou.com/zmf/index.php/Home/index/getfabu",
            data: { 
                openid: app.globalData.openid
            },
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            success:function(res){
                console.log(res)
                var mypublicroom = res.data.result;
                if (mypublicroom != false){
                    that.setData({
                        mypublicroom: mypublicroom
                    })
                }else{
                    that.setData({
                        searchareaflag:false,
                        flag:false
                    })
                }
                
            }
        })
    }
})