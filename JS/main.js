$(window).on('load', function(){
    var loadScreenBackground = new Unsplash;
    loadScreenBackground.getImageLoadScreen();
});

$(document).ready(initApp);

function initApp() {
    var newLoadScreen = new LoadScreen;
    newLoadScreen.welcomeScreen();
}
