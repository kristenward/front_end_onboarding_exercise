
//navigation


$('.no-js').addClass('js').removeClass('no-js');
//$('.sub, .sub2, .arrow').hide();

$(document).ready(function(){




	//function loadContent(contentName){}


	$('.wl-nav li>a').click(function(){ //open & close menus

			$li = $(this).parent(); 
			$sublist = $li.children('ul.wl-sub, ul.wl-sub2');
			$nephews = $li.siblings().find('ul.wl-sub, ul.wl-sub2');
			$arrow = $(this).children('.arrow');

			//if($li.hasClass('active-cat'))
			$li.find('li').removeClass('active-cat');

			if ($li.hasClass('subcat')) {  //children of parent categories only

				$parent = $li.parent().parent();
				if (!$li.hasClass('active-cat')){ 
					$('.wl-sub>li').removeClass('active-cat');
				}
				//$li.toggleClass('active-cat');
				$parent.toggleClass('active-parent');
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


	// window.mySwipe = Swipe(elem, {
	//   // startSlide: 4,
	//   // auto: 3000,
	//  	continuous: true,
	//   // disableScroll: true,
	//   	stopPropagation: true,
	//   	callback: function(index, element) {
	//   		$index = index;
	//   		console.log($index);
	//   		$('.swipe-position>li:eq('+$index+')').addClass('on').siblings().removeClass('on');
	//   	},
	//   	$('.swipe-position>li').click(function(speed){
 //    		var index = $(this).index();
 //    		slide(index, 300);
 //   		})

	//   // transitionEnd: function(index, element) {}
	// });

	


});


