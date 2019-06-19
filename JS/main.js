$(document).ready(initApp);

function initApp() {
    var newDarkSky = new DarkSkyObject;
    newDarkSky.handleDataReceieved;
    var musicPlaylist = new MusixMatch;
    musicPlaylist.initClient; // pass in result from weather data
    var random = new Quote();
    random.randomQuote();
}