define(['jquery'], function($) {
    var myfun = {};　　
    myfun.init = function(currentPage) {

        if (currentPage == 'firstcash') {
			$('.fir-button-submit').on('click', function() {
               window.location.href="login.html";
            });
        }

    };

    return myfun;

});