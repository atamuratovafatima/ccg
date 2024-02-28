$(document).ready(function(){
  $('.slider-single').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
    centerMode: true, 
    cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
    useTransform: true,
    adaptiveHeight: true,
    speed: 400,
  });


  $('.slider-nav')
  .on('init', function(event, slick) {
    $('.slider-nav .slick-slide.slick-current').addClass('is-active');
  })
  .slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    focusOnSelect: false,
    infinite: true,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
     }
    }, 
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
     }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
   }
    }]
  });
  // $('.main-project__slider-cont').slick({
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   asNavFor: '.slider-for',
  //   dots: true,
  //   centerMode: true,
  //   infinite: true,
  //   focusOnSelect: true,
  //   responsive: [
  //     {
  //       breakpoint: 1250,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //         infinite: true,
  //         dots: false
  //       }
  //     },

  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1
  //       }
  //     },
  //     {
  //       breakpoint: 900,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1
  //       }
  //     },
  //     {
  //       breakpoint: 763,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1
  //       }
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1
  //       }
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow:1,
  //         slidesToScroll: 1
  //       }
  //     }
  //   ]
  // });


})


// $(document).ready(function(){
//     $('.main-project__slider-cont').slick({
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         arrows: true,
//         dots:false,
//         centerMode: true,
//         autoplay: true,
//         autoplaySpeed: 1000,
//         infinite: true,
//         centerMode: true,
//         responsive: [
//             {
//               breakpoint: 1250,
//               settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 1,
//                 infinite: true,
//                 dots: false
//               }
//             },

//             {
//               breakpoint: 1024,
//               settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 1
//               }
//             },
//             {
//               breakpoint: 900,
//               settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 1
//               }
//             },
//             {
//               breakpoint: 763,
//               settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 1
//               }
//             },
//             {
//               breakpoint: 600,
//               settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 1
//               }
//             },
//             {
//               breakpoint: 480,
//               settings: {
//                 slidesToShow:1,
//                 slidesToScroll: 1
//               }
//             }
//             // You can unslick at a given breakpoint now by adding:
//             // settings: "unslick"
//             // instead of a settings object
//           ]
//     });
//   });


$('.slider-single').on('afterChange', function(event, slick, currentSlide) {
  $('.slider-nav').slick('slickGoTo', currentSlide);
  var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
  $('.slider-nav .slick-slide.is-active').removeClass('is-active');
  $(currrentNavSlideElem).addClass('is-active');
});

$('.slider-nav').on('click', '.slick-slide', function(event) {
  event.preventDefault();
  var goToSingleSlide = $(this).data('slick-index');

  $('.slider-single').slick('slickGoTo', goToSingleSlide);
});