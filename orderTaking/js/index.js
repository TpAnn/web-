define(['jquery','swiper', 'common'], function($,Swiper, common) {
    var myfun = {};　　
    myfun.init = function(currentPage) {

        if (currentPage == 'index') {

            $(document).ready(function() {

                var swiper = new Swiper('.swiper-container', {
                    pagination: {
                        el: '.swiper-pagination',
                    },
                });
            });
            //切换任务性质
            $('.option aside').on('click', function() {
                $(this).siblings("aside").removeClass('active');
                $(this).addClass('active');
                // var dataName = $(this).attr('data-name');
                // var dataId = $(this).parent().siblings('.memberoption').find('aside').attr('data-id');
                // if(dataId == 1 && dataName == 1){
                //     $.ajax({
                //         url:'',
                //         type:'POST',
                //         dataType:'json',
                //         data:{},
                //         success:function(res){
                //             console.log(res);
                //         },
                //         error:function(err){
                //             console.log(err);
                //         }
                //     });
                // }else if(dataId == 1 && dataName == 2){

                // }else if(dataId == 1 && dataName == 3){

                // }else if(dataId == 2 && dataName == 1){

                // }else if(dataId == 2 && dataName == 2){

                // }else if(dataId == 2 && dataName == 3){

                // }
            });
            //交换账号
            $('.memberoption aside').on('click', function() {
                $(this).siblings('aside').removeClass('active');
                $(this).addClass('active');
                $('.option aside').removeClass('active');
                $('.option aside:first').addClass('active');
                if ($(this).attr('data-id') == 1) {
                    $('.taskcontent1').show();
                    $('.taskcontent2').hide();
                } else if ($(this).attr('data-id') == 2) {
                    $('.taskcontent1').hide();
                    $('.taskcontent2').show();
                }
            });
            //领取任务
            $('.tasklist .right .third span').on('click', function() {
                window.location.href = 'taskdetail.html';
            });

            common.myfun();
        }

    };

    return myfun;

});