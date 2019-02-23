var app = getApp();
Page({
    data:{
        imgUrls: [],
        roomname:"万寿路西街11号3室1厅1卫 万寿路西街11号3室1厅1卫 万寿路西街11号3室1厅1卫 万寿路西街11号3室1厅1卫",
        markers: [{
            latitude: "",
            longitude: "",
            width: 50,
            height: 50,
            title:""
        }],
        area_tobuy: "小区在售",
        area_torent: "小区在租",
        goods_img: "/images/goods_img.png",
        title: "万科城旁 超笋铺子总价12起带租10栋房子哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦",
        desc: "1室1厅 8平 南 清水",
        price: "",
        address: "",
        jieshao: "",
        zhoubian: "",
        peitao: "",
        prop1: "小户型",
        prop2: "低总价",
        prop3: "高性价比",
        choose: true,
        selecticonflag: true,
        roomtype:"",
        huxing:"",
        mainji:"",
        chaoxiang:"",
        louceng:"",
        loudong:"",
        jungong:"",
        create:"",
        danjia:"",
        lat:"",
        lng:"",
        commname:"",
        zaishoufang: [],
        zaizufang: [],
        roomid:0
    },
    onLoad:function(e){
        var id= e.id;
        var that = this;
        // console.log(id)
        wx.request({
            url: "https://www.zushouwuyou.com/zmf/index.php/Home/index/roomxq",
            data: {
                id: id
            },
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            success:function(res){
                console.log(res)
                var content = res.data.result;
                //房源图片
                var imgUrls = content.imgsrc;
                //房源名称
                var roomname = content.name;
                //地址
                var address = content.address;
                //生活配套
                var peitao = content.peitao;
                //周边环境
                var zhoubian = content.zhoubian;
                //文件介绍
                var jieshao = content.jieshao;
                //售价或者租金
                var price = content.money;
                //户型
                var huxing = content.huxing;
                //朝向
                var chaoxiang = content.chaoxiang;
                //面积
                var mianji = content.mianji;
                //楼层
                var louceng = content.louceng;
                //楼栋
                var loudong = content.loudong;
                //年代
                var jungong = content.jungong;
                //发布
                var create = content.create;
                //单价
                var danjia = content.danjia;
                //小区名字
                var commname = content.commname;
                //经纬度
                var lat = content.lat;
                var lng = content.lng;
                var markers = that.data.markers;
                markers[0].latitude = lat;
                markers[0].longitude = lng;
                markers[0].title = commname;
                
                //房间id
                var roomid = content.id;
                //赋值
                that.setData({
                    markers: markers,
                    imgUrls: imgUrls,
                    roomname:roomname,
                    address:address,
                    zhoubian: zhoubian,//周边环境
                    peitao: peitao,//生活配套
                    jieshao: jieshao,//文字介绍
                    huxing:huxing,
                    chaoxiang: chaoxiang,
                    price: price,
                    mianji:mianji,
                    louceng: louceng,
                    loudong:loudong,
                    jungong: jungong,
                    create: create,
                    danjia: danjia,
                    lat:lat,
                    lng:lng,
                    roomid:roomid,
                    commname:commname
                })
                wx.request({
                    url: "https://www.zushouwuyou.com/zmf/index.php/Home/index/commlogin",
                    data: {
                        commname: commname
                    },
                    header: {
                        "content-type": "application/x-www-form-urlencoded"
                    },
                    method: "POST",
                    success: function (res) {
                        //小区在售房
                        var zaishoufang = res.data.chushou;
                        that.setData({
                            zaishoufang: zaishoufang
                        })
                        //小区在租房
                        var zaizufang = res.data.chuzu;
                        that.setData({
                            zaizufang: zaizufang
                        })
                    }
                })
                wx.request({
                    url: "https://www.zushouwuyou.com/zmf/index.php/Home/index/jilu",
                    data: {
                        openid: app.globalData.openid,
                        id: roomid,
                        name:"fangjian"
                    },
                    header: {
                        "content-type": "application/x-www-form-urlencoded"
                    },
                    method: "POST",
                    success:function(res){
                        // console.log(res)
                    }
                })
            }
        })
    },
    //转发
    onShareAppMessage: function (res) {
        var roomname = this.data.roomname;
        return {
            title: roomname,
            path: 'pages/roomdetatils/roomdetatils',
            success: function (res) {
                // 转发成功
                // console.log(res);
            },
            fail: function (res) {
                // 转发失败
            }
        }
    },
    selecticondata: function () {
        var  that = this;
        // console.log(that.data.roomid)
        wx.showLoading({
            title: '收藏中',
            success:function(){
                setTimeout(function () {
                    wx.hideLoading()
                    that.setData({
                        selecticonflag: !that.data.selecticonflag,
                    })
                    wx.navigateTo({
                        url: '/pages/mycollect/mycollect',
                        success:function(){
                            wx.request({
                                url: "https://www.zushouwuyou.com/zmf/index.php/Home/index/scroom",
                                data: {
                                    openid: app.globalData.openid,
                                    roomid: that.data.roomid
                                },
                                header: {
                                    "content-type": "application/x-www-form-urlencoded"
                                },
                                method: "POST",
                                success: function (res) {
                                    // console.log(res)
                                }
                            })
                        }
                    })
                }, 1000)
            }
        })
        
    },
    showmap:function(){
        var that = this;
        // console.log(that.data.markers[0].latitude);
        wx.getLocation({
            type: 'gcj02', 
            success: function () {
                var latitude = that.data.markers[0].latitude;
                var longitude = that.data.markers[0].longitude;
                var name = that.data.markers[0].title;
                wx.openLocation({
                    latitude: latitude,
                    longitude: longitude,
                    name:name,
                    scale: 28
                })
            }
        })
    },
    yuekan:function(){
        wx.makePhoneCall({
            phoneNumber: '15624092'
        })
    },
    qiugou:function(){
        wx.reLaunch({
            url: '/pages/public_room/public_room',
        })
    },
    returnpage:function(){
        wx.redirectTo({
            url: '/pages/index/index',
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
    showdetail: function (e) {
        var id = e.currentTarget.dataset.id;
        wx.navigateTo({
            url: "/pages/roomdetatils/roomdetatils?id="+id
        })
    },
    callphone: function () {
        wx.makePhoneCall({
            phoneNumber: '15624092'
        })
    },
})