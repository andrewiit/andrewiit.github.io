$('.slider').slick({
    dots: false,
    autoplay:true,
    autoplaySpeed:5000,
    arrows:true,
    infinite: true,
    swipe:false,
    adaptiveHeight:true,
    centerPadding: '0',
    speed: 800,
    slidesToShow: 1,
    cssEase: 'linear',

    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            infinite: true,
            swipe:true,
           
          }
        }
        ]
  });

$('.sale-slider').slick({
  autoplay:true,
  dots:false,
  arrows:true,
  swipe:true,
  slidesToShow:5,
  slidesToScroll:1,

  

  responsive: [

    {
      breakpoint: 1441,
      settings: {
        slidesToShow: 4,
        slidesToScroll:1,
        infinite: true,
        swipe:true,
       
      }
    },

    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
        slidesToScroll:1,
        infinite: true,
        swipe:true,
       
      }
    },


    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll:1,
        variableWidth:true,
        infinite: true,
        swipe:true,
       
      }
    },
    
    
    {
      breakpoint: 560,
      settings: {
        slidesToShow: 1,
        slidesToScroll:1,
        infinite: true,
        swipe:true,
       
      }
    }
    ]
});

$('.compilation__slider').slick({
  autoplay:true,
  dots:false,
  arrows:false,
  swipe:true,
  variableWidth: true,
  slidesToShow:1,
  slidesToScroll:1,
});

// NEWS SLIDER

$('.news__slider').slick({
  autoplay:true,
  dots:false,
  arrows:true,
  swipe:true,
  slidesToShow:4,
  slidesToScroll:1,

  

  responsive: [

    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll:1,
        variableWidth:true,
        infinite: true,
        swipe:true,
       
      }
    },
    
    
    {
      breakpoint: 560,
      settings: {
        slidesToShow: 2,
        slidesToScroll:1,
        infinite: true,
        swipe:true,
       
      }
    }
    ]
});

// ###########

// Модальное окно

// открыть по кнопке
$('.header-top__city').click(function() { 
	
	$('.overlay').fadeIn();
	$('.overlay').addClass('d-none');
});

// закрыть на крестик
$('.choose-city__close').click(function() { 
	$('.overlay').fadeOut();
	
});

// закрыть по клику вне окна
$(document).mouseup(function (e) { 
	var popup = $('.choose-city');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
		$('.overlay').fadeOut();
		
	}
});

// открыть по таймеру 
// $(window).on('load', function () { 
// 	setTimeout(function(){
// 		if($('.overlay').hasClass('disabled')) {
// 			return false;
// 		} else {
			
// 			$(".overlay").fadeIn();
// 		}
// 	}, 5000);
// });


// $(document).ready(function(){
//   $('a[href*=#]').bind("click", function(e){
//   var anchor = $(this);
//   $('html, body').stop().animate({
//   scrollTop: $(anchor.attr('href')).offset().top
//   }, 1000);
//   e.preventDefault();
//   });
//   return false;
//   });


 