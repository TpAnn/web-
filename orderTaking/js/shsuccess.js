define(['jquery'], function($) {
    var myfun = {};　　
    myfun.init = function(currentPage) {

        if (currentPage == 'shsuccess') {
            $('.shs-footer button').on('click',function(){
                window.location.href='certification.html';
            });
        }

    };

    return myfun;

});