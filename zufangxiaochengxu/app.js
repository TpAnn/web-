App({
    onLaunch: function () {
        var that = this;
        wx.login({
            success:function(res){
                if(res.code){
                    // console.log("code:",res.code);
                    wx.request({
                        url: "https://www.zushouwuyou.com/zmf/index.php/Home/index/getopenid",
                        data:{
                            code:res.code
                        },
                        header: { 'content-type': 'application/json' },
                        success:function(res){
                            // console.log(res)
                            that.globalData.openid = res.data.msg.openid;
                        }
                    })
                }else{
                    console.log('获取用户登录态失败！' + res.errMsg);
                }
            }
        })
        wx.getUserInfo({
            success:function(res){
                // console.log(res);
                that.globalData.avatarUrl = res.userInfo.avatarUrl;
                that.globalData.nickName = res.userInfo.nickName;
            }
        })
    },
    globalData: {
        avatarUrl:null,
        nickName:null,
        openid:null
    }
})