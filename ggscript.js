$(document).ready(function() {
    $( "#myImg" ).mouseover(function(){
        $(this).attr("src", "pics/7");
    });

    $( "#myImg" ).mouseout(function(){
        $(this).attr("src", "pics/waterfall.jpg");
    });
});