define(['jquery'], function($) {
    var myfun = {};　　
    myfun.init = function(currentPage) {

        if (currentPage == 'certification') {
            $('.shenhe-button button').on('click', function() {
                window.location.href = 'certificationshenhe.html';
            });
        }

    };

    return myfun;

});