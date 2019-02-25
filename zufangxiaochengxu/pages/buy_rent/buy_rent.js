Page({
    data:{
        leftlocation:"珠海",
        flag:true,
        choose: true,
        area_tobuy: "小区在售",
        area_torent: "小区在租",
        xiaoquzaishou:[],
        xiaoquzaizu:[],
        fujinxiaoqu:[],
        goods_img: "/images/goods_img.png",
        title: "万科城旁 超笋铺子总价12起带租10栋房子哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦",
        desc: "1室1厅 8平 南 清水",
        price: "18万",
        address: "",
        tuijiantxt:"附近小区精选推荐",
        prop1: "小户型",
        prop2: "低总价",
        prop3: "低总价",
        prop4: "低总价",
        chankaojia: "600",
        forsale: "50",
        forrent: "10",
        commid:1,
        val:"",
        searchareaflag: true,
        getmoreroom: false,
        getmoreroom2: false,
        shouqiroom:true,
        shouqiroom2:true,
        datas1: [
        ],
        commname:""
    },
    //到附近小区首页
    funjinxiaoqu:function(e){
        var commname = e.currentTarget.dataset.commname;
        wx.reLaunch({
            url: '/pages/index/index?commname=' + commname + "&container=true",
        })
    },
    getmore:function(){
        //获取更多
        wx.navigateTo({
            url: '/pages/fujinxiaoqu/fujinxiaoqu?commid='+this.data.commid,
        })
    },
    shouqiroom: function () {
        var that = this;
        wx.request({
            url: "https://www.zushouwuyou.com/zmf/index.php/Home/index/roomlist",
            data: {
                commid: that.data.commid
            },
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            success: function (res) {
                var xiaoquzaishou = res.data.chushou;
                that.setData({
                    xiaoquzaishou: xiaoquzaishou,
                    getmoreroom: false,
                    shouqiroom: true
                })
            }
        })
    },
    shouqiroom2: function () {
        var that = this;
        wx.request({
            url: "https://www.zushouwuyou.com/zmf/index.php/Home/index/roomlist",
            data: {
                commid: that.data.commid
            },
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            success: function (res) {
                var xiaoquzaizu = res.data.chuzu;
                that.setData({
                    xiaoquzaizu: xiaoquzaizu,
                    getmoreroom2: false,
                    shouqiroom2: true
                })
            }
        })
    },
    getmoreroom: function () {
        var that = this;
        wx.request({
            url: "https://www.zushouwuyou.com/zmf/index.php/Home/index/roomlist",
            data: {
                commid: that.data.commid,
                gengduo: "more"
            },
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            success: function (res) {
                console.log(res)
                var xiaoquzaishou = res.data.chushou;
                that.setData({
                    xiaoquzaishou: xiaoquzaishou,
                    getmoreroom: true,
                    shouqiroom: false
                })
            }
        })
    },
    getmoreroom2: function () {
        var that = this;
        wx.request({
            url: "https://www.zushouwuyou.com/zmf/index.php/Home/index/roomlist",
            data: {
                commid: that.data.commid,
                gengduo: "more"
            },
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            success: function (res) {
                var xiaoquzaizu = res.data.chuzu;
                that.setData({
                    xiaoquzaizu: xiaoquzaizu,
                    getmoreroom2: true,
                    shouqiroom2: false
                })
            }
        })

    },
    hiddensearch:function(){
        //隐藏搜索
        this.setData({
            searchareaflag: true
        })
    },
    searchblur:function(){
        //失去焦点
        this.setData({
            searchareaflag: true
        })
    },
    searchfocus:function(){
        //获得焦点
        this.setData({
            searchareaflag: false
        })
    },
    searchinput:function(e){
        //输入的值
        var val = e.detail.value;
        var that = this;
        that.setData({
            val:val
        })
        if(val == ""){
            that.setData({
                datas1:[]
            })
        }else{
            wx: wx.request({
                url: "https://www.zushouwuyou.com/zmf/index.php/Home/index/selectcomm",
                data: { content: val },
                header: {
                    "content-type": "application/x-www-form-urlencoded"
                },
                method: "POST",
                success: function (res) {
                    // console.log(res)
                    var datas1 = res.data;
                    that.setData({
                        datas1: datas1
                    })
                }
            })
        }
    },
    search:function(e){
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
                    // console.log(res)
                    var datas1 = res.data;
                    that.setData({
                        datas1: datas1
                    })
                }
            })
        }
    },
    showdetail:function(e){
        var id = e.currentTarget.dataset.id;
        // console.log(id)  
        wx.navigateTo({
            url: "/pages/roomdetatils/roomdetatils?id="+id
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
        var address = e.address;
        if (e.zuijincomm !=undefined){
            var zuijincomm = e.zuijincomm;
            wx.request({
                url: "https://www.zushouwuyou.com/zmf/index.php/Home/index/roomlist",
                data: { commid: zuijincomm },
                header: {
                    "content-type": "application/x-www-form-urlencoded"
                },
                method: "POST",
                success: function (res) {
                    //小区在售
                    var xiaoquzaishou = res.data.chushou;
                    if (xiaoquzaishou.length < 5) {
                        that.setData({
                            getmoreroom: true
                        })
                    }
                    that.setData({
                        xiaoquzaishou: xiaoquzaishou
                    })
                    //小区在租
                    var xiaoquzaizu = res.data.chuzu;
                    if (xiaoquzaizu.length < 5) {
                        that.setData({
                            getmoreroom2: true
                        })
                    }
                    that.setData({
                        xiaoquzaizu: xiaoquzaizu
                    })

                }
            })
            wx.request({
                url: "https://www.zushouwuyou.com/zmf/index.php/Home/index/fujincomm",
                data: { commid: zuijincomm },
                header: {
                    "content-type": "application/x-www-form-urlencoded"
                },
                method: "POST",
                success: function (res) {
                    //附近小区
                    var fujinxiaoqu = res.data;
                    that.setData({
                        fujinxiaoqu: fujinxiaoqu
                    })
                }
            })
        }else{
            wx.request({
                url: "https://www.zushouwuyou.com/zmf/index.php/Home/index/roomlist",
                data: { commid: commid },
                header: {
                    "content-type": "application/x-www-form-urlencoded"
                },
                method: "POST",
                success: function (res) {
                    //小区在售
                    var xiaoquzaishou = res.data.chushou;
                    if (xiaoquzaishou.length < 5) {
                        that.setData({
                            getmoreroom: true
                        })
                    }
                    that.setData({
                        xiaoquzaishou: xiaoquzaishou
                    })
                    //小区在租
                    var xiaoquzaizu = res.data.chuzu;
                    if (xiaoquzaizu.length < 5) {
                        that.setData({
                            getmoreroom2: true
                        })
                    }
                    that.setData({
                        xiaoquzaizu: xiaoquzaizu
                    })
                }
            })
            wx.request({
                url: "https://www.zushouwuyou.com/zmf/index.php/Home/index/fujincomm",
                data: { commid: commid },
                header: {
                    "content-type": "application/x-www-form-urlencoded"
                },
                method: "POST",
                success: function (res) {
                    //附近小区
                    var fujinxiaoqu = res.data;
                    that.setData({
                        fujinxiaoqu: fujinxiaoqu
                    })
                }
            })
        }
        
        var that = this;
        //获取地址 
        that.setData({
            address: address,
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
        
        
    },
})