define(['jquery'], function($) {
    var myfun = {};　　
    myfun.init = function(currentPage) {

        if (currentPage == 'pershenhe') {
            setTimeout(function() {
                window.location.href = 'certification.html';
            }, 2000);
        }

    };

    return myfun;

});