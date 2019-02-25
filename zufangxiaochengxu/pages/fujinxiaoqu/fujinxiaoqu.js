Page({
    data: {
        leftlocation: "珠海",
        flag: true,
        choose: true,
        area_tobuy: "我的足迹",
        area_torent: "收藏",
        goods_img: "/images/goods_img.png",
        title: "万科城旁 超笋铺子总价12起带租10栋房子哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦",
        address: "华威路爱喜商务酒店",
        prop1: "小户型",
        prop2: "低总价",
        prop3: "低总价",
        prop4: "低总价",
        chankaojia: "600",
        forsale: "50",
        forrent: "10",
        commid:1,
        fujinxiaoqu:[]
    },
    showdetail: function () {
        wx.switchTab({
            url: "/pages/index/index",
        })
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
    onLoad: function (e) {
        var id = e.id;
        var commid = e.commid;
        var that = this;
        that.setData({
            commid:commid
        })
        if (id == 0) {
            that.setData({
                choose: true
            })
        } else {
            that.setData({
                choose: false
            })
        }
        wx.request({
            url: "https://www.zushouwuyou.com/zmf/index.php/Home/index/fujincomm",
            data: { 
                commid: commid,
                gengduo:"more"
            },
            method:"POST",
            header:{
                "content-type": "application/x-www-form-urlencoded"
            },
            success:function(res){
                // console.log(res)
                //附近小区
                var fujinxiaoqu = res.data;
                console.log(fujinxiaoqu)
                that.setData({
                    fujinxiaoqu: fujinxiaoqu
                })  
            }
        })
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
    }
})