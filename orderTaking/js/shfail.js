define(['jquery'], function($) {
    var myfun = {};　　
    myfun.init = function(currentPage) {

        if (currentPage == 'shfail') {
            $('.shs-footer button').on('click',function(){
                window.location.href='bindtaobao.html';
            });
        }

    };

    return myfun;

});