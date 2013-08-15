$('.swipe, .wl-sub, .wl-sub2, .arrow, .refine-submit, .refine-results').addClass('is_enhanced');

$(document).ready(function(){

	$('.wl-nav').each(function(){
		$menuLink = $(this).find('li').children('a');
		
		$menuLink.click(function(e){ //open & close menus
			e.preventDefault();
			$li = $(this).parent(); 
			$sublist = $li.children('ul.wl-sub, ul.wl-sub2');
			$nephews = $li.siblings().find('ul.wl-sub, ul.wl-sub2');
			
			$li.find('li').removeClass('active-cat').removeClass('active-parent').find('ul').hide();

				if ($li.parent('.wl-sub')) { //children of parent categories only

					if($li.hasClass('active-parent')){
						$li.removeClass('active-parent').removeClass('active-cat').children('ul').hide();
					}

					$parentli = $li.parent().parent();

					if (!$li.hasClass('active-cat')){ 
						$('.wl-sub>li').removeClass('active-cat');
						$parentli.removeClass('active-parent');
						$sublist.toggle();
					} 
					else{
						$li.find('ul').hide();
					}
					$parentli.toggleClass('active-parent');
				}
			$li.toggleClass('active-cat').siblings().removeClass('active-cat').removeClass('active-parent');//.end().children('a').children('.arrow').hide();
			$nephews.hide().parent().removeClass('active-cat');
		});

	}); //each

	// // // // // Swipe functions

	$('.wl-swipe').each(function(){
		var $this = $(this),
		options = {
			auto: 3000,
	  		continuous: true,
			disableScroll: true,
				stopPropagation: true,
				callback: function(index, element) {
					$index = index;
					$('.swipe-position>li:eq('+$index+')')
						.addClass('on').siblings().removeClass('on');
				},
		},
		$swipe = $this.find('.swipe').Swipe(options).data(),
		numSlides = $swipe.Swipe.getNumSlides();
		
		for(var i=0; i<numSlides; i++) {
			$('.swipe-position').append('<li></li>');
		}
		$dot = $('.swipe-position>li');
		$dot.eq(0).addClass('on');

		$dot.on('click', function(e){
			e.preventDefault();
			var index = $(this).index(); //???
			$swipe.Swipe.slide(index, 300);
		});
	});
	
	// // // // // Thumbnail functions

	$('.wl-product').each(function(){ //test for swatches length
		$swatch_list = $(this).children('.wl-product-swatches');
		$swatches = $swatch_list.children();
		$num_swatches = $swatches.length;
			if ($num_swatches>8){
				for(var i=8; i<$swatches.length; i++) {
					$($swatches[i]).hide();
				}

				$swatch_list.append('<div class="addl">+'+($num_swatches-8));
			}
	

		$('.wl-product-swatches>li').click(function(e){ //swap large thumbs
			e.preventDefault();
			$prod = $(this).parent().parent();
			$large = $prod.children('.media').find('img');
			$base_href = "http://placehold.it/236x314/"
			$color = $(this).children('img').attr('alt');
			$large.attr('src', $base_href + $color);
		})
	})

	// // // // check # of initial products and update span
	

	$('.wl-refinements').each(function(){
			function updateNumStyles(){
			
				$('span.num-styles').html($('.wl-product-grid>li').length);
			};
			//$(this).find('.span.num-styles').html($('.wl-product-group>li').length);
			updateNumStyles();
	});
	


}); //d-ready



