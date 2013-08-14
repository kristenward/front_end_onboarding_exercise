$('.no-js').addClass('js').removeClass('no-js');

$(document).ready(function(){

	
	$('.wl-nav li>a').click(function(){ //open & close menus

			$li = $(this).parent(); 
			$sublist = $li.children('ul.wl-sub, ul.wl-sub2');
			$nephews = $li.siblings().find('ul.wl-sub, ul.wl-sub2');
			//$arrow = $(this).children('.arrow');
			
			$li.find('li').removeClass('active-cat').removeClass('active-parent').find('ul').hide();

				if ($li.parent('.wl-sub')) { //children of parent categories only

					if($li.hasClass('active-parent')){
						$li.removeClass('active-parent').removeClass('active-cat').children('ul').hide();
						//$sublist.find('ul.wl-sub, ul-wl-sub2').hide();
					}

					$parentli = $li.parent().parent();

					if (!$li.hasClass('active-cat')){ 
						$('.wl-sub>li').removeClass('active-cat');
						$parentli.removeClass('active-parent');
						$sublist.toggle();
					} else{
						$li.find('ul').hide();
					}
					$parentli.toggleClass('active-parent');

				} else{

					//$sublist.toggle();
				}


			$li.toggleClass('active-cat').siblings().removeClass('active-cat').removeClass('active-parent');//.end().children('a').children('.arrow').hide();
			$nephews.hide().parent().removeClass('active-cat');
			

	});

// // // // // Swipe functions

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

<<<<<<< HEAD
=======

>>>>>>> master
	
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
	})

	$('.wl-product-swatches>li').click(function(e){ //swap large thumbs
		e.preventDefault;
		$prod = $(this).parent().parent();
		$large = $prod.children('.media').find('img');
		$base_href = "http://placehold.it/236x314/"
		$color = $(this).children('img').attr('alt');
		$large.attr('src', $base_href + $color);
	})

}); //d-ready


