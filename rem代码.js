	
	
<script type="text/javascript">
	(function(win) {
		var doc = win.document;
		var docEl = doc.documentElement;
		var tid;
	
		function refreshRem() {
			var width = docEl.getBoundingClientRect().width;
			if (width > 1080) { // 最大宽度
				width = 1080;
			}/*按照多大的设计图占比*/
			var rem = width / 3.2; 
			docEl.style.fontSize = rem + 'px';
		}
	
		win.addEventListener('resize', function() {
			clearTimeout(tid);
			tid = setTimeout(refreshRem, 10); // 延迟多少秒变化
		}, false);
		win.addEventListener('pageshow', function(e) {
			if (e.persisted) {
				clearTimeout(tid);
				tid = setTimeout(refreshRem, 10);
			}
		}, false);
	
		refreshRem();
	
})(window);