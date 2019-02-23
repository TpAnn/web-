define(['jquery'], function($) {
    var myfun = {};　　
    myfun.init = function(currentPage) {

        if (currentPage == 'capitalrecord') {
            $('.cr-option section').on('click', function() {
                $(this).siblings('section').removeClass('cr-option-active');
                $(this).addClass('cr-option-active');
                var text = $(this).find('span').text();
                if (text == '本金记录') {
                    $(this).parent().siblings('.cr-item-box.cr-item-box-two').css('display', 'none');
                    $(this).parent().siblings('.cr-item-box.cr-item-box-one').css('display', 'block');
                    $(this).parent().siblings('.cr-item-box.cr-item-box-three').css('display', 'none');
                } else if (text == '佣金记录') {
                    $(this).parent().siblings('.cr-item-box.cr-item-box-two').css('display', 'block');
                    $(this).parent().siblings('.cr-item-box.cr-item-box-one').css('display', 'none');
                    $(this).parent().siblings('.cr-item-box.cr-item-box-three').css('display', 'none');
                } else if (text == '收徒佣金') {
                    $(this).parent().siblings('.cr-item-box.cr-item-box-two').css('display', 'none');
                    $(this).parent().siblings('.cr-item-box.cr-item-box-one').css('display', 'none');
                    $(this).parent().siblings('.cr-item-box.cr-item-box-three').css('display', 'block');
                }
            });
        }

    };

    return myfun;

});