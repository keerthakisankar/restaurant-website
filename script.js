var swiper= new swiper(".review-slider",{
    spaceBetween: 20,
    centerdsliders: true,
    autoplay:{
        delay:7500,
        disableOnInteraction: false,
    },
    loop:true,
    breakpoints: {
     0:{
        slidesPerView: 1,
     },
     640:{
        slidesPerView: 2,
     },
     768:{
        slidesPerView: 2,
     }, 
    1024:{
        slidesPerView: 3, 
    },
  },
});
    