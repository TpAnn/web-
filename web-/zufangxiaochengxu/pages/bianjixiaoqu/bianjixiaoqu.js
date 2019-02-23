Page({
    data: {
        title1: "小区名称",
        title2: "楼栋号",
        title3: "单元号",
        title4: "楼层",
        title5: "房号",
        content1: "金华花园",
        content2: "浩日居34栋",
        roomnametitle: "名称",
        roomnametext: "请输入名称",
        roomname: "",
        content3: "",
        content4: "",
        content5: "",
        danyuantext: "请输入单元号",
        loucengtext: "请输入楼层",
        fanghaotext: "请输入房号",
        searchareaflag: true,
        selectloudongflag: false,
        zhegaicengflag: false,
        loudongselected: false,
        selectdanyuanhaoflag: false,
        selectloucengflag: false,
        selectfanghaoflag: false,
        rightimgurl: "/images/right.png",
        next: "下一步",
        button1value: "继续修改",
        button2value: "我要出租",
        title6: "操作流程",
        bottomimgurl: '/images/bottomimg.png',
        index1: 0,
        index2: 0,
        index3: 0,
        index4: 0,
        index5: 0,
        commid: 0,
        datas1: [],
        datas2: [],
        zhuangxiu : "",
        huxing: "",
        mianji: "",
        chaoxiang: "",
        chenghu: "",
        dianhua: "",
        money: "",
        imgs: "",
        commid: "",
        commname: "",
        loudong: "",
        danyuan: "",
        louceng: "",
        fanghao: "",
        peizhi:"",
        typename:"",
        id:""
    },
    roomnameinput:function(e){
        var roomname = e.detail.value;
        this.setData({
            roomname:roomname
        })
    },
    confirmbutton: function () {
        this.setData({
            zhegaicengflag: false,
            selectloudongflag: false,
            selectdanyuanhaoflag: false,
            selectloucengflag: false,
            selectfanghaoflag: false
        });
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
        var loudong = this.data.datas2[id];
        this.setData({
            loudong: loudong,
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
    selectfanghaodata: function (e) {
        var id = e.currentTarget.dataset.id;
        var content5 = this.data.datas5[id];
        this.setData({
            content5: content5,
            zhegaicengflag: false,
            selectfanghaoflag: false

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
        var commname = that.data.datas1[id].name;
        var commid = that.data.datas1[id].id;
        that.setData({
            commname: commname,
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
                var loudong = datas2[0];
                that.setData({
                    datas2: datas2,
                    loudong: loudong
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
    onLoad: function (e) {
        
        var that = this;

        var zhuangxiu = e.zhuangxiu;
        var huxing = e.huxing;
        var mianji = e.mianji;
        var chaoxiang = e.chaoxiang;
        var chenghu = e.chenghu;
        var dianhua = e.dianhua;
        var money = e.money;
        var imgs = e.imgs;
        var commid = e.communityid;
        var commname = e.commname;
        var loudong = e.loudong;
        var danyuan = e.danyuan;
        var louceng = e.louceng;
        var fanghao = e.fanghao;
        var roomname = e.roomname;
        var id = e.id;
        var typename = e.typename;
        if(typename == "chuzu"){
            var peizhi = e.peizhi;
            that.setData({
                peizhi:peizhi
            })
        }
        that.setData({
            commname:commname,
            loudong:loudong,
            danyuan:danyuan,
            louceng:louceng,
            fanghao:fanghao,
            roomname:roomname,
            zhuangxiu:zhuangxiu,
            huxing:huxing,
            mianji:mianji,
            chaoxiang:chaoxiang,
            chenghu:chenghu,
            dianhua:dianhua,
            money:money,
            id:id,
            imgs:imgs,
            typename: typename
        })

    },
    updatedata:function(){
        var that = this;
        var zhuangxiu = that.data.zhuangxiu;
        var huxing = that.data.huxing;
        var mianji = that.data.mianji;
        var chaoxiang = that.data.chaoxiang;
        var chenghu = that.data.chenghu;
        var dianhua = that.data.dianhua;
        var money = that.data.money;
        var imgs = that.data.imgs;
        var commid = that.data.communityid;
        var commname = that.data.commname;
        var loudong = that.data.loudong;
        var danyuan = that.data.danyuan;
        var louceng = that.data.louceng;
        var id = that.data.id;
        var fanghao = that.data.fanghao;
        var roomname  = that.data.roomname;
        var typename = that.data.typename;
        if(typename == "chuzu"){
            var peizhi = that.data.peizhi;
            wx.navigateTo({
                url: '/pages/bianjichuzu/bianjichuzu?zhuangxiu=' + zhuangxiu
                + "&huxing=" + huxing
                + "&mianji=" + mianji
                + "&chaoxiang=" + chaoxiang
                + "&chenghu=" + chenghu
                + "&dianhua=" + dianhua
                + "&money=" + money
                + "&imgs=" + imgs
                + "&commid=" + commid
                + "&commname=" + commname
                + "&louceng=" + louceng
                + "&loudong=" + loudong
                + "&danyuan=" + danyuan
                + "&fanghao=" + fanghao
                + "&roomname=" + roomname
                + "&id=" + id
                + "&peizhi=" + peizhi,
            })
        }else if(typename == "chushou"){
            wx.navigateTo({
                url: '/pages/bianji/bianji?zhuangxiu=' + zhuangxiu
                + "&huxing=" + huxing
                + "&mianji=" + mianji
                + "&chaoxiang=" + chaoxiang
                + "&chenghu=" + chenghu
                + "&dianhua=" + dianhua
                + "&money=" + money
                + "&imgs=" + imgs
                + "&commid=" + commid
                + "&commname=" + commname
                + "&louceng=" + louceng
                + "&loudong=" + loudong
                + "&danyuan=" + danyuan
                + "&id=" + id
                + "&fanghao=" + fanghao
                + "&roomname=" + roomname,
            })
        }
        
    }
    
})