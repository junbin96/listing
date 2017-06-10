//$(document).ready(function(){});
$(function(){
	// iPad and iPod detection	navigator:浏览器及其功能信息的对象
	var isiPad = function(){
		return (navigator.platform.indexOf("iPad") != -1);
	};

	var isiPhone = function(){
	    return (
			(navigator.platform.indexOf("iPhone") != -1) ||
			(navigator.platform.indexOf("iPod") != -1)
	    );
	};
	var isPC = function(){
		var sUserAgent = navigator.userAgent.toLowerCase();
		if (sUserAgent.indexOf("android") != -1 ||
			sUserAgent.indexOf("iphone os") != -1 ||
			sUserAgent.indexOf("ipad") != -1 ||
			sUserAgent.indexOf("ucweb") != -1 ||
			sUserAgent.indexOf("windows mobile") != -1 ||
			sUserAgent.indexOf("windows ce") != -1 ||
			sUserAgent.indexOf("midp") != -1 ||
			sUserAgent.indexOf("rv:1.2.3.4") != -1) {
	    	return false;
	    } else {
	        return true;
	    }
	}();
	var click_event = isPC?'click':'touchend';  //touchstart   touchmove  touchend  touchcancel
	//显示隐藏右侧菜单
	$('#js_toggle_nav').on(click_event,function(evt){
		evt.preventDefault();
		evt.stopPropagation();
		$(document.body).toggleClass('over-hide');
	});

	//页面变化尺寸
	$(window).on('resize',function(evt){
		var w_h = $(window).height(),
			w_w = $(window).width();

		if(w_w > 768){
			$(document.body).removeClass('over-hide');
		}else{
			$('#left_nav').css('height',w_h+'px');
		}
	});
	$(window).trigger('resize');
	//页面滚动
	$(window).on('scroll',function(evt){
		var scl_top = $(window).scrollTop();
		$('#index_cover').css('background-position-y',Math.floor(scl_top/2)+'px');
	});
});