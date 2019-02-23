define(['jquery', 'common'], function($, common) {
    var myfun = {};　　
    myfun.init = function(currentPage) {

        if (currentPage == 'bussinessmember') {

            //进入我的资料
            $('.mem-top-three').on('click', function() {
                window.location.href = 'myprofile.html';
            });
            //提现
            $('.mem-top-right span.txbtn').on('click', function() {
                window.location.href = 'cash.html';
            });
            //充值
            $('.mem-top-right span.czbtn').on('click',function(){
                window.location.href='';
            });
            //待处理任务
            $('.mem-center-two .mem-center-title').on('click', function() {
                var dataName = $(this).attr('data-name');
                if (dataName == '待处理任务') {
                    window.location.href = 'taskprogress.html';
                }
            });
            //进入全部任务
            $('.mem-center-two .mem-content-item').on('click', function() {
                var dataId = $(this).attr('data-id');
                if (dataId == '1') {
                    window.location.href = 'taskprogress.html';
                } else if (dataId == '2') {
                    window.location.href = 'taskprogress.html';
                } else if (dataId == '3') {
                    window.location.href = 'taskprogress.html';
                } else if (dataId == '4') {
                    window.location.href = 'taskprogress.html';
                }
            });

            $('.mem-center-three .mem-item').on('click', function() {
                var dataId = $(this).attr('data-id');
                if (dataId == '1') {
                    //进入资金记录
                    window.location.href = 'capitalrecord.html';
                } else if (dataId == '2') {
                    //进入提现记录
                    window.location.href = 'cashrecord.html';
                } else if (dataId == '3') {
                    //进入账户管理
                    window.location.href = 'accountmanager.html';
                } else if (dataId == '4') {
                    //进入我的邀请
                    window.location.href = 'myinvitation.html';
                }
            });

            $('.mem-center-four .mem-item').on('click', function() {
                var dataId = $(this).attr('data-id');
                if (dataId == '5') {
                    //进入公告
                    window.location.href = 'announcement.html';
                } else if (dataId == '6') {
                    //进入在线客服
                    window.location.href = 'onlineservice.html';
                }
            });
            common.myfun();
        }

    };

    return myfun;

});