$(function (){
   $('.login_click').click(function (){
      $(this).removeClass('disable');
      $(this).addClass('active');
      
      $('.subscription_click').removeClass('active');
      $('.subscription_click').addClass('disable');
      
      $('.form_subscription').fadeOut("slow",function (){
         $('.form_login').fadeIn("slow"); 
      });
   });
   
   $('.subscription_click').click(function (){
      $(this).removeClass('disable');
      $(this).addClass('active');
      
      $('.form_login').removeClass('active');
      $('.form_login').addClass('disable');
      
      $('.form_login').fadeOut("slow",function (){
         $('.form_subscription').fadeIn("slow"); 
      });
   });
});