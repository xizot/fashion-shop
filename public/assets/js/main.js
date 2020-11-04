$(document).ready(() => {
 
   $('.p-feature__slide').slick({
        slidesToShow: 1,
        autoplay: true,
        speed: 500,
        variableWidth: true,
        nextArrow:'<button type="button" class="slick-next"><img src="./assets/img/icons/next@2x.png" alt=""/></button>',
        prevArrow:'<button type="button" class="slick-prev"><img src="./assets/img/icons/prev@2x.png" alt=""/></button>'
    });


   const windowHeight = $(window).height();
   $(document).scroll(function () { 
       let i = $(this).scrollTop();

       if(i >= windowHeight){
           $('.c-nav').removeClass('is-white');
       }else{
            $('.c-nav').addClass('is-white');
       }
   });
   
$('.p-header__slide').on('init reInit beforeChange afterChange', function (event,slick,currentSlide,nextSlide) {
    currentSlide = currentSlide || 0;
    let totalSlide = slick.slideCount;
    let slideSpeed = slick.slickGetOption("autoplaySpeed");
    let elNum = $('.slide__num');
    let borderSquare =  $('.slide__border span');

    if(event.type == "init"){
        //init slide number
        elNum.empty();
        // set total
        $('.slide__total').text(totalSlide);
        // add slide number
        for (var i = 0; i < totalSlide; i++) {
            $(`<span ${currentSlide === i?'class="is-current"':""}>${i+1}</span>`).appendTo('.slide__num');
        
        }
        borderSquare.stop().animate({width:"100%"},slideSpeed);
    } 

    let childNumber =$('.slide__num').children();
    if(event.type =="beforeChange"){
        childNumber.removeClass('is-current');
        childNumber.eq(currentSlide).stop().addClass('is-current');
      
        $('.slide__controller').addClass('is-move');
        
        borderSquare.stop().width("100%");
        
    }
    if(event.type="afterChange"){
        borderSquare.stop().width("0%");
        
        childNumber.removeClass('is-current');
        childNumber.eq(currentSlide).stop().addClass('is-current');
        borderSquare.stop().animate({width:"100%"},slideSpeed);
        setTimeout(() => {

            $('.slide__controller').removeClass('is-move');
        }, 1000);
      
    }
   
});

$('.p-header__slide').slick({
    
    autoplay: true,
    infinite: true,
    speed: 500,
    fade: true,
    autoplaySpeed:3000,
    nextArrow:$('.slide__prev'),
    prevArrow:$('.slide__next'),
    pauseOnHover:0
});

});


$(window).on('load', function () {
    $('.loading').addClass('is-show');
    setTimeout(() => {
        $('.loading').fadeOut(200);
        
    }, 400);
});







