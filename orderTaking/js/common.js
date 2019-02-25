define(function (){

　　var myfun = function (){
       /**
		 * 切换底部导航
		 */
		$('.common-footer-nav ul li').on('click',function(){
			$(this).siblings('li').removeClass('nav-ul-li-active');
			$(this).addClass('nav-ul-li-active');
			$(this).siblings('li').find('img.img-active').hide();
			$(this).siblings('li').find('img.img').show();
			$(this).find('img.img-active').show();
			$(this).find('img.img').hide();
			//根据获取到span标签里的内容来判断跳转到什么页面
			var dataId = $(this).attr('data-id');
			if(dataId == '1'){
				window.location.href='index.html';
			}else if(dataId == '2'){
				window.location.href='invitemoney.html';
			}else if(dataId == '3'){
				window.location.href='taskprogress.html';
			}else if(dataId == '4'){
				window.location.href='member.html';
			}else if(dataId == '5'){
				window.location.href='bussinessindex.html';
			}else if(dataId == '6'){
				window.location.href='invitatebusin.html';
			}else if(dataId == '7'){
				window.location.href='taskshenhe.html';
			}else if(dataId == '8'){
				window.location.href='bussinessmember.html';
			}
		});
    };

    return {
        myfun: myfun
    };

});