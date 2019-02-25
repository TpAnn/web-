var app = getApp();
Page({
    data: {
        title1: "期望售价",
        title2: "装修",
        title3: "户型",
        title4: "称呼",
        title5: "联系号码",
        title6: "验证码",
        content1: "万",
        content2: "精装修",
        content3: "一房一厅",
        content4: "平",
        content6: "东南朝向",
        content7: "2016",
        content8: "普通住宅",
        content9: "香洲-碧桂园",
        datas1: ["精装修", "普装修", "高级装修"],
        datas2: ["一房一厅一卫", "两房一厅", "三房一厅", "两房一厅一卫", "三房一厅一卫"],
        datas3: ["东南朝向", "正北朝向", "正东朝向", "正南朝向", "西南朝向", "东北朝向"],
        datas4: ["2017", "2016", "2015", "2016"],
        datas5: ["普通住宅", "豪华住宅", "民宿住宅"],
        datas6: ["香洲-碧桂园", "香洲-碧桂园2", "香洲-碧桂园3"],
        zhegaicengflag: false,
        selectzhuangxiuflag: false,
        selecthuxingflag: false,
        selectchaoxiangflag: false,
        selecttimeflag: false,
        selecttypesflag: false,
        selectplotflag: false,
        index2: 0,
        index3: 0,
        index4: 0,
        index5: 0,
        nameindex: "女士",
        moneytext: "请输入售价",
        areas: "面积",
        mianjitext: "请输入面积",
        huxingtext: "请输入户型",
        direc: "朝向",
        time: "年代",
        types: "类型",
        plot: "小区",
        pic: "图片",
        selectpic: "拍照或选图",
        contactname: "请输入称呼",
        contactnamevlaue: "李",
        contactchange: [
            { sex: "先生", checked: "true" },
            { sex: "女士", checked: "false" }
        ],
        phonenumber: "请输入手机号",
        phonenumbervalue: "15826944094",
        content5: "获取验证码",
        codetitle: "验证码",
        code: "请输入验证码",
        codevalue: "456165",
        rightimgurl: "/images/right.png",
        items: [
            { value: '同意某某出售委托协议' }
        ],
        check: false,
        nextbutton: "确认修改",
        title6: "操作流程",
        bottomimgurl: '/images/bottomimg.png',
        imgs: [],
        imgsid:[],
        zhuangxiu: "",
        huxing: "",
        mianji: "",
        chaoxiang: "",
        chenghu: "",
        dianhua: "",
        money: "",
        commid: "",
        commname: "",
        loudong: "",
        danyuan: "",
        louceng: "",
        fanghao: "",
        peizhi: "",
        typename: "",
        id: ""
    },
    huxinginput: function (e) {
        var huxingval = e.detail.value;
        this.setData({
            huxingval: huxingval
        })
    },
    getdianhua:function(e){
        var dianhua = e.detail.value;
        this.setData({
            dianhua:dianhua
        })
    },
    cancelbutton: function () {
        this.setData({
            zhegaicengflag: false,
            selectzhuangxiuflag: false,
            selecthuxingflag: false,
            selectchaoxiangflag: false,
            selecttimeflag: false,
            selecttypesflag: false,
            selectplotflag: false

        });
    },
    selectchaoxiangdata: function (e) {
        var id = e.currentTarget.dataset.id;
        var content6 = this.data.datas3[id];
        this.setData({
            content6: content6,
            zhegaicengflag: false,
            selectchaoxiangflag: false
        })
    },
    selecttimedata: function (e) {
        var id = e.currentTarget.dataset.id;
        var content7 = this.data.datas4[id];
        this.setData({
            content7: content7,
            zhegaicengflag: false,
            selecttimeflag: false
        })
    },
    selecttypesdata: function (e) {
        var id = e.currentTarget.dataset.id;
        var content8 = this.data.datas5[id];
        this.setData({
            content8: content8,
            zhegaicengflag: false,
            selecttypesflag: false
        })
    },
    selectplotdata: function (e) {
        var id = e.currentTarget.dataset.id;
        var content9 = this.data.datas6[id];
        this.setData({
            content9: content9,
            zhegaicengflag: false,
            selectplotflag: false
        })
    },




    selecthuxingdata: function (e) {
        var id = e.currentTarget.dataset.id;
        var content3 = this.data.datas2[id];
        this.setData({
            content3: content3,
            zhegaicengflag: false,
            selecthuxingflag: false
        })
    },
    selectzhuangxiudata: function (e) {
        var id = e.currentTarget.dataset.id;
        var content2 = this.data.datas1[id];
        this.setData({
            content2: content2,
            zhegaicengflag: false,
            selectzhuangxiuflag: false
        })
    },
    selectchaoxiang: function () {
        this.setData({
            zhegaicengflag: true,
            selectchaoxiangflag: true
        })
    },
    selecthuxing: function () {
        this.setData({
            zhegaicengflag: true,
            selecthuxingflag: true
        })
    },
    selectzhuangxiu: function () {
        this.setData({
            zhegaicengflag: true,
            selectzhuangxiuflag: true
        })
    },
    selecttime: function () {
        this.setData({
            zhegaicengflag: true,
            selecttimeflag: true
        })
    },
    selecttypes: function () {
        this.setData({
            zhegaicengflag: true,
            selecttypesflag: true
        })
    },
    selectplot: function () {
        this.setData({
            zhegaicengflag: true,
            selectplotflag: true
        })
    },



    chooseImage: function () {
        var that = this;
        wx.chooseImage({
            count: 5, // 默认9
            sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
            sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
            success: function (res) {
                var tempFilePaths = res.tempFilePaths
                console.log(tempFilePaths.length)
                for (var i = 0; i < tempFilePaths.length - 1; i++) {
                    var temp = tempFilePaths[i];
                    wx.uploadFile({
                        url: 'https://www.zushouwuyou.com/zmf/index.php/Home/Upload/public_uploads',
                        filePath: temp,
                        name: 'file',
                        method: "POST",
                        header: {
                            'content-type': 'multipart/form-data'
                        },
                        success: function (res) {
                            console.log(res)
                            //转成数组
                            var data = JSON.parse(res.data)
                            console.log(data)
                            //为图片路径数组赋值 
                            that.data.imgs.push(data.url);
                            var imgs = that.data.imgs;
                            //为图片id数组赋值
                            that.data.imgsid.push(data.imgid);
                            var imgsid = that.data.imgsid;

                            that.setData({
                                imgs: imgs,
                                imgsid: imgsid
                            })
                        },
                        fail: function (res) {
                            console.log(res)
                        }
                    })
                }
            }
        })
    },


    
    previewImage: function (e) {
        var id = e.currentTarget.dataset.id;
        var urls = [];
        var imgs = this.data.imgs;
        for (var i = 0; i < imgs.length; i++) {
            urls.push(imgs[i].img);
        }
        wx.previewImage({
            current: urls[id],
            urls: urls
        })
    },
    bindPickerChange2: function (e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
            index2: e.detail.value
        })
    },
    bindPickerChange3: function (e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
            index3: e.detail.value
        })
    },
    bindPickerChange4: function (e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
            index4: e.detail.value
        })
    },
    bindPickerChange5: function (e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
            index5: e.detail.value
        })
    },
    contactchange: function (e) {
        console.log(e)
        this.setData({
            nameindex: e.detail.value
        })
    },
    getname: function (e) {
        var contactnamevalue = e.detail.value;
        this.setData({
            contactnamevalue: contactnamevalue
        })
    },
    getcode: function () {
        console.log("ok");
    },
    checkboxChange: function (e) {
        var that = this;
        if (e.detail.value[0]) {
            that.setData({
                check: true
            });
        } else {
            that.setData({
                check: false
            });
        }
    },
    next: function () {
        var that = this;
        if (that.data.check == false) {
            wx.showToast({
                title: '请先勾选协议',
                icon: 'loading',
                duration: 800
            })
        } else {
            wx.reLaunch({
                url: '/pages/mine/mine',
                success: function () {
                    var zhuangxiu = that.data.zhuangxiu;
                    var huxing = that.data.huxing;
                    var mianji = that.data.mianji;
                    var chaoxiang = that.data.chaoxiang;
                    var dianhua = that.data.dianhua;
                    var money = that.data.money;
                    var commid = that.data.communityid;
                    var commname = that.data.commname;
                    var loudong = that.data.loudong;
                    var danyuan = that.data.danyuan;
                    var louceng = that.data.louceng;
                    var id = that.data.id;
                    var fanghao = that.data.fanghao;
                    var imgsid = that.data.imgsid;
                    imgsid = imgsid.join(",");

                    wx.request({
                        url: "https://www.zushouwuyou.com/zmf/index.php/Home/index/bianjifabu",
                        data: {
                            openid: app.globalData.openid,
                            id: id,
                            commid: commid,
                            loudong: loudong,
                            danyuan: danyuan,
                            louceng: louceng,
                            fanghao: fanghao,
                            typename: "chushou",
                            money: money,
                            zhuangxiu: zhuangxiu,
                            huxing: huxing,
                            mainji: mianji,
                            img: imgsid,
                            chaoxiang: chaoxiang,
                            chenghu: that.data.chenghu + that.data.nameindex,
                            dianhua: dianhua
                        },
                        header: {
                            "content-type": "application/x-www-form-urlencoded"
                        },
                        method: "POST",
                        success: function (res) {
                            console.log(res)
                        }
                    })
                }
            })
        }
    },
    onLoad: function (e) {
        var that = this;

        var zhuangxiu = e.zhuangxiu;
        var huxing = e.huxing;
        console.log(e.huxing)
        var mianji = e.mianji;
        var chaoxiang = e.chaoxiang;
        var chenghu = e.chenghu;
        var dianhua = e.dianhua;
        var money = e.money;
        var imgs = e.imgs;
        imgs = JSON.parse(imgs);
        console.log(imgs)
        var commid = e.commid;
        var commname = e.commname;
        var loudong = e.loudong;
        var danyuan = e.danyuan;
        var id = e.id;
        var louceng = e.louceng;
        var fanghao = e.fanghao;
        that.setData({
            huxingval: huxing,
            zhuangxiu: zhuangxiu,
            money: money,
            mianji: mianji,
            chaoxiang: chaoxiang,
            imgs: imgs,
            chenghu: chenghu,
            id: id,
            dianhua: dianhua
        })


    }
})