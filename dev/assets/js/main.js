$(document).ready(() => {
   $('.p-header__slide').slick({
        autoplay: true,
        infinite: true,
        speed: 500,
        fade: true,
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
