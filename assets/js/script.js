/* Author: Max Xu @ xumx@me.com */

$(document).ready(function() {

	function highlight(type) {
		var range = window.getSelection().getRangeAt(0);
		if (!range.collapsed) {
			if (range.endContainer === range.startContainer) {
				switch (type) {
				case 'fallacy':
					wrapSelection(range, 'fallacy tip', 'Fallacy');
					break;
				case 'verified':
					wrapSelection(range, 'verified tip', 'Verified');
					break;
				case 'bias':
					wrapSelection(range, 'bias tip', 'Bias Tendency');
					break;
				default:
					console.log('invalid tag type');
				}
			} else {
				$(".alert").html("<strong>Warning!</strong> Selection Overlap").show().delay(1000).fadeOut(1000);
			}
		}
	}

	function wrapSelection(range, className, title) {
		var wrap = document.createElement('span');
		wrap.className = className;
		wrap.title = title;

		range.surroundContents(wrap);
		addHandlers($(wrap));
	}

	function addHandlers(element) {
		element.tooltip({
			animation: true,
			placement: 'top',
			trigger: 'hover',
		}).popover({
			animation: true,
			placement: 'top',
			trigger: 'manual',
		}).click(function(e) {
			$('.popover').remove();
			$('.tooltip').remove();
			$(this).popover('show');
		});
	}

	$('.editbutton').bind('click', function() {
		if ($(this).hasClass('btn-primary')) {
			$(this).removeClass('btn-primary').addClass('btn-danger').text('Save');
			$(this).parent().prev().attr('contentEditable', 'true');
		} else if ($(this).hasClass('btn-danger')) {
			$(this).removeClass('btn-danger').addClass('btn-primary').text('Edit');
			$(this).parent().prev().attr('contentEditable', 'false');
		}
	});

	$('.newpost').flexible();
	$('.newpost').bind('focus',function() {
		$('.newpost-menu').show();
	});
	$('.newpost').bind('blur',function() {
		$('.newpost-menu').hide();
	});

	$('.newpost-menu').hide();

	$('.navbar').bind('mouseout', function() {
		$(this).animate({top:'-30'},500)
	});
	$('.navbar').bind('mouseover', function() {
		$(this).animate({top:'0'},500)
	});

	//HotKey Bindings
	$(document).bind('keypress.f', function() {
		highlight('fallacy')
	});
	$(document).bind('keypress.v', function() {
		highlight('verified')
	});
	$(document).bind('keypress.b', function() {
		highlight('bias')
	});

	addHandlers($('.tip'));
	
});
