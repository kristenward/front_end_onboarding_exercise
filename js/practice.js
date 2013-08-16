$('.swipe, .wl-sub, .wl-sub2, .arrow, .wl-refinements').addClass('is_enhanced');

$(document).ready(function(){

    // // // // // Nav functions

    $('.wl-nav').each(function(){
        $menuLink = $(this).find('li').children('a');
        
        $menuLink.click(function(e){ //open & close menus
            e.preventDefault();
            $li = $(this).parent(); 
            $sublist = $li.children('ul.wl-sub, ul.wl-sub2');
            $nephews = $li.siblings().find('ul.wl-sub, ul.wl-sub2');
            $parentli = $li.parent().parent();

                //children only
                if ($li.parent('.wl-sub')) { 
                    $parentli.addClass('active-parent');
                } 

                if($li.hasClass('active-cat')){  //check state
                    if($li.hasClass('active-parent')){
                        $li.removeClass('active-parent').children('ul').hide();
                    }
                    $li.removeClass('active-cat');
                    $parentli.removeClass('active-parent');
                    $sublist.hide(); 
                } else {
                    $li.addClass('active-cat');
                    $sublist.toggle();
                }

            $li.find('li').removeClass('active-cat').removeClass('active-parent').find('ul').hide();
            $li.siblings().removeClass('active-cat').removeClass('active-parent');
            $nephews.hide();
        });

    });

    // // // // // Form functions

    $('.wl-email-field').each(function(){
        $(this).blur(function(){
            if (this.value == '') {this.value = 'Your Email Address';}

        }).focus(function(){
            if (this.value == 'Your Email Address') {this.value = '';}
        });

    });

    $('.wl-refinements.refine-select').each(function(){  
        $(this).change(function(){
            //get new set of products
            updateNumStyles();
        })
    })


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
            $color = $(this).find('img').attr('alt');
            $large.attr('src', $base_href + $color);
        })
    })

    // // // // // Initial Values

    $('.wl-refinements').each(function(){
            updateNumStyles();
    });
    


}); //d-ready

function updateNumStyles(){
    $('span.num-styles').html($('.wl-product-grid>li').length);
};
    

