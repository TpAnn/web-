define(['jquery','clipboard','common'], function($,clipboard,common) {
    var myfun = {};　　
    myfun.init = function(currentPage) {

        if (currentPage == 'invitemoney') {
            $(function() {
                //复制编号
                new $.Clipboard('.btn');
            });
            common.myfun();
        }

    };

    return myfun;

});