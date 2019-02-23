define(['jquery','common'], function($,common) {
    var myfun = {};　　
    myfun.init = function(currentPage) {

        if (currentPage == 'taskprogress') {
            //切换任务进展菜单
            $('.tp-top-li').on('click', function() {
                $(this).siblings('li').removeClass('tp-top-active');
                $(this).addClass('tp-top-active');
                var text = $(this).text();
                // if(text == '全部'){

                // }else if(text == '待下单'){

                // }else if(text == '待收货'){

                // }else if(text == '待返款'){

                // }else if(text == '已完成'){

                // }else if(text == '已放弃'){

                // }else if(text == '审核不通过'){

                // }
            });
            common.myfun();
        }

    };

    return myfun;

});