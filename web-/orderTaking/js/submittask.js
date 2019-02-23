define(['jquery'], function($) {
    var myfun = {};　　
    myfun.init = function(currentPage) {

        if (currentPage == 'submittask') {
			
			
			$('.submittask-task-adopt').on('click', function() {
               window.location.href="delivergoods.html";
            });
            
            $('.submittask-no').on('click', function() {
               window.location.href=" examinenotthrough.html";
            });
            
           
        }

    };

    return myfun;

});