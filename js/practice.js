
//navigation


$('.no-js').addClass('js').removeClass('no-js');
//$('.sub, .sub2, .arrow').hide();

$(document).ready(function(){




	//function loadContent(contentName){}


	$('.wl-nav li>a').click(function(){ //open & close menus

			$li = $(this).parent();
			$li.addClass('active-cat').siblings().removeClass('active-cat').children('ul.sub, ul.sub2').hide().end().children('a').children('.arrow').hide();

			$subcat = $li.children('ul.wl-sub, ul.wl-sub2');
			$arrow = $(this).children('.arrow');
				$subcat.toggle();
				$arrow.toggleClass('openarrow'); 

	});



	$('.wl-sub>li>a').click(function(){ //toggle the 'active' class
		$li = $(this).parent();

		if (!$li.hasClass('active-sub')){ 
			$('.wl-sub>li').removeClass('active-sub');
		}

		$(this).parent().toggleClass('active-sub');
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
	   				console.log($index);
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


