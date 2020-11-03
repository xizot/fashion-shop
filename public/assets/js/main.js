$(document).ready(() => {
   $('.p-header__slide').slick({
        autoplay: true,
        infinite: true,
        speed: 500,
        fade: true,
        nextArrow:$('.slide__prev'),
        prevArrow:$('.slide__next')
   });

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
   
});


$(window).on('load', function () {
    $('.loading').addClass('is-show');
    setTimeout(() => {
        $('.loading').fadeOut(200);
        
    }, 400);
});
