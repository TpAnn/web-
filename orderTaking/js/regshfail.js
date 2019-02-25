define(['jquery'], function($) {
    var myfun = {};　　
    myfun.init = function(currentPage) {

        if (currentPage == 'regshfail') {
            $('.shs-footer button').on('click',function(){
                window.location.href='regsiter.html';
            });
        }

    };

    return myfun;

});