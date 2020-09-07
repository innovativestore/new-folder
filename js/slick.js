jQuery(document).ready(function(){
  jQuery('.slick-carousel').slick({
  infinite: true,
  slidesToShow: 3, // Shows a three slides at a time
  slidesToScroll: 1, // When you click an arrow, it scrolls 1 slide at a time
  arrows: true, // Adds arrows to sides of slider
  dots: false, // Adds the dots on the bottom
  
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        // centerMode: true,

      }

    }, {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: false,
        infinite: true,

      }
    },  {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
      }
    }]
  
  
  
});
});

$('.carousel').carousel({
  interval: 2000
})