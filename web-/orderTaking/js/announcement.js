define(['jquery'], function($) {
    var myfun = {};　　
    myfun.init = function(currentPage) {

        if (currentPage == 'announcement') {
            $('.ann-three').on('click', function() {
                window.location.href = '';
            });
        }

    };

    return myfun;

});