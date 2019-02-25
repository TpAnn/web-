Page({
    data: {
        title1: "小区名称",
        title2: "楼栋号",
        title3: "单元号",
        title4: "楼层",
        title5: "房号",
        roomnametitle: "名称",
        roomnametext: "请输入名称",
        roomname: "",
        content1: "金华花园",
        content2: "浩日居34栋",
        content3: "",
        content4: "",
        content5: "",
        danyuan: "请输入单元号",
        louceng: "请输入楼层",
        fanghao: "请输入房号",
        searchareaflag: true,
        selectloudongflag: false,
        zhegaicengflag: false,
        loudongselected: false,
        selectdanyuanhaoflag: false,
        selectloucengflag: false,
        selectfanghaoflag: false,
        rightimgurl: "/images/right.png",
        next: "下一步",
        button1value: "我要出售",
        button2value: "我要出租",
        title6: "操作流程",
        bottomimgurl: '/images/bottomimg.png',
        index1: 0,
        index2: 0,
        index3: 0,
        index4: 0,
        index5: 0,
        commid: 0,
        datas1: [
        ],
        datas2: [],
        datas3: ["1单元", "2单元", "3单元", "4单元", "5单元"],
        datas4: ["20层", "21层", "15层", "12层", "10层", "5层", "8层", "9层", "4层", "5层", "8层", "9层", "4层"],
        datas5: ["2001号", "2003号", "2002号", "2006号", "2008号", "2010号", "1508号"],
    },
    roomnameinput: function (e) {
        var roomname = e.detail.value;
        this.setData({
            roomname: roomname
        })
    },
    fanghaoinput: function (e) {
        var content5 = e.detail.value;
        this.setData({
            content5: content5
        })
    },
    loucenginput: function (e) {
        var content4 = e.detail.value;
        this.setData({
            content4: content4
        })
    },
    danyuaninput: function (e) {
        var content3 = e.detail.value;
        this.setData({
            content3: content3
        })
    },
    cancelbutton: function () {
        this.setData({
            zhegaicengflag: false,
            selectloudongflag: false,
            selectdanyuanhaoflag: false,
            selectloucengflag: false,
            selectfanghaoflag: false
        });
    },
    selectloudongdata: function (e) {
        var id = e.currentTarget.dataset.id;
        var content2 = this.data.datas2[id];
        this.setData({
            content2: content2,
            zhegaicengflag: false,
            selectloudongflag: false
        })
    },
    selectloudong: function () {
        this.setData({
            zhegaicengflag: true,
            selectloudongflag: true
        })
    },
    selectdanyuanhaodata: function (e) {
        var id = e.currentTarget.dataset.id;
        var content3 = this.data.datas3[id];
        this.setData({
            content3: content3,
            zhegaicengflag: false,
            selectdanyuanhaoflag: false
        })
    },
    selectdanyuanhao: function () {
        this.setData({
            zhegaicengflag: true,
            selectdanyuanhaoflag: true
        })
    },
    selectloucengdata: function (e) {
        var id = e.currentTarget.dataset.id;
        var content4 = this.data.datas4[id];
        this.setData({
            content4: content4,
            zhegaicengflag: false,
            selectloucengflag: false

        })
    },
    selectlouceng: function () {
        this.setData({
            zhegaicengflag: true,
            selectloucengflag: true
        })
    },
    selectfanghao: function () {
        this.setData({
            zhegaicengflag: true,
            selectfanghaoflag: true
        })
    },
    //选择小区
    selectdatas: function (e) {
        var that = this;
        //小区id
        var id = e.currentTarget.dataset.id;
        var content1 = that.data.datas1[id].name;
        var commid = that.data.datas1[id].id;
        that.setData({
            content1: content1,
            searchareaflag: true,
            commid: commid
        });
        wx.request({
            url: "https://www.zushouwuyou.com/zmf/index.php/Home/index/getloudong",
            data: { commid: commid },
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            success: function (res) {
                console.log(res)
                //获取楼栋
                var datas2 = res.data.result;
                //设置楼栋值
                var content2 = datas2[0];
                that.setData({
                    datas2: datas2,
                    content2: content2
                })
            }
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
    searcharea: function () {
        var that = this;
        that.setData({
            searchareaflag: false
        });
    },
    hiddensearch: function () {
        //隐藏搜索
        this.setData({
            searchareaflag: true
        })
    },
    onLoad: function () {
        // console.log("页面加载完毕");
        var that = this;
        wx: wx.request({
            url: "https://www.zushouwuyou.com/zmf/index.php/Home/index/selectcomm",
            data: { content: that.data.content1 },
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            success: function (res) {
                // console.log(res)
                var commid = res.data[0].id;
                that.setData({
                    commid: commid
                })
                wx.request({
                    url: "https://www.zushouwuyou.com/zmf/index.php/Home/index/getloudong",
                    data: { commid: commid },
                    header: {
                        "content-type": "application/x-www-form-urlencoded"
                    },
                    method: "POST",
                    success: function (res) {
                        // console.log(res)
                        //获取楼栋
                        var datas2 = res.data.result;
                        //设置初始楼栋值
                        var content2 = datas2[0];
                        that.setData({
                            datas2: datas2,
                            content2: content2
                        })
                    }
                })
            }
        })
        wx.request({
            url: "https://www.zushouwuyou.com/zmf/index.php/Home/index/liuchengtu",
            data: {},
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            success: function (res) {
                // console.log(res)
                var img = res.data.result;
                that.setData({
                    bottomimgurl: img
                })
            }
        })
    },
    //我要出售
    chushou: function () {
        //小区名称(id)
        var commid = this.data.commid;
        //楼栋号
        var loudong = this.data.content2;
        //单元号
        var danyuan = this.data.content3;
        //楼层
        var louceng = this.data.content4;
        //房号
        var fanghao = this.data.content5;
        //名称
        var roomname = this.data.roomname;
        //跳转到我要出售页面
        wx.navigateTo({
            url: '/pages/chushou/chushou?commid=' + commid
            + "&loudong=" + loudong
            + "&danyuan=" + danyuan
            + "&louceng=" + louceng
            + "&fanghao=" + fanghao
            + "&roomname=" + roomname,
        })
    },
    //我要出租
    chuzu: function () {
        //小区名称(id)
        var commid = this.data.commid;
        //楼栋号
        var loudong = this.data.content2;
        //单元号
        var danyuan = this.data.content3;
        //楼层
        var louceng = this.data.content4;
        //房号
        var fanghao = this.data.content5;
        //名称
        var roomname = this.data.roomname;
        //跳转到我要出租页面
        wx.navigateTo({
            url: '/pages/chuzu/chuzu?commid=' + commid
            + "&loudong=" + loudong
            + "&danyuan=" + danyuan
            + "&louceng=" + louceng
            + "&fanghao=" + fanghao
            + "&roomname=" + roomname,
        })
    }
})