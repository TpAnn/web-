var app = getApp();
Page({
    data: {
        title1: "售价",
        title2: "装修",
        title3: "户型",
        title4: "称呼",
        title5: "联系号码",
        title6: "验证码", 
        title7: "小区名称",
        title8: "希望房内配置",
        content1: "万元",
        content2: "精装修",
        huxingval: "",
        huxing:"请输入户型",
        content4: "平方",
        content6: "东南朝向",
        content7: "2016",
        content8: "类型",
        content9: "小区",
        content10: "精装修",
        content12: "先生",
        content13: "层",
        content15: "空房",
        content14: "旭日湾花园",
        content16: "香洲区",
        datas1: ["精装修", "普装修", "高级装修", "一般装修", "一般装修", "一般装修", "一般装修"],
        datas4: ["2017","2016","2014","2013"],
        datas5: ["普通住宅", "豪华住宅", "民宿住宅"],
        datas6: ["香洲-碧桂园", "香洲-碧桂园2", "香洲-碧桂园3"],
        datas7: ["精装修", "普装修", "水装修", "假装修"],
        datas8: [],
        datas9: ["先生", "女士"],
        datas10: ["东南朝向", "西北朝向", "西南朝向", "坐北朝南"],
        datas12: ["空房", "部份家私", "全屋家私","带包入住"],
        datas13: ["香洲区","供北","金湾"],
        selecttypesflag: false,
        selectnamedflag: false,
        selecttimeflag: false,
        selectfitmentflag: false,
        selectplotflag: false,
        zhegaicengflag: false,
        selecthoustypeflag: false,
        selecthuxingflag: false,
        selectzhuangxiuflag: false,
        selectchaoxiangflag: false,
        searchareaflag: true,
        selectdeploydflag: false,
        selectdistrictflag : false,
        index2: 0,
        index3: 0,
        index4: 0,
        index5: 0,
        nameindex:"先生",
        money1: "起步售价",
        money2: "最高售价",
        money3: "起步租金",
        money4: "最高租金",
        areas: "面积",
        mianji:"所需面积",
        louceng:"",
        loucengplaceholder:"期待层数",
        direc: "朝向",
        time: "年代",
        types: "类型",
        plot:　"小区",
        pic: "图片",
        district: "区域",
        districtplaceholder:"请输入区域",
        floor: "楼层",
        deploy: "配置",
        selectpic: "拍照或选图",
        contactname: "请输入姓名",
        contactnamevalue: "",
        phonenumber: "请输入手机号",
        content5: "获取验证码",
        codetitle: "验证码",
        code: "请输入验证码",
        codevalue: "456165",
        rightimgurl: "/images/right.png",
        items: [
            { value: '同意某某出售委托协议' }
        ],
        check: false,
        nextbutton: "下一步",
        title6: "操作流程",
        bottomimgurl: '/images/bottomimg.png',
        imgs: [],
        contactchange: [
            { sex: "先生", checked: true },
            { sex: "女士", checked: false }
        ],
        choosetype:[
            {types:"求购",checked:true},  
           
            {types:"求租",checked:false}
        ],
        districtval:"",
        choosegou:true,
        bed: true,
        wash: true,
        air_conditioning: true,
        ice: true,
        waterheater: true,
        tv: true,
        wlan: true,
        cook: true,
        balcony: true,
        qiuzu: false,
        space: true,
        shoujiatop:"",
        shoujiabottom:"",
        zujintop:"",
        zujinbottom:"",
        mianjival:"",
        phonenumberval:""
    },
    mianjivalinput:function(e){
        var mianjival = e.detail.value;
        this.setData({
            mianjival: mianjival
        })
    },
    zujinbottominput:function(e){
        var zujinbottom = e.detail.value;
        this.setData({
            zujinbottom: zujinbottom
        })
    },
    zujintopinput:function(e){
        var zujintop = e.detail.value;
        this.setData({
            zujintop: zujintop
        })
    },
    huxingvalinput:function(e){
        var huxingval = e.detail.value;
        this.setData({
            huxingval: huxingval    
        })
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
    change: function(){
        this.setData({
            choosegou: !this.data.choosegou,
            qiuzu: !this.data.qiuzu
        });
    },
    cancelbutton: function () {
        this.setData({
            zhegaicengflag: false,
            selecthuxingflag: false,
            selectchaoxiangflag: false,
            selecttimeflag: false,
            selectfitmentflag:false,
            selecttypesflag: false,
            selectplotflag: false,
            selecthoustypeflag: false,
            selectnamedflag: false,
            selectzhuangxiuflag: false,
            selectdeploydflag: false,
            selectdistrictflag: false
        });
    },
    selectchaoxiang: function(){
        this.setData({
            zhegaicengflag: true,
            selectchaoxiangflag: true
        });
    },
    selectdeployd: function () {
        this.setData({
            zhegaicengflag: true,
            selectdeploydflag: true
        });
    },
    selectzhuangxiu:function(){
        this.setData({
            zhegaicengflag: true,
            selectzhuangxiuflag: true
        });
    },
    selecttime: function () {
        this.setData({
            zhegaicengflag: true,
            selecttimeflag: true
        })
    },
    selectdistrict: function () {
        this.setData({
            zhegaicengflag: true,
            selectdistrictflag: true
        })
    },
    selecthoustype: function(){
        this.setData({
            zhegaicengflag: true,
            selecthoustypeflag: true
        })
    },

    selecthuxing: function () {
        this.setData({
            zhegaicengflag: true,
            selecthuxingflag: true
        })
    },

    selectnamed:function(){
        this.setData({
            zhegaicengflag: true,
            selectnamedflag: true
        });
    },
    selectfitment: function () {
        this.setData({
            zhegaicengflag: true,
            selectfitmentflag: true
        })
    },
    selecttpyes: function() {
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
     selectdistrictdata: function (e) {
         var id = e.currentTarget.dataset.id;
         var content16 = this.data.datas13[id];
         this.setData({
             content16: content16,
             zhegaicengflag: false,
             selectdistrictflag: false
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
     selectdeploydata: function (e) {
         var id = e.currentTarget.dataset.id;
         var content15 = this.data.datas12[id];
         this.setData({
             content15: content15,
             zhegaicengflag: false,
             selectdeploydflag: false
         })
     },

     selectchaoxiangdata:function(e){
         var id = e.currentTarget.dataset.id;
         var content6 = this.data.datas10[id];
         this.setData({
             content6: content6,
             zhegaicengflag: false,
             selectchaoxiangflag: false
         })
     },
     selecthuxingdata: function (e) {
         var id = e.currentTarget.dataset.id;
         var content3 = this.data.datas8[id];
         this.setData({
             content3: content3,
             zhegaicengflag: false,
             selecthuxingflag: false
         })
     },
    
     selectfitmentdata: function (e) {
         var id = e.currentTarget.dataset.id;
         var content10 = this.data.datas7[id];
         this.setData({
             content10: content10,
             zhegaicengflag: false,
             selectfitmentflag: false
         })
     },
     selecthoustypedata: function (e) {
         var id = e.currentTarget.dataset.id;
         var content11 = this.data.datas8[id];
         this.setData({
             content11: content11,
             zhegaicengflag: false,
             selecthoustypeflag:false
         })
     },
     selectnameddata: function (e) {
         var id = e.currentTarget.dataset.id;
         var content12 = this.data.datas9[id];
         this.setData({
             content12: content12,
             zhegaicengflag: false,
             selectnamedflag: false
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
    tv: function () {
        if (this.data.tv == true) {
            this.setData({
                tv: false
            })
        } else {
            this.setData({
                tv: true
            })
        }
    },
    wlan: function () {
        if (this.data.wlan == true) {
            this.setData({
                wlan: false
            })
        } else {
            this.setData({
                wlan: true
            })
        }
    },
    cook: function () {
        if (this.data.cook == true) {
            this.setData({
                cook: false
            })
        } else {
            this.setData({
                cook: true
            })
        }
    },
    balcony: function () {
        if (this.data.balcony == true) {
            this.setData({
                balcony: false
            })
        } else {
            this.setData({
                balcony: true
            })
        }
    },
    space: function () {
        if (this.data.space == true) {
            this.setData({
                space: false
            })
        } else {
            this.setData({
                space: true
            })
        }
    },
    chooseImage: function () {

        var that = this;
        wx.chooseImage({
            count: 5, // 默认9
            sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
            sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
            success: function (res) {
                var tempFilePaths = res.tempFilePaths
                // console.log(tempFilePaths)
                for (var i = 0; i < tempFilePaths.length-1; i++) {
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
                        error: function (res) {
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
    getcontactname:function(e){
        var contactnamevalue = e.detail.value;
        this.setData({
            contactnamevalue: contactnamevalue
        })
    },
    contactchange: function (e) {
        console.log(e.detail.value)
        this.setData({
            nameindex: e.detail.value
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
    mianjiinput:function(e){
        var mianjival = e.detail.value;
        this.setData({
            mianjival:mianjival
        })
    },
    shoujiatopinput:function(e){
        var shoujiatop = e.detail.value;
        this.setData({
            shoujiatop: shoujiatop
        })
    },
    shoujiabottominput:function(e){
        var shoujiabottom = e.detail.value;
        this.setData({
            shoujiabottom: shoujiabottom
        })
    },
    loucenginput:function(e){
        var louceng = e.detail.value;
        this.setData({
            louceng:louceng
        })
    },
    districtvalinput:function(e){
        var districtval = e.detail.value;
        this.setData({
            districtval: districtval
        })
    },
    phonenumbervalinput:function(e){
        var phonenumberval = e.detail.value;
        this.setData({
            phonenumberval: phonenumberval
        })
    },
    nextgou: function () {
        var that = this;
        //openid
        var openid = app.globalData.openid;
        //commid
        var commid = "";
        wx.getStorage({
            key: 'commid',
            success: function (res) {
                commid = res.data;
            }
        })
        //money
        var money = (that.data.shoujiatop) * 10000 + "~" + (that.data.shoujiabottom) * 10000;
        //mianji
        var mianji = that.data.mianjival;
        //huxing
        var huxing = that.data.huxingval;
        //louceng
        var louceng = that.data.louceng;
        //quyu
        var quyu = that.data.districtval;
        //chenghu
        var chenghu = that.data.contactnamevalue + that.data.nameindex;
        console.log(chenghu)
        //dianhua
        var dianhua = that.data.phonenumberval;
        wx.reLaunch({
                url: '/pages/mine/mine?contactnamevalue=' + that.data.contactnamevalue + "&sex=" + that.data.nameindex,
            success:function(){
                wx.request({
                    url: "https://www.zushouwuyou.com/zmf/index.php/Home/index/fabuxuqiu",
                    data: {
                        openid: openid,
                        commid:commid,
                        money:money,
                        louceng:louceng,
                        huxing:huxing,
                        chenghu:chenghu,
                        dianhua:dianhua,
                        quyu:quyu,
                        mianji:mianji,
                        typename:"求购"
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
    },
    nextzu: function () {
        var that = this;
        //openid
        var openid = app.globalData.openid;
        //commid
        var commid = "";
        wx.getStorage({
            key: 'commid',
            success: function (res) {
                commid = res.data;
            }
        })
        //money
        var money = that.data.zujintop + "~" + that.data.zujinbottom;
        //mianji
        var mianji = that.data.mianjival;
        //huxing
        var huxing = that.data.huxingval;
        //quyu
        var quyu = that.data.districtval;
        //chenghu
        var chenghu = that.data.contactnamevalue + that.data.nameindex;
        //dianhua
        var dianhua = that.data.phonenumberval;
        //peizhi
        var peizhi = that.data.content15;
        wx.reLaunch({
            url: '/pages/mine/mine?contactnamevalue=' + that.data.contactnamevalue + "&sex=" + that.data.nameindex,
            success: function () {
                wx.request({
                    url: "https://www.zushouwuyou.com/zmf/index.php/Home/index/fabuxuqiu",
                    data: {
                        openid: openid,
                        commid: commid,
                        money: money,
                        huxing: huxing,
                        chenghu: chenghu,
                        dianhua: dianhua,
                        quyu: quyu,
                        mianji: mianji,
                        peizhi:peizhi,
                        typename:"求租"
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
})