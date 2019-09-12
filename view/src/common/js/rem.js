/**
 * Created by pzs on 2017/9/5.
 */
(function (doc, win) {
  var docEl = doc.documentElement,
	  resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
	  recalc = function () {
		var clientWidth = docEl.clientWidth;
		if (!clientWidth) return;
		docEl.style.fontSize = 20 * (clientWidth / 375) + 'px';
	  };
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
  document.addEventListener('touchstart', function (event) {
	if (event.touches.length > 1) {
	  event.preventDefault();
	}
  })
  var lastTouchEnd = 0;
  document.addEventListener('touchend', function (event) {
	var now = (new Date()).getTime();
	if (now - lastTouchEnd <= 300) {
	  event.preventDefault();
	}
	lastTouchEnd = now;
  }, false)
})(document, window);