define(['jquery'], function($) {
    var myfun = {};　　
    myfun.init = function(currentPage) {

        if (currentPage == 'czpassword') {
            //密码规则
            var reg = /^[a-zA-Z0-9_-]{6,16}$/;
            //判断密码输入是否符合要求
            // $('.buy-input input[name="pwd"]').on('blur',function(){
            //     var pwd = $(this).val();
            //     if(!reg.test(pwd)){
            //         $('.buy-input input[name="repwd"]').attr({'disabled':true,'placeholder':'请输入符合要求的密码！'});
            //         alert('密码不符合要求！');
            //     }else{
            //         $('.buy-input input[name="repwd"]').attr({'disabled':false,'placeholder':'请再次输入密码'});
            //     }
            // });
            // $('.buy-input input[name="repwd"]').on('blur',function(){
            //     var pwdfirst = $(this).parent().siblings('.buy-input').find('input[name="pwd"]').val();
            //     var pwd = $(this).val();
            //     if(!reg.test(pwd) && reg.test(pwdfirst)){
            //         alert('密码不符合要求！');
            //     }else if(reg.test(pwd) && reg.test(pwdfirst)){
            //         if(pwd != pwdfirst){
            //             alert('前后两次密码不一致！');
            //         }
            //     }
            // });
            // $('.login-button button').on('click',function(){

            // });
        }

    };

    return myfun;

});