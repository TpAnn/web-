define(['jquery'], function($) {
    var myfun = {};　　
    myfun.init = function(currentPage) {

        if (currentPage == 'buinshenhe') {
            setTimeout(function() {
                window.location.href = 'bussinessindex.html';
            }, 2000);
        }

    };

    return myfun;

});