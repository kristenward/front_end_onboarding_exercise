
//navigation


$('.no-js').addClass('js').removeClass('no-js');

$(document).ready(function(){


	$('.wl-nav li>a').click(function(){ //open & close menus

			$li = $(this).parent(); 
			$sublist = $li.children('ul.wl-sub, ul.wl-sub2');
			$nephews = $li.siblings().find('ul.wl-sub, ul.wl-sub2');
			$arrow = $(this).children('.arrow');

			//if($li.hasClass('active-cat'))
			$li.find('li').removeClass('active-cat');

			if ($li.parent('.wl-sub')) {//hasClass('subcat')) {  //children of parent categories only

				$parentli = $li.parent().parent();

				if (!$li.hasClass('active-cat')){ 
					$('.wl-sub>li').removeClass('active-cat');
					$parentli.removeClass('active-parent');
				} 
				$parentli.toggleClass('active-parent');
			}

			$li.toggleClass('active-cat').siblings().removeClass('active-cat').removeClass('active-parent');//.end().children('a').children('.arrow').hide();
			$nephews.hide().parent().removeClass('active-cat');
			$sublist.toggle();

	});


	// // // // // swipe functions

	var elem = document.getElementById('PromoSwipe');

	$('.swipe-wrap>div').each(function(){ $('.swipe-position').append('<li></li>');})
	$('.swipe-position>li:first-child').addClass('on');


	$('.wl-swipe').each(function(){
		var $this = $(this),
			options = {
				auto: 3000,
		  		continuous: true,
	    		// disableScroll: true,
	   			stopPropagation: true,
	   			callback: function(index, element) {
	   				$index = index;
	   				//console.log($index);
	   				$('.swipe-position>li:eq('+$index+')')
	   					.addClass('on').siblings().removeClass('on');
	   			},
			},
			$swipe = $this.find('.swipe').Swipe(options).data(),
			$dot = $('.swipe-position>li');

		$dot.on('click', function(e){
			e.preventDefault();
			var index = $(this).index(); //???
			$swipe.Swipe.slide(index, 300);
		});

	});


	
	// // // // // Thumbnail functions

	$('.wl-product').each(function(){
		$swatch_list = $(this).children('.wl-product-swatches');
		$swatches = $swatch_list.children();
		$num_swatches = $swatches.length;
		if ($num_swatches>8){
			for(var i=8; i<$swatches.length; i++) {
			$($swatches[i]).hide();
			}

			$swatch_list.append('<div class="addl">+'+($num_swatches-8));
		}
	})

	$('.wl-product-swatches>li').click(function(e){
		e.preventDefault;
		$prod = $(this).parent().parent();
		$large = $prod.children('.media').find('img');
		console.log($large);
		//$index = $prod.index();
		$base_href = "http://placehold.it/236x314/"
		$color = $(this).children('img').attr('alt');
		$large.attr('src', $base_href + $color);
	})

}); //d-ready


