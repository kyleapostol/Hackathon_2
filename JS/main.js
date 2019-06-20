$(document).ready(initApp);
// var quoteClassInput = $(".quoteWeatherInput").text();


function initApp() {
    var newDarkSky = new DarkSkyObject;
    newDarkSky.getLocation();
    // var musicPlaylist = new MusixMatch;
    // musicPlaylist.initClient(); 
    // var musicPlaylist = new MusixMatch;
    // musicPlaylist.initClient; // pass in result from weather data
    var random = new Quote;
    random.randomQuote();
}


function loadModal(){

}