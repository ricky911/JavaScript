$(document).ready(function(){
    $('.box, img').click(function(){
        $(this).addClass('hidden');
    });
     $('button').click(function(){
         $('.box, img').removeClass('hidden');
         
  });
})
