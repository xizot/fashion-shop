
$('.loading').addClass('is-show');

$(window).on('pageshow load', function () {
        $('.loading').fadeOut(500);
});

$(document).ready(() => {
    
    $('.have-child').on('click', function () {
        $(this).toggleClass('is-open')
    });

   $('.p-feature__slide').slick({
        slidesToShow: 1,
        autoplay: true,
        speed: 500,
        variableWidth: true,
        nextArrow:'<button type="button" class="slick-next"><img src="./assets/img/icons/next@2x.png" alt=""/></button>',
        prevArrow:'<button type="button" class="slick-prev"><img src="./assets/img/icons/prev@2x.png" alt=""/></button>',
        responsive: [{
            breakpoint: 813,
            settings: {
                arrows: !1
            }
        }]
    });
  
    // fullHeight('.c-header');
    // fullHeight('.loading');
   
    $(document).scroll(function () { 
       let i = $(this).scrollTop();
     
       const windowHeight = $(window).height();
       const aboutToTop = $('#about').offset().top;
       const aboutHeight = $('#about').height();   
     
      
        if(i <= windowHeight){
            $('.c-nav').addClass('is-white');
            $('.p-header__menu').addClass('is-white');

        }
        else if(i >= aboutToTop && i <= aboutToTop + aboutHeight){
            $('.c-nav').addClass('is-white');
            $('.p-header__menu').addClass('is-white');

           }
        else{
            $('.c-nav').removeClass('is-white');
            $('.p-header__menu').removeClass('is-white');
        }
       
   });
    $('.p-header__content').on('init reInit beforeChange afterChange',function(event, slick,currentSlide, nextSlide){
  	
        let current = currentSlide || 0;
        let totalSlide = slick.slideCount;
        let slideSpeed = slick.slickGetOption('autoplaySpeed');
            let border = $('.slide__border span');
        
        //render number
        if(event.type === "init") {
        for(let i = 0 ; i < totalSlide; i ++){
            let str = "<span>"+(i + 1)+"</span>";
            $(str).appendTo('.slide__number');
        }
        //set total
        $('.slide__total').text(totalSlide);
        //set current slide
        $('.slide__number').children().eq(current).addClass('is-current');
        //start animation
        border.stop().animate({width:"100%"}, slideSpeed)
        }
    
        if(event.type === "beforeChange"){
            border.stop().width("100%");
            $('.slide__controller').addClass('is-move');
            $('.slide__number').children().eq(current).stop().removeClass('is-current');
            $('.slide__number').children().eq(current).stop().addClass('is-move');
            $('.slide__number').children().eq(nextSlide).stop().addClass('is-current');  
        }
        if(event.type === "afterChange"){
            border.stop().width(0);
            $('.slide__controller').stop().removeClass('is-move');
            $('.slide__number').children().removeClass('is-move');
            border.stop().animate({width:"100%"}, slideSpeed)
        }
    
    })


    var slickOpts = {
        slidesToShow: 1,
        variableWidth:false,
        autoplay:true,
        autoplaySpeed:3e3,
        speed: 1e3,
        fade:true,
        pauseOnHover:false,
        prevArrow: $('.slide__prev'),
        nextArrow: $('.slide__next'),
    }

    $('.p-header__content').slick(slickOpts);

    $('.js-mega').on('mouseover', function(){
        $('.js-header__mega').addClass('open-mega');
        if(!$('.c-nav').hasClass('no-effect')) {
            $('.c-nav').addClass('no-effect')
    }
    })
    $('.js-mega').on('mouseleave', function(){
        $('.js-header__mega').removeClass('open-mega');
        if($('.c-nav').hasClass('no-effect')) {
            $('.c-nav').removeClass('no-effect')
        }
    })
    $('.js-header__mega').on('mouseover', function(){
        $(this).addClass('open-mega');
        if(!$('.c-nav').hasClass('no-effect')) {
            $('.c-nav').addClass('no-effect')
        }
    })
    $('.js-header__mega').on('mouseleave', function(){
        $(this).removeClass('open-mega');
        if($('.c-nav').hasClass('no-effect')) {
            $('.c-nav').removeClass('no-effect')
        }
    })
   
    $('.js-header__menu').on('click', function () {
        $(this).toggleClass('is-open');
    });
});



