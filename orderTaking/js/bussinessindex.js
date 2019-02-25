define(['jquery','common'], function($,common) {
    var myfun = {};　　
    myfun.init = function(currentPage) {

        if (currentPage == 'bussinessindex') {
            common.myfun();
        }

    };

    return myfun;

});