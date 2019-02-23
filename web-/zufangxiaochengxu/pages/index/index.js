var app = getApp();
Page({
    data:{
        imgUrls1:[],
        imgUrls2: [],
        fujinxiaoqu: [],
        indexImg1: [],
        indexImg2: [],
        fujincomm: [],
        imgUrls2flag:true,
        searchareaflag: true,
        average_price:"",
        average_price1: "",//总首页参考均价
        yearPercentage: "",//上年比例
        monthPercentag: "",//上月比例
        plot: "",//猜你喜欢小区
        label: [],
        neighborhood_text: "猜你喜欢的小区",
        index_address: "",
        for_sale:"3",
        lowest_price: "最低均价",
        sybili: "上月比例",
        snbili: "去年比例",
        ckjunjia: "参考均价：",
        daishow: "待售：",
        daichu: "待租：",
        for_rent:"10",
        area_img:"/images/area_img.png",
        area_img1: "/images/sho.png",
        average_price_text: "参考均价(元)",
        for_sale_text: "待售中",
        for_rent_text: "待租中",
        area_img_text: "收藏小区",
        area_img_text1: "  已收藏",
        roomurl:"/images/room.png",
        buyurl:"/images/buy.png",
        renturl:"/images/rent.png",
        areaurl:"/images/area.png",
        room_text:"我是房东",
        buy_text:"我要买房",
        rent_text:"我要租房",
        area_text:"社区服务",
        adurl_1:"/images/area_ad_1.png",
        adurl_2: "/images/area_ad_2.png",
        arrows_t:"/images/arrows-t.png",
        area_tobuy:"小区在售房",
        area_torent:"小区在租房",
        tuijiantxt: "附近小区精选推荐",
        zaishoufang:[],
        zaizufang:[],
        goods_img:"/images/goods_img.png",
        title:"万科城旁 超笋铺子总价12起带租10栋房子哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦",
        desc:"1室1厅 8平 南 清水",
        price:"18万",
        address:"",
        prop1:"小户型",
        prop2: "低总价",
        prop3: "高性价比",
        choose: true,
        collect: true,
        imgss: true,
        commid:"",
        commname:"",
        getmoreroom:false,
        getmoreroom2: false,
        getmorecomm3:false,
        shouqiroom:true,
        shouqiroom2:true,
        shouqicomm3:true,
        container:false,
        topsearcharea:true,
        searchareaflag:true,
        datas1: [],
        zuijincomm:""

    },
    //收起总首页附近小区
    shouqicomm3:function(){
        var that = this;
        //获取附近小区经纬度以及显示附近小区
        wx.getStorage({
            key: 'arr',
            success: function (res) {
                var arr = res.data;
                wx.request({
                    url: "https://www.zushouwuyou.com/zmf/index.php/Home/index/fujincomm",
                    data: {
                        lat: arr[0],
                        lng: arr[1]
                    },
                    header: {
                        "content-type": "application/x-www-form-urlencoded"
                    },
                    method: "POST",
                    success: function (res) {
                        var fujincomm = res.data;
                        that.setData({
                            fujincomm: fujincomm,
                            getmorecomm3: false,
                            shouqicomm3: true
                        })
                    }
                })
            }
        })
    },
    //显示更多总首页附近小区
    getmorecomm3:function(){
        var that = this;
        //获取附近小区经纬度以及显示附近小区
        wx.getStorage({
            key: 'arr',
            success: function (res) {
                var arr = res.data;
                wx.request({
                    url: "https://www.zushouwuyou.com/zmf/index.php/Home/index/fujincomm",
                    data: {
                        lat: arr[0],
                        lng: arr[1],
                        gengduo:"more"
                    },
                    header: {
                        "content-type": "application/x-www-form-urlencoded"
                    },
                    method: "POST",
                    success: function (res) {
                        var fujincomm = res.data;
                        that.setData({
                            fujincomm: fujincomm,
                            getmorecomm3: true,
                            shouqicomm3: false
                        })
                    }
                })
            }
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
                var zaishoufang = res.data.chushou;
                that.setData({
                    zaishoufang: zaishoufang,
                    getmoreroom:false,
                    shouqiroom:true
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
                var zaizufang = res.data.chuzu;
                that.setData({
                    zaizufang: zaizufang,
                    getmoreroom2: false,
                    shouqiroom2: true
                })
            }
        })
    },
    getmoreroom:function(){
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
            success:function(res){
                // console.log(res)
                var zaishoufang = res.data.chushou;
                that.setData({
                    zaishoufang: zaishoufang,
                    getmoreroom:true,
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
                var zaizufang = res.data.chuzu;
                that.setData({
                    zaizufang: zaizufang,
                    getmoreroom2: true,
                    shouqiroom2: false
                })
            }
        })

    },
    onLoad:function(e){
       var that = this;

        //总首页获取附近最小区的经纬度
        wx.getLocation({
           success: function (res) {
               //维度
               var lat = res.latitude;
               //经度
               var lng = res.longitude;
               //把经纬度存在一个数组中
               var arr = [];
               arr.push(lat);
               arr.push(lng);
               //异步存储附近小区经纬度
               wx.setStorage({
                   key: "arr",
                   data: arr
               })
           }
        })

        //专卖店首页点击附近小区进入相应小区专卖单首页
       if ((e.container != undefined) && (e.commname != undefined )){
           var commname = e.commname;
           var container = e.container;
           that.setData({
               container: true,
               commname: commname
           })
           // 专卖店首页请求
           wx.request({
               url: "https://www.zushouwuyou.com/zmf/index.php/Home/index/commlogin",
               data: {
                   commname: that.data.commname
               },
               header: {
                   "content-type": "application/x-www-form-urlencoded"
               },
               method: "POST",
               success: function (res) {

                   //首页第一轮播
                   var A1img = res.data.A1img;
                   that.setData({
                       imgUrls1: A1img
                   })
                   //首页第二轮播
                   if ((res.data.A2img).length == 0) {
                       that.setData({
                           imgUrls2flag: false
                       })
                   } else {
                       var A2img = res.data.A2img;
                       that.setData({
                           imgUrls2: A2img
                       })
                   }
                   //参考均价
                   var average_price = res.data.jia.junjia;
                   that.setData({
                       average_price: average_price
                   })
                   //待售中
                   var for_sale = res.data.data[0].zaishou;
                   that.setData({
                       for_sale: for_sale
                   })
                   //待租中
                   var for_rent = res.data.data[1].zaizu;
                   that.setData({
                       for_rent: for_rent
                   })
                   //小区在售房
                   var zaishoufang = res.data.chushou;
                   if (zaishoufang.length < 5) {
                       that.setData({
                           getmoreroom: true
                       })
                   }
                   that.setData({
                       zaishoufang: zaishoufang
                   })
                   //小区在租房
                   var zaizufang = res.data.chuzu;
                   if (zaizufang.length < 5) {
                       that.setData({
                           getmoreroom2: true
                       })
                   }
                   that.setData({
                       zaizufang: zaizufang
                   })
                   //地址
                   var address = res.data.result.address;
                   that.setData({
                       address: address
                   })
                   //获取小区id
                   var commid = res.data.result.id;
                   that.setData({
                       commid: commid
                   })
                   //异步存储社区id
                   wx.setStorage({
                       key: "commid",
                       data: commid
                   })
                   wx.request({
                       url: "https://www.zushouwuyou.com/zmf/index.php/Home/index/jilu",
                       data: {
                           openid: app.globalData.openid,
                           id: commid,
                           name: "xiaoqu",
                           nickname: app.globalData.nickName
                       },
                       header: {
                           "content-type": "application/x-www-form-urlencoded"
                       },
                       method: "POST",
                       success: function (res) {
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
                           if (fujinxiaoqu.length < 5) {
                               that.setData({
                                   getmoreroom3: true
                               })
                           }
                           that.setData({
                               fujinxiaoqu: fujinxiaoqu
                           })
                       }
                   })
               }
           })
       }else{
           //总首页请求数据
           wx.request({
               url: "https://www.zushouwuyou.com/zmf/index.php/Home/index/mainlogin",
               data: {
               },
               header: {
                   "content-type": "application/x-www-form-urlencoded"
               },
               method: "POST",
               success: function (res) {

                   //总首页第一轮播
                   var A1img1 = res.data.result.img1;
                   that.setData({
                       indexImg1: A1img1
                   })
                   //    console.log(A1img)
                   //总首页第二轮播
                   if ((res.data.result.img2).length == 0) {
                       that.setData({
                           imgUrls2flag: false
                       })
                   } else {
                       var A1img2 = res.data.result.img2;
                       that.setData({
                           indexImg2: A1img2
                       })
                   }

                   //  参考均价
                   var average_price1 = res.data.result.junjia;
                   that.setData({
                       average_price1: average_price1
                   })
                   //上年比例
                   var yearPercentage = res.data.result.snbili;
                   that.setData({
                       yearPercentage: yearPercentage
                   })
                   //上月比例
                   var monthPercentag = res.data.result.sybili;
                   that.setData({
                       monthPercentag: monthPercentag
                   })
                   //猜你喜欢的小区
                   var plot = res.data.result.id;
                   that.setData({
                       plot: plot
                   })
                   //获取附近小区经纬度以及显示附近小区
                   wx.getStorage({
                       key: 'arr',
                       success: function (res) {
                           var arr = res.data;
                           wx.request({
                               url: "https://www.zushouwuyou.com/zmf/index.php/Home/index/fujincomm",
                               data: {
                                   lat: arr[0],
                                   lng: arr[1]
                               },
                               header: {
                                   "content-type": "application/x-www-form-urlencoded"
                               },
                               method: "POST",
                               success: function (res) {
                                   console.log(res)
                                   //最近的小区的id
                                   var zuijincomm = res.data[0].id;
                                   //最近的小区的名称
                                   var commname = res.data[0].name;
                                   that.setData({
                                       zuijincomm: zuijincomm,
                                       commname: commname
                                   })
                                   //获取附近小区
                                   var fujincomm = res.data;
                                   that.setData({
                                       fujincomm: fujincomm
                                   })

                               }
                           })
                       }
                   })
               }
           })
       }
       
       
        
    },
    getmore: function () {
        //获取更多
        wx.navigateTo({
            url: '/pages/fujinxiaoqu/fujinxiaoqu?commid=' + this.data.commid,
        })
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
            searchareaflag: true,
            
        })
    },
    searchfocus: function (e) {
        console.log(e)
        e.type = "blur";
        //获得焦点
        this.setData({
            searchareaflag: false,
            focustopsearch: false
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
                    // console.log(res)
                    var datas1 = res.data;
                    that.setData({
                        datas1: datas1
                    })
                }
            })
        }
    },
    search: function (e) {
        // console.log(e)
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
    collectarea1: function () {
        var that = this;
        var commid = 0;
        wx.getStorage({
            key: 'commid',
            success: function(res) {
                commid = res.data;
            }
        })
        wx.showLoading({
            title: '收藏中',
        })
        setTimeout(function () {
            wx.hideLoading()
            that.setData({
                collect: false,
                imgss: false
            })
            wx.navigateTo({
                url: '/pages/mycollect/mycollect?commid=' + commid + "&choose=false",
                success:function(){
                    wx.request({
                        url: "https://www.zushouwuyou.com/zmf/index.php/Home/index/sccomm",
                        data: {
                            openid: app.globalData.openid,
                            commid: commid
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
    },
    collectarea2: function () {
        this.setData({
            collect: true,
            imgss: true
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
        // console.log(id)
        wx.navigateTo({
            url: "/pages/roomdetatils/roomdetatils?id=" + id
        })
    },
    callphone:function(){
        wx.makePhoneCall({
            phoneNumber: '15624092' 
        })
    },
    roomurl:function(){
        wx.navigateTo({
            url: '/pages/landlord/landlord',
            success: function(res) {},
            fail: function(res) {},
            complete: function(res) {}
        })
    },
    buyurl:function(e){
        var id = e.currentTarget.dataset.id;
        var zuijincomm = this.data.zuijincomm;
        if (zuijincomm != ""){
            wx.navigateTo({
                url: '/pages/buy_rent/buy_rent?id=' + id 
                + "&commid=" + this.data.commid 
                + "&address=" + this.data.address
                + "&zuijincomm=" + zuijincomm,
                success: function (res) {}
            })
        }else{
            wx.navigateTo({
                url: '/pages/buy_rent/buy_rent?id=' + id 
                + "&commid=" + this.data.commid 
                + "&address=" + this.data.address,
                success: function (res) {}
            }) 
        }
        
    },
    renturl: function (e) {
        var id = e.currentTarget.dataset.id;
        var zuijincomm = this.data.zuijincomm;
        if (zuijincomm != "") {
            wx.navigateTo({
                url: '/pages/buy_rent/buy_rent?id=' + id 
                + "&commid=" + this.data.commid 
                + "&address=" + this.data.address
                + "&zuijincomm=" + zuijincomm,
                success: function (res) {}
            })
        }else{
            wx.navigateTo({
                url: '/pages/buy_rent/buy_rent?id=' + id 
                + "&commid=" + this.data.commid 
                + "&address=" + this.data.address,
                success: function (res) {}
            })
        }
        
    },
    areaurl: function () {
        wx.reLaunch({
            url: '/pages/areasevies/areasevies',
            success: function (res) { },
            fail: function (res) {  },
            complete: function (res) { }
        })
    },
    //到附近小区首页
    funjinxiaoqu: function (e) {
        var that = this;
        var commname = e.currentTarget.dataset.commname;
        wx.reLaunch({
            url: '/pages/index/index?commname=' + commname + "&container=true",
        })
    },
})
