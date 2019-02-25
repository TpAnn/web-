define(['jquery', 'vue'], function($, Vue) {
    var myfun = {};　　
    myfun.init = function(currentPage) {

        if (currentPage == 'cash') {
            //同步修改提现金额
            new Vue({
                el: '#app',
                data: {
                    money: '52.10'
                }
            });
        }

    };

    return myfun;

});