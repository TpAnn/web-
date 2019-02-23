define(['jquery'], function($) {
    var myfun = {};　　
    myfun.init = function(currentPage) {

        if (currentPage == 'findpassword') {
            //找回密码下一步
            $('.login-button button').on('click',function(){
                window.location.href='czpassword.html';
            });
        }

    };

    return myfun;

});