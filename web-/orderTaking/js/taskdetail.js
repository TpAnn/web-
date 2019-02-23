define(['jquery','clipboard'], function($,clipboard) {
    var myfun = {};　　
    myfun.init = function(currentPage) {

        if (currentPage == 'taskdetail') {
            $(function() {
                //复制编号
                new $.Clipboard('.btn');
                //动态设置截图上传框宽度
                var clientwidth = document.body.clientWidth;
                var asdiewidth = (clientwidth - 20 - clientwidth * 0.05) / 2 / 375 * 100;
                $('.screenshot-pic aside').css('width', asdiewidth + 'vw');
            });
            //放弃任务
            $('.td-step-title .td-button').on('click', function() {
                $('.giveuptask').show();
            });
            //选择任务放弃原因
            $('.giveupselectdiv label').on('click', function() {
                $(this).siblings('label').find('img.giveupselect').attr('src', 'images/labelselect.png');
                $(this).find('img.giveupselect').attr('src', 'images/labelselected.png');
            });
            //确定放弃任务
            $('.giveupbutton').on('click', function() {
                $('.giveuptask').hide();
            });
            //确认账号
            $('.td-footer .left').on('click', function() {
                console.log('确认账号');
            });
            //下一步
            $('.td-footer .right').on('click', function() {
                console.log('下一步');
            });
        }

    };

    return myfun;

});