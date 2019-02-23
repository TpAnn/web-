Page({
    data:{
        content:"收到，我们正全力为您匹配商家"
    },
    onLoad:function(e){
        setTimeout(function () {
            wx.reLaunch({//关闭所有页面，打开到应用内的某个页面
                url: '/pages/mine/mine?contactnamevalue=' + e.contactnamevalue+"&sex="+e.sex,
                success:function(){
                    wx.request({
                        url: "https://www.zushouwuyou.com/zmf/index.php/Home/index/fabufang",
                        data: {
                            commid:e.commid,
                            loudong:e.loudong,
                            danyuan:e.danyuan,
                            louceng:e.louceng,
                            fanghao:e.fanghao,
                            typename:"chushou",
                            money:e.shoujia,
                            zhuangxiu:e.zhuangxiu,
                            huxing:e.huxing,
                            mainji:e.mianji,
                            img:e.imgsid,
                            chaoxiang:e.chaoxiang,
                            openid:e.openid,
                            chenghu: e.contactnamevalue + e.sex,
                            dianhua:e.dianhua
                        },
                        header: {
                            "content-type": "application/x-www-form-urlencoded"
                        },
                        method: "POST",
                        success:function(res){
                            console.log(res)
                        }
                    })
                }
            })
        }.bind(this),3000);
    }
})