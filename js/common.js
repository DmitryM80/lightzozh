// $(function() {

//   $("#modal-s-13").on('hidden.bs.modal', function(){
//     $(".fixed-lesson-block").show();
//   });

// $(".default-hide").hide();
// $('.open-comment').on('click', function(){
//     $(this).text($(this).text() == 'Раскрыть' ? 'Скрыть' : 'Раскрыть'); 
// 	$(this).parent().parent('.lesson-n').find(".default-hide").fadeToggle('fade');
// });

// $(function(){
// 	$('a.anchor-btn[href^="#"]').click(function(){
// 		var target = $(this).attr('href');
// 		$('html, body').animate({scrollTop: $(target).offset().top}, 800);//800 - длительность скроллинга в мс
// 		return false; 
// 	}); 
// }); 

//     // youtube stop after close modal

// $(document).ready(function() { 
//     var url = $("#modal-video  iframe").attr('src'); 
//     $("#modal-video").on('hide.bs.modal', function() { 
//         $("#modal-video  iframe").attr('src', ''); 
//     }); 
//     $("#modal-video").on('show.bs.modal', function() { 
//         $("#modal-video  iframe").attr('src', url); 
//     }); 
// });  
 
// // set price per date, display time countdown
 
 

//   $('.how-change').slick({
//     dots: false,
//     infinite: true,
//     speed: 900, 
//     adaptiveHeight: true,
//     slidesToScroll: 1,
//     arrows: true, 
//     slidesToShow:  3,
//     focusOnSelect: true,
//     autoplaySpeed: 3000,
//     pauseOnHover: false, 
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         infinite: true,
//         dots: true, 
//     arrows: false, 
//       }
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2,
//         dots: true, 
//     arrows: false, 
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         dots: true, 
//     arrows: false, 
//       }
//     }
//     // You can unslick at a given breakpoint now by adding:
//     // settings: "unslick"
//     // instead of a settings object
//   ]
// }); 

// if ($(window).width() < 767) { 
//   $('.mob-slider').slick({
//     dots: true,
//     infinite: true,
//     speed: 900, 
//     adaptiveHeight: true,
//     slidesToScroll: 1,
//     arrows: false,  
//     slidesToShow: 1,
//     // slidesToShow:  3,
//     focusOnSelect: true,
//     autoplaySpeed: 3000,
//     pauseOnHover: false, 
//   }); 

// $(".collapse-block").hide();
//   $('.open-block').on('click', function(){
// 	$(this).parent('.lesson-n').find(".collapse-block").toggle();
// 	$(this).find(".arrow-up").toggle();
// 	$(this).find(".arrow-down").toggle();
//   });
   

// $('.s12-expand-btn.lesson-button').on('click', function(){
//     $(this).text($(this).text() == 'Раскрыть' ? 'Скрыть' : 'Раскрыть'); 
//   $(this).parent('.s12-item').find(".text-fade").fadeToggle('fade');
// });
// } 
// else {  
// } 
// });
// ( function() {

//   var youtube = document.querySelectorAll( ".youtube" );
  
//   for (var i = 0; i < youtube.length; i++) {
    
//     var source = "https://img.youtube.com/vi/"+ youtube[i].dataset.embed +"/sddefault.jpg";
    
//     var image = new Image();
//         image.src = source;
//         image.addEventListener( "load", function() {
//           youtube[ i ].appendChild( image );
//         }( i ) );
    
//         youtube[i].addEventListener( "click", function() {

//           var iframe = document.createElement( "iframe" );

//               iframe.setAttribute( "frameborder", "0" );
//               iframe.setAttribute( "allowfullscreen", "" );
//               iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ this.dataset.embed +"?rel=0&showinfo=0&autoplay=1" );

//               this.innerHTML = "";
//               this.appendChild( iframe );
//         } );  
//   };
  
// } )();