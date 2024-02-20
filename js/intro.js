//resource link: https://www.w3schools.com/jquery/default.asp

$(document).ready(function(){
    $("#empty-box").hide();

    $("#box-button").click(function(){
        $("#empty-box").toggle();

    });

    $("#empty-box").click(function(){
        $("#empty-box").addClass("animate-img");

        setTimeout(function(){
            $("#empty-box").removeClass("animate-img");
        },20000000);
    });

    $("#name").click(function(){
        $("#name").css("color","green");

    });

    $("#reset-button").click(function(){
        $("#empty-box").hide();
        $("#name").css("color"," #dc6a00");

    });

})