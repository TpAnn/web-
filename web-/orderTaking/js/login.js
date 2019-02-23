define(['jquery'], function($) {
    var myfun = {};　　
    myfun.init = function(currentPage) {

        if (currentPage == 'login') {
            //立即登录
            $('.login-button').on('click', function() {
                console.log('立即登录');
            });
            //找回密码
            $('.findpass span').on('click', function() {
                console.log('找回密码');
            });
        }

    };

    return myfun;

});