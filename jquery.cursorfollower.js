/*!
 * jQuery Cursor Follower Plugin v1.0pre (2011-04-20)
 *
 * @author Seiya Konno <seiya@uniba.jp>
 * @license Dual licensed under the MIT or GPL Version 2 licenses.
 * @requires jQuery 1.4.3+
 * @see http://rd.uniba.jp/
 */

(function($, window, document, undefined) {

	var namespace = "followCursor",
		prefix = "follorcur"
	;

	$.fn[namespace] = function(options) {
		var options = opts = $.extend({
			target: "." + namespace,
			offsetX: 50,
			offsetY: 50,
			easing: "easeOutExpo",
			duration: 2500
		}, options);

		var $target = $(this).find(opts.target).css("position", "absolute").hide();
		
		$(this).bind("mousemove", function(event) {
			console.log(event);
			$target.each(function(i, n) {
				$(this).stop().show().animate({ top: event.clientY + opts.offsetX, left: event.clientX + opts.offsetY }, opts.duration, opts.easing);
			});
		});

		return this;
	};

})(jQuery, window, document);
