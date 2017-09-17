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
 