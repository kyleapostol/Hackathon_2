$(window).on('load', function(){
    var loadScreenBackground = new Unsplash;
    loadScreenBackground.getImageLoadScreen();
});

$(document).ready(initApp);

function initApp() {
    var newLoadScreen = new LoadScreen;
    newLoadScreen.welcomeScreen();
    activateCarousel();
}

function activateCarousel() {
    // Activate Carousel
    $("#music-carousel").carousel();
    // Enable Carousel Indicators
    $(".item1").click(function(){
        $("#music-carousel").carousel(0);
    });
    $(".item2").click(function(){
        $("#music-carousel").carousel(1);
    });
    $(".item3").click(function(){
        $("#music-carousel").carousel(2);
    });

    // Enable Carousel Controls
    $(".carousel-control-prev").click(function(){
        $("#music-carousel").carousel("prev");
    });
    $('.carousel-control-next').click(function(){
        $('#music-carousel').carousel("next");
    });
}