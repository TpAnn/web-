var app = getApp();
Page({
    data:{
        avatarUrl: "",
        name:"",
        sex:"",
        goods_img: "",
        id:"",
        title: "",
        desc: "",
        address:"",
        price: "",
        huxing:"",
        pricetext:"",
        status:"",
        room:[],
        publicedrooms:true
    },
    jiazheng: function () {
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
    mypublic:function(){
        wx.navigateTo({
            url: '/pages/mypublic/mypublic',
        })
    },
    qiugouqiuzu: function () {
        wx.navigateTo({
            url: '/pages/qiugouqiuzu/qiugouqiuzu',
        })
    },
    bianji:function(){
        var that = this;
        wx.request({
            url: "https://www.zushouwuyou.com/zmf/index.php/Home/index/fabuxq",
            data: {
                id:that.data.id
            },
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            success:function(res){
                var getroom = res.data.result;
                var zhuangxiu = getroom.zhuangxiu;
                var huxing = getroom.huxing;
                var mianji = getroom.mianji;
                var chaoxiang = getroom.chaoxiang;
                var chenghu = getroom.chenghu;
                var dianhua = getroom.dianhua;
                var money = getroom.money;
                var imgs = res.data.img;
                imgs = JSON.stringify(imgs);
                var commid = getroom.communityid;
                var commname = getroom.commname;
                var loudong = getroom.loudong;
                var danyuan = getroom.danyuan;
                var louceng = getroom.louceng;
                var fanghao = getroom.fanghao;
                var roomname = getroom.name;
                var id = that.data.id;
                var typename = getroom.type;
                if(typename == "chushou"){
                    money /= 10000;
                    wx.navigateTo({
                        url: '/pages/bianjixiaoqu/bianjixiaoqu?zhuangxiu='+zhuangxiu 
                        +"&huxing="+huxing 
                        + "&mianji="+mianji 
                        + "&chaoxiang="+chaoxiang 
                        + "&chenghu="+chenghu 
                        + "&dianhua="+dianhua 
                        + "&money="+money 
                        + "&imgs="+imgs 
                        + "&commid="+commid 
                        + "&commname="+commname
                        + "&louceng="+louceng 
                        + "&loudong="+loudong 
                        + "&danyuan="+danyuan 
                        + "&fanghao="+fanghao
                        + "&roomname=" + roomname
                        + "&id=" + id
                        + "&typename="+typename,
                    })
                }else if(typename == "chuzu"){
                    var peizhi = getroom.peizhi;
                    peizhi = peizhi.split(",");
                    wx.navigateTo({
                        url: '/pages/bianjixiaoqu/bianjixiaoqu?zhuangxiu=' + zhuangxiu
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
                        + "&peizhi=" + peizhi
                        + "&id=" + id
                        + "&typename=" + typename,
                    })
                }
                
            }
        })
    },
    qiugouqiuzu:function(){
        wx.navigateTo({
            url: '/pages/qiugouqiuzu/qiugouqiuzu',
        })
    },
    //分享
    onShareAppMessage: function (res) {
        console.log(res);
        var title = this.data.title;
        return {
            title: title,
            path: '/pages/roomdetatils/roomdetatils',
            success: function (ss) {
                // 转发成功
                // console.log(ss);
            },
            fail: function (e) {
                // 转发失败
                // console.log(e);
            }
        }
    },
    fenxiangfangyuan: function () {
    },
    //删除
    delet: function () {
        var that = this;
        wx.request({
            url: "https://www.zushouwuyou.com/zmf/index.php/Home/index/deleroomsh",
            data: {
                openid: app.globalData.openid,
                id:that.data.id
            },
            success: function (res) {
                console.log(res);
                var msg = res.data.msg;
                if(msg == "删除成功"){
                    that.setData({
                        publicedrooms:false
                    })   
                }
            }
        })
    },
    showdetails: function () {
        wx.navigateTo({
            url: '/pages/roomdetatils/roomdetatils',
        })
    },
    my_tracks: function () {
        wx.navigateTo({
            url: '/pages/my_tracks/my_tracks',
        })
    },
    my_collect:function(){
        wx.navigateTo({
            url: '/pages/mycollect/mycollect',
        })
    },
    contactkefu:function(){
        wx.makePhoneCall({
            phoneNumber: '132465798'
        })
    },
    onLoad:function(e){
        var that = this;
        var avatarUrl = app.globalData.avatarUrl;
        that.setData({
            avatarUrl: avatarUrl
        })
        
        if (e.contactnamevalue && e.sex && e.contactnamevalue != "undefined"){
            var name = e.contactnamevalue;
            var sex = e.sex;
            name = name + sex;
            that.setData({
                name: name
            })
        } else{
            var name = app.globalData.nickName;
            that.setData({
                name:name
            })
        }
        wx.request({
            url: "https://www.zushouwuyou.com/zmf/index.php/Home/index/getfabu",
            data: {
                openid: app.globalData.openid
            },
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            success: function (res) {
                console.log(res)
                if (res.data.result[0] != null){
                    var room = res.data.result[0];
                    var goods_img = room.imgarray[0];
                    var id = room.id;
                    var title = room.name;
                    var desc = room.huxing + " " + room.mianji + "平方 " + room.chaoxiang;
                    var address = room.address;
                    var price = room.money;
                    var huxing = room.huxing;
                    var mianji = room.mianji;
                    var status = room.status;
                    var typename = room.type;
                    var pricetext= "";
                    if(typename == "chushou"){
                        price = price/10000 + "万";
                        pricetext = "售价";
                    }else if(typename == "chuzu"){
                        price += "元/月";
                        pricetext = "租金";
                    }
                    that.setData({
                        goods_img:goods_img,
                        id:id,
                        title:title,
                        desc:desc,
                        address: address,
                        price:price,
                        huxing:huxing,
                        mianji:mianji,
                        pricetext: pricetext,
                        status:status
                    })
                }else{
                    that.setData({
                        publicedrooms:false
                    })
                }
            }
            
        })  
         
    }
})