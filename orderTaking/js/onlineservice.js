define(['jquery','clipboard'], function($,clipboard) {
    var myfun = {};　　
    myfun.init = function(currentPage) {

        if (currentPage == 'onlineservice') {
            //复制编号
            new $.Clipboard('.btn');
        }

    };

    return myfun;

});