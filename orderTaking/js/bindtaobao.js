define(['jquery'], function($) {
    var myfun = {};　　
    myfun.init = function(currentPage) {

        if (currentPage == 'bindtaobao') {
            $(function() {
                //动态设置截图上传框宽度
                var clientwidth = document.body.clientWidth;
                var asdiewidth = (clientwidth - 20 - clientwidth * 0.05) / 2 / 375 * 100;
                $('.screenshot-pic aside').css('width', asdiewidth + 'vw');
            });
            // 提交审核
            $('.shenhe-button button').on('click', function() {
                window.location.href = 'pershenhe.html';
            });
        }

    };

    return myfun;

});