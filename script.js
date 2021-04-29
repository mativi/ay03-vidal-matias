$(document).ready(function(){
    var boton1 = $("#boton");
    var boton2 = $("#boton2");
    var texbox = $("#alfa");

boton1.click(function(){
    $(".cat").fadeTo("slow",0)
});

boton2.click(function(){
    $("#nombre").text("LEONARDO FARKAS LO PIERDE TODO")
});

texbox.mouseover(function(){
    $("#alfa").css("background-color", "white")
    $("#alfa").css("color", "black")
});

texbox.mouseleave(function(){
    $("#alfa").css("background-color", "black")
    $("#alfa").css("color", "white")
});

});