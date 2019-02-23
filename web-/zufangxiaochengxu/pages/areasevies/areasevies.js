Page({
    data:{
        adimg:[],
        flag:true
    },
    jiazheng:function(){
        wx.navigateTo({
            url: '/pages/areadetails/areadetails?name=家政清洁',
        })
    },
    jiadian: function () {
        wx.navigateTo({
            url: '/pages/areadetails/areadetails?name=家电清洁',
        })
    },
    shutongweixiu: function () {
        wx.navigateTo({
            url: '/pages/areadetails/areadetails?name=疏通维修',
        })
    },
    xiyi: function () {
        wx.navigateTo({
            url: '/pages/areadetails/areadetails?name=洗衣',
        })
    },
    kaisuo: function () {
        wx.navigateTo({
            url: '/pages/areadetails/areadetails?name=开锁配匙',
        })
    },
    songshui: function () {
        wx.navigateTo({
            url: '/pages/areadetails/areadetails?name=送水',
        })
    },
    banjia: function () {
        wx.navigateTo({
            url: '/pages/areadetails/areadetails?name=搬家运输',
        })
    },
    feijiu: function () {
        wx.navigateTo({
            url: '/pages/areadetails/areadetails?name=废旧回收',
        })
    },
    onLoad:function(){
        var that = this;
        wx.getStorage({
            key: 'commid',
            success:function(e){
                var commid = e.data;
                // console.log(commid)
                wx.request({
                    url: "https://www.zushouwuyou.com/zmf/index.php/Home/index/A3img",
                    data: {
                        commid: commid
                    },
                    method: "POST",
                    header: {
                        "content-type": "application/x-www-form-urlencoded"
                    },
                    success: function (res) {
                        // console.log(res)
                        var adimg = res.data.A3img;
                        if(adimg != null){
                            that.setData({
                                adimg: adimg,
                                flag:true
                            })
                        }else{
                            that.setData({
                                flag:false
                            })
                        }
                    }
                })
            }
        });
    }
})