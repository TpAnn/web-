define(['jquery'], function($) {
    var myfun = {};　　
    myfun.init = function(currentPage) {

        if (currentPage == 'accountmanager') {
            //跳转到添加淘宝账号
            $('.am-bottom').on('click', function() {
                window.location.href = 'bindtaobao.html';
            });
        }

    };

    return myfun;

});