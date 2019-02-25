define(['jquery'], function($) {
    var myfun = {};　　
    myfun.init = function(currentPage) {

        if (currentPage == 'myprofile') {
            //点击修改密码
            $('.mp-content span.right.uppwd').on('click', function() {
                window.location.href = 'uppassword.html';
            });
        }

    };

    return myfun;

});