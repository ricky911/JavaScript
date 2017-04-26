$(document).ready(function(){
    $("#click1 button").click(function(){
        alert("BOO!")
    });
    
    $("#show h2").hide();
    $("#show button").click(function(){
        $("#show h2").show();
    });
    
    $("#hide button").click(function(){
        $("#hide h2").hide();
    });
    
    $("#toggle img").hide();
    $("#toggle p").hide();
    $("#toggle button").click(function(){
        $("#toggle img").toggle();
        $("#toggle p").toggle();
    });
    
    $("#slideD p").show();
    $("#slideD img").hide();
    $("#slideD p").click(function(){
        $("#slideD img").slideDown();
    });
    
    $("#slideU p").click(function(){
        $("#slideU img").slideUp("slow", "swing");
    });
    
    $("#slideT p").hide();
    $("#slideT button").click(function(){
        $("#slideT p").slideToggle();
    });
    
    $("#fadeIn img").hide();
    $("#fadeIn button").click(function(){
        $("#fadeIn img").fadeIn();
    });
    
    $("#fadeOut button").click(function(){
        $("#fadeOut img").fadeOut();
    });
    
    
});
