define(['jquery'], function($) {
    var myfun = {};　　
    myfun.init = function(currentPage) {

        if (currentPage == 'businmyinvitation') {
            $('.mi-item').on('click', function() {
                var dataId = $(this).attr('data-id');
                if (dataId && dataId == '1') {
                    if ($('.mi-item.mi-item-bg').is(':hidden')) {
                        $(this).find('img').attr('src', 'images/bottom.png');
                        $('.mi-item.mi-item-bg').css('display', 'flex');
                    } else {
                        $(this).find('img').attr('src', 'images/right.png');
                        $('.mi-item.mi-item-bg').css('display', 'none');
                    }

                }
            });
        }

    };

    return myfun;

});