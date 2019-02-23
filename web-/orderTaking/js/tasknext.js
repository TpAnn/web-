define(['jquery','clipboard'], function($,clipboard) {
    var myfun = {};　　
    myfun.init = function(currentPage) {

        if (currentPage == 'tasknext') {
            //复制编号
            new $.Clipboard('.btn');
            // var clientwidth = document.body.clientWidth;
            // var asdiewidth = (clientwidth - 20 - clientwidth * 0.05) / 2 / 375 * 100;
            // $('.screenshot-pic aside').css('width', asdiewidth + 'vw');

            // var hrefArr = [];
            // var ver = [];
            // console.log($('link').length);
            // for (var i = 0; i < $('link').length; i++) {
            //  //$('link')[i]是个dom对象
            //  if($($('link')[i]).attr('href').indexOf('=')!=-1){
            //    //截取非版本号之前的所有href字符串
            //    ver[i] = $($('link')[i]).attr('href').substr(0,Number($($('link')[i]).attr('href').indexOf('=')+1));
            //    hrefArr[i] = '?v='+ new Date().getTime();
            //  }

            // }
            // for(var j = 0;j<$('link').length;j++){
            //  if($($('link')[i]).attr('data-name')=='common'){
            //    $($('link')[i]).attr('href','css/common.css'+hrefArr[j]);
            //  }else if($($('link')[i]).attr('data-name')=='style'){
            //    $($('link')[i]).attr('href','css/style.css'+hrefArr[j]);
            //  }
            // }
        }

    };

    return myfun;

});