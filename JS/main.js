$(document).ready(initApp);
// var quoteClassInput = $(".quoteWeatherInput").text();

function initApp() {
    var newDarkSky = new DarkSkyObject;
    newDarkSky.currentLocation();
    var musicPlaylist = new MusixMatch;
    musicPlaylist.initClient; // pass in result from weather data
    var random = new Quote();
    // var darkskyWeatherInput = new DarkSkyObject;
    // var weatherQuoteInput = darkskyWeatherInput.handleDataReceived;
    // // var quoteClassInput = $(".quoteWeatherInput").text();
    debugger;
    // var quoteFromDarkSky = new DarkSkyObject;
    // var x = quoteFromDarkSky.quoteMethod;
    // random.randomQuote(x);
}