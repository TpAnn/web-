$(document).ready(function(){
	 if($("#m_bj").length>0){
		var navTop = $('#m_bj').offset().top;
		$(window).scroll(function(){
			var xWidth = $(window).width();
		  if ($(window).scrollTop() > navTop && xWidth>980) {
			$('#m_bj').addClass('header_scroll');
			$("body").css("padding-top","100px");
		  } else {
			$('#m_bj').removeClass('header_scroll');
			$("body").css("padding-top","");
		  }
		});
	  }
	
	if($(".page-box").length>0){
		setTimeout(function () {
			$(".page-box").addClass("c");
		}, 0);
	}
	$(".input_warp i").click(function (e) {
        $(this).siblings("input").focus();
    });
    $(".input_warp input").focus(function () {
        $(this).siblings("i").hide();
    });
    $(".input_warp input").blur(function () {
        var Thisval = $(this).val();
        if (Thisval == "") {
            $(this).siblings("i").show();
        }
    });
	
})
function minjust() {
	var winWidth = $(window).width();
	//document.title = winWidth;
	if(winWidth<1200){
		$("body").addClass("minwarp");
	}else{
		$("body").removeClass("minwarp");
	}
	if(winWidth<1024){
		$("body").css("width","1024px");
	}else{
		$("body").css("width","100%");
	}
}
window.onload = function () {
	window.onresize = minjust;
	minjust();
}

function mytips(text) {
	text = text.replace(/\n|\r|(\r\n)|(\u0085)|(\u2028)|(\u2029)/g, '<br>');
	var mytips = $('<div class="mytips"><a href="javascript:;" class="close">关闭</a><h2>友德医温馨提示</h2></div>');
	mytips.append('<p>'+text+'</p>')
	mytips.appendTo("body");
	setTimeout(function () {
		$(".mytips").remove();
    }, 3000);
	$(".close").click(function (e) {
		$(".mytips").remove();
	});
}

//生成回复弹框
function Replywarp(name,listid,uid,typ){
	var ReplyBox = $('<div class="mydialog"><a href="javascript:;" class="close"></a><h2></h2><div class="advisorybox"></div><div class="huifu"><div class="input_warp fl"><i>请输入您回复的内容</i><input type="text" id="Replytxt" name="" maxlength="60" autocomplete="off"></div><a class="button_green" href="javascript:Reply();">回复</a></div></div>');
	ReplyBox.appendTo("body");
	$(".mydialog h2").html(name);
	ReplyList(listid,uid);
	if(typ=="1"){
		setTimeout('Scroll_to_bottom()',100);
	}
	if(typ=="2"){
		$(".huifu").hide();
		$(".mydialog").css("height","556px");
	}
	
	$(".mydialog .close").click(function (e) {
		$(this).parent().remove();
	});
	$(".input_warp i").click(function (e) {
        $(this).siblings("input").focus();
    });
    $(".input_warp input").focus(function () {
        $(this).siblings("i").html("请输入您回复的内容").css("color","#a1a1a1").hide();
    });
    $(".input_warp input").blur(function () {
        var Thisval = $(this).val();
        if (Thisval == "") {
            $(this).siblings("i").show();
        }
    });
}

//生成回复信息列表
function ReplyList(listid,uid){
	//模拟数据列表
	list=[{"uid":"318","content":"你好，咨询下为啥治个小感冒要几百？","image":"","time":"2015-10-03 09:53:06","uimg":"images/02.jpg"},{"uid":"318000000","content":"因为医生病了，国家病了。",		"image":"","time":"2015-10-03 09:53:06","uimg":"images/03.jpg","name":"王晓明"},{"uid":"318","content":"","image":"http://192.168.1.23:8084/../upload/chat/201510/th_bd6ee7cf652fe1d7512afd13270c734b.jpg","time":"2015-10-03 09:53:06","uimg":"images/02.jpg"},{"uid":"318000000","content":"放弃治疗吧","image":"","time":"2015-10-03 09:53:06","uimg":"images/03.jpg","name":"王晓明"}];
	var html='';
	for(var i=0; i<list.length; i++){
		single = list[i];
		if(uid==single.uid){//判断是用户
			var content_p = '<p>'+single.content+'</p>';
			var imgclass='advisoryList';
			if(single.image!=""){//判断是否是图片
				content_p = '<img src="'+single.image+'"  />';
				imgclass='advisoryList img';
			}
			html +='<div class="'+imgclass+'">'+
        	'<div class="list_time"><span>'+single.time+'</span></div>'+
            '<div class="list_conter c">'+
            	'<div class="list_img"><img src="'+single.uimg+'" /></div>'+
                '<div class="list_p"><i></i>'+content_p+'</div></div></div>';
		}else{
			html += '<div class="advisoryList doc">'+
        	'<div class="list_time"><span>'+single.time+'</span></div>'+
            '<div class="list_conter c">'+
            	'<div class="list_img"><img src="'+single.uimg+'" /></div>'+
                '<div class="list_p"><i></i><p>'+single.content+'</p><p class="doc_name">——'+single.name+'</p></div></div></div>';
		}
	}
	$(".advisorybox").html(html);
}

//医生回复
var myuimg='images/03.jpg';
var myname='王晓明';
function Reply(){
	var replybox = $(".advisorybox");
	var replytxt = $("#Replytxt").val();
	if(isNull(replytxt)){
		$(".huifu i").css("color","red").html("回复内容不能为空");
	}else{
		var rehtml = '<div class="advisoryList doc">'+
		'<div class="list_conter c">'+
		'<div class="list_img"><img src="'+myuimg+'" /></div>'+
		'<div class="list_p"><i></i><p>'+replytxt+'</p><p class="doc_name">——'+myname+'</p></div></div></div>';
		replybox.append(rehtml);
		 $("#Replytxt").val("");
		 $(".huifu i").css("color","#a1a1a1").html("请输入您回复的内容");
		 setTimeout('Scroll_to_bottom()',100);
	}
	
}

function Scroll_to_bottom(){
	$(".advisorybox").animate({scrollTop:$('.advisorybox')[0].scrollHeight}, 800);
}

//检查输入字符串是否为空或者全部都是空格 
function isNull( str ){ 
if ( str == "" ) return true; 
var regu = "^[ ]+$"; 
var re = new RegExp(regu); 
return re.test(str); 
} 

