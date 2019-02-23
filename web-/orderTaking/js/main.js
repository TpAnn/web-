/**
 * 如果不依赖任何其他模块,则直接写入javascript代码
 * 而下面代码是有依赖的
 */
require.config({
	// shim:{//加载非规范的模块
	// 	'swiper':{
	// 		deps:['jquery'],
	// 		exports:'swiper'
	// 	}
	// },
	// urlArgs:"ver=1.0_" + (new Date()).getTime(),
	paths: {
　　　　'jquery': 'jquery-1.11.0.min'
		// 'swiper':'swiper',
		// 'common': 'common'
	}

});
require(['jquery'], function ($){

	var currentPage = $("#current-page").attr("current-page");
    var targetModule = $("#current-page").attr("target-module");
    if (targetModule) {
      // 页面加载完毕后再执行相关业务代码比较稳妥
      $(function () {
        require([targetModule], function (targetModule) {
          // 不要在这里写业务代码
          //全部统一调用init方法
          //也就是每个模块都暴露一个init方法用于事件监听，页面内容加载等
          // targetModule.init(currentPage);
          targetModule.init(currentPage);
        });
      });
      return;
    }


	// common.myfun();
	// index.myfun();

});