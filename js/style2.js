 /*!
  * Start Bootstrap - Freelancer v3.3.7+1 (http://startbootstrap.com/template-overviews/freelancer)
  * Copyright 2013-2016 Start Bootstrap
  * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)
  */


// var cute = document.getElementById('cute');
// cute.addEventListener('click', function(){
//       ('.btn1').css("background-color","#EFE7E6");
//       ('.btn1').css("border-color","#EFE7E6");
//       ('.btn1').css("color","#662408");
//       (this).css("background-color","#662408");
//       (this).css("border-color","#662408");
//       (this).css("color","#EFE7E6");
// // });
//  $('.btn1').on('click', function(){
//       var target = $(this).attr('rel');
//       ('.btn1').css("background-color","#EFE7E6");
//       ('.btn1').css("border-color","#EFE7E6");
//       ('.btn1').css("color","#662408");
//       (this).css("background-color","#662408");
//       (this).css("border-color","#662408");
//       (this).css("color","#EFE7E6");
//   });


// function changeimage() {
//     var image = document.getElementById('abc');
//     if (image.src.match("naver")) {
//         image.src = "/도덕.jpg";
//     } else {
//         image.src = "/산이.jpg";
//     }
// }

// $('.second').toggle(
//     function(){
//         $('.photo').attr('src', '도덕.jpg');
//     }, function() {
//         $('.photo').attr('src', '긱스.png');
//     }
// );
// $('.first').toggle(
//     function(){
//         $('.photo').attr('src', '긱스.png');
//     }, function() {
//         $('.photo').attr('src', '도덕.jpg');
//     }
// );

 /*global $*/ 
  $('.btn1').on('click', function(){
      var target = $(this).attr('rel');
      $('.btn1').css("background-color","#EFE7E6");
      $('.btn1').css("border-color","#EFE7E6");
      $('.btn1').css("color","#662408");
      $(this).css("background-color","#662408");
      $(this).css("border-color","#662408");
      $(this).css("color","#EFE7E6");
      // $("#sch1").toggle();
      // $("#sch2").toggle();
      $("#"+target).show().siblings().hide();
      // $("#"+target).siblings().hide();
     
   });
 
 
  $('.btn2').on('click', function(){
      var target2 = $(this).attr('rel');
      $('.btn2').css("background-color","#EFE7E6");
      $('.btn2').css("border-color","#EFE7E6");
      $('.btn2').css("color","#662408");
      $(this).css("background-color","#662408");
      $(this).css("border-color","#662408");
      $(this).css("color","#EFE7E6");
      // $("#sch1").toggle();
      // $("#sch2").toggle();
      $("#"+target2).show().siblings(".row").hide();
   });
   
   
var acc = document.getElementsByClassName("madangpanel");
 var i;

 for (i = 0; i < acc.length; i++) {
     acc[i].onclick = function(){
         /* Toggle between adding and removing the "active" class,
         to highlight the button that controls the panel */
         this.classList.toggle("active");
         this.children[1].classList.toggle("fa-caret-up");
         this.children[1].classList.toggle("fa-caret-down");
         /* Toggle between hiding and showing the active panel */
         var panel = this.nextElementSibling;
         if (panel.style.display === "block") {
             panel.style.display = "none";
         } else {
             panel.style.display = "block";
         }
     }
 }


/*global positions*/ 
 for (var i = 0, len = positions.length; i < len; i++) {
     $("#acc-panel"+(i+1)+"-btn").css("background-color","#fff");
     $("#acc-panel"+(i+1)+"-btn").css("border-bottom","1.3px solid "+positions[i].color);
     $("#acc-panel"+(i+1)+"-btn").css("color",positions[i].color);
     $("#acc-panel"+(i+1)+"-btn").css("font-weight","bold");
 }
 
 
 $('.btn3').on('click', function(){
          var target = $(this).attr('rel');
          
          $("#"+target).show().siblings(".nanjang3-div").hide();
         
       });
   
