define(['jquery'], function($) {
    var myfun = {};　　
    myfun.init = function(currentPage) {

        if (currentPage == 'certificationshenhe') {
            setTimeout(function() {
                window.location.href = 'index.html';
            }, 2000);
        }

    };

    return myfun;

});