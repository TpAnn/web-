define(['jquery'], function($) {
    var myfun = {};　　
    myfun.init = function(currentPage) {

        if (currentPage == 'register') {
            //切换注册
            $('.buy-top span').on('click', function() {
                var con = $(this).text();
                if (con == '买手注册') {
                    $('.buy-content2').hide();
                    $('.buy-content1').show();
                } else if (con == '商家注册') {
                    $('.buy-content2').show();
                    $('.buy-content1').hide();
                }
            });
            //登录
            $('.logintitle').on('click', function() {
                window.location.href = 'login.html';
            });

            $('.buy-button button').on('click', function() {
                if ($('.buy-content.buy-content1').is(':hidden')) {
                    //商家版审核注册
                    window.location.href = 'buinshenhe.html';
                } else {
                    //绑定淘宝账号
                    window.location.href = 'bindtaobao.html';
                }
            });
        }

    };

    return myfun;

});