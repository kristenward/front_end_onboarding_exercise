
//navigation

$('.sub, .sub2, .arrow').hide();

$(document).ready(function(){

	function loadContent(contentName){}


	$('ul.nav li>a').click(function(){ //open & close menus

			$li = $(this).parent();
			$li.addClass('active-cat').siblings().removeClass('active-cat').children('ul.sub, ul.sub2').hide().end().children('a').children('.arrow').hide();

			$subcat = $li.children('ul.sub, ul.sub2');
			$arrow = $(this).children('.arrow');
				$subcat.toggle();
				$arrow.toggle(); 

	});



	$('.sub>li>a').click(function(){ //toggle the 'active' class
		$li = $(this).parent();

		if (!$li.hasClass('active-sub')){ 
			$('.sub>li').removeClass('active-sub');
		}

		$(this).parent().toggleClass('active-sub');
	});

});


