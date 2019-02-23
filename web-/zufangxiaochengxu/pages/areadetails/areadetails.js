Page({
    data:{
        content:[],
        flag:true
    },
    onLoad: function (e) {
        var name = e.name;
        var that = this;
        console.log(name)
        //异步获取社区id
        wx.getStorage({
            key: 'commid',
            success: function (res) {
                // console.log(res.data)
                var commid = res.data;
                wx.request({//发起请求
                    url: "https://www.zushouwuyou.com/zmf/index.php/Home/index/shequ",
                    data: {
                        commid: commid,
                        name: name
                    },
                    method: "POST",
                    header: {
                        "content-type": "application/x-www-form-urlencoded"
                    },
                    success: function (res) {
                        console.log(res)
                        // console.log(typeof(res.data.content))
                        if(res.data.result != null){
                            var content = res.data.result.content;
                            content = JSON.parse(content);
                            that.setData({
                                content: content,
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
        })
    }
})