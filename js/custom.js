 /*global $*/ 
  $('.btn1').on('click', function(){
      var target = $(this).attr('rel');
      $('.btn1').css("background-color","#EFE7E6");
      $('.btn1').css("border-color","#EFE7E6");
      $('.btn1').css("color","#800020");
      $(this).css("background-color","#800020");
      $(this).css("border-color","#800020");
      $(this).css("color","#EFE7E6");
      // $("#sch1").toggle();
      // $("#sch2").toggle();
      $("#"+target).show().siblings().hide();
      // $("#"+target).siblings().hide();
     
   });
 
 
  $('.btn2').on('click', function(){
      var target2 = $(this).attr('rel');
      $('.btn2').css("text-decoration","none");
      $('.btn2').css("color","#800020");
      $(this).css("text-decoration","underline");
      $(this).css("color","#800020");
      $("#"+target2).show().siblings(".row").hide();
   });
 
 
 
 // /maybe use later/ 
 // $('.btn2').css("border-color","#EFE7E6");
 // $(this).css("border-color","#662408");
 
 // /ignore/ 
 
 // $('.btn1').on('click', function(){
 //      var target = $(this).attr('rel');
 //      $('.btn1').css("background-color","#EFE7E6");
 //      $('.btn1').css("border-color","#EFE7E6");
 //      $('.btn1').css("color","#662408");
 //      $(this).css("background-color","#662408");
 //      $(this).css("border-color","#662408");
 //      $(this).css("color","#EFE7E6");
 //      // $("#sch1").toggle();
 //      // $("#sch2").toggle();
 //      $("#sch1").attr("src", "/asset/test3-" + target + ".png");
 //      // $("#"+target).siblings().hide();
     
 //   });
 
 