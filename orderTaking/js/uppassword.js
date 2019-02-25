define(['jquery'], function($) {
    var myfun = {};　　
    myfun.init = function(currentPage) {

        if (currentPage == 'uppassword') {
            //点击获取验证码
            $('.up-content .buy-input span').on('click', function() {
                console.log('获取验证码');
            });
        }

    };

    return myfun;

});