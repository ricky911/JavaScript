$(document).ready(function () {
   $('img').click(function () {
       var t = $(this).attr('src');
       $(this).attr('src', $(this).attr('data-alt-src'));
       $(this).attr('data-alt-src', t);
   });
});