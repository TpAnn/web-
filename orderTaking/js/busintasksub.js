define(['jquery'], function($) {
    var myfun = {};　　
    myfun.init = function(currentPage) {

        if (currentPage == 'busintasksub') {
            //点击提交资料
            $('.ts-shenhe-button').on('click', function() {
                console.log('提交资料');
            });
        }

    };

    return myfun;

});