$(document).ready(initApp);

function initApp() {
    var newDarkSky = new DarkSkyObject;
    newDarkSky.handleDataReceieved();
    var musicPlaylist = new MusixMatch;
    musicPlaylist.initClient(parameter); // pass in result from weather data
}