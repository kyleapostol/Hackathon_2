$(document).ready(initApp);
// var quoteClassInput = $(".quoteWeatherInput").text();


function initApp() {
    var findYtData = new Youtube();
    findYtData.ytData('guitar');
    var newDarkSky = new DarkSkyObject;
    newDarkSky.currentLocation();
    var musicPlaylist = new MusixMatch;
    musicPlaylist.initClient; // pass in result from weather data
    var random = new Quote;
    random.randomQuote();